# 🚀 Deployment Guide

## Current Status ✅
- **Vercel Project**: `techverse-blog`
- **Production URL**: https://techverse-blog-9p4601gvf-aryan-singh-bishts-projects.vercel.app
- **Org ID**: `team_xlY9DYA0YU5CITuH6Jv8Adxl`
- **Project ID**: `prj_AtQ1BxWSJnO4VGaRC0qLkBaSJXU7`

## GitHub Secrets Setup 🔐

Add these secrets to your GitHub repository: **Settings > Secrets and variables > Actions**

### Vercel Configuration
```
VERCEL_TOKEN = [Get from https://vercel.com/account/tokens]
VERCEL_ORG_ID = team_xlY9DYA0YU5CITuH6Jv8Adxl
VERCEL_PROJECT_ID = prj_AtQ1BxWSJnO4VGaRC0qLkBaSJXU7
```

### Application Environment Variables
```
DATABASE_URL = postgresql://neondb_owner:npg_M6SFUasn2LpC@ep-dawn-moon-adndydkn-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_test_cGV0LWxvYnN0ZXItMzIuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY = sk_test_nUG6hEzWjeQvSFxxCrbzaDUhHBPmJFLxqFigQ1pD6G
CLOUDINARY_CLOUD_NAME = dwu8a7qqk
CLOUDINARY_API_KEY = 714663167177273
CLOUDINARY_API_SECRET = 53cwxeaaebRM8B8-a0jJYSDbeIs
```

## CI/CD Workflow Features 🔄

### Simple CI (`simple-ci.yml`)
- **Triggers**: Push to `main`, PRs to `main`
- **Steps**: Lint → Test → Build → Deploy to Vercel
- **Best for**: Simple projects with automatic deployment

### Advanced CI/CD (`ci-cd.yml`)
- **Triggers**: Multiple branches (main, develop, production)
- **Features**: 
  - Separate staging and production deployments
  - Preview deployments for PRs
  - Database migrations
  - Multi-environment support

## Fixed Issues ✅
1. **Dependencies**: Removed incompatible React packages
2. **Build Process**: Added Prisma generation to build
3. **Environment Variables**: Added all required Clerk navigation URLs
4. **Deployment**: Configured proper Vercel integration

## Next Steps 📝
1. Add GitHub secrets (listed above)
2. Test the workflow by pushing to main branch
3. Verify deployment works automatically
4. Set up environment variables in Vercel dashboard if not using CI/CD

## Manual Deployment Commands
```bash
# Deploy to production
vercel --prod

# Deploy with specific environment
vercel --prod --env DATABASE_URL=your_db_url

# Check deployment status
vercel ls
```