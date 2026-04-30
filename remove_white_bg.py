from PIL import Image

img_path = "public/loader.png"
output_path = "public/loader.png"

img = Image.open(img_path).convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # item is (R, G, B, A)
    # Aggressive white removal: if any channel is > 200 and they are close to each other
    r, g, b, a = item
    if a == 0:
        newData.append(item)
        continue
        
    # If it's very bright (white-ish)
    if r > 200 and g > 200 and b > 200:
        newData.append((0, 0, 0, 0))
    # If it's a light gray/white border
    elif r > 180 and abs(r-g) < 20 and abs(g-b) < 20:
         newData.append((0, 0, 0, 0))
    else:
        newData.append(item)

img.putdata(newData)
img.save(output_path, "PNG")

print(f"Aggressive background removal done. Overwritten {output_path}")
