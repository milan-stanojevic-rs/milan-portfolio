// Full factual project information retained for future case studies.
export const projects = [
  {
    "id": "fluxo",
    "number": "01",
    "name": "Fluxo",
    "subtitle": "AI-Powered Personal Finance Platform",
    "description": "A full-stack personal finance application for tracking transactions, monthly budgets and savings goals, with an AI assistant that provides contextual insights based on the user's financial data.",
    "stack": "React 19 · TypeScript · Redux Toolkit · RTK Query · Tailwind CSS · Fastify · Prisma · PostgreSQL · Claude AI",
    "highlights": [
      {
        "title": "AI STREAMING",
        "description": "Claude integration using Server-Sent Events for real-time streamed responses."
      },
      {
        "title": "AUTHENTICATION",
        "description": "JWT access tokens with HTTP-only refresh cookies, refresh rotation and automatic session recovery."
      },
      {
        "title": "ARCHITECTURE",
        "description": "pnpm/Turborepo monorepo with shared Zod schemas and TypeScript types across frontend and backend."
      }
    ],
    "links": [
      {
        "href": "https://fluxo-milan.vercel.app",
        "label": "Live App"
      },
      {
        "href": "https://github.com/milan-stanojevic-rs/fluxo",
        "label": "GitHub"
      }
    ],
    "images": [
      {
        "src": "/projects/fluxo/dashboard.png",
        "alt": "Fluxo personal finance dashboard"
      }
    ]
  },
  {
    "id": "peopleops",
    "number": "02",
    "name": "PeopleOps Admin Portal",
    "subtitle": "Enterprise People Operations Dashboard",
    "description": "A responsive React and TypeScript admin application inspired by real-world HR and People Operations workflows, focused on reusable UI architecture, accessibility, responsive design and testing.",
    "stack": "React 19 · TypeScript · React Router · SCSS · Vitest · React Testing Library · Playwright",
    "highlights": [
      {
        "title": "UI ARCHITECTURE",
        "description": "Feature-based React structure with reusable UI components, lightweight state management and service boundaries."
      },
      {
        "title": "QUALITY",
        "description": "Vitest, React Testing Library and Playwright coverage with GitHub Actions CI validation."
      },
      {
        "title": "ACCESSIBILITY",
        "description": "Semantic navigation, keyboard-friendly interactions, focus-aware UI patterns and accessible application states."
      }
    ],
    "links": [
      {
        "href": "https://peopleops-admin-portal.vercel.app",
        "label": "Live App"
      },
      {
        "href": "https://github.com/milan-stanojevic-rs/peopleops-admin-portal",
        "label": "GitHub"
      }
    ],
    "images": [
      {
        "src": "/projects/peopleops/dashboard-light.png",
        "alt": "PeopleOps Admin Portal dashboard"
      },
      {
        "src": "/projects/peopleops/mobile-employees.png",
        "alt": "PeopleOps employee experience on mobile"
      }
    ]
  },
  {
    "id": "employee",
    "number": "03",
    "name": "Employee Management",
    "subtitle": "Full-Stack Employee Management & Screen Recording",
    "description": "A full-stack React and Express application for managing employee records, with SQLite persistence, runtime validation and browser-native screen sharing and recording.",
    "stack": "React · TypeScript · Express 5 · SQLite · Zod · MediaStream · MediaRecorder",
    "highlights": [
      {
        "title": "FULL-STACK FLOW",
        "description": "React client connected to an Express 5 REST API with SQLite persistence and a dedicated repository layer."
      },
      {
        "title": "VALIDATION & DATA",
        "description": "Zod validation for request payloads and database rows, with prepared SQLite statements and typed domain models."
      },
      {
        "title": "BROWSER APIs",
        "description": "Native screen sharing and recording with getDisplayMedia, MediaStream, MediaRecorder, Blob URLs and lifecycle cleanup."
      }
    ],
    "links": [
      {
        "href": "https://github.com/milan-stanojevic-rs/employee-management-app",
        "label": "View Source"
      }
    ],
    "images": [
      {
        "src": "/projects/employee-management/employees.png",
        "alt": "Employee Management application showing the employee directory"
      },
      {
        "src": "/projects/employee-management/screen-recorder.png",
        "alt": "Employee Management screen sharing and recording interface"
      }
    ]
  }
] as const
