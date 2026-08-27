# Fortune Uniforms & Fashion Wears - Website

Official website for **Fortune Uniforms & Fashion Wears** (OEM Manufacturer and bulk supplier of Healthcare, Hospital Scrubs, Doctor Aprons, Sanitation/Safai Mitra, and Corporate Uniforms).

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Option A: Using Git Command Line (Recommended)

1. Open PowerShell or Command Prompt in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial website release for Fortune Uniforms"
   ```
2. Create a new repository on GitHub (e.g. `fortune-uniforms`).
3. Link and push your repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git push -u origin main
   ```
4. **Enable GitHub Pages**:
   - Go to your GitHub Repository -> **Settings** -> **Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, choose `main` and `/ (root)` folder, then click **Save**.
   - Your website will be live in ~1-2 minutes at: `https://<YOUR-USERNAME>.github.io/<REPO-NAME>/`

---

## ⚙️ Customization & Contact Numbers

To update your WhatsApp phone number across the website:
- Open [`js/main.js`](js/main.js)
- Edit `const FUFW_PHONE = "919999999999";` and enter your actual phone number with country code (e.g., `919876543210`).
