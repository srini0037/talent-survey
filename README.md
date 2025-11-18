# Talent Management Survey - GitHub Pages

A comprehensive survey form for research on what Gen Z and early-career professionals value in employers.

## 🚀 Live Demo

Once deployed, your survey will be available at: `https://[your-username].github.io/[repository-name]/`

## 📋 Features

- **Responsive Design**: Works perfectly on mobile and desktop devices
- **Local Storage**: All responses are saved in the browser's localStorage
- **Complete Survey Sections**:
  - Consent
  - Demographics
  - Extrinsic Rewards
  - Intrinsic Rewards
  - Work Environment
  - Recruitment & Channels
  - Technology & AI in Recruitment
  - Decision Drivers (Interactive Ranking)
  - Follow-up Contact (Optional)

## 🛠️ Deployment Instructions

### Method 1: Using GitHub Web Interface (Easiest)

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name your repository (e.g., `talent-survey`)
   - Make it Public
   - Don't initialize with README
   - Click "Create repository"

2. **Upload the file**
   - Click "uploading an existing file"
   - Drag and drop `index.html` or click to select it
   - Commit the file

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll down to "Pages" section (left sidebar)
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` and folder: `/ (root)`
   - Click Save

4. **Access your survey**
   - Wait 1-2 minutes for deployment
   - Your survey will be live at: `https://[your-username].github.io/[repository-name]/`

### Method 2: Using Git Command Line

```bash
# Initialize git repository
git init
git add index.html README.md

# Commit your files
git commit -m "Initial commit: Talent Management Survey"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/[repository-name].git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow step 3 from Method 1 to enable GitHub Pages.

## 📊 Viewing Survey Responses

Responses are stored in the browser's localStorage. To view them:

1. Open the survey page
2. Open browser DevTools (F12 or Right-click → Inspect)
3. Go to Console tab
4. Type: `JSON.parse(localStorage.getItem("surveyResponses"))`
5. Press Enter

To export responses:
```javascript
// Copy this to console to download as JSON
const responses = localStorage.getItem("surveyResponses");
const blob = new Blob([responses], {type: 'application/json'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'survey-responses.json';
a.click();
```

## 🔒 Privacy & Data

- All responses are stored locally in the user's browser
- No data is sent to external servers
- Each response includes a timestamp
- Responses are anonymous unless the user provides their email for follow-up

## 🎨 Customization

You can customize the survey by editing `index.html`:
- Colors: Search for `#667eea` and `#764ba2` to change gradient colors
- Questions: Modify the HTML sections
- Styling: Update the `<style>` section

## 📱 Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This survey form is for academic research purposes.

## 🆘 Troubleshooting

**GitHub Pages not showing:**
- Wait 2-3 minutes after enabling Pages
- Check that the file is named `index.html`
- Ensure the repository is Public

**Responses not saving:**
- Check browser localStorage is enabled
- Check browser console for errors
- Try a different browser

## 📧 Support

For issues or questions about deployment, please check GitHub's documentation:
- [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart)
