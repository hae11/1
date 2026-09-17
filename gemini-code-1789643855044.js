// 範例：即時搜尋與關鍵字過濾
const searchInput = document.getElementById('search-input');
const itemContainer = document.getElementById('item-container');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredData = expenseData.filter(item => 
    item.title.toLowerCase().includes(searchTerm) || 
    item.description.toLowerCase().includes(searchTerm)
  );
  renderCards(filteredData);
});

function renderCards(items) {
  // 動態產出 HTML 卡片並渲染至頁面
}