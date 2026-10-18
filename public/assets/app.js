(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }
  var filters = document.querySelectorAll('.filters button');
  var grid = document.getElementById('case-grid');
  if (filters.length && grid) {
    filters.forEach(function (b) {
      b.addEventListener('click', function () {
        filters.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        var f = b.getAttribute('data-filter');
        Array.prototype.forEach.call(grid.children, function (el) {
          el.style.display = (f === 'all' || el.getAttribute('data-category') === f) ? 'contents' : 'none';
        });
      });
    });
  }
  var form = document.getElementById('brief-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var lines = [
        'Name: ' + (d.get('name') || ''),
        'Organisation: ' + (d.get('organisation') || ''),
        'Email: ' + (d.get('email') || ''),
        'Service line: ' + (d.get('service') || 'Not yet defined'),
        'Decision timing: ' + (d.get('timing') || ''),
        '',
        'The decision or problem:',
        d.get('brief') || ''
      ];
      var subject = 'Enquiry: ' + (d.get('service') || 'technical question');
      window.location.href = 'mailto:' + form.getAttribute('action').replace('mailto:', '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }
})();
