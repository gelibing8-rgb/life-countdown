const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const packageJson = JSON.parse(read("package.json"));
const readme = read("README.md");
const changelog = read("CHANGELOG.md");
const releaseChecklist = read("docs/release-checklist.md");

assert.match(
  packageJson.version,
  /^\d+\.\d+\.\d+$/,
  "package version must use semantic version format",
);

assert.ok(
  changelog.includes(`## ${packageJson.version}`),
  `CHANGELOG.md must include package version ${packageJson.version}`,
);

assert.ok(
  readme.includes("https://gelibing8-rgb.github.io/life-countdown/"),
  "README.md must include the live demo URL",
);

const requiredDocLinks = [
  "PRIVACY.md",
  "SECURITY.md",
  "docs/safety-guardian.md",
  "docs/wearable-integration.md",
  "docs/pro-application.md",
  "docs/reviewer-evidence.md",
];

for (const docLink of requiredDocLinks) {
  assert.ok(readme.includes(docLink), `README.md must link ${docLink}`);
}

assert.ok(
  releaseChecklist.includes("npm run check"),
  "Release checklist must require npm run check",
);
assert.ok(
  releaseChecklist.includes("CHANGELOG.md"),
  "Release checklist must require changelog updates",
);
assert.ok(
  releaseChecklist.includes("PRIVACY.md"),
  "Release checklist must require privacy review",
);

const reviewerEvidence = read("docs/reviewer-evidence.md");
const requiredEvidence = [
  "https://github.com/gelibing8-rgb/life-countdown",
  "https://gelibing8-rgb.github.io/life-countdown/",
  "npm run check",
  "No silent phone calls, SMS messages, or emails",
  "tests/safety-boundary.test.cjs",
];

for (const evidence of requiredEvidence) {
  assert.ok(
    reviewerEvidence.includes(evidence),
    `Reviewer evidence must include: ${evidence}`,
  );
}

console.log("release-metadata tests passed");
