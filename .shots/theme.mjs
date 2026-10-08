import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new", "--disable-gpu", "--hide-scrollbars", "--remote-debugging-port=9333",
  "--window-size=1440,760", "about:blank",
], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(2500);
const targets = await (await fetch("http://localhost:9333/json")).json();
const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pending.has(d.id)) pending.get(d.id)(d.result); };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
const shot = async (name) => {
  const s = await send("Page.captureScreenshot", { format: "png" });
  writeFileSync(`.shots/${name}.png`, Buffer.from(s.data, "base64"));
};
const click = (sel) => send("Runtime.evaluate", { expression: `document.querySelector('${sel}').click()` });

await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 760, deviceScaleFactor: 1, mobile: false });
await send("Page.enable");
await send("Page.navigate", { url: "http://localhost:3111" });
await sleep(3500);
// light -> dark, capture mid-wipe then final
await click('button[aria-label="Switch to dark mode"]');
await sleep(300);
await shot("to-dark-mid");
await sleep(1500);
await shot("dark");
// dark -> light, capture mid-wipe
await click('button[aria-label="Switch to light mode"]');
await sleep(300);
await shot("to-light-mid");
await sleep(1500);
await shot("light-again");
ws.close();
chrome.kill();
process.exit(0);
