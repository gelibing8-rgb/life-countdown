(function exposeLifeUtils(root) {
  function daysBetween(start, end) {
    return Math.ceil((end.getTime() - start.getTime()) / 86400000);
  }

  function getLocalDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const api = {
    daysBetween,
    getLocalDateKey,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.LifeUtils = api;
  }
})(globalThis);

