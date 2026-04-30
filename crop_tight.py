from PIL import Image

def crop_tight():
    img = Image.open('public/ornamental-e-transparent.png')
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        img.save('public/ornamental-e-transparent.png', 'PNG')
        print(f"Cropped to bounding box: {bbox}, new size: {img.size}")
    else:
        print("No bounding box found (image is completely transparent?)")

if __name__ == '__main__':
    crop_tight()
