from PIL import Image

# Open the original logo
img = Image.open('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/logo.png')
img = img.convert('RGBA')

# The logo contains the E on the left side, right after the face icon.
# Let's crop just the "E". We might need to guess the coordinates or find them.
# Logo size is unknown, let's get the bounding box of the E.
# Let's just crop a proportion.
width, height = img.size
print(f"Original size: {width}x{height}")

# We will save the left half of the logo to see where the E is.
img.save('C:/Users/franc/.gemini/antigravity/scratch/sitio-web-expressive/public/logo_debug.png')
