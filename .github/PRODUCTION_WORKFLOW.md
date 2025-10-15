# Production Branch Workflow Guide

## 🌟 Branch Strategy Overview

This repository uses a **three-branch strategy** for better control over deployments:

```
develop → main → production
   ↓        ↓         ↓
 Feature  Staging  Production
Testing   Testing   Live Site
```

## 🔄 How It Works

### **Branch Purposes:**
- **`develop`** - Active development, feature integration
- **`main`** - Staging environment, pre-production testing
- **`production`** - Live production site, stable releases only

### **Deployment Flow:**
1. **Development** → Push to `develop` branch (runs tests only)
2. **Staging** → Merge `develop` → `main` (deploys to staging environment)
3. **Production** → Merge `main` → `production` (deploys to live site)

## 🚀 Setting Up the Production Branch

### 1. Create the Production Branch
```bash
# Create and push the production branch
git checkout main
git checkout -b production
git push -u origin production
```

### 2. Set Up Branch Protection Rules

Go to **GitHub Repository → Settings → Branches** and add these rules:

#### **For `main` branch:**
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Require review from code owners
- ✅ Dismiss stale PR approvals when new commits are pushed

#### **For `production` branch:**
- ✅ Require a pull request before merging
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging
- ✅ Require review from code owners (2+ reviewers recommended)
- ✅ Restrict pushes to specific people/teams
- ✅ Require linear history

### 3. Required GitHub Environments

Create these environments in **Settings → Environments**:

#### **staging** environment:
- Environment protection rules: None (auto-deploy from main)
- Environment secrets: Staging database URL, staging API keys

#### **production** environment:
- Environment protection rules: Required reviewers (2+ people)
- Environment secrets: Production database URL, production API keys
- Wait timer: 5 minutes (optional, for final review)

## 📋 Workflow Behavior

### **When you push to `develop`:**
- ✅ Runs linting and tests
- ✅ Builds application
- ❌ No deployment

### **When you push to `main`:**
- ✅ Runs linting and tests
- ✅ Builds application
- ✅ Deploys to **staging environment**

### **When you push to `production`:**
- ✅ Runs linting and tests
- ✅ Builds application
- ✅ Deploys to **production environment**
- ✅ Runs database migrations
- ⏳ Requires manual approval (if configured)

### **When you create a PR:**
- ✅ Runs all tests
- ✅ Creates preview deployment
- ✅ Must pass all checks before merge

## 🔧 Daily Workflow Commands

### **Feature Development:**
```bash
# Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/my-new-feature

# Work on feature, then...
git add .
git commit -m "Add new feature"
git push origin feature/my-new-feature

# Create PR to develop branch
```

### **Deploy to Staging:**
```bash
# Merge develop to main (via PR or direct)
git checkout main
git pull origin main
git merge develop
git push origin main
# → Automatically deploys to staging
```

### **Deploy to Production:**
```bash
# After testing on staging, merge main to production
git checkout production
git pull origin production
git merge main
git push origin production
# → Requires approval, then deploys to production
```

## ⚡ Quick Commands

```bash
# Check current branch
git branch

# Switch branches
git checkout main
git checkout production
git checkout develop

# Sync with remote
git pull origin main
git pull origin production

# View deployment status
git log --oneline -5
```

## 🛡️ Safety Features

- **Automatic Testing** - All code is tested before deployment
- **Staging Environment** - Test changes before production
- **Manual Approval** - Production deploys require human review
- **Rollback Ready** - Easy to revert to previous production version
- **Branch Protection** - Prevents accidental direct pushes

## 🚨 Emergency Procedures

### **Quick Hotfix:**
```bash
# Create hotfix from production
git checkout production
git checkout -b hotfix/urgent-fix

# Make fix, test, then...
git add .
git commit -m "Fix critical issue"

# Deploy directly to production (emergency only)
git checkout production
git merge hotfix/urgent-fix
git push origin production

# Don't forget to merge back to main and develop!
```

### **Rollback Production:**
```bash
# Find last good commit
git log --oneline

# Reset to previous version
git checkout production
git reset --hard <good-commit-hash>
git push --force-with-lease origin production
```

## 📊 Environment URLs

Once set up, you'll have:
- **Production**: `https://your-app.vercel.app`
- **Staging**: `https://your-app-staging.vercel.app`
- **PR Previews**: `https://your-app-git-<branch>.vercel.app`

This setup gives you full control over your deployments while maintaining safety and review processes! 🎯