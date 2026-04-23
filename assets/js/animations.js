(function () {
  'use strict';

  // ── Scroll reveal ──────────────────────────────────────────────
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-anim]').forEach(function (el) {
      obs.observe(el);
    });
  } else {
    // Fallback: show all immediately
    document.querySelectorAll('[data-anim]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ── Mobile nav toggle ─────────────────────────────────────────
  var toggle = document.querySelector('.nav-mobile-toggle');
  var menu   = document.querySelector('.nav-mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      var expanded = menu.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // ── FAQ accordion ─────────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = this.parentElement;
      item.classList.toggle('open');
    });
  });

  // ── Stat count-up ─────────────────────────────────────────────
  function countUp(el) {
    var raw    = el.textContent.trim();
    var prefix = raw.match(/^[^0-9]*/)[0];
    var suffix = raw.match(/[^0-9]*$/)[0];
    var num    = parseFloat(raw.replace(/[^0-9.]/g, ''));
    if (isNaN(num)) return;

    var duration = 1200;
    var start    = performance.now();
    var decimals = (num % 1 !== 0) ? 0 : 0;

    function tick(now) {
      var progress = Math.min((now - start) / duration, 1);
      var ease     = 1 - Math.pow(1 - progress, 3);
      var value    = num * ease;
      el.textContent = prefix + (decimals ? value.toFixed(decimals) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          statObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number, .case-metric-value').forEach(function (el) {
      statObs.observe(el);
    });
  }

  // ── FAQ sidebar nav active state ──────────────────────────────
  var faqGroups = document.querySelectorAll('.faq-group');
  var faqLinks  = document.querySelectorAll('.faq-nav a');
  if (faqGroups.length && faqLinks.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          faqLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    faqGroups.forEach(function (g) { navObs.observe(g); });
  }
}());
