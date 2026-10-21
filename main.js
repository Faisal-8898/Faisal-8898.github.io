// Gentle fade-in for sections, and highlight the current section in the nav.
(function () {
  var root = document.documentElement;
  if (!('IntersectionObserver' in window)) return;
  root.classList.add('js');

  var fired = false;
  var reveal = new IntersectionObserver(function (entries) {
    fired = true;
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        reveal.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(function (el) { reveal.observe(el); });
  // If the observer never runs, show everything rather than leave sections hidden.
  setTimeout(function () {
    if (!fired) document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }, 1500);

  var links = {};
  document.querySelectorAll('.nav nav a[href^="#"]').forEach(function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var a = links[e.target.id];
      if (a) a.classList.toggle('active', e.isIntersecting);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(links).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });
})();
