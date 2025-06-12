# Video Assets for Sequoia Boat Rentals

This folder contains video assets used throughout the Sequoia Boat Rentals website.

## Required Videos

1. **`lake-video-background.mp4`**
   - Primary hero background video showing inflatable boats on Kamloops lakes
   - Resolution: 1920x1080px (Full HD)
   - Duration: 20-30 seconds in a seamless loop
   - Format: MP4 with H.264 codec
   - File size: Optimized for web (5-10MB maximum)
   - Content should include:
     - Scenic views of boats gliding across calm lake waters
     - Mountains in the background
     - Natural lighting and vibrant colors
     - Slow, gentle camera movement

## Video Requirements

- **Quality**: All videos should be high quality but optimized for web performance
- **Aspect Ratio**: 16:9 widescreen
- **Encoding**: Use H.264 codec for maximum compatibility
- **Autoplay Compatibility**: Videos must work with autoplay (no audio or muted audio)
- **Loop Points**: Videos should be edited to allow seamless looping without noticeable cuts

## Tips for Video Selection/Creation

1. **Smooth Motion**: Choose videos with smooth, slow camera movement
2. **Contrast**: Ensure good contrast for text overlay visibility
3. **Focal Point**: Central subject (boats) should be clearly visible
4. **Seamless Loop**: Edit videos to create perfect loop points
5. **Compression**: Use tools like Handbrake to optimize file size

## Video Background Usage

To enable video backgrounds on the homepage, add the `video-background="true"` attribute to the hero component:

```html
<hero-component video-background="true"></hero-component>
```

The component will automatically fall back to static images if the video fails to load or if the user's device doesn't support background videos. 