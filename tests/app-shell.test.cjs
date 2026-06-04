const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));
const stripQuery = (value) => value.split("?")[0];

const html = read("index.html");
const serviceWorker = read("sw.js");

const linkedAssets = [
  ...html.matchAll(/<link[^>]+href="([^"]+)"/g),
  ...html.matchAll(/<script[^>]+src="([^"]+)"/g),
].map((match) => stripQuery(match[1]));

for (const asset of linkedAssets) {
  assert.ok(exists(asset), `Missing linked asset: ${asset}`);
}

const lifeUtilsIndex = html.indexOf("src/life-utils.js");
const appIndex = html.indexOf("src/app.js");
assert.ok(lifeUtilsIndex >= 0, "life-utils.js must be loaded");
assert.ok(appIndex >= 0, "app.js must be loaded");
assert.ok(lifeUtilsIndex < appIndex, "life-utils.js must load before app.js");

const cachedAssets = [...serviceWorker.matchAll(/"([^"]+)"/g)]
  .map((match) => match[1])
  .filter((value) => value.startsWith("./"))
  .map((value) => value.replace(/^\.\//, "") || "index.html");

for (const asset of cachedAssets) {
  assert.ok(exists(asset), `Missing service worker cached asset: ${asset}`);
}

assert.ok(cachedAssets.includes("src/life-utils.js"), "Service worker must cache life-utils.js");
assert.ok(cachedAssets.includes("src/app.js"), "Service worker must cache app.js");
assert.ok(cachedAssets.includes("assets/manifest.webmanifest"), "Service worker must cache manifest");

const requiredEmergencyIds = [
  "emergencyConfirmed",
  "emergencyButton",
  "callLink",
  "sosSmsLink",
  "sosEmailLink",
];

for (const id of requiredEmergencyIds) {
  assert.ok(html.includes(`id="${id}"`), `Missing emergency control: ${id}`);
}

assert.ok(
  html.includes("我确认需要求助"),
  "Emergency flow must include explicit confirmation copy",
);
assert.ok(
  html.includes("emergencyButton") && html.includes("disabled"),
  "Emergency button should start disabled until confirmation",
);

console.log("app-shell tests passed");
