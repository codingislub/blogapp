# TechVerse Blog

Hey there! 👋 Welcome to my personal blog project. I built this as a full-stack blogging platform where I share my thoughts on tech, coding, and whatever else comes to mind.

## What's This About?

This is basically my corner of the internet where I write about:
- Web development tips and tricks
- New technologies I'm exploring
- Coding challenges I've faced
- Random tech thoughts that pop into my head

I wanted something more personal than Medium or Dev.to, so I decided to build my own platform from scratch.

## The Tech Stack

I chose modern tools that I actually enjoy working with:

- **Next.js 15** - Because React Server Components are pretty amazing
- **TypeScript** - Helps me catch silly mistakes before they become bugs
- **Prisma** - Makes database stuff way less painful
- **PostgreSQL** - Running on Neon because they're fast and reliable
- **Clerk** - Authentication that just works without the headache
- **Tailwind CSS** - I can style things quickly without writing custom CSS
- **Cloudinary** - Image uploads and optimization handled for me

## Getting Started

Want to run this locally? Here's what you need to do:

### 1. Clone and Install
```bash
git clone https://github.com/codingislub/blogapp.git
cd blogapp
npm install
```

### 2. Environment Setup
Create a `.env.local` file with these variables:
```env
# Database
DATABASE_URL="your-neon-postgres-url"

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."

# Cloudinary (for image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

### 3. Database Setup
```bash
npx prisma migrate dev
npx prisma generate
```

### 4. Run the Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) and you should see the blog!

## What Can You Do Here?

- **Read articles** - Browse through all my posts
- **Search content** - Find specific topics you're interested in  
- **Create an account** - Sign up to like posts and leave comments
- **Write comments** - Share your thoughts on articles
- **Like articles** - Show appreciation for content you enjoyed

If you're a registered user, you can interact with the content. If you're me (the admin), you get extra privileges to create, edit, and manage articles through the dashboard.

## How I Deploy This

I've got a pretty smooth deployment setup:

- **Main branch** - Automatically deploys to Vercel when I push changes
- **Production branch** - My stable release branch for important updates
- **GitHub Actions** - Runs tests and handles deployments

The live site is running at: https://techverse-blog-pxjd89wv6-aryan-singh-bishts-projects.vercel.app

## Project Structure

Here's how I organized everything:

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── actions/            # Server actions for data mutations
└── lib/                # Utility functions and configs

prisma/                 # Database schema and migrations
.github/workflows/      # CI/CD pipeline configs
```

## Want to Contribute?

This is primarily my personal blog, but if you spot a bug or have a suggestion, feel free to:
1. Open an issue describing what you found
2. Fork the repo and create a pull request
3. Just reach out to me directly

## License

This project is open source under the MIT License. Feel free to use any code that helps you build your own blog!

---

Built with ❤️ by a developer who just wants to share knowledge and maybe help someone learn something new.