# 1.6.1

- Fixed the new "Quick Open" (`ctrl+p`) control having a background colour that matched focused/hovered list items, rendering them completely invisible.


# 1.6.0

- Highlight colours & borders.
- New scrollbar colour.
- Make minimap & scrollbar colours match the highlight colours.


# 1.5.1

- Fixed HTML, Batch, C++ syntax highlighting.
- Fixed comma in SCSS `@each` not using punctuation colour.
- Keyword expressions (`typeof`/`void`/etc) now use "builtin function" colours.


# 1.5.0

- Redo most syntax theme colour stuff (I finally found the TM Scopes inspector is a thing!)
- Add error, warning, and info colours (this was not usable using the default ones, since they were switched from green and red)


# 1.4.1

- Fixed matched suggestion characters being the same colour as the highlighted background.


# 1.4.0

- Tooltips, suggestions, and lists now use greys for selected items rather than teals.
- The borders of tooltips & suggestions have been changed to greys to match the context menus.
- The border of focused elements has been changed to blue (from teal).
- The default status bar colour has been changed to a navy blue.
- The debugging status bar colour has been changed to green.


# 1.3.0

- VSCode 1.28 (September) broke the context menu backgrounds. They were never explicitly styled in this theme, this theme just rode on whatever the default colours were. This release explicitly styles them — they should fit the theme a lot more now.


# 1.2.0

- Added support for the custom title bar. 
- Fixed the background colours of the sidebar section headings.


# 1.1.0

- Added support for git modifications/untracked/deleted files in the file explorer.


# 1.0.0

Initial release!