# My Production Branch Setup (And Why I Finally Did It)

Okay, so I'll be honest - I was one of those developers who just pushed everything straight to main and hoped for the best. 😬 But after my blog went down a few times because I pushed buggy code directly to production, I realized I needed to get my act together.

## What I Learned (The Hard Way)

Turns out there's a reason people use different branches for different environments. Who knew? 🤷‍♂️

Here's the simple approach I settled on:

```
main → production
  ↓         ↓
Staging   Live Site
```

I kept it simple because honestly, I'm the only one working on this project and I don't need anything too complex.

## How My Branches Work Now

### **`main` Branch - Where I Break Things**
This is my playground. Every commit here gets automatically deployed to a staging environment, which means:
- I can test features without affecting the live site
- Friends can check out new stuff before it goes public
- I catch embarrassing bugs before real users see them

### **`production` Branch - The "Please Don't Break" Zone**  
This is what actually powers my live blog. Nothing gets here unless I'm confident it won't explode:
- Only tested, working code makes it here
- I manually control when updates go live
- My safety net when I inevitably mess something up

## My Actual Workflow

Here's what I do day-to-day:

1. **Code on `main`** - Build features, fix bugs, experiment
2. **Test automatically** - Staging site updates so I can see if it works
3. **Merge when ready** - Move stable code to `production` 
4. **Deploy manually** - Update the live site when I choose

## Setting This Up (If You Want To Copy Me)

### Step 1: Create the Production Branch
```bash
# I started from my main branch
git checkout main
git checkout -b production
git push -u origin production
```

### Step 2: GitHub Branch Protection (Optional But Smart)

I went to my repo settings and added some rules to prevent myself from doing stupid things:

**For the `main` branch:**
- Make sure tests pass before merging (saved me multiple times)
- Keep the branch up to date
- Require pull requests (even though it's just me... good habits!)

**For the `production` branch:**
- Same protections but stricter
- Only allow merges from `main`
- Double-check everything passes tests
### Step 3: Setting Up GitHub Environments (If You're Feeling Fancy)

Since it's just me working on this project, I kept the GitHub environment setup pretty simple. But if you want to get fancy, you can create environments in your repo settings:

**For staging**: Let it auto-deploy from `main` - no restrictions needed
**For production**: Add whatever protection makes you sleep better at night

## What Happens When I Push Code

### **Push to `main`:**
- Tests run automatically (TypeScript checks, linting, build test)
- If everything passes, it deploys to my staging site
- I get to see if I broke anything before it goes live

### **Push to `production`:**
- Same tests run (gotta be sure!)
- But nothing deploys automatically
- I have full control over when updates go live

## My Daily Commands (The Ones I Actually Use)

```bash
# See what branch I'm on (I forget constantly)
git branch

# Switch to development mode
git checkout main

# Switch to stable mode
git checkout production

# Make something live (after testing on main)
git checkout production
git merge main
git push origin production
```

## What This Setup Saves Me From

Before I had this workflow, I:
- Pushed broken code to production more times than I care to admit
- Had no easy way to test changes properly
- Stressed about every deployment
- Lost sleep wondering if my site was working

Now I can:
- Test everything thoroughly on staging first
- Deploy with confidence
- Actually sleep peacefully 😴
- Rollback easily if something does go wrong

## Emergency "Oh Crap" Procedures

### When I Need to Fix Something ASAP:
```bash
# Fix it directly on production branch (emergency only!)
git checkout production
# Make the fix...
git add .
git commit -m "Fix urgent issue - site was down"
git push origin production

# Then remember to merge back to main so I don't lose the fix
git checkout main
git merge production
git push origin main
```

### When I Need to Undo Everything:
```bash
# Find the last working version
git log --oneline

# Go back to when things worked
git checkout production
git reset --hard abc1234  # (that good commit hash)
git push --force-with-lease origin production
```

## The Bottom Line

This might seem like overkill for a personal blog, but honestly? It's made my development so much more relaxed. I can experiment freely, test properly, and deploy confidently. 

Plus, now when I work on client projects, I already have good habits ingrained. Win-win! 🎉

---

*P.S. - If you're starting your own project, just copy this setup. Future you will thank present you for not being lazy with the workflow.*