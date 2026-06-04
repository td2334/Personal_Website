# Trevor J. DeWall - Website Management Guide

## Quick Start

### Running Your Website Locally

1. **Open Terminal/Command Prompt** in your website folder
2. **Install dependencies** (first time only):
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm start
   ```
   - This opens your website in a browser at `http://localhost:3000`
   - The website automatically refreshes when you make changes

## Website Structure

```
Root Folder
├── index.html          # Homepage (main landing page)
├── pages/              # All other website pages
│   ├── about.html         # About page
│   ├── contact.html       # Contact page with form
│   ├── projects.html      # Portfolio/projects page
│   └── resume.html        # Resume display page
├── components/         # Reusable parts
│   ├── header.html        # Navigation bar
│   ├── footer.html        # Footer section
│   └── addComponents.js   # JavaScript that loads header/footer
├── css/               # Styling
│   └── singlePageTemplate.css  # Main stylesheet
├── images/            # All pictures and icons
├── docs/              # Documents (like your resume PDF)
└── package.json       # Project configuration
```

## How to Edit Your Website

### 1. Updating Your Information

#### **Latin Dummy Text**

- **File to edit:** Any applicable
- **What to change:**
  - All latin (lorum ipsum. . .) placeholder text with relevant information

#### **Personal Information (Homepage)**

- **File to edit:** `index.html`
- **What to change:**
  - Your name and title
  - Professional summary
  - Skills and expertise
  - Contact information

#### **About Page Content**

- **File to edit:** `pages/about.html`
- **What to change:**
  - Professional background
  - Education and certifications
  - Personal interests
  - Professional philosophy

#### **Contact Information**

- **File to edit:** `pages/contact.html`
- **What to change:**
  - Email address
  - LinkedIn profile URL
  - Response Time (if desired)

### 2. Adding Projects to Your Portfolio

#### **Projects Page**

- **File to edit:** `pages/projects.html`
- **To add projects:**
  1. Replace placeholder content with your actual projects
  2. Add optional project screenshots to the `images/` folder (preferably in .webp format)
  3. Include project descriptions, technologies used, and links

### 3. Updating Your Resume

#### **Resume PDF**

- **File to replace:** `docs/resume.pdf`
- **How to update:**
  1. Save your updated resume as `resume.pdf`
  2. Replace the existing file in the `docs/` folder
  3. The website will automatically show your new resume

### 4. Changing Colors and Styling

#### **Main Stylesheet**

- **File to edit:** `css/singlePageTemplate.css`
- **Common changes:**
  - Colors: Search for color codes (e.g., `#3498db`) and replace them
  - Fonts: Look for `font-family` declarations
  - Spacing: Adjust `margin` and `padding` values

## Common Editing Tasks

### Adding a New Page

1. Create a new HTML file in the `pages/` folder
2. Copy the structure from an existing page (like `about.html`)
3. Update the content
4. Add a link to the new page in `components/header.html`

### Changing Navigation Menu

- **File to edit:** `components/header.html`
- **What you can change:**
  - Menu item names
  - Add/remove menu items
  - Change the order of menu items

### Updating Footer Information

- **File to edit:** `components/footer.html`
- **What you can change:**
  - Copyright information
  - Social media links
  - Contact information
  - Other optional content

## Browser Developer Tools

- **Right-click** on any webpage element → **Inspect**
- Use this to see live changes as you edit HTML, CSS, and/or JavaScript

## Testing Your Website

### Different Devices

- **Desktop browsers**: Chrome, Firefox, Safari, Edge
- **Mobile testing**: Use browser developer tools or test on actual devices

### Before Publishing Checklist

- [ ] All personal information is updated
- [ ] Contact form works properly
- [ ] All links work
- [ ] Images load correctly
- [ ] Website looks good on mobile
- [ ] Resume PDF opens correctly

## Troubleshooting

### Website Doesn't Load

- Check if you're running the development server (`npm start`)
- Ensure all files are in the correct folders
- Check browser console for error messages (F12 key)

### Images Don't Show

- Verify image files are in the `images/` folder
- Check that image filenames match exactly (including capitalization)
- Ensure image paths are correct in HTML files

### Styling Looks Wrong

- Check if `css/singlePageTemplate.css` file exists
- Verify CSS file is linked correctly in HTML files
- Clear browser cache (Ctrl+F5)

### Contact Form Issues

- The form currently uses JavaScript for email functionality
- Test all three submission methods (Gmail, Default Email, Copy Email)
- Ensure email addresses are correct in the code

## Maintenance Schedule

Whenever you want, really. I'm not your boss.

---

## Credits

- Website Developer: L4w1i3t
- Documentation by: L4w1i3t and EMA (In-house agent)
- Code formatting by: Prettier NPM package

---

_Remember: This is your website - don't be afraid to experiment and make it truly yours. Always keep backups of your files before making major changes (Although I don't think I need to tell you this, of all people. This is just protocol)._
