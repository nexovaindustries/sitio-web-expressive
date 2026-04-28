from PIL import Image

img = Image.open('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/ornamental-e.png')
img = img.convert('RGBA')
datas = img.getdata()

newData = []
for item in datas:
    # If the pixel is very dark, make it transparent
    if item[0] < 20 and item[1] < 20 and item[2] < 20:
        newData.append((0, 0, 0, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/ornamental-e.png', 'PNG')
