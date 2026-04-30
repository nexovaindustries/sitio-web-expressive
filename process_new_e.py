from PIL import Image

def process_e():
    img = Image.open('E.jpeg')
    img = img.convert('RGBA')
    datas = img.getdata()

    newData = []
    # Target gold color: #D4AF37 -> (212, 175, 55)
    for item in datas:
        r, g, b, a = item
        # Calculate luminance (0 to 255)
        luminance = (r * 0.299 + g * 0.587 + b * 0.114)
        
        # White background -> high luminance -> transparent
        # Black text -> low luminance -> opaque gold
        
        # Invert luminance to get alpha: white (255) -> alpha 0, black (0) -> alpha 255
        # Add some clamping
        alpha = 255 - int(luminance)
        
        if alpha < 100: # Stricter threshold to remove JPEG artifacts
            newData.append((0, 0, 0, 0))
        else:
            # Map [100, 255] -> [0, 255] for smooth anti-aliasing
            new_alpha = int((alpha - 100) * (255 / 155))
            newData.append((212, 175, 55, new_alpha))

    img.putdata(newData)
    
    # Save over the existing ornamental-e-transparent.png
    img.save('public/ornamental-e-transparent.png', 'PNG')
    print("Saved as public/ornamental-e-transparent.png")

if __name__ == '__main__':
    process_e()
