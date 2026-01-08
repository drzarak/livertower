# Deployment Guide for Vercel

This guide will help you deploy the Liver Tower AI chatbot to Vercel and configure it for production use at livertower.com.

## Prerequisites

- Vercel account (sign up at https://vercel.com)
- GitHub repository access
- OpenAI API key
- Domain access for livertower.com

## Step 1: Connect to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import your GitHub repository: `drzarak/livertower`
3. Vercel will automatically detect it's a Next.js project

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
cd /path/to/livertower
vercel
```

## Step 2: Configure Environment Variables

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-...`)
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**

## Step 3: Configure Custom Domain

### Add Domain to Vercel

1. In your Vercel project, go to **Settings** → **Domains**
2. Enter `livertower.com`
3. Click **Add**
4. Also add `www.livertower.com` (recommended)

### Update DNS Records

Vercel will provide DNS configuration instructions. Update your domain's DNS settings:

**For livertower.com:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**For www.livertower.com:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Note**: DNS changes may take up to 48 hours to propagate.

## Step 4: Verify Deployment

1. Wait for the deployment to complete (usually 1-2 minutes)
2. Visit your Vercel deployment URL
3. Test the chat interface
4. Verify the appointment information section
5. Check mobile responsiveness

## Step 5: SSL Configuration

Vercel automatically provisions SSL certificates for your domain:
- SSL certificates are generated via Let's Encrypt
- HTTPS is enforced automatically
- Certificates auto-renew before expiration

## Step 6: Performance Optimization

### Enable Edge Functions (Optional)

For better global performance:
1. The API routes are already configured to work with Vercel's Edge Network
2. No additional configuration needed

### Enable Analytics (Optional)

1. Go to **Analytics** tab in Vercel Dashboard
2. Enable **Vercel Analytics** for visitor insights
3. Enable **Web Vitals** for performance monitoring

## Step 7: SEO and Indexing

### Submit to Google Search Console

1. Go to https://search.google.com/search-console
2. Add property for `livertower.com`
3. Verify ownership (use DNS verification or HTML file)
4. Submit sitemap (create one using Next.js sitemap generation)

### Enable Crawling

The site is configured to be crawlable:
- robots.txt is properly configured
- Meta tags are SEO-optimized
- OpenGraph tags included
- Mobile-friendly responsive design

## Monitoring and Maintenance

### Check Deployment Logs

1. Go to **Deployments** tab in Vercel Dashboard
2. Click on any deployment to view logs
3. Monitor for errors or issues

### Update Environment Variables

To update the OpenAI API key or add new variables:
1. Go to **Settings** → **Environment Variables**
2. Edit or add variables
3. Redeploy the application (automatic on next git push)

### Rollback Deployments

If needed, you can instantly rollback:
1. Go to **Deployments** tab
2. Find a previous successful deployment
3. Click **⋯** → **Promote to Production**

## Cost Considerations

### Vercel Costs
- **Hobby Plan**: Free for personal projects
- **Pro Plan**: $20/month (recommended for production)
  - Includes custom domains, analytics, and better performance

### OpenAI API Costs
- GPT-4 costs approximately $0.03 per 1K input tokens and $0.06 per 1K output tokens
- Monitor usage at https://platform.openai.com/usage
- Set up usage limits to control costs

## Troubleshooting

### Deployment Fails
- Check build logs in Vercel Dashboard
- Verify all dependencies are in package.json
- Ensure Node.js version compatibility

### API Errors
- Verify OPENAI_API_KEY is set correctly
- Check OpenAI API key has sufficient credits
- Review API route logs in Vercel Functions

### Domain Not Working
- Verify DNS records are configured correctly
- Wait for DNS propagation (up to 48 hours)
- Check domain configuration in Vercel Dashboard

## Security Best Practices

1. **Never commit .env files** - Already configured in .gitignore
2. **Rotate API keys regularly** - Update in Vercel settings
3. **Enable rate limiting** - Consider adding rate limiting to API routes
4. **Monitor usage** - Set up alerts for unusual activity
5. **Keep dependencies updated** - Run `npm audit` regularly

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs

For application issues:
- Contact: +92-300-3580709
- GitHub Issues: https://github.com/drzarak/livertower/issues
