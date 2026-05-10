/**
 * General UI: mobile sidebar toggle, active nav links.
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var sidebar  = document.getElementById('sidebar');
    var overlay  = document.getElementById('sidebarOverlay');
    var menuBtn  = document.getElementById('mobileMenuBtn');

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (menuBtn) menuBtn.addEventListener('click', openSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Close sidebar when a nav link is clicked (mobile)
    if (sidebar) {
      sidebar.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          if (window.innerWidth <= 768) closeSidebar();
        });
      });
    }

    // Mark active nav link based on current pathname
    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && currentPath === href) {
        link.classList.add('active');
      }
    });
  });

})();
