
// Dark Mode Toggle - Toggles dark mode and persists preference to localStorage
document.getElementById('darkModeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Options Panel Toggle - Show/hide the color customization panel
document.getElementById('optionsBtn').addEventListener('click', () => {
    document.getElementById('options-panel').style.display = 'block';
});

document.getElementById('closeOptionsBtn').addEventListener('click', () => {
    document.getElementById('options-panel').style.display = 'none';
});

// Apply Colors - Apply user-selected colors to all bookmark buttons
document.getElementById('applyColorsBtn').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    document.querySelectorAll('.links button').forEach(btn => {
        btn.style.backgroundColor = bgColor;
        btn.style.color = textColor;
    });
});

// Keyboard Shortcut - Press 'f' to focus the search field
window.addEventListener('keydown', function(e) {
    if(e.key === 'f') {
        e.preventDefault();
        document.getElementById('search').focus();
    }
});

// Restore Dark Mode - Apply saved dark mode preference on page load
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// Load Bookmarks - Fetch and render the bookmark tree from Chrome API
chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    const container = document.getElementById('favorites');
    bookmarkTreeNodes.forEach(node => {
        // Skip folders named 'ordner'
        if(node.title && node.title.toLowerCase() == 'ordner') return;
        renderNode(node, container);
    });
});

/**
 * Recursively renders bookmark tree nodes
 * @param {Object} node - Bookmark tree node from Chrome API
 * @param {HTMLElement} parentElement - Parent DOM element to append to
 */
function renderNode(node, parentElement) {
    // Handle folders (nodes with children)
    if(node.children) {
        // Filter out specific folder names
        if(node.title && node.title.toLowerCase() == 'ordner') return;
        if(node.title && node.title.toLowerCase() == 'other favorites') return;
        
        // Create category container
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        const title = document.createElement('h2');
        title.textContent = node.title || '';
        categoryDiv.appendChild(title);
        
        // Create links container and recursively render children
        const linksDiv = document.createElement('div');
        linksDiv.className = 'links';
        node.children.forEach(child => {
            renderNode(child, linksDiv);
        });
        categoryDiv.appendChild(linksDiv);
        parentElement.appendChild(categoryDiv);
    } 
    // Handle individual bookmarks (nodes with URL)
    else if(node.url) {
        const button = document.createElement('button');
        const icon = document.createElement('img');
        const domain = new URL(node.url).hostname;
        
        // Try to load favicon, fallback to Google's favicon service
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

// Search Functionality - Filter bookmarks as user types
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    
    // Iterate through all categories
    document.querySelectorAll('.category').forEach(cat => {
        let match = false;
        
        // Show/hide individual bookmarks based on search term
        cat.querySelectorAll('button').forEach(btn => {
            if(btn.textContent.toLowerCase().includes(filter)) {
                btn.style.display = 'flex';
                match = true;
            } else {
                btn.style.display = 'none';
            }
        });
        
        // Hide category if no bookmarks match
        cat.style.display = match ? 'block' : 'none';
    });
});
