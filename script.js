const ICON_API = "https://www.google.com/s2/favicons?sz=64&domain=";

// Render Hall of Fame
const fameGrid = document.getElementById('fameGrid');
HALL_OF_FAME.forEach(tool => {
    fameGrid.innerHTML += `
        <a href="${tool.link}" target="_blank" class="fame-btn">
            <img src="${ICON_API}${tool.domain}" class="icon" alt="">
            <div>
                <strong>${tool.name}</strong>
                <small>${tool.sub}</small>
            </div>
        </a>`;
});

// Render Chinese Giants
const chinaRow = document.getElementById('chinaRow');
CHINESE_LLMS.forEach(tool => {
    chinaRow.innerHTML += `
        <a href="${tool.link}" target="_blank" class="china-chip">
            <img src="${ICON_API}${tool.domain}" class="icon" style="width:18px; height:18px;" alt="">
            <span>${tool.name} <small style="opacity:0.6;">(${tool.tag})</small></span>
        </a>`;
});

// Render Categories
const toolGrid = document.getElementById('toolGrid');
TOOL_WINNERS.forEach(item => {
    toolGrid.innerHTML += `
        <div class="card">
            <span class="cat-title">${item.category.toUpperCase()}</span>
            <a href="${item.paid.link}" target="_blank" class="link-btn btn-paid">
                <img src="${ICON_API}${item.paid.domain}" class="icon" alt="">
                <div>${item.paid.name} <div class="btn-meta">${item.paid.info}</div></div>
                <span class="type-tag">PAID</span>
            </a>
            <a href="${item.free.link}" target="_blank" class="link-btn btn-free">
                <img src="${ICON_API}${item.free.domain}" class="icon" alt="">
                <div>${item.free.name} <div class="btn-meta">${item.free.info}</div></div>
                <span class="type-tag">FREE</span>
            </a>
        </div>`;
});