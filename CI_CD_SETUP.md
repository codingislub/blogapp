# 🔄 CI/CD Setup Guide

## 📋 **Required GitHub Secrets**

Go to your GitHub repository: https://github.com/codingislub/blogapp/settings/secrets/actions

### **1. Vercel Configuration Secrets**
```bash
# Get your Vercel token from: https://vercel.com/account/tokens
VERCEL_TOKEN = [Your Vercel Token]

# From your .vercel/project.json file:
VERCEL_ORG_ID = team_xlY9DYA0YU5CITuH6Jv8Adxl
VERCEL_PROJECT_ID = prj_AtQ1BxWSJnO4VGaRC0qLkBaSJXU7
```

### **2. Application Environment Variables**
```bash
# Database (Neon PostgreSQL)
DATABASE_URL = postgresql://neondb_owner:npg_M6SFUasn2LpC@ep-dawn-moon-adndydkn-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_test_cGV0LWxvYnN0ZXItMzIuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY = sk_test_nUG6hEzWjeQvSFxxCrbzaDUhHBPmJFLxqFigQ1pD6G

# Cloudinary Image Upload
CLOUDINARY_CLOUD_NAME = dwu8a7qqk
CLOUDINARY_API_KEY = 714663167177273
CLOUDINARY_API_SECRET = 53cwxeaaebRM8B8-a0jJYSDbeIs
```

## 🔧 **CI/CD Workflow Features**

### **Simple CI/CD (`simple-ci.yml`)**
- ✅ Triggers on push to `main` and PRs
- ✅ Runs tests, lint, type check
- ✅ Builds application 
- ✅ Deploys to Vercel automatically

### **Advanced CI/CD (`ci-cd.yml`)**
- ✅ Multi-environment support (staging/production)
- ✅ Preview deployments for PRs
- ✅ Database migrations
- ✅ Artifact uploads

## 🛠️ **Setup Steps**

### Step 1: Get Vercel Token
1. Go to https://vercel.com/account/tokens
2. Click "Create Token"
3. Name it "GitHub Actions"
4. Copy the token

### Step 2: Add GitHub Secrets
1. Go to: https://github.com/codingislub/blogapp/settings/secrets/actions
2. Click "New repository secret"
3. Add each secret from the list above

### Step 3: Test CI/CD
```bash
git add .
git commit -m "feat: setup CI/CD pipeline"
git push origin main
```

### Step 4: Monitor
- Check GitHub Actions tab: https://github.com/codingislub/blogapp/actions
- Check Vercel dashboard: https://vercel.com/dashboard

## 🎯 **What Happens When You Push**

1. **On Push to Main:**
   - Code is checked out
   - Dependencies installed with `--legacy-peer-deps`
   - Linting and type checking
   - Prisma schema validation
   - Application build
   - Deploy to Vercel production

2. **On Pull Request:**
   - Same tests and build
   - Deploy preview to Vercel
   - Comment with preview URL

3. **Environment Variables:**
   - Automatically loaded from GitHub secrets
   - Applied to Vercel deployment

## 🚨 **Troubleshooting**

### Build Fails?
- Check `.npmrc` has `legacy-peer-deps=true`
- Verify all secrets are set correctly
- Check GitHub Actions logs

### Deployment Fails?
- Verify Vercel token has correct permissions
- Check Vercel project ID matches
- Ensure environment variables are set

### Database Issues?
- Verify DATABASE_URL is correct
- Check Neon database is accessible
- Prisma generate should run automatically

## 📱 **Quick Commands**

```bash
# Check CI/CD status
git status

# Trigger deployment
git add . && git commit -m "deploy: update application" && git push

# Check Vercel deployments
vercel ls

# Check environment variables
vercel env ls
```