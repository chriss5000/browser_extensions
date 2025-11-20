# Quick Reference - Edge Favorites Extension

## Quick Links
- [Full Documentation](README.md)
- [User Guide](USER_GUIDE.md)
- [Contributing Guidelines](CONTRIBUTING.md)

## Installation in 30 Seconds

1. Download/clone this repository
2. Open Edge → `edge://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select `edge_favorites_extension` folder
6. Done! Open a new tab to see your favorites

## Key Features

| Feature | How to Use |
|---------|------------|
| **Search** | Click search box or press 'f' key |
| **Dark Mode** | Click "Dark Mode" button (saves automatically) |
| **Customize Colors** | Click "Options" → Choose colors → Save |
| **Navigate** | Click any bookmark to open it |

## Keyboard Shortcuts

- **'f'** - Focus search field

## File Structure

```
edge_favorites_extension/
├── manifest.json    - Extension config (permissions, name, version)
├── index.html       - Main UI layout
├── script.js        - JavaScript functionality
└── style.css        - Visual styling and themes
```

## Common Tasks

### Reload After Changes
1. Go to `edge://extensions/`
2. Click refresh icon on extension card
3. Open new tab to test

### Debug Issues
1. Open new tab (loads extension)
2. Press F12 (Developer Tools)
3. Check Console for errors

### Update Extension
1. Download new version
2. Remove old extension from `edge://extensions/`
3. Load new version

## Customization Quick Tips

### Hide Different Folders
Edit `script.js` lines 53-54:
```javascript
if(node.title && node.title.toLowerCase() == 'your_folder_name') return;
```

### Change Default Colors
Edit `style.css`:
- Background: `.category { background: #fff; }`
- Buttons: `.links button { background: #015091; }`

### Modify Search Placeholder
Edit `index.html` line 13:
```html
<input type='text' id='search' placeholder='Your text here...'>
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Extension not loading | Enable Developer mode |
| Bookmarks not showing | Check bookmarks permission in manifest.json |
| Dark mode not saving | Check localStorage isn't disabled |
| Favicons missing | Some sites don't provide them (normal) |

## Technical Details

- **Manifest Version**: 3
- **Permissions Required**: bookmarks
- **Browser API**: Chrome Bookmarks API
- **Storage**: localStorage (for dark mode preference)
- **Compatibility**: Edge, Chrome, Chromium browsers

## Need More Help?

- **Detailed Instructions**: See [USER_GUIDE.md](USER_GUIDE.md)
- **Development Info**: See [CONTRIBUTING.md](CONTRIBUTING.md)
- **Feature Details**: See [README.md](README.md)
- **Report Issues**: Open issue on GitHub

## Version

Current Version: **1.8**

---

*For complete documentation, please refer to the full [README.md](README.md)*
