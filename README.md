# Interactive Resume & Portfolio - Uday Aggarwal

A premium, interactive web-based resume and portfolio for Uday Aggarwal (MERN Stack Developer & Computer Science Engineer). This app acts as both a gorgeous online interactive portfolio and a highly customizable, print-ready document.

## 🚀 Features

### 1. 🎨 Premium Web Interface
- **Dynamic Design**: Rich aesthetics with custom Google Fonts (`Outfit` and `Plus Jakarta Sans`), glassmorphism layouts, glowing accents, and smooth transitions.
- **Theme Switcher**: Smooth toggle between Midnight Dark Mode and Slate Light Mode.
- **Interactive Project Filtering**: Click any skill tag (e.g., `MERN Stack`, `MongoDB`, `C++`) to instantly highlight projects built using that skill and dim unrelated ones.

### 2. ⚙️ Print Customizer Panel (Screen Only)
Before printing or exporting to PDF, you can toggle:
- **Include Photo**: Hide or show the profile picture on print.
- **Include Summary**: Toggle the professional summary.
- **Include Sections**: Toggle Certifications, Academic Achievements, and Extra-curricular activities.
- **Print Style Selector**: Choose between:
  - **Modern Grid**: Clean, high-contrast grid matching the web structure.
  - **Classic Formal**: Traditional single-column resume style, optimized for ATS parsers.
  - **Minimalist**: Clean serif design (Georgia) focusing purely on content and white space.

### 3. 🖨️ Flawless PDF Export
Using `@media print` rules:
- Interactive menus, toggles, controls, and footers are automatically hidden.
- Page breaks are managed to prevent cutting headers, projects, or education items.
- Text is automatically optimized to high-contrast dark text on a white background.

---

## 🛠️ How to View & Use

### Option 1: Direct File Open
Simply double-click [index.html](file:///C:/Users/User/.gemini/antigravity/scratch/uday-resume/index.html) to open the resume directly in any web browser.

### Option 2: Run Local Server (Recommended)
Launch the zero-dependency Node.js server to run it locally:
1. Open terminal and navigate to the project directory:
   ```bash
   cd C:\Users\User\.gemini\antigravity\scratch\uday-resume
   ```
2. Start the server:
   ```bash
   node server.js
   ```
3. Open your browser and go to:
   [http://localhost:3000/](http://localhost:3000/)

---

## 🖨️ PDF Printing Guide

To save your resume as a PDF:
1. Click the **Print / Save PDF** button in the header (or press `Ctrl + P`).
2. Set your printer destination to **Save as PDF** or **Microsoft Print to PDF**.
3. Under **More Settings**:
   - **Margins**: Set to *Default* or *None*.
   - **Background Graphics**: Ensure this is **Checked** (to print custom skill tags, bullet dots, and borders).
   - **Headers and Footers**: Ensure this is **Unchecked** (to hide browser default URLs and page numbers).
4. Click **Save**!
