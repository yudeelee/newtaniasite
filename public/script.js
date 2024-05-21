(function (w, d, t, u, c) {
  var s = d.createElement(t),
    j = d.getElementsByTagName(t)[0];
  s.src = u;
  s['async'] = true;
  s.defer = true;
  s.onload = function () {
    KeyCRM.render(c);
  };
  j.parentNode.insertBefore(s, j);
})(window, document, 'script', 'https://chat.key.live/bundles/widget.min.js', {
  token: 'ba1d30bf-679b-4946-9791-3f42fcd21ef8',
});
