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

## Adding Project Images

### Structure for Project Images

Create the following folder structure in the `public` folder:

```
public/
├── cv.pdf
├── entrepreneurship-league-logo.png  ← Logo for Entrepreneurship League
└── projects/
    ├── scientific-initiation/
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   └── ... (add as many images as you want)
    ├── ifome/
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   └── ... (add as many images as you want)
    ├── autonomous-perception/
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   └── ... (add as many images as you want)
    └── rubiks-cube/
        ├── image1.jpg
        ├── image2.jpg
        └── ... (add as many images as you want)
```

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

