const assert = require("node:assert/strict");
const { daysBetween, getLocalDateKey } = require("../src/life-utils.js");

assert.equal(
  daysBetween(new Date("2026-06-01T00:00:00+08:00"), new Date("2026-06-02T00:00:00+08:00")),
  1,
);

assert.equal(
  daysBetween(new Date("2026-06-01T12:00:00+08:00"), new Date("2026-06-02T00:00:00+08:00")),
  1,
);

assert.equal(
  getLocalDateKey(new Date(2026, 5, 1, 0, 5, 0)),
  "2026-06-01",
);

assert.equal(
  getLocalDateKey(new Date(2026, 5, 1, 23, 59, 59)),
  "2026-06-01",
);

assert.equal(
  getLocalDateKey(new Date(2026, 5, 2, 0, 0, 0)),
  "2026-06-02",
);

assert.equal(
  getLocalDateKey(new Date(2026, 11, 31, 23, 59, 59)),
  "2026-12-31",
);

assert.equal(
  getLocalDateKey(new Date("2026-06-01T23:30:00+08:00")),
  getLocalDateKey(new Date(2026, 5, 1, 23, 30, 0)),
);

console.log("life-utils tests passed");
