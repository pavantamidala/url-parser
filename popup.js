document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
      const url = new URL(tabs[0].url);
      const hostname = url.hostname;
      const path = url.pathname;
      const searchParams = new URLSearchParams(url.search);
      const params = {};
      for (const [key, value] of searchParams) {
        params[key] = value;
      }
      document.getElementById('hostname').textContent = hostname;
      document.getElementById('path').textContent = path;
      document.getElementById('params').textContent = JSON.stringify(params, null, 2);
    });
  });
  