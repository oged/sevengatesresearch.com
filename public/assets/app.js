(function () {
  var header = document.querySelector('.site-header');
  var onScroll = function () { if (header) header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  var rail = document.querySelector('.rail');
  if (rail && 'IntersectionObserver' in window) {
    var items = Array.prototype.slice.call(rail.querySelectorAll('li'));
    var targets = items.map(function (li) { return document.getElementById(li.querySelector('a').getAttribute('href').slice(1)); });
    var setActive = function (id) { items.forEach(function (li) { li.classList.toggle('active', li.querySelector('a').getAttribute('href') === '#' + id); }); };
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    targets.forEach(function (t) { if (t) ro.observe(t); });
  }

  var filters = document.querySelectorAll('.filters button');
  var ledger = document.getElementById('case-ledger');
  if (filters.length && ledger) {
    filters.forEach(function (b) {
      b.addEventListener('click', function () {
        filters.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        var f = b.getAttribute('data-filter');
        Array.prototype.forEach.call(ledger.querySelectorAll('tbody tr'), function (tr) {
          tr.style.display = (f === 'all' || tr.getAttribute('data-category') === f) ? '' : 'none';
        });
      });
    });
  }

  var form = document.getElementById('brief-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var lines = ['Name: ' + (d.get('name') || ''), 'Organisation: ' + (d.get('organisation') || ''), 'Email: ' + (d.get('email') || ''), 'Service line: ' + (d.get('service') || 'Not yet defined'), 'Decision timing: ' + (d.get('timing') || ''), '', 'The decision or problem:', d.get('brief') || ''];
      var subject = 'Enquiry: ' + (d.get('service') || 'technical question');
      window.location.href = 'mailto:' + form.getAttribute('action').replace('mailto:', '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }
})();
