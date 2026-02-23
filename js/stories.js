/**
 * Stories page: search filter and optional carousel/pagination behavior
 */

(function () {
  'use strict';

  var searchInput = document.getElementById('story-search');
  var grid = document.getElementById('stories-grid');
  if (!searchInput || !grid) return;

  var cards = grid.querySelectorAll('.story-card');
  if (!cards.length) return;

  searchInput.addEventListener('input', function () {
    var query = (this.value || '').trim().toLowerCase();
    cards.forEach(function (card) {
      var title = (card.getAttribute('data-title') || '').toLowerCase();
      var location = (card.getAttribute('data-location') || '').toLowerCase();
      var excerpt = (card.querySelector('.story-card__excerpt') || {}).textContent || '';
      var match = !query || title.indexOf(query) !== -1 || location.indexOf(query) !== -1 || excerpt.toLowerCase().indexOf(query) !== -1;
      card.style.display = match ? '' : 'none';
    });
  });
})();
