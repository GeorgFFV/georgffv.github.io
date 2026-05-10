/**
 * Theme (dark/light) and Language (PT/EN) controller.
 * Theme always starts as dark on every page load — no persistence.
 * Language preference is persisted in localStorage.
 */
(function () {
  'use strict';

  const LANG_KEY = 'gf-lang';

  // Theme always starts dark; only language persists across sessions
  let currentTheme = 'dark';
  let currentLang  = localStorage.getItem(LANG_KEY) || 'pt';

  /** Apply theme to <html> and update toggle button UI */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;

    var icon  = document.getElementById('themeIcon');
    var label = document.querySelector('.theme-toggle .toggle-label');
    if (!icon) return;

    if (theme === 'dark') {
      icon.className = 'fas fa-sun';
      if (label) label.textContent = currentLang === 'pt' ? 'Modo Claro' : 'Light Mode';
    } else {
      icon.className = 'fas fa-moon';
      if (label) label.textContent = currentLang === 'pt' ? 'Modo Escuro' : 'Dark Mode';
    }
  }

  /** Apply language: swaps all data-pt / data-en elements and updates <html lang> */
  function applyLang(lang) {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem(LANG_KEY, lang);
    currentLang = lang;

    document.querySelectorAll('[data-pt][data-en]').forEach(function (el) {
      el.textContent = lang === 'pt' ? el.dataset.pt : el.dataset.en;
    });

    var langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = lang === 'pt' ? 'EN' : 'PT';

    // Re-sync theme button label (language-dependent string)
    applyTheme(currentTheme);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Always start dark; apply language preference
    applyTheme('dark');
    applyLang(currentLang);

    // Theme toggle (session only — resets to dark on next load)
    var themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // Language toggle (persists via localStorage)
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        applyLang(currentLang === 'pt' ? 'en' : 'pt');
      });
    }
  });

})();
