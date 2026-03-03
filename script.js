const toolGrid = document.getElementById('toolGrid');

function init() {
    AI_DATABASE.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="cat-label">${tool.category}</span>
            <div class="btn-group">
                <a href="${tool.paidLink}" target="_blank" class="btn paid-btn">
                    <span>👑 ${tool.paidName}</span>
                    <span class="pill">BEST PAID</span>
                </a>
                <a href="${tool.freeLink}" target="_blank" class="btn free-btn">
                    <span>🔥 ${tool.freeName}</span>
                    <span class="pill">BEST FREE</span>
                </a>
            </div>
        `;
        toolGrid.appendChild(card);
    });
}

init();