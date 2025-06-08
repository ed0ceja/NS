# 🐱🐶 Cat vs Dog Classifier

An AI-powered image classifier that can distinguish between cats and dogs, built with FastAI and served through both Gradio and a custom web interface.

## Features

- **🧠 FastAI Model**: ResNet18-based classifier trained on the Oxford-IIT Pet Dataset
- **🎯 High Accuracy**: Distinguishes between cats and dogs with high confidence
- **🌐 Web Interface**: Beautiful, modern UI deployable to GitHub Pages
- **⚡ Gradio Server**: Ready-to-use Python server with sharing capabilities
- **📱 Mobile-Friendly**: Works perfectly on all devices

## Project Structure

```
├── README.md                 # This file
├── data/                     # Sample images for testing
│   ├── cat1.png, cat2.png   # Cat images
│   ├── dog1.png, dog2.png   # Dog images
│   └── catdog.png, catdog1.png # Mixed images
├── notebooks/
│   ├── dogs_cats.ipynb      # Model training notebook
│   └── server.ipynb         # Gradio server notebook
└── ui/                      # GitHub Pages web interface
    ├── index.html           # Main HTML page
    ├── app.js              # JavaScript functionality
    └── README.md           # UI documentation
```

## Quick Start

### 1. Train the Model
```bash
# Open and run notebooks/dogs_cats.ipynb
# This will download data, train the model, and export model.pkl
```

### 2. Run the Server
```bash
# Open and run notebooks/server.ipynb
# This will start a Gradio interface at http://localhost:7860
```

### 3. Use the Web UI
```bash
# Option A: Open ui/index.html directly in your browser (demo mode)
# Option B: Deploy to GitHub Pages for public access
```

## Usage

### Training Your Own Model
1. Open `notebooks/dogs_cats.ipynb`
2. Run all cells to download data and train the model
3. The trained model will be saved as `model.pkl`

### Running the Gradio Server
1. Ensure `model.pkl` exists in the root directory
2. Open `notebooks/server.ipynb`
3. Run all cells to start the server
4. Access the interface at the provided URL

### Using the Web Interface
- **Demo Mode**: Works immediately with simulated predictions
- **Connected Mode**: Connect to your Gradio server for real predictions
- **GitHub Pages**: Deploy for public access

## Deployment

### Local Development
```bash
# Start Gradio server
jupyter notebook notebooks/server.ipynb

# Open web UI
open ui/index.html
```

### GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select source: "Deploy from a branch"
4. Choose branch: `main` and folder: `/ui`
5. Access at: `https://yourusername.github.io/yourrepo`

## Technical Details

- **Model**: ResNet18 with FastAI fine-tuning
- **Dataset**: Oxford-IIT Pet Dataset (cats vs dogs)
- **Backend**: Python, FastAI, Gradio
- **Frontend**: Pure HTML, CSS, JavaScript
- **Deployment**: Jupyter notebooks + GitHub Pages

## Requirements

```python
fastai
gradio==3.50.0
torch
torchvision
pillow
numpy
```

## Examples

Try the classifier with images from the `data/` folder:
- Upload `cat1.png` → Should predict "Cat" 🐱
- Upload `dog1.png` → Should predict "Dog" 🐶
- Upload `catdog.png` → Let's see what it thinks! 😄

## Contributing

Feel free to:
- Improve the model accuracy
- Enhance the web UI design
- Add new features
- Fix bugs or issues

## License

MIT License - feel free to use this project for learning and development!

---

**Enjoy classifying cats and dogs with AI! 🚀**