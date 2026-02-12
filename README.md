# Valentine's Proposal Page - Instructions

## 📸 Adding Your Photos & Videos

I've created a beautiful **Pinterest-style photo gallery** with slideshow functionality! Here's how to add your media:

### Step 1: Add Your Files
1. Navigate to: `/Users/liban/Desktop/Sheks/valentine-proposal/public/memories/`
2. Add your photos (`.jpg`, `.png`, `.jpeg`) and videos (`.mp4`, `.mov`) to this folder
3. Name them something simple like: `photo1.jpg`, `photo2.jpg`, `video1.mp4`, etc.

### Step 2: Update the Media List
Open `/Users/liban/Desktop/Sheks/valentine-proposal/src/components/MemoryLane.jsx` and update the `mediaItems` array (lines 8-15):

```javascript
const mediaItems = [
  { src: '/memories/your-photo-1.jpg', type: 'image', caption: 'Your caption here 💕' },
  { src: '/memories/your-photo-2.jpg', type: 'image', caption: 'Another sweet moment 😄' },
  { src: '/memories/your-video.mp4', type: 'video', caption: 'Our video together 🎥' },
  // Add more items...
];
```

### Features:
✨ **Pinterest-style masonry grid** - Automatically adjusts layout
📱 **Fully responsive** - Looks great on mobile and desktop
🎬 **Video support** - Videos auto-play on hover in grid view
🔍 **Slideshow mode** - Click any image to view full-screen
⌨️ **Keyboard navigation** - Use arrow keys (←/→) and ESC in slideshow
💝 **Beautiful captions** - Add personal messages to each memory

### Current Flow:
1. **Hero section** - "Hey Sheks ❤️"
2. **Question section** - "Will You Be My Valentine?"
   - NO button runs away
   - YES button grows bigger each time
3. **Celebration** - Confetti + heartfelt message
4. **Memory Lane** - Your beautiful photo gallery! 📸

---

## 🚀 Running the App

```bash
cd /Users/liban/Desktop/Sheks/valentine-proposal
npm run dev
```

Then open: http://localhost:5173/

---

## 🎨 What's Working:

✅ Beautiful gradient backgrounds with organic blob shapes
✅ Subtle floating heart particles
✅ Hero section with animated heart
✅ Interactive YES/NO buttons with hilarious growing YES
✅ Confetti celebration
✅ Pinterest-style photo gallery with slideshow
✅ Video support
✅ Fully responsive design
✅ Custom fonts and animations

Enjoy! 💕
