# How to Add Files to Your Portfolio

## Adding Your CV/Resume (PDF)

To make the "Download CV (PDF)" button work, follow these steps:

1. **Create the `public` folder** (if it doesn't exist):
   - In the root directory of your project, create a folder named `public`
   - This folder is where Next.js serves static files

2. **Add your CV file**:
   - Place your PDF resume file in the `public` folder
   - Name it exactly `cv.pdf`
   - The file structure should be:
     ```
     Portfolio1/
     ├── public/
     │   └── cv.pdf  ← Your resume goes here
     ├── app/
     ├── ...
     ```

3. **That's it!** The button will now work and download your CV when clicked.

**Note**: The button is already configured to link to `/cv.pdf`, which Next.js will serve from the `public` folder.

---

## Adding Images

### Structure for All Images

Create the following folder structure in the `public` folder:

```
public/
├── cv.pdf
├── profile-photo.jpg              ← Your personal photo (About Me section)
├── unicamp-logo.png               ← Unicamp logo (About Me section)
├── entrepreneurship-league-logo.png  ← Logo for Entrepreneurship League
├── projects/
│   ├── scientific-initiation/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── ... (add as many images as you want)
│   ├── ifome/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── ... (add as many images as you want)
│   ├── autonomous-perception/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── ... (add as many images as you want)
│   └── rubiks-cube/
│       ├── image1.jpg
│       ├── image2.jpg
│       └── ... (add as many images as you want)
└── awards/
    ├── super-liga-x.jpg           ← Super Liga X competition image
    └── robocar-race.jpg           ← Robocar Race competition image
```

### About Me Section Images

1. **Profile Photo** (`profile-photo.jpg`):
   - Place in the `public` folder
   - Recommended: Square or portrait orientation
   - Recommended size: 800x800px or larger
   - Will be displayed as a circular image

2. **Unicamp Logo** (`unicamp-logo.png`):
   - Place in the `public` folder
   - Recommended: PNG format with transparency
   - Recommended size: 200x200px or similar

### Awards Section Images

1. **Super Liga X** (`awards/super-liga-x.jpg`):
   - Create the `awards` folder in `public` if it doesn't exist
   - Add your competition photo here

2. **Robocar Race** (`awards/robocar-race.jpg`):
   - Add your competition photo in the `awards` folder

### How to Add More Images

1. **For each project**, add your images to the respective folder in `public/projects/`
2. **To add more images**, duplicate the image `<div>` in `app/page.tsx` and increment the image number:
   ```tsx
   <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
     <Image
       src="/projects/scientific-initiation/image3.jpg"  // Change the number
       alt="Scientific Initiation Project Image 3"      // Update the alt text
       fill
       className="object-cover"
     />
   </div>
   ```

3. **Supported image formats**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

### Entrepreneurship League Logo

- Place your logo file in the `public` folder
- Name it `entrepreneurship-league-logo.png` (or `.jpg` if needed)
- Update the `src` path in the code if you use a different filename

### Editing About Me Description

To edit the personal description in the About Me section:
1. Open `app/page.tsx`
2. Find the section with id "about"
3. Look for the paragraph inside the description div
4. Replace the placeholder text with your personal description

---

## Image Recommendations

- **Recommended size**: 1200x800px or similar aspect ratio (16:9 or 3:2)
- **File size**: Keep images under 500KB for fast loading
- **Format**: Use JPG for photos, PNG for logos with transparency

---

## Testing

After adding files:
1. Restart your development server (`npm run dev`)
2. Visit `http://localhost:3000`
3. Check that images load correctly
4. Test the CV download button

