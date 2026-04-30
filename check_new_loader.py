from PIL import Image
import os

img_path = "Gemini_Generated_Image_vonvt4vonvt4vonv.png"
if os.path.exists(img_path):
    with Image.open(img_path) as img:
        print(f"Size: {img.size}, Mode: {img.mode}, Format: {img.format}")
        if img.mode == 'RGBA':
            print("Has alpha channel")
        else:
            print("No alpha channel - might need background removal")
else:
    print("File not found")
