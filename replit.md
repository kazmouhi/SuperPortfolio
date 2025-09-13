# replit.md

## Overview

This is a full-stack portfolio application built for Hassan Kazmouhi, a computer development technician. The application showcases his professional profile, skills, projects, and experience in the automotive industry, particularly his work at APTIV. The portfolio is built as a modern web application with a React frontend and Express backend, featuring a complete user management system foundation and multi-language support (French, English, and Arabic).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture:
- **UI Framework**: Built with Radix UI components and shadcn/ui design system for consistent, accessible components
- **Styling**: Tailwind CSS with custom CSS variables for theming support (light/dark modes)
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation schemas
- **Internationalization**: Custom language provider supporting French, English, and Arabic
- **Theme System**: Custom theme provider with light/dark mode toggle

### Backend Architecture
The backend follows a layered REST API architecture:
- **Framework**: Express.js with TypeScript for type safety
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) ready for database integration
- **API Design**: RESTful endpoints with /api prefix, proper error handling middleware
- **Development Tools**: Vite integration for hot module replacement in development
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not yet implemented)

### Database Schema
Using Drizzle ORM with PostgreSQL:
- **Users Table**: Basic user entity with id, username, and password fields
- **Schema Validation**: Drizzle-Zod integration for runtime type checking
- **Migrations**: Drizzle migrations configured for schema evolution

### Build System and Development
- **Build Tool**: Vite for fast development builds and HMR
- **Bundling**: ESBuild for production server bundling
- **Development**: tsx for TypeScript execution in development
- **Path Resolution**: Custom path aliases (@, @shared, @assets) for clean imports
- **Code Quality**: TypeScript strict mode with comprehensive type checking

### Component Architecture
The application follows a modular component structure:
- **Page Components**: Single-page application with home page and 404 handling
- **Section Components**: Modular sections (hero, about, skills, projects, experience, testimonials, contact)
- **UI Components**: Reusable shadcn/ui components with custom extensions
- **Provider Components**: Context providers for theme and language management
- **Utility Functions**: Helper functions for CV downloads and API requests

### Design Patterns
- **Context Pattern**: Used for theme and language state management
- **Repository Pattern**: Storage interface abstraction for data access
- **Provider Pattern**: React context providers for global state
- **Compound Component Pattern**: UI components built with Radix primitives
- **Custom Hooks**: Reusable logic for toast notifications and mobile detection

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver for database connectivity
- **drizzle-orm**: Modern TypeScript ORM for database operations
- **drizzle-kit**: CLI tool for database migrations and schema management

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible, unstyled React components
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Utility for creating component variants
- **clsx**: Conditional className utility
- **lucide-react**: Modern icon library

### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **@replit/vite-plugin-runtime-error-modal**: Replit-specific development tools
- **@replit/vite-plugin-cartographer**: Replit development environment integration

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation

### Additional Libraries
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library
- **date-fns**: Date manipulation utilities
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel component library
- **nanoid**: URL-safe unique ID generator

### Fonts and Assets
- **Google Fonts**: Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono fonts
- **Font Awesome**: Icon library for additional icons
- **Unsplash Images**: Stock photography for project showcases and testimonials