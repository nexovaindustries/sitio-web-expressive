from PIL import Image
import os

images = ["public/img1.jpg", "public/img2.jpg", "public/img3.jpg", "public/img4.jpg", "public/foto1.jpg"]

for img_path in images:
    if os.path.exists(img_path):
        with Image.open(img_path) as img:
            print(f"{img_path}: {img.size} {img.format}")
    else:
        print(f"{img_path} not found")
