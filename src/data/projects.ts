export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  gradient: string;
  github: string;
  demo?: string;
  features: string[];
  highlights: string[];
  contribution: string;
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  architecture: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-health-prediction-portal",
    name: "AI Health Prediction Portal",
    category: "AI / Machine Learning",
    description:
      "Built a healthcare platform using Python and FastAPI for ML-based health risk assessment.",
    longDescription:
      "This platform helps users evaluate health-related risk indicators through a streamlined workflow that combines predictive modeling, BMI analysis, and a web-based interface. The system is designed for accessibility and practical decision support in a healthcare context.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Scikit-learn", "Jinja2"],
    image: "/projects/AI-health-portal.png",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    github: "https://github.com/Saurav0135/ai-health-portal",
    demo: "",
    features: [
      "User-friendly health assessment workflow",
      "BMI and health indicator analysis",
      "Machine learning-based prediction results",
      "REST API integration for user input processing",
      "Database-backed persistence for prediction records",
    ],
    highlights: [
      "FastAPI REST API development",
      "SQLAlchemy database integration",
      "Machine learning model integration",
      "Data preprocessing pipeline",
      "MySQL persistence and structured storage",
    ],
    contribution:
      "Designed and implemented the backend APIs, connected the application with the database, and integrated the prediction workflow so user inputs could be processed and evaluated through the trained model.",
    challenges: [
      {
        challenge: "Integrating machine learning predictions with the app workflow.",
        solution:
          "Created a structured prediction flow that processes user input, loads the model, and formats results through the API before returning them to the frontend.",
      },
      {
        challenge: "Keeping the application practical and maintainable.",
        solution:
          "Used a service-oriented backend approach with clear API routes, database models, and modular data handling to keep the logic understandable and reusable.",
      },
    ],
    architecture: ["Frontend", "FastAPI", "Service Layer", "ML Model", "MySQL"],
  },
  {
    slug: "frameza-photography-booking-platform",
    name: "Frameza — Photography Booking Platform",
    category: "Full-Stack Web App",
    description:
      "Developed a full-stack photography booking platform with service discovery and user booking workflows.",
    longDescription:
      "Frameza is a photography booking application that helps users browse service offerings, understand pricing and availability, and complete bookings through a responsive interface. The project reflects a full-stack product workflow covering frontend interaction and backend data handling.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Vercel", "Render"],
    image: "/projects/frameza.png",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    github: "https://github.com/Saurav0135/Frameza",
    demo: "https://frameza-eight.vercel.app/",
    features: [
      "Photography service discovery",
      "Booking workflow with user-facing interaction",
      "Responsive web interface",
      "Backend-driven data flow",
      "Media management using Cloudinary",
    ],
    highlights: [
      "React front-end interface",
      "REST API development",
      "Node.js and Express backend",
      "MongoDB data persistence",
      "Cloudinary-based media handling",
    ],
    contribution:
      "Built the full-stack experience from the frontend flow to the backend structure, enabling users to navigate services, complete actions, and work with a connected data layer.",
    challenges: [
      {
        challenge: "Designing a smooth booking experience.",
        solution:
          "Structured the interface and backend flow so service information, user actions, and booking logic remained consistent across the application.",
      },
      {
        challenge: "Keeping the application scalable for future expandability.",
        solution:
          "Modelled the backend around a reusable API and data structure that would support additional service and booking features without major rewrites.",
      },
    ],
    architecture: ["React", "REST API", "Node.js / Express", "MongoDB", "Cloudinary"],
  },
  {
    slug: "ford-car-price-prediction",
    name: "Ford Car Price Prediction",
    category: "Machine Learning",
    description:
      "Created a regression-based car price prediction model using vehicle attributes and data analysis.",
    longDescription:
      "This project focuses on estimating Ford vehicle prices from structured input data using machine learning regression techniques. It includes exploratory work with tabular data, preprocessing steps, and a model workflow designed to forecast price based on available vehicle attributes.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    image: "/projects/ford.jpg",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    github: "https://github.com/Saurav0135/Ford-car-prediction",
    features: [
      "Exploratory data analysis",
      "Data cleaning and preprocessing",
      "Regression model training",
      "Price prediction workflow",
      "Feature-driven model evaluation",
    ],
    highlights: [
      "Data preprocessing and normalization",
      "Feature engineering for tabular data",
      "Regression model training with scikit-learn",
      "Evaluation of prediction quality",
      "Practical ML workflow design",
    ],
    contribution:
      "Engineered the data processing and model workflow, prepared the dataset, and implemented the machine learning pipeline to predict vehicle prices from relevant attributes.",
    challenges: [
      {
        challenge: "Handling noisy and inconsistent vehicle data.",
        solution:
          "Cleaned and standardized the dataset before model training so the regression model could rely on consistent feature values and better generalization.",
      },
    ],
    architecture: [
      "Dataset",
      "Data Preprocessing",
      "Feature Engineering",
      "Regression Model",
      "Prediction Output",
    ],
  },
  {
    slug: "zerodha-clone",
    name: "Zerodha Clone",
    category: "Frontend / Trading UI",
    description:
      "Built a modern trading interface inspired by brokerage dashboards with responsive user flows.",
    longDescription:
      "The project recreates the visual structure and user experience of a trading dashboard, focusing on readability, action flows, and a polished interface for market information and portfolio-style interactions. It is designed to reflect real-world financial product patterns in a frontend-first build.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/Zerodha.png",
    gradient: "from-violet-500 via-indigo-500 to-cyan-600",
    github: "https://github.com/Saurav0135/Zerodha-Clone",
    features: [
      "Responsive trading dashboard layout",
      "Portfolio-style interface structure",
      "Modern UI and card-based presentation",
      "Frontend user flow for market interactions",
      "Backend-ready structure for future data integration",
    ],
    highlights: [
      "Responsive UI design",
      "Dashboard-oriented layout design",
      "Frontend-driven product workflow",
      "Structured reusable components",
      "Modern trading UX patterns",
    ],
    contribution:
      "Built the interface structure and user-facing experience, with emphasis on responsive layout, dashboard composition, and trading-style information hierarchy.",
    challenges: [
      {
        challenge:
          "Designing a dashboard that remains readable and usable at smaller screen sizes.",
        solution:
          "Used a modular layout and responsive spacing approach so the application keeps clear hierarchy and usable component sizing on varied screen widths.",
      },
    ],
    architecture: ["React", "Component Layer", "API Layer", "Node.js / Express", "Database"],
  },
];
