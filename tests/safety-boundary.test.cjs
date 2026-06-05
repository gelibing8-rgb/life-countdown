const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const documents = {
  "README.md": read("README.md"),
  "PRIVACY.md": read("PRIVACY.md"),
  "docs/safety-guardian.md": read("docs/safety-guardian.md"),
};

function assertIncludes(file, pattern, message) {
  assert.ok(pattern.test(documents[file]), `${file}: ${message}`);
}

assertIncludes(
  "README.md",
  /不会静默自动拨号、发送短信或发送邮件/,
  "must disclose that emergency actions are not silent",
);
assertIncludes(
  "README.md",
  /用户确认外发动作/,
  "must mention user confirmation for outbound actions",
);

assertIncludes(
  "PRIVACY.md",
  /不在用户不确认的情况下静默拨打电话、发送短信或邮件/,
  "must preserve no-silent-call-or-message privacy boundary",
);
assertIncludes(
  "PRIVACY.md",
  /系统客户端中确认/,
  "must state calls and messages require system-client confirmation",
);

assertIncludes(
  "docs/safety-guardian.md",
  /not an emergency response system/,
  "must state the project is not an emergency response system",
);
assertIncludes(
  "docs/safety-guardian.md",
  /does not silently call, send messages/,
  "must state the app does not silently call or send messages",
);
assertIncludes(
  "docs/safety-guardian.md",
  /in-app confirmation box/,
  "must keep the in-app emergency confirmation safeguard documented",
);

console.log("safety-boundary tests passed");

