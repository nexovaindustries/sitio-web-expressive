from PIL import Image

# Open the original logo
img = Image.open('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/logo.png')
img = img.convert('RGBA')

# The logo is 1412x374. The icon is on the far left.
# Let's crop the left square (e.g., 374x374 or maybe a bit wider).
# We'll just grab the left part.
box = (0, 0, 374, 374)
icon = img.crop(box)

icon.save('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/logo-icon.png', 'PNG')
