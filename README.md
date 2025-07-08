# 📝 GitHub Blog — Markdown-powered Blog with GitHub Issues

A modern blog application built with **React + TypeScript** where every post is actually a **GitHub Issue**. This project uses the GitHub API to fetch and render content directly from issues of a public repository, making it easy to write and manage content in Markdown.

Users can browse blog posts, view details, and read rich formatted content — all powered by GitHub issues.

> 💡 Anyone with write access to the linked GitHub repository can post content by simply opening a new issue.

---

## 🌐 Live Demo

[![Live Preview](https://img.shields.io/badge/Live%20Preview-Click%20Here-blue?style=for-the-badge)](https://ithauront.github.io/githubBlog)

Or access directly:  
🔗 https://ithauront.github.io/githubBlog

---

## 🚀 Features

- 📄 List blog posts via GitHub issues
- 🕵️‍♀️ Search posts using the GitHub search API
- 🧾 View full content with Markdown rendering
- 🧠 Code block syntax highlighting (`react-syntax-highlighter`)
- ⏱ Relative timestamps using `date-fns`
- ⚙️ Optimized with `use-context-selector` and `react-hook-form`

---

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Vite** for fast dev experience
- **React Router DOM** with `BrowserRouter`
- **Styled Components** for styling
- **React Markdown** for rendering Markdown
- **React Syntax Highlighter** with Prism theme
- **Zod** for validation
- **GitHub REST API** (no backend required)

---

## ⚙️ How It Works

Each blog post is an **Issue** on the linked public GitHub repository.  
The app fetches the list of issues via:
```bash
https://api.github.com/repos/USERNAME/REPO_NAME/issues
```

When clicking a post, the full content is rendered from the issue body, with proper Markdown and syntax highlighting.

---

## 👨‍💻 Running Locally

You can run the app locally and link it to **your own GitHub repo**:

```bash
# 1. Clone the repo
git clone https://github.com/ithauront/githubBlog.git

# 2. Navigate into the project
cd githubBlog

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```
Then, update the repository reference in:

``` src/context/contextIssues.ts ```


```bash
# Replace this with your own public repo
axios.get('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/issues')
```
⚠️ Make sure your repo is public or authenticated requests will be required.

## 🧠 What I Practiced

  * Using GitHub as a CMS

  * Markdown rendering in React

  * Syntax highlighting with Prism

  * Context and custom hooks

  * Form search with react-hook-form

  * Deploying Vite + React + Router on GitHub Pages

  * API integration without backend
