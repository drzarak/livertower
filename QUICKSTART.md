# Quick Start Guide - Liver Tower AI Chatbot

This guide will help you get the application running in under 5 minutes.

## Prerequisites
- OpenAI API key (get one at https://platform.openai.com/api-keys)
- Node.js 18+ installed on your system

## Local Development (5 Minutes)

### Step 1: Install Dependencies (1 minute)
```bash
npm install
```

### Step 2: Configure Environment (30 seconds)
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your OpenAI API key
# OPENAI_API_KEY=sk-your-actual-key-here
```

### Step 3: Run Development Server (30 seconds)
```bash
npm run dev
```

### Step 4: Open Browser
Navigate to http://localhost:3000

**That's it!** You should now see the Liver Tower chatbot interface.

---

## Deploy to Vercel (5 Minutes)

### Method 1: Using Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com/new
2. **Import Repository**: Select `drzarak/livertower`
3. **Configure**:
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
4. **Add Environment Variable**:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
5. **Deploy**: Click "Deploy"

Wait 1-2 minutes for deployment to complete.

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts, then add environment variable:
vercel env add OPENAI_API_KEY
# Paste your OpenAI API key when prompted
```

---

## Configure Custom Domain (5 Minutes)

### In Vercel Dashboard:
1. Go to your project
2. Settings → Domains
3. Add `livertower.com`
4. Follow DNS configuration instructions

### Update DNS Records:
Add these records in your domain registrar:

**For root domain:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Note**: DNS changes can take up to 48 hours to propagate.

---

## Testing the Application

### Test Chat Interface:
1. Type a health question: "How can I improve my liver health?"
2. Click send button
3. Wait for AI response

### Test Appointment Section:
1. Scroll down to see "Book Your Consultation"
2. Verify all contact information is displayed
3. Click "Book Appointment" button in header

### Test Mobile View:
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device
4. Verify responsive layout

---

## Troubleshooting

### Build Fails
**Problem**: `npm run build` fails  
**Solution**: Delete node_modules and package-lock.json, then run `npm install` again

### API Key Error
**Problem**: "OpenAI API key is not configured"  
**Solution**: Verify .env file exists and contains `OPENAI_API_KEY=sk-...`

### Chat Not Working
**Problem**: Chat sends but no response  
**Solution**: 
- Check OpenAI API key is valid
- Verify you have credits in your OpenAI account
- Check browser console for errors (F12)

### Images Not Loading
**Problem**: Logo or avatar images broken  
**Solution**: Verify files exist in `public/images/` directory

---

## Important Files

- **`.env`**: Contains your OpenAI API key (never commit this!)
- **`app/api/chat/route.ts`**: OpenAI integration and system prompt
- **`components/ChatInterface.tsx`**: Main chat UI component
- **`app/page.tsx`**: Homepage with chat and appointment info

---

## Monitoring and Costs

### OpenAI Usage:
- Monitor at: https://platform.openai.com/usage
- GPT-4 costs: ~$0.03 per 1K input tokens, ~$0.06 per 1K output tokens
- Estimated: $0.05-0.10 per conversation

### Vercel Usage:
- Free tier: Sufficient for testing and low traffic
- Pro tier ($20/month): Recommended for production

---

## Next Steps After Deployment

1. ✅ Test the live site thoroughly
2. ✅ Submit to Google Search Console for SEO
3. ✅ Set up monitoring/alerts for API usage
4. ✅ Consider adding analytics (Vercel Analytics)
5. ✅ Share the link with stakeholders

---

## Support and Resources

- **Documentation**: See README.md for detailed info
- **Deployment Guide**: See DEPLOYMENT.md for Vercel details
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **OpenAI Docs**: https://platform.openai.com/docs

---

## Emergency Contacts

For urgent medical inquiries:
- **Phone**: +92-300-3580709
- **WhatsApp**: +92-300-8380707, +92-300-3580709, +92-300-2087778

---

**Congratulations!** Your Liver Tower AI Chatbot is now ready to serve patients. 🎉
