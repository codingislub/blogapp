# How I Manage My Blog's Code Branches

So here's the thing - I learned the hard way that pushing every little change directly to production is... not great. 😅 

After accidentally breaking my live site a few times while experimenting with new features, I decided to set up a proper branching strategy. Nothing too fancy, just something that lets me test things properly before they go live.

## My Two-Branch Setup

### The `main` Branch - My Testing Ground
This is where I do most of my development work. Every time I push changes here, they automatically get deployed to a staging environment on Vercel. It's perfect for:
- Testing new features before they go live
- Experimenting with UI changes
- Making sure everything works after dependency updates
- Getting feedback from friends before releasing

**Auto-deploys to**: https://techverse-blog-pxjd89wv6-aryan-singh-bishts-projects.vercel.app

### The `production` Branch - The Stable One
This is my "safe space" - only code that I'm 100% confident about makes it here. When I push to this branch, it runs all the tests but doesn't automatically deploy anything. This gives me control over when updates actually go live.
- Rock-solid, tested code only
- Manual deployments when I'm ready
- What I fall back to if something goes wrong

## How My Workflow Actually Works

Here's what my typical development process looks like:

1. **I work on the `main` branch** - Write code, fix bugs, add features
2. **Push and see it live** - The staging site updates automatically so I can test everything
3. **Once I'm happy with it** - Merge those changes into `production`
4. **Deploy manually** - When I'm ready to update the live site

It's not the most complex setup, but it's saved me from embarrassing bugs going live more times than I'd like to admit.

## Quick Commands I Use Daily

```bash
# Switch to my development branch
git checkout main

# Switch to the stable branch  
git checkout production

# When I'm ready to make something live
git checkout production
git merge main
git push origin production
```

## Why This Works for Me

I used to just push everything straight to production (yolo, right?), but that caused some... interesting moments. Now I can:
- Test changes properly before they affect real users
- Experiment freely without worrying about breaking things
- Have a stable fallback if something goes wrong
- Sleep better knowing my live site is reliable

It might seem like overkill for a personal blog, but honestly? It's made my development process so much more relaxed and confident.

---
*Currently on: `production` branch (the safe one!)*