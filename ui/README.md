# Cat vs Dog Classifier - Web UI

A beautiful, modern web interface for the Cat vs Dog classifier built with FastAI.

## Features

- 🎨 **Modern UI**: Clean, responsive design with gradients and animations
- 📱 **Mobile-friendly**: Works perfectly on all devices
- 🖱️ **Drag & Drop**: Easy image upload with drag and drop support
- ⚡ **Real-time Preview**: See your image before prediction
- 🎯 **Confidence Scores**: Get prediction confidence percentages
- 🔄 **Loading States**: Smooth loading animations
- ❌ **Error Handling**: Graceful error messages

## Usage

### Option 1: Demo Mode (Works Immediately)
1. Open `index.html` in your browser
2. Upload any image with "cat" or "dog" in the filename
3. Click "Predict" to see the simulated result

### Option 2: Connect to Gradio Backend
1. Run your Gradio server (from `notebooks/server.ipynb`)
2. Open browser console and run:
   ```javascript
   connectToGradio('http://localhost:7860')
   ```
3. Now predictions will use your real model!

## Deployment to GitHub Pages

1. Push this `ui` folder to your GitHub repository
2. Go to Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: `main` and folder: `/ui`
5. Your site will be available at: `https://yourusername.github.io/yourrepo`

## File Structure

```
ui/
├── index.html      # Main HTML page
├── app.js         # JavaScript functionality
└── README.md      # This file
```

## Customization

- **Colors**: Edit the CSS gradients in `index.html`
- **API Endpoint**: Modify `gradioEndpoint` in `app.js`
- **Styling**: All styles are in the `<style>` section of `index.html`

## Testing Your Images

Try uploading images from the `../data/` folder:
- `cat1.png`, `cat2.png` - Should predict "Cat"
- `dog1.png`, `dog2.png` - Should predict "Dog"
- `catdog.png`, `catdog1.png` - Let's see what the AI thinks! 😄

## Technical Details

- **Frontend**: Pure HTML, CSS, JavaScript (no frameworks)
- **Backend**: FastAI + Gradio (Python)
- **Deployment**: GitHub Pages (static hosting)
- **API**: RESTful calls to Gradio endpoints

Enjoy classifying cats and dogs! 🐱🐶 