# Portfolio

A modern and responsive **Portfolio Website** built with **Next.js, Express.js, Prisma and Tailwind CSS**.  
This project showcases personal projects, blogs, and an "About Me" section, with a secure **owner-only dashboard** for managing content.  

---

## Live Demo

- **Frontend:** [Live Link](https://mahdi-portfolio-nine.vercel.app)  
- **Backend API:** [Live Link](https://portfolio-five-tan-scgkk4cx50.vercel.app)  

---

## Project Overview

This project is designed to be both **public-facing (blogs, projects, about me)** and **owner-restricted (dashboard for content management)**.  

###  Core Features
- **Authentication & Authorization**
  - Secure login system using JWT + bcrypt.
  - Owner-only dashboard access.
- **Dashboard**
  - Manage blogs and projects in one place.
- **Blog Management**
  - Create, Read, Update, Delete (CRUD) blogs (owner only).
  - Public users can view all blogs and individual posts.
  - ISR for dynamic fetching of blogs and details.
- **About Me Section**
  - Displays static info like name, contact, skills, and work experience.
  - Optimized with Static Site Generation (SSG).
- **Project Showcase**
  - Display personal projects with thumbnails, live links, descriptions, and features.
  - ISR for fetching/updating project data dynamically.
- **Responsive UI & UX**
  - Modern, mobile-first responsive design with Tailwind CSS.
  - Interactive UI: smooth transitions, skeleton loading, cards, and accessibility.

---

##  Tech Stack

**Frontend**
- [Next.js](https://nextjs.org/) (with TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- ISR + SSG for blogs, projects, and about me

**Backend**
- [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- Database: **PostgreSQL + Prisma**
- Authentication: **JWT + bcrypt**
- Admin seeding for initial secure login

---


##  Demo Credentials

Use the following credentials to log in as an admin
to explore

**Admin**
- Email: owner@gmail.com
- Password: 123456

---


## Setup Instructions

### 1. Clone the repos
```bash
git clone https://github.com/mahdirahman356/Portfolio-Frontend.git
git clone https://github.com/mahdirahman356/Portfolio-Backend.git

