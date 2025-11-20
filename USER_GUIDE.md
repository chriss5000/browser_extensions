# User Guide - Edge Favorites Extension

## Quick Start

This extension transforms your Microsoft Edge new tab page into a beautiful, searchable favorites dashboard.

## Installation Guide

### Step-by-Step Installation

1. **Download the Extension**
   - Download this repository as a ZIP file or clone it using Git
   - Extract the ZIP file to a location on your computer

2. **Open Edge Extensions Page**
   - Open Microsoft Edge
   - Click the three dots menu (⋯) in the top-right corner
   - Go to: **Extensions** → **Manage extensions**
   - Or simply type `edge://extensions/` in the address bar and press Enter

3. **Enable Developer Mode**
   - Look for the "Developer mode" toggle in the bottom-left corner
   - Turn it ON (it should turn blue)

4. **Load the Extension**
   - Click the **"Load unpacked"** button (appears after enabling Developer mode)
   - Navigate to and select the `edge_favorites_extension` folder
   - Click **"Select Folder"**

5. **Verify Installation**
   - The extension should now appear in your extensions list
   - Open a new tab - you should see your favorites displayed!

## Using the Extension

### Your Favorites Dashboard

When you open a new tab, you'll see:
- **Top Bar**: Contains the search box and action buttons
- **Categories**: Your bookmarks organized by folders
- **Bookmark Buttons**: Click any bookmark to open that website

### Searching Your Bookmarks

**Method 1: Click the search box**
- Click on the search box in the top bar
- Start typing to filter your bookmarks

**Method 2: Keyboard shortcut**
- Press the **'f'** key on your keyboard
- The search box will automatically focus
- Start typing to search

**How search works:**
- Searches through all bookmark titles
- Shows only matching bookmarks
- Hides categories with no matches
- Clear the search to show all bookmarks again

### Dark Mode

**Activating Dark Mode:**
1. Click the **"Dark Mode"** button in the top-right corner
2. The entire page switches to a dark theme
3. Your preference is automatically saved

**What Dark Mode Changes:**
- Background becomes dark gray/black
- Top bar turns dark
- Category cards get dark backgrounds
- Text becomes light colored for better contrast

**Turning Off Dark Mode:**
- Simply click the "Dark Mode" button again

### Customizing Colors

Want to personalize your bookmark button colors?

1. **Open Options:**
   - Click the **"Options"** button in the top-right corner
   - An options panel will appear

2. **Choose Colors:**
   - Click the **"Background"** color picker to choose button background color
   - Click the **"Text"** color picker to choose button text color
   - See the color codes as you select

3. **Apply Changes:**
   - Click **"Save"** to apply your new colors
   - All bookmark buttons will update immediately

4. **Close Options:**
   - Click **"Close"** to hide the options panel

**Note:** Color preferences are applied immediately but will reset when you reopen your browser.

## Tips and Tricks

### Organizing Your Bookmarks

The extension displays bookmarks based on your Edge bookmark structure:
- **Folders become categories** with headers
- **Bookmarks within folders** appear as buttons in that category
- **Keep related bookmarks together** in folders for better organization

### Keyboard Navigation

- **Press 'f'**: Jump straight to search
- **Type in search**: Filter bookmarks instantly
- **Press Escape**: Clear search (standard browser behavior)

### Performance

- The extension loads quickly even with hundreds of bookmarks
- Favicons are cached by your browser for faster loading
- Search filtering happens instantly as you type

## Troubleshooting

### Extension Not Loading
- Make sure Developer mode is enabled
- Try clicking the refresh icon on the extension card
- Check that you selected the correct folder (`edge_favorites_extension`)

### Bookmarks Not Showing
- Verify you have bookmarks saved in Edge
- Check Edge bookmark permissions (should be enabled automatically)
- Try refreshing the extension

### Favicons Not Appearing
- Some websites don't provide favicons
- The extension will try a fallback service
- If still missing, it's a limitation of that specific website

### Dark Mode Not Saving
- Dark mode uses browser localStorage
- Make sure you're not in private/incognito mode
- Clear browser cache if issues persist

### Search Not Working
- Click the search box to ensure it's focused
- Try pressing 'f' to focus the search box
- Check browser console (F12) for any errors

## Frequently Asked Questions

**Q: Can I add/edit/delete bookmarks from this extension?**
A: No, this extension only displays bookmarks. Use Edge's built-in bookmark manager to make changes.

**Q: Will this work in other browsers?**
A: It's designed for Edge but should work in Chrome and other Chromium-based browsers with minor adjustments.

**Q: Can I change the extension to show a different page?**
A: The extension specifically overrides the new tab page. This is configured in manifest.json.

**Q: Why are some of my bookmark folders not showing?**
A: Folders named "ordner" and "Other Favorites" are filtered out by default.

**Q: Does this extension collect any data?**
A: No, all data stays local. The extension only reads your bookmarks from your browser.

**Q: How do I uninstall the extension?**
A: Go to `edge://extensions/`, find the extension, and click "Remove".

## Need Help?

If you encounter issues:
1. Check this User Guide
2. Read the troubleshooting section
3. Open an issue on GitHub with details about your problem

## Updates

To update the extension:
1. Download the latest version
2. Go to `edge://extensions/`
3. Click "Remove" on the old version
4. Follow installation steps again with the new version

Enjoy your personalized favorites dashboard! 🚀
