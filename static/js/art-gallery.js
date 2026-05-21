(function () {
  const PAGE_SIZE = 12;
  let allItems = [];
  let filtered = [];
  let currentPage = 1;

  function getCheckedFilters() {
    return Array.from(
      document.querySelectorAll('input[name="filters"]:checked')
    ).map((cb) => cb.value);
  }

  function applyFilters() {
    const checked = getCheckedFilters();
    filtered = allItems.filter(
      (item) => checked.length === 0 || checked.includes(item.type)
    );
    currentPage = 1;
    render();
  }

  function render() {
    const gallery = document.getElementById('art-gallery');
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    const cards = pageItems
      .map(
        (item) => `
        <div class="col-4 pColMain">
          <div class="pCol" style="position: relative; width: 100%; padding-top: 100%;">
            <a onclick="enlargeImage('${item.image}', '${item.title.replace(/'/g, "\\'")}')" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;" data-type="${item.type}">
              <img src="${item.image}" alt="${item.title}" class="pImg" style="width: 100%; height: 100%; object-fit: cover;">
            </a>
          </div>
        </div>`
      )
      .join('');

    gallery.innerHTML = `<div class="row g-4 g-md-4 g-lg-5 portfolioRow">${cards}</div>`;
    renderPager(totalPages);
  }

  function renderPager(totalPages) {
    const pager = document.getElementById('art-pager');
    if (totalPages <= 1) {
      pager.innerHTML = '';
      return;
    }
    let html = `<button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} data-action="prev">‹ Prev</button>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    html += `<button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} data-action="next">Next ›</button>`;
    pager.innerHTML = html;
  }

  function onPagerClick(e) {
    const btn = e.target.closest('button[data-action], button[data-page]');
    if (!btn) return;
    if (btn.dataset.action === 'prev') currentPage--;
    else if (btn.dataset.action === 'next') currentPage++;
    else if (btn.dataset.page) currentPage = parseInt(btn.dataset.page, 10);
    render();
    window.scrollTo({ top: document.getElementById('art-gallery').offsetTop - 80, behavior: 'smooth' });
  }

  window.filterArt = applyFilters;

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('art-gallery')) return;
    document.getElementById('art-pager').addEventListener('click', onPagerClick);
    fetch('static/art-items.json')
      .then((r) => r.json())
      .then((items) => {
        allItems = items;
        applyFilters();
      });
  });
})();
