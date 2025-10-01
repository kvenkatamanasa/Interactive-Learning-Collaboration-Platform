# 🚀 Git & Vercel Deployment Steps

1. **Initialize your repository (if not already done):**
   ```bash
   git remote remove origin
   git branch -M main
   git add .
   git commit -m "Initial commit: Next.js + Tailwind + shadcn/ui dashboard"
   ```

2. **Connect to GitHub:**
   ```bash
   git remote add origin https://github.com/kvenkatamanasa/my-vercel-app.git
   ```

3. **Sync with remote (if histories are unrelated):**
   ```bash
   git pull origin main --allow-unrelated-histories
   ```
   
4. **Push your code:**
   ```bash
   git push -u origin main
   ```
   
5. **Deploy via Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - Import your GitHub repo (`my-vercel-app`).
   - Configure build settings if needed (`npm run build`, output: `.next`).
   - Set environment variables if required.
   - Click **Deploy**!
