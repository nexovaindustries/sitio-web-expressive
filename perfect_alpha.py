from PIL import Image

img = Image.open('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/ornamental-e.png')
img = img.convert('RGBA')
datas = img.getdata()

newData = []
for item in datas:
    r, g, b, a = item
    
    # Calculate luminance
    luminance = (r * 0.299 + g * 0.587 + b * 0.114)
    
    # We want pure black to be completely transparent.
    # The gold parts (high luminance) should be fully opaque (255).
    # We map luminance to alpha. Since gold luminance might be around 100-200, 
    # we can multiply luminance by a factor.
    
    alpha = int(min(255, max(0, (luminance - 10) * 2.5)))
    
    if luminance < 5:
        newData.append((0, 0, 0, 0))
    else:
        # To avoid the "dark halo" on semi-transparent pixels, 
        # we can artificially boost the RGB values of the anti-aliased pixels
        # so they are bright gold, but semi-transparent.
        # We can just use a fixed gold color for the dark pixels so the halo is gold instead of black.
        if luminance < 50:
            newData.append((200, 160, 50, alpha))
        else:
            newData.append((r, g, b, alpha))

img.putdata(newData)
img.save('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/ornamental-e.png', 'PNG')
