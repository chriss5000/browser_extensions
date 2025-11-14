
// Dark Mode Toggle
document.getElementById('darkModeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Options Panel Toggle
document.getElementById('optionsBtn').addEventListener('click', () => {
    document.getElementById('options-panel').style.display = 'block';
});

document.getElementById('closeOptionsBtn').addEventListener('click', () => {
    document.getElementById('options-panel').style.display = 'none';
});

// Apply Colors
document.getElementById('applyColorsBtn').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    document.querySelectorAll('.links button').forEach(btn => {
        btn.style.backgroundColor = bgColor;
        btn.style.color = textColor;
    });
});

// Shortcut: '/' setzt Fokus auf Suchfeld
window.addEventListener('keydown', function(e) {
    if(e.key === 'f') {
        e.preventDefault();
        document.getElementById('search').focus();
    }
});

// Favoriten dynamisch laden
chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    const container = document.getElementById('favorites');
    bookmarkTreeNodes.forEach(node => {
        if(node.title && node.title.toLowerCase() == 'ordner') return;
        renderNode(node, container);
    });
});

function renderNode(node, parentElement) {
    if(node.children) {
        if(node.title && node.title.toLowerCase() == 'ordner') return;
        if(node.title && node.title.toLowerCase() == 'other favorites') return;
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        const title = document.createElement('h2');
        title.textContent = node.title || '';
        categoryDiv.appendChild(title);
        const linksDiv = document.createElement('div');
        linksDiv.className = 'links';
        node.children.forEach(child => {
            renderNode(child, linksDiv);
        });
        categoryDiv.appendChild(linksDiv);
        parentElement.appendChild(categoryDiv);
    } else if(node.url) {
        const button = document.createElement('button');
        const icon = document.createElement('img');
        const domain = new URL(node.url).hostname;
        icon.src = `https://${domain}/favicon.ico`;
        icon.onerror = () => {
            icon.src = `https://www.google.com/s2/favicons?domain=${domain}`;
        };
        const text = document.createTextNode(node.title || node.url);
        button.appendChild(icon);
        button.appendChild(text);
        button.addEventListener('click', () => {
            window.location.href = node.url;
        });
        parentElement.appendChild(button);
    }
}

// Suchfunktion
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    document.querySelectorAll('.category').forEach(cat => {
        let match = false;
        cat.querySelectorAll('button').forEach(btn => {
            if(btn.textContent.toLowerCase().includes(filter)) {
                btn.style.display = 'flex';
                match = true;
            } else {
                btn.style.display = 'none';
            }
        });
        cat.style.display = match ? 'block' : 'none';
    });
});
