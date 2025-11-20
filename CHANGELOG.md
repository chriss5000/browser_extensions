# Changelog

All notable changes to the Edge Favorites Extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8] - Current Version

### Features
- Dark mode toggle with persistent state across browser sessions
- Search functionality to filter bookmarks
- Favicon display with fallback to Google's favicon service
- Color customization for bookmark buttons (background and text)
- Keyboard shortcut ('f' key) to quickly focus search
- Responsive grid layout that adapts to different screen sizes
- Organized category display based on bookmark folder structure
- Options panel for color customization

### Technical Details
- Uses Manifest V3 (latest Chrome extension format)
- Chrome Bookmarks API integration
- localStorage for dark mode preference persistence
- Recursive bookmark tree rendering
- Dynamic DOM manipulation for search filtering

## [Unreleased]

### Planned Features
- Persistent color customization across sessions
- Additional keyboard shortcuts
- Export/import custom settings
- Support for bookmark folders as collapsible sections
- Custom filtering options for bookmarks
- Multiple theme presets

### Known Issues
- Color customization not persisted across sessions
- Folders named "ordner" and "Other Favorites" are automatically hidden

## Version History Notes

### Pre-1.8 Versions
The extension evolved through several iterations before reaching version 1.8:
- Initial development of new tab override functionality
- Addition of bookmark display grid
- Implementation of search feature
- Introduction of dark mode
- Styling improvements and favicon support

---

## How to Read This Changelog

### Types of Changes
- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Vulnerability fixes

### Contributing
When contributing, please update this changelog following the format above. Place your changes in the [Unreleased] section with the appropriate type label.

---

*For more information about the extension, see [README.md](README.md)*
