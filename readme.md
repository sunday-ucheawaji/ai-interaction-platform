# AI Interaction Platform

A full-stack AI-powered application featuring a real-time chat interface and intelligent review summarization powered by OpenAI.

This project demonstrates a modern, type-safe architecture using React, Express, Prisma, and MySQL — all running on Bun.

---

## Overview

The AI Interaction Platform consists of two main parts:

- **Client (Frontend)** – A modern React application for user interaction.
- **Server (Backend API)** – A type-safe Express API handling business logic, persistence, and OpenAI integration.

The system enables users to:
- Interact with an AI-powered chat interface
- Submit and retrieve product reviews
- Generate concise AI summaries of reviews

---

## Tech Stack

### Frontend (Client)

- React (TypeScript)
- React Query (Server State Management)
- React Hook Form (Form Handling)
- Tailwind CSS (Styling)
- shadcn/ui (Accessible UI Components)
- Bun (Runtime & Package Manager)

### Backend (Server)

- Express (TypeScript)
- Prisma ORM
- MySQL
- Zod (Schema Validation)
- OpenAI API Integration
- Bun (Runtime & Task Runner)

---

## Architecture

Client (React + TypeScript)
↓
Express API (TypeScript)
↓
Prisma ORM
↓
MySQL Database
↓
OpenAI API

The backend follows a modular structure:

routes → controllers → services → database


- **Routes** define API endpoints
- **Controllers** handle HTTP logic
- **Services** contain business logic
- **Prisma** manages database access
- **Zod** ensures request validation
- **OpenAI API** powers chat and summarization features

---

## Key Features

- AI-powered conversational chat interface
- Review summarization
- Type-safe full-stack implementation
- Clean separation of concerns
- Schema-based request validation
- Optimized server state management
- Modern responsive UI design

---

## Project Structure

root/
├── client/
└── server/


Each part runs independently with its own dependencies and configuration.

---

## Getting Started

### Prerequisites

- Bun installed
- MySQL running
- OpenAI API key

---

### Install Dependencies

#### Client

cd client
bun install

#### Server

cd server
bun install

---

### Environment Variables (Server)

Create a `.env` file inside the `server` directory:

OPENAI_API_KEY=
DATABASE_URL=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_HOST=
DATABASE_PORT=

---

### Run the Application

#### Start Backend

cd server
bun run dev


#### Start Frontend

cd client
bun run dev

---

## Purpose

This project showcases:

- Full-stack TypeScript architecture
- AI integration using OpenAI
- Clean Express backend structure
- Modern React development patterns
- Prisma-based database management
- End-to-end type safety

It is designed as a production-style demonstration of building scalable AI-driven web applications.

---

## License

This project is for educational and demonstration purposes.