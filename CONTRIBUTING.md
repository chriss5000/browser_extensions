# Contributing to Edge Favorites Extension

Thank you for your interest in contributing to the Edge Favorites Extension! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots (if applicable)
- Your Edge version and operating system

### Suggesting Features

Feature suggestions are welcome! Please open an issue with:
- A clear description of the feature
- Why this feature would be useful
- Any examples or mockups (if applicable)

### Pull Requests

1. **Fork the repository** and create your branch from `main`

2. **Make your changes**:
   - Follow the existing code style
   - Keep changes focused and minimal
   - Test your changes thoroughly

3. **Test your changes**:
   ```bash
   # Load the extension in Edge
   # 1. Go to edge://extensions/
   # 2. Enable Developer mode
   # 3. Click "Load unpacked"
   # 4. Select the extension folder
   # 5. Test all functionality
   ```

4. **Commit your changes**:
   - Use clear, descriptive commit messages
   - Reference issue numbers if applicable
   - Keep commits atomic (one logical change per commit)

5. **Push to your fork** and submit a pull request

6. **Wait for review**:
   - Address any feedback from reviewers
   - Make requested changes in new commits
   - Keep the PR updated with the base branch

## Development Setup

### Prerequisites

- Microsoft Edge browser (latest version recommended)
- Text editor or IDE (VS Code, Sublime Text, etc.)
- Git for version control

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chriss5000/browser_extensions.git
   cd browser_extensions/edge_favorites_extension
   ```

2. **Load the extension**:
   - Open Edge and go to `edge://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `edge_favorites_extension` folder

3. **Make changes** to the source files

4. **Reload the extension**:
   - Go to `edge://extensions/`
   - Click the refresh icon on the extension card
   - Open a new tab to test

### File Structure

- `manifest.json` - Extension metadata and configuration
- `index.html` - Main UI structure
- `script.js` - Core functionality and logic
- `style.css` - Styling and themes

## Coding Standards

### JavaScript

- Use `const` and `let` instead of `var`
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code formatting
- Use semicolons consistently

Example:
```javascript
// Good
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    // Filter logic...
});

// Avoid
var x = document.getElementById('search');
x.addEventListener('input', function() {
    var f = this.value.toLowerCase()
})
```

### CSS

- Use existing class naming conventions
- Group related properties together
- Keep selectors specific but not overly complex
- Add comments for major sections

Example:
```css
/* Good */
.search-container input[type='text'] {
    width: 300px;
    padding: 0.5rem;
    font-size: 1rem;
}

/* Avoid */
#search {
    width: 300px; padding: 0.5rem;
    font-size: 1rem;
}
```

### HTML

- Use semantic HTML elements
- Maintain consistent indentation
- Use meaningful IDs and class names
- Keep structure clean and readable

## Testing Your Changes

Before submitting a pull request, verify:

### Functionality Tests
- [ ] Extension loads without errors
- [ ] Bookmarks are displayed correctly
- [ ] Search functionality works
- [ ] Dark mode toggles properly
- [ ] Dark mode preference persists after closing and reopening browser
- [ ] Options panel opens and closes
- [ ] Color customization applies correctly
- [ ] Keyboard shortcut ('f' key) focuses search
- [ ] Favicons load correctly with fallback
- [ ] Clicking bookmarks navigates to correct URL

### Browser Tests
- [ ] Test in Microsoft Edge (primary target)
- [ ] Check for console errors (F12 Developer Tools)
- [ ] Verify no performance issues with large bookmark collections

### Visual Tests
- [ ] Layout looks correct in different window sizes
- [ ] Dark mode styling is consistent
- [ ] Colors have sufficient contrast
- [ ] Icons and favicons are properly aligned

## Documentation

When adding new features:
- Update the README.md with usage instructions
- Add inline comments for complex code
- Update this CONTRIBUTING.md if process changes

## Questions?

Feel free to open an issue with the "question" label if you need help or clarification on anything.

## Recognition

All contributors will be recognized in the project. Thank you for helping make this extension better!
