#!/bin/bash

# 🔄 CI/CD Setup Verification Script

echo "🚀 Verifying CI/CD Setup for BlogApp"
echo "======================================"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

echo "✅ Git repository detected"

# Check for required files
echo ""
echo "📁 Checking required files..."

required_files=(".npmrc" "vercel.json" ".github/workflows/simple-ci.yml" "package.json")

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check package.json scripts
echo ""
echo "📦 Checking package.json scripts..."

if grep -q "prisma generate && next build" package.json; then
    echo "✅ Build script includes Prisma generation"
else
    echo "❌ Build script needs Prisma generation"
fi

if grep -q "postinstall.*prisma generate" package.json; then
    echo "✅ Postinstall script includes Prisma generation"
else
    echo "❌ Postinstall script needs Prisma generation"
fi

# Check .npmrc
echo ""
echo "🔧 Checking .npmrc configuration..."

if [ -f ".npmrc" ] && grep -q "legacy-peer-deps=true" .npmrc; then
    echo "✅ .npmrc configured for legacy peer deps"
else
    echo "❌ .npmrc needs legacy-peer-deps=true"
fi

# Check Vercel configuration
echo ""
echo "🌐 Checking Vercel configuration..."

if [ -f ".vercel/project.json" ]; then
    echo "✅ Vercel project configured"
    echo "   Project ID: $(cat .vercel/project.json | grep -o '"projectId":"[^"]*"' | cut -d'"' -f4)"
    echo "   Org ID: $(cat .vercel/project.json | grep -o '"orgId":"[^"]*"' | cut -d'"' -f4)"
else
    echo "❌ Vercel project not configured"
fi

# Check GitHub workflows
echo ""
echo "⚙️ Checking GitHub workflows..."

if [ -f ".github/workflows/simple-ci.yml" ]; then
    echo "✅ Simple CI workflow exists"
    if grep -q "legacy-peer-deps" .github/workflows/simple-ci.yml; then
        echo "✅ Workflow configured for legacy peer deps"
    else
        echo "❌ Workflow needs legacy peer deps configuration"
    fi
else
    echo "❌ Simple CI workflow missing"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Get Vercel token: https://vercel.com/account/tokens"
echo "2. Add GitHub secrets: https://github.com/codingislub/blogapp/settings/secrets/actions"
echo "3. Test by pushing to main branch"
echo ""
echo "🎯 Required GitHub Secrets:"
echo "   - VERCEL_TOKEN"
echo "   - VERCEL_ORG_ID"
echo "   - VERCEL_PROJECT_ID"
echo "   - DATABASE_URL"
echo "   - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"
echo "   - CLERK_SECRET_KEY"
echo "   - CLOUDINARY_CLOUD_NAME"
echo "   - CLOUDINARY_API_KEY"
echo "   - CLOUDINARY_API_SECRET"