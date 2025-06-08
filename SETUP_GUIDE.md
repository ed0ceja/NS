# 🚀 Quick Setup Guide

Follow these steps to get your Cat vs Dog Classifier running:

## Option 1: Use the Clean Notebooks (Recommended)

### Step 1: Train Your Model
1. Open `notebooks/dogs_cats.ipynb`
2. Run all cells from top to bottom
3. This will:
   - Download the Oxford-IIT Pet Dataset
   - Train a ResNet18 model
   - Export `model.pkl` to the root directory

### Step 2: Start the Gradio Server
1. Open `notebooks/server.ipynb` (the clean version)
2. Run all cells from top to bottom
3. This will:
   - Load your trained model
   - Start a Gradio web interface
   - Give you a public URL to share

### Step 3: Use the Web UI
1. Open `ui/index.html` in your browser for the standalone interface
2. Or visit the Gradio URL from Step 2

## Option 2: Use the Standalone Python Script

If you prefer not to use notebooks:

```bash
# 1. First, train your model using the notebook
# 2. Then run the standalone server
python3 gradio_server.py
```

## Option 3: Just the Web UI (Demo Mode)

If you just want to see the interface:

1. Open `ui/index.html` in your browser
2. Upload any image with "cat" or "dog" in the filename
3. See simulated results!

## Troubleshooting

### "Model not found" error
- Make sure you've run `notebooks/dogs_cats.ipynb` first
- Check that `model.pkl` exists in the root directory

### Gradio import errors
```bash
pip install gradio
```

### FastAI import errors
```bash
pip install fastai
```

### Still having issues?
1. Use the standalone `gradio_server.py` script
2. Or just use the web UI in demo mode
3. Check that you're in the correct virtual environment (`.env` folder)

## Files Overview

- `notebooks/dogs_cats.ipynb` - Train the model
- `notebooks/server.ipynb` - Serve the model (CLEAN VERSION)
- `gradio_server.py` - Standalone server script
- `ui/index.html` - Beautiful web interface
- `data/` - Test images

## Success! 🎉

If everything works, you should see:
- A Gradio interface at a local URL
- A public sharing URL
- Your beautiful web UI working in the browser

Enjoy classifying cats and dogs! 🐱🐶 