# TechVerse Blog 📝

A modern blogging platform for developers. Built with Next.js 15, featuring a beautiful emerald theme and everything you need to share your thoughts with the world.

## ✨ Features

- **Rich Text Editor** - Write beautiful articles with ease
- **Dark Mode** - Easy on the eyes, day or night
- **Image Upload** - Cloudinary integration for fast loading
- **Comments & Likes** - Build community engagement
- **Search** - Find articles quickly
- **Authentication** - Secure login with Clerk
- **Responsive Design** - Looks great on all devices

## 🛠️ Tech Stack

- **Next.js 15** & **TypeScript**
- **Tailwind CSS** with custom emerald theme
- **Prisma** & **PostgreSQL**
- **Clerk** for authentication
- **Cloudinary** for image storage

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/codingislub/blogapp.git
   cd blogapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file: See the env.example

4. **Setup database**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. **Start development**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see your blog!

## 📁 Project Structure

```
src/
├── app/                 # App router pages
├── components/          # Reusable components
├── actions/            # Server actions
└── lib/               # Utilities
```

## 🔑 Getting API Keys

- **Database**: [Neon](https://neon.tech) - Free PostgreSQL
- **Images**: [Cloudinary](https://cloudinary.com) - Free image hosting
- **Auth**: [Clerk](https://clerk.com) - Free authentication

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🚀 Deployment

Deploy easily on [Vercel](https://vercel.com):
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
