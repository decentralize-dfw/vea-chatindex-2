<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1JLXjHGZRTTeAmqYi00c7hIvJCQ0PRzrc

## Run Locally

**Prerequisites:** Node.js (v18 or higher recommended)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. Set your `GEMINI_API_KEY` in the `.env` file:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```
   Get your API key from: https://makersuite.google.com/app/apikey

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

## Build for Production

Build the app for deployment:
```bash
npm run build
```

The built files will be in the `dist` folder.

Preview the production build locally:
```bash
npm run preview
```

## Deploy to GitHub Pages

1. Build the app:
   ```bash
   npm run build
   ```

2. The `dist` folder contains all the files needed for deployment

3. **Important:** Make sure to set the `GEMINI_API_KEY` environment variable in your deployment platform's settings:
   - For GitHub Pages with Actions: Add it as a secret
   - For Vercel/Netlify: Add it in the environment variables section
   - For other platforms: Check their documentation for setting environment variables

## Troubleshooting

### White Screen Issue
If you see a white screen after deployment:
1. Check browser console for errors (F12 → Console)
2. Verify that `GEMINI_API_KEY` is properly set in your environment
3. Ensure all files in `dist` folder are properly uploaded
4. Check that your hosting platform supports single-page applications (SPA)

### API Key Not Working
- Make sure the API key is valid and not expired
- Verify the key has the correct permissions for Gemini API
- Check that the environment variable name matches: `GEMINI_API_KEY`
