const storageKey = "life-countdown-state";

const $ = (id) => document.getElementById(id);

const elements = {
  birthDate: $("birthDate"),
  targetAge: $("targetAge"),
  reminderTime: $("reminderTime"),
  todayFocus: $("todayFocus"),
  daysLeft: $("daysLeft"),
  yearsLeft: $("yearsLeft"),
  monthsLeft: $("monthsLeft"),
  hoursLeft: $("hoursLeft"),
  lifePercent: $("lifePercent"),
  lifeSummary: $("lifeSummary"),
  progressRing: $("progressRing"),
  yearProgress: $("yearProgress"),
  monthProgress: $("monthProgress"),
  weekProgress: $("weekProgress"),
  saveButton: $("saveButton"),
  notifyButton: $("notifyButton"),
  exportButton: $("exportButton"),
  installStatus: $("installStatus"),
};

let reminderTimer = null;

function readState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function writeState() {
  const state = {
    birthDate: elements.birthDate.value,
    targetAge: Number(elements.targetAge.value || 80),
    reminderTime: elements.reminderTime.value || "08:00",
    todayFocus: elements.todayFocus.value.trim(),
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(storageKey, JSON.stringify(state, null, 2));
  render();
  return state;
}

function loadState() {
  const state = readState();
  elements.birthDate.value = state.birthDate || "";
  elements.targetAge.value = state.targetAge || 80;
  elements.reminderTime.value = state.reminderTime || "08:00";
  elements.todayFocus.value = state.todayFocus || "";
}

function addYears(date, years) {
  const next = new Date(date);
  next.setFullYear(next.getFullYear() + years);
  return next;
}

function percent(value) {
  return `${Math.max(0, Math.min(100, value)).toFixed(1)}%`;
}

function daysBetween(start, end) {
  return Math.ceil((end.getTime() - start.getTime()) / 86400000);
}

function render() {
  const birthValue = elements.birthDate.value;
  const targetAge = Number(elements.targetAge.value || 80);
  const now = new Date();

  renderPeriodProgress(now);

  if (!birthValue) {
    elements.daysLeft.textContent = "--";
    elements.yearsLeft.textContent = "--";
    elements.monthsLeft.textContent = "--";
    elements.hoursLeft.textContent = "--";
    elements.lifePercent.textContent = "--%";
    elements.progressRing.style.setProperty("--progress", 0);
    elements.lifeSummary.textContent = "填写生日后开始计算。";
    return;
  }

  const birthDate = new Date(`${birthValue}T00:00:00`);
  const targetDate = addYears(birthDate, targetAge);
  const totalMs = targetDate.getTime() - birthDate.getTime();
  const livedMs = now.getTime() - birthDate.getTime();
  const leftMs = targetDate.getTime() - now.getTime();

  const leftDays = Math.max(0, daysBetween(now, targetDate));
  const leftHours = Math.max(0, Math.floor(leftMs / 3600000));
  const progress = totalMs > 0 ? (livedMs / totalMs) * 100 : 0;

  elements.daysLeft.textContent = leftDays.toLocaleString("zh-CN");
  elements.yearsLeft.textContent = Math.floor(leftDays / 365).toLocaleString("zh-CN");
  elements.monthsLeft.textContent = Math.floor(leftDays / 30).toLocaleString("zh-CN");
  elements.hoursLeft.textContent = leftHours.toLocaleString("zh-CN");
  elements.lifePercent.textContent = percent(progress);
  elements.progressRing.style.setProperty("--progress", Math.max(0, Math.min(100, progress)));

  const livedDays = Math.max(0, Math.floor(livedMs / 86400000));
  elements.lifeSummary.textContent = `已走过 ${livedDays.toLocaleString("zh-CN")} 天，目标日期 ${targetDate.toLocaleDateString("zh-CN")}。`;
}

function renderPeriodProgress(now) {
  const yearStart = new Date(now.getFullYear(), 0, 1);
  const yearEnd = new Date(now.getFullYear() + 1, 0, 1);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const day = now.getDay() || 7;
  const weekStart = new Date(now);
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(now.getDate() - day + 1);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 7);

  elements.yearProgress.textContent = percent(((now - yearStart) / (yearEnd - yearStart)) * 100);
  elements.monthProgress.textContent = percent(((now - monthStart) / (monthEnd - monthStart)) * 100);
  elements.weekProgress.textContent = percent(((now - weekStart) / (weekEnd - weekStart)) * 100);
}

async function enableNotifications() {
  if (!("Notification" in window)) {
    alert("当前浏览器不支持通知。");
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    alert("通知权限未开启。");
    return;
  }

  scheduleReminder();
  new Notification("Life Countdown 已开启", {
    body: "每日提醒将在浏览器允许的情况下触发。",
  });
}

function scheduleReminder() {
  clearTimeout(reminderTimer);
  const [hour, minute] = (elements.reminderTime.value || "08:00").split(":").map(Number);
  const now = new Date();
  const next = new Date();
  next.setHours(hour, minute, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);

  reminderTimer = setTimeout(() => {
    const state = writeState();
    if (Notification.permission === "granted") {
      new Notification("今天还剩多少时间，取决于今天做什么", {
        body: state.todayFocus || "打开 Life Countdown，确认今天最重要的一件事。",
      });
    }
    scheduleReminder();
  }, next - now);
}

function exportData() {
  const blob = new Blob([JSON.stringify(readState(), null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `life-countdown-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    await navigator.serviceWorker.register("sw.js");
    elements.installStatus.textContent = "本地优先 · 可安装";
  } catch {
    elements.installStatus.textContent = "本地优先";
  }
}

elements.saveButton.addEventListener("click", writeState);
elements.notifyButton.addEventListener("click", enableNotifications);
elements.exportButton.addEventListener("click", exportData);
["birthDate", "targetAge", "reminderTime", "todayFocus"].forEach((key) => {
  elements[key].addEventListener("change", writeState);
});

loadState();
render();
registerServiceWorker();
setInterval(render, 60000);
if (Notification.permission === "granted") scheduleReminder();

