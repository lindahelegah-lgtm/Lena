/* Building Ideas Limited — site interactions (vanilla JS, no dependencies) */
(function () {
  'use strict';

  /* Mark JS as active so scroll-reveal styles apply (content stays visible without JS) */
  document.documentElement.classList.add('js');

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---- Featured Clients: seamless infinite slider ----
     Duplicate the track contents so the -50% keyframe loops seamlessly. */
  var track = document.querySelector('.marquee-track');
  if (track && !track.dataset.cloned) {
    track.innerHTML += track.innerHTML;
    track.dataset.cloned = 'true';
  }

  /* ---- Case-study filter ---- */
  var filters = document.querySelectorAll('.chip[data-filter]');
  var cards = document.querySelectorAll('[data-category]');
  if (filters.length) {
    filters.forEach(function (chip) {
      chip.addEventListener('click', function () {
        filters.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var f = chip.dataset.filter;
        cards.forEach(function (card) {
          var show = f === 'all' || card.dataset.category === f;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Contact form (front-end demo handling) ---- */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = document.getElementById('form-success');
      if (ok) { ok.classList.add('show'); ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
