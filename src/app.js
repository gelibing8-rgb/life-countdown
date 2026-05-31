const storageKey = "life-countdown-state";

const quotes = [
  { text: "人生天地之间，若白驹过隙，忽然而已。", source: "《庄子》" },
  { text: "你热爱生命吗？那么别浪费时间，因为时间是组成生命的材料。", source: "富兰克林" },
  { text: "盛年不重来，一日难再晨。", source: "陶渊明" },
  { text: "明日复明日，明日何其多。", source: "《明日歌》" },
  { text: "志士惜日短，愁人知夜长。", source: "傅玄" },
  { text: "最浪费不起的是时间。", source: "丁肇中" },
  { text: "时间会说真话。", source: "民间格言" },
];

const $ = (id) => document.getElementById(id);

const elements = {
  birthDate: $("birthDate"),
  targetAge: $("targetAge"),
  reminderTime: $("reminderTime"),
  contactPhone: $("contactPhone"),
  contactEmail: $("contactEmail"),
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
  dailyQuote: $("dailyQuote"),
  quoteSource: $("quoteSource"),
  pinQuoteButton: $("pinQuoteButton"),
  checkinSummary: $("checkinSummary"),
  checkinButton: $("checkinButton"),
  smsLink: $("smsLink"),
  emailLink: $("emailLink"),
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
    contactPhone: elements.contactPhone.value.trim(),
    contactEmail: elements.contactEmail.value.trim(),
    todayFocus: elements.todayFocus.value.trim(),
    pinnedQuoteIndex: readState().pinnedQuoteIndex,
    lastCheckinAt: readState().lastCheckinAt,
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
  elements.contactPhone.value = state.contactPhone || "";
  elements.contactEmail.value = state.contactEmail || "";
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
  renderQuote(now);
  renderCheckinSummary();

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

function getDailyQuoteIndex(now) {
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  return dayOfYear % quotes.length;
}

function renderQuote(now) {
  const state = readState();
  const quoteIndex = Number.isInteger(state.pinnedQuoteIndex)
    ? state.pinnedQuoteIndex
    : getDailyQuoteIndex(now);
  const quote = quotes[quoteIndex] || quotes[0];
  elements.dailyQuote.textContent = quote.text;
  elements.quoteSource.textContent = quote.source ? `-- ${quote.source}` : "";
  elements.pinQuoteButton.textContent = Number.isInteger(state.pinnedQuoteIndex) ? "取消固定" : "固定金句";
}

function togglePinnedQuote() {
  const state = writeState();
  if (Number.isInteger(state.pinnedQuoteIndex)) {
    delete state.pinnedQuoteIndex;
  } else {
    state.pinnedQuoteIndex = getDailyQuoteIndex(new Date());
  }
  localStorage.setItem(storageKey, JSON.stringify(state, null, 2));
  render();
}

function getLifeSnapshot() {
  const birthValue = elements.birthDate.value;
  const targetAge = Number(elements.targetAge.value || 80);
  if (!birthValue) return "还未填写生日，今天先完成一次主动打卡。";

  const now = new Date();
  const birthDate = new Date(`${birthValue}T00:00:00`);
  const targetDate = addYears(birthDate, targetAge);
  const leftDays = Math.max(0, daysBetween(now, targetDate));
  return `按 ${targetAge} 岁目标计算，今天还剩约 ${leftDays.toLocaleString("zh-CN")} 天。`;
}

function buildCheckinMessage() {
  const date = new Date().toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  });
  const focus = elements.todayFocus.value.trim() || "今天保持稳定前进。";
  const quote = elements.dailyQuote.textContent;
  return `今日打卡：${date}\n${getLifeSnapshot()}\n今天最重要的一件事：${focus}\n今日金句：${quote}`;
}

function setLinkState(link, href, enabled) {
  link.href = enabled ? href : "#";
  link.classList.toggle("disabled", !enabled);
  link.setAttribute("aria-disabled", String(!enabled));
}

function createCheckinLinks() {
  const state = writeState();
  const message = buildCheckinMessage();
  const encodedMessage = encodeURIComponent(message);
  const subject = encodeURIComponent("Life Countdown 今日打卡");
  const hasPhone = Boolean(state.contactPhone);
  const hasEmail = Boolean(state.contactEmail);

  setLinkState(elements.smsLink, `sms:${state.contactPhone}?&body=${encodedMessage}`, hasPhone);
  setLinkState(
    elements.emailLink,
    `mailto:${state.contactEmail}?subject=${subject}&body=${encodedMessage}`,
    hasEmail,
  );

  state.lastCheckinAt = new Date().toISOString();
  localStorage.setItem(storageKey, JSON.stringify(state, null, 2));
  renderCheckinSummary();

  if (!hasPhone && !hasEmail) {
    alert("请先填写打卡联系人手机或邮箱。");
  }
}

function renderCheckinSummary() {
  const state = readState();
  const parts = [];
  if (state.contactPhone) parts.push("短信");
  if (state.contactEmail) parts.push("邮件");
  const channels = parts.length ? parts.join("和") : "未设置发送方式";
  const last = state.lastCheckinAt
    ? `上次打卡：${new Date(state.lastCheckinAt).toLocaleString("zh-CN")}`
    : "尚未打卡";
  elements.checkinSummary.textContent = `${channels}。${last}。`;
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
elements.pinQuoteButton.addEventListener("click", togglePinnedQuote);
elements.checkinButton.addEventListener("click", createCheckinLinks);
["birthDate", "targetAge", "reminderTime", "contactPhone", "contactEmail", "todayFocus"].forEach((key) => {
  elements[key].addEventListener("change", writeState);
});

loadState();
render();
registerServiceWorker();
setInterval(render, 60000);
if (Notification.permission === "granted") scheduleReminder();
