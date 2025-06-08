// Cat vs Dog Classifier - Frontend JavaScript
class CatDogClassifier {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.gradioEndpoint = null; // Will be set when Gradio server is running
        this.currentImage = null;
    }

    initializeElements() {
        this.uploadArea = document.getElementById('uploadArea');
        this.imageInput = document.getElementById('imageInput');
        this.previewContainer = document.getElementById('previewContainer');
        this.previewImage = document.getElementById('previewImage');
        this.predictBtn = document.getElementById('predictBtn');
        this.loading = document.getElementById('loading');
        this.result = document.getElementById('result');
        this.resultText = document.getElementById('resultText');
        this.confidence = document.getElementById('confidence');
        this.error = document.getElementById('error');
        this.errorMessage = document.getElementById('errorMessage');
    }

    setupEventListeners() {
        // Upload area click
        this.uploadArea.addEventListener('click', () => {
            this.imageInput.click();
        });

        // File input change
        this.imageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.handleImageUpload(file);
            }
        });

        // Drag and drop
        this.uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadArea.classList.add('dragover');
        });

        this.uploadArea.addEventListener('dragleave', () => {
            this.uploadArea.classList.remove('dragover');
        });

        this.uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadArea.classList.remove('dragover');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    this.handleImageUpload(file);
                } else {
                    this.showError('Please upload an image file');
                }
            }
        });

        // Predict button
        this.predictBtn.addEventListener('click', () => {
            this.predictImage();
        });
    }

    handleImageUpload(file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            this.showError('Please upload an image file');
            return;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            this.showError('Image file is too large. Please upload an image smaller than 10MB');
            return;
        }

        this.currentImage = file;
        this.hideError();
        this.hideResult();

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            this.previewImage.src = e.target.result;
            this.previewContainer.style.display = 'block';
            this.predictBtn.style.display = 'inline-block';
        };
        reader.readAsDataURL(file);
    }

    async predictImage() {
        if (!this.currentImage) {
            this.showError('Please upload an image first');
            return;
        }

        this.showLoading();
        this.hideError();
        this.hideResult();

        try {
            // For now, we'll simulate the prediction since the Gradio server might not be running
            // In a real scenario, you would call the Gradio endpoint here
            const prediction = await this.simulatePrediction(this.currentImage);
            this.showResult(prediction);
        } catch (error) {
            console.error('Prediction error:', error);
            this.showError('Failed to predict image. Please try again.');
        } finally {
            this.hideLoading();
        }
    }

    // Simulate prediction for demo purposes
    async simulatePrediction(imageFile) {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Simple simulation based on filename or random
        const filename = imageFile.name.toLowerCase();
        let prediction, confidence;

        if (filename.includes('cat')) {
            prediction = 'Cat';
            confidence = 0.85 + Math.random() * 0.14; // 85-99%
        } else if (filename.includes('dog')) {
            prediction = 'Dog';
            confidence = 0.85 + Math.random() * 0.14; // 85-99%
        } else {
            // Random prediction for demo
            const isCat = Math.random() > 0.5;
            prediction = isCat ? 'Cat' : 'Dog';
            confidence = 0.60 + Math.random() * 0.35; // 60-95%
        }

        return {
            label: prediction,
            confidence: confidence
        };
    }

    // Real Gradio API call (use this when your server is running)
    async callGradioAPI(imageFile) {
        if (!this.gradioEndpoint) {
            throw new Error('Gradio endpoint not configured');
        }

        const formData = new FormData();
        formData.append('file', imageFile);

        const response = await fetch(`${this.gradioEndpoint}/predict`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    }

    showResult(prediction) {
        const isTrue = prediction.label.toLowerCase() === 'true' || prediction.label.toLowerCase() === 'cat';
        const label = isTrue ? 'Cat' : 'Dog';
        const emoji = isTrue ? '🐱' : '🐶';

        this.resultText.textContent = `${emoji} It's a ${label}!`;
        this.confidence.textContent = `Confidence: ${(prediction.confidence * 100).toFixed(1)}%`;

        this.result.className = `result ${label.toLowerCase()}`;
        this.result.style.display = 'block';
    }

    showLoading() {
        this.loading.style.display = 'block';
        this.predictBtn.disabled = true;
    }

    hideLoading() {
        this.loading.style.display = 'none';
        this.predictBtn.disabled = false;
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.error.style.display = 'block';
    }

    hideError() {
        this.error.style.display = 'none';
    }

    hideResult() {
        this.result.style.display = 'none';
    }

    // Method to set Gradio endpoint when server is running
    setGradioEndpoint(endpoint) {
        this.gradioEndpoint = endpoint;
        console.log('Gradio endpoint set to:', endpoint);
    }
}

// Initialize the classifier when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.classifier = new CatDogClassifier();

    // Try to detect if we're running locally vs GitHub Pages
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // If running locally, you can set your local Gradio endpoint here
        // window.classifier.setGradioEndpoint('http://localhost:7860');
    }

    console.log('Cat vs Dog Classifier initialized');
});

// Utility function to connect to Gradio server (call this from console if needed)
window.connectToGradio = function (endpoint) {
    if (window.classifier) {
        window.classifier.setGradioEndpoint(endpoint);
        console.log('Connected to Gradio server at:', endpoint);
    }
}; 