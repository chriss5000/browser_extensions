# Edge Favorites Extension

A Microsoft Edge browser extension that replaces the new tab page with a customizable favorites dashboard featuring dark mode support, search functionality, and color customization.

## Features

- **Custom New Tab Page**: Displays your bookmarks/favorites as an organized grid layout
- **Dark Mode**: Toggle between light and dark themes with persistent state across sessions
- **Search Functionality**: Quickly find bookmarks using the search bar (press 'f' key for quick access)
- **Favicon Display**: Shows website favicons next to bookmark titles for easy recognition
- **Color Customization**: Personalize button background and text colors
- **Organized Categories**: Bookmarks are displayed grouped by folder structure
- **Responsive Design**: Adapts to different screen sizes

## Installation

### From Source

1. Clone this repository or download the source code:
   ```bash
   git clone https://github.com/chriss5000/browser_extensions.git
   cd browser_extensions/edge_favorites_extension
   ```

2. Open Microsoft Edge and navigate to `edge://extensions/`

3. Enable "Developer mode" using the toggle in the bottom-left corner

4. Click "Load unpacked" button

5. Select the `edge_favorites_extension` folder from this repository

6. The extension should now be installed and active

## Usage

### Basic Usage

Once installed, every time you open a new tab in Edge, you'll see your favorites displayed in a grid layout organized by folders.

### Search Bookmarks

- Click the search bar at the top or press the 'f' key on your keyboard
- Type to filter bookmarks by title
- Only matching bookmarks and their categories will be displayed

### Dark Mode

- Click the "Dark Mode" button in the top-right corner
- The theme preference is saved and will persist across browser sessions
- Dark mode applies to the top bar, background, and category cards

### Customize Colors

1. Click the "Options" button in the top-right corner
2. Choose your preferred background color for bookmark buttons
3. Choose your preferred text color
4. Click "Save" to apply the changes
5. Click "Close" to exit the options panel

### Keyboard Shortcuts

- **'f' key**: Focus on the search input field

## Project Structure

```
edge_favorites_extension/
├── manifest.json      # Extension configuration and metadata
├── index.html         # Main HTML structure
├── script.js          # JavaScript functionality
└── style.css          # Styling and theme definitions
```

## Technical Details

### manifest.json
- Uses Manifest V3 (latest extension format)
- Requires `bookmarks` permission to read favorites
- Overrides the new tab page with `index.html`

### Features Implementation
- **Bookmarks API**: Uses Chrome Bookmarks API (`chrome.bookmarks.getTree()`)
- **LocalStorage**: Stores dark mode preference
- **Dynamic Rendering**: Recursively renders bookmark tree structure
- **Favicon Loading**: Attempts primary favicon, falls back to Google's favicon service

### Browser Compatibility

This extension is designed for Microsoft Edge and Chromium-based browsers that support:
- Manifest V3
- Chrome Bookmarks API
- Chrome URL Overrides

## Development

### Prerequisites
- Microsoft Edge browser
- Basic knowledge of HTML, CSS, and JavaScript

### Making Changes

1. Make your changes to the source files
2. Go to `edge://extensions/`
3. Click the refresh icon on the extension card
4. Open a new tab to see your changes

### Debugging

1. Open a new tab (which loads the extension)
2. Press `F12` to open Developer Tools
3. Check the Console tab for any errors or logs

## Customization

### Filtering Folders

The extension automatically filters out certain bookmark folders. To modify this behavior, edit the filter conditions in `script.js`:

```javascript
if(node.title && node.title.toLowerCase() == 'ordner') return;
if(node.title && node.title.toLowerCase() == 'other favorites') return;
```

### Styling

All visual styling can be customized in `style.css`:
- Colors: Modify color values in `.top-bar`, `.dark-mode`, `.category`, etc.
- Layout: Adjust grid properties in `.grid-container` and `.links`
- Spacing: Change padding and margin values

## Known Limitations

- Excluded folders: Folders named "ordner" and "Other Favorites" are automatically hidden
- Color customization: Applied colors are not persisted across sessions (only during current session)
- No bookmark management: The extension displays bookmarks but doesn't provide functionality to add/edit/delete them

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Version History

- **v1.8** (Current): Includes dark mode for top bar, favicons, and options panel

## License

This project is open source. Please check the repository for license information.

## Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/chriss5000/browser_extensions).

## Acknowledgments

- Uses Google's Favicon Service as a fallback for missing favicons
- Built using Chrome Extension APIs compatible with Microsoft Edge
