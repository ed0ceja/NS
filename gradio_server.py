#!/usr/bin/env python3
"""
Cat vs Dog Classifier - Standalone Gradio Server
Alternative to notebooks/server.ipynb if you have dependency issues
"""

from fastai.vision.all import *
import gradio as gr
import os

def load_model():
    """Load the trained model"""
    model_path = "model.pkl"
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model file '{model_path}' not found. Please train the model first using notebooks/dogs_cats.ipynb")
    
    learn = load_learner(model_path)
    print(f"Model loaded successfully!")
    print(f"Model classes: {learn.dls.vocab}")
    return learn

def predict(img, learn):
    """Predict if image is cat or dog"""
    try:
        # Create PIL image
        img = PILImage.create(img)
        
        # Get prediction
        pred, pred_idx, probs = learn.predict(img)
        
        # Get labels
        labels = learn.dls.vocab
        
        # Create result dictionary
        result = {labels[i]: float(probs[i]) for i in range(len(labels))}
        
        return result
    except Exception as e:
        return {"error": str(e)}

def main():
    """Main function to run the Gradio server"""
    try:
        # Load model
        learn = load_model()
        
        # Create prediction function with model
        def predict_with_model(img):
            return predict(img, learn)
        
        # Create Gradio interface
        interface = gr.Interface(
            fn=predict_with_model,
            inputs=gr.Image(type="pil"),
            outputs=gr.Label(num_top_classes=3),
            title="🐱🐶 Cat vs Dog Classifier",
            description="Upload an image and I'll tell you if it's a cat or a dog!",
            examples=[
                ["data/cat1.png"],
                ["data/dog1.png"],
                ["data/catdog.png"]
            ] if os.path.exists("data") else None
        )
        
        # Launch server
        print("Starting Gradio server...")
        interface.launch(
            share=True,
            server_name="0.0.0.0",
            server_port=7860,
            show_error=True
        )
        
    except Exception as e:
        print(f"Error starting server: {e}")
        print("Please make sure you have:")
        print("1. Trained the model using notebooks/dogs_cats.ipynb")
        print("2. The model.pkl file exists in the current directory")
        print("3. All required packages are installed")

if __name__ == "__main__":
    main() 