export const profile = {
  name:        "Mohamed Nilar Fathima Hasmath Nifa",
  shortName:   "Nifa",
  role:        "Software Engineer",
  specialties: ["Problem Solver", "Creative Thinker", "Mobile Developer", "Full-Stack Developer", "UI/UX Designer"],
  about:
    "I'm final-year Software Technologies student at South Eastern University of Sri Lanka. I build across the full stack - mobile apps, cloud systems, IoT solutions, and UI/UX design. I care about writing clean code, solving real problems, and delivering things that actually work end to end.",
  about2:
    "Currently seeking an internship where I can contribute to real software projects, grow in a professional team, and turn more ideas into products that actually work.",
  email:     "nifanilar@gmail.com",
  phone:     "+94 71 738 6062",
  github:    "https://github.com/hasmath27",
  linkedin:  "https://www.linkedin.com/in/nifa-nilar/",
  resumeUrl: "/MN.FathimaHasmathNifa_CV.pdf",
  photo:     "photo.jpg",
};

export const stats = [
  { value: "9+", label: "Projects" },
  { value: "8+",  label: "Tech stacks" },
  { value: "2+",  label: "Years building" },
];

export const projects = [
  {
    id: "gpapp",
    title: "GPA Calculator App",
    category: "Mobile · Android",
    bullets: [
      "Developed an Android application to calculate GPA and CGPA.",
      "Used SQLite for storing academic records and user information.",

    ],
    stack: ["Android Studio", "SQLite", "Java"],
    github: "https://github.com/hasmath27/GPAPP.git",
    image:  "/projects/gpa-calculator.png",
    featured: false,
  },
  {
    id: "cargo",
    title: "Cargo Monitoring System",
    category: "IoT · Cloud · Mobile",
    bullets: [
      "Developed an IoT system to monitor temperature, humidity, light, motion, and tilt in real time",
      "Built a Flutter mobile app to display live sensor data and store information using Supabase",
    ],
    stack: ["Flutter", "ESP32", "Supabase", "IoT"],
    github: "https://github.com/Ahunah/Smart-Food-Cargo-Monitoring-System.git",
    live:   "",
    image:  "/projects/cargo-monitoring.jpg",
    featured: true,
  },
  {
    id: "travel",
    title: "Travel App",
    category: "Mobile · Flutter",
    bullets: [
      "Developed a travel planning mobile application with user login and trip management",
      "Designed a responsive interface for searching destinations and organizing itineraries",
    ],
    stack: ["Flutter", "Supabase", "Dart"],
    github: "https://github.com/hasmath27/MAD_Project.git",
    image:  "/projects/travel-app.png",
    featured: false,
  },
  {
    id: "flashcard",
    title: "FlashCard Quiz App",
    category: "Mobile · Flutter",
    bullets: [
      "Built a Flutter flashcard application with category management and progress tracking",
      "Implemented local data storage using SQLite",
    ],
    stack: ["Flutter", "SQLite", "Dart"],
    github: "https://github.com/hasmath27/FlashCardQuizApp.git",
    image:  "/projects/flashcard-app.png",
    featured: false,
  },
  {
    id: "expense",
    title: "Expense Tracker",
    category: "Cloud · DevOps",
    bullets: [
      "Developed a cloud-based web application to manage expenses and budgets",
      "Integrated Azure SQL Database, Azure Blob Storage, and Azure App Service for data storage and deployment",
    ],
    stack: ["Node.js", "Express.js", "Azure", "Azure SQL"],
    github: "https://github.com/hasmath27/expense-tracker.git",
    image:  "/projects/expense-tracker.png",
    featured: false,
  },
  
  {
    id: "todo",
    title: "To-do List Web App",
    category: "Web · Laravel",
    bullets: [
      "Developed a Laravel-based task management web application with complete CRUD functionality",
      "Implemented task creation, editing, status updates, and deletion with a responsive interface",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/hasmath27/todo-app.git",
    live:   "",
    image:  "/projects/todo-app.png",
    featured: false,
  },
  {
    id: "ecocycle",
    title: "EcoCycle — Sustainable Marketplace",
    category: "UI/UX · Figma",
    bullets: [
      "Designed a mobile application prototype for a sustainable marketplace that supports selling, donating, and swapping products",
      "Developed interactive UI screens and user flows using Figma",
    ],
    stack: ["Figma", "UI/UX", "Prototyping"],
    live:   "https://www.figma.com/proto/zOHDx7yWSdmDfpgZmFSdfR/Untitled?node-id=31%20157&p=f&t=dgTndCyDoA2zG4tu-0&scaling=contain&content-scaling=fixed&page%20id=0%3A1&starting-point-node-id=86%3A793&show-proto-sidebar=1",
    image:  "/projects/ecocycle.png",
    featured: false,
    liveLabel: "View Figma Prototype ↗",
  },
  {
    id: "azure-upload",
    title: "Azure File Upload Web App",
    category: "Cloud · DevOps",
    bullets: [
      "Ubuntu VM running Apache2 as the production web host",
      "SAS-token authentication for secure Blob Storage access",
      "CORS configured for cross-origin browser uploads",
    ],
    stack: ["Azure", "Blob Storage", "Ubuntu", "Apache2", "JavaScript"],
    live:   "https://medium.com/@20ict073/hosting-a-file-upload-web-app-on-azure-linux-vm-with-blob-storage-f57d601c0106?sharedUserId=20ict073",
    image:  "/projects/azure-upload.png",
    featured: false,
    articleLabel: "Read on Medium ↗",
  },
  {
   id: "smart-street-light",
   title: "Smart Street Light Control & Monitoring System",
   category: "IoT · Flutter",
   bullets: [
    "Built an IoT-based smart street light system using ESP32 and LDR sensor with real-time light intensity monitoring and automatic light control",
    "Developed a cross-platform Flutter mobile app with Supabase backend for real-time data visualization and remote monitoring"
  ],
   stack: ["ESP32", "C++", "Flutter", "Dart", "Supabase"],
   github: "https://github.com/hasmath27/Smart_Street_Light_App.git",
   live: "",
   image: "/projects/smart-street.png",
   featured: true
}
];

export const skillGroups = [
  {
    label: "Programming Languages",
    icon: "💻",
    color: "#EF4444",
    items: ["Java", "Python", "C", "C++", "JavaScript", "PHP"],
  },
  {
    label: "Web Development",
    icon: "🌐",
    color: "#F59E0B",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React", "Laravel", "FastAPI"],
  },
  {
    label: "Mobile Development",
    icon: "📱",
    color: "#3B82F6",
    items: ["Android Studio", "Java", "Flutter", "Dart"],
  },
  {
    label: "Cloud & DevOps",
    icon: "☁️",
    color: "#0EA5E9",
    items: ["Microsoft Azure", "AWS"],
  },
  {
    label: "Databases",
    icon: "🗄️",
    color: "#10B981",
    items: ["MySQL", "MongoDB", "SQLite", "Supabase"],
  },
  {
    label: "Design & Tools",
    icon: "🎨",
    color: "#8B5CF6",
    items: ["Figma", "Adobe XD", "Marvel", "Adobe Photoshop", "Adobe Illustrator", "VS Code", "Arduino IDE", "Eclipse"],
  },
  {
    label: "IoT & Embedded Systems",
    icon: "🔧",
    color: "#06B6D4",
    items: ["ESP32", "Arduino", "Wokwi", "Tinkercad", "Blynk"],
  },
  {
    label: "Operating Systems & Servers",
    icon: "🖥️",
    color: "#64748B",
    items: ["Windows", "Ubuntu Linux", "Windows Server", "Ubuntu Server", "XAMPP"],
  },
];

export const certificates = [
  {
    id: "cert-1",
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS",
    date: "2025",
    image: "/certificates/Cloud Foundations_AWS.png",
    url: "https://www.credly.com/go/NRusrOrT",
  },
  {
    id: "cert-2",
    title: "AWS Academy Graduate - Cloud Web Application Builder -Training Badge",
    issuer: "AWS",
    date: "2026",
    image: "/certificates/Cloud Web Application Builder_AWS.png",
    url: "https://www.credly.com/go/U4wjGWVC",
  },
  {
    id: "cert-3",
    title: "AWS Academy Graduate - Generative Al Foundations",
    issuer: "AWS",
    date: "2025",
    image: "/certificates/Generative AI Foundations_AWS.png",
    url: "https://www.credly.com/badges/4323714a-f3ff-4af1-bdca-c649a1a5b5a8",
  },
  {
    id: "cert-4",
    title: "Foundations of Prompt Engineering",
    issuer: "AWS",
    date: "2026",
    image: "/certificates/Foundations of Prompt_AWS.png",
  },
  {
    id: "cert-5",
    title: "Machine Learning I",
    issuer: "COLUMBIA+",
    date: "2025",
    image: "/certificates/MachineLearningI_Columbia+.png",
    url: "https://badges.plus.columbia.edu/71cd3216-c2ed-4396-b76f-5cea80a1950c",
  },
  {
    id: "cert-6",
    title: "Data Analytics with AI",
    issuer: "Sololearn",
    date: "2025",
    image: "/certificates/DataAnalyticsWithAI_Sololearn.jpeg",
  },
  {
    id: "cert-7",
    title: "Deep Learning",
    issuer: "Simplilearn",
    date: "2025",
    image: "/certificates/DeepLearning_simpliLearn.png",
  },
  {
    id: "cert-8",
    title: "Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "/certificates/Introduction to Networks_netacad.png",
  },
  {
    id: "cert-9",
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    date: "2023",
    image: "/certificates/Essentials in C_netacad.png",
  },
  {
    id: "cert-10",
    title: "Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/certificates/Switching, Routing_netacad.png",
  },
  {
    id: "cert-11",
    title: "AI RECOMMENDATION - TEACHING MACHINES TO PICK YOUR NEXT MOVIE",
    issuer: "DevTown",
    date: "2025",
    image: "/certificates/AI_recommandation_devtown_youtube.png",
  },
  {
    id: "cert-12",
    title: "GIT & GITHUB : PUSH LIKE A PRO",
    issuer: "DevTown",
    date: "2025",
    image: "/certificates/Git_Github_devtown_youtube.png",
  },
  {
    id: "cert-13",
    title: "JavaScript Fundamentals to Advanced: Full Stack Development",
    issuer: "Udemy",
    date: "2025",
    image: "/certificates/JS_Fundamental_Udemy.jpg",
  },
  {
    id: "cert-14",
    title: "Python Complete Course For Beginners",
    issuer: "Udemy",
    date: "2025",
    image: "/certificates/Python_Udemy.jpg",
  },
  {
    id: "cert-15",
    title: "UIUX with Figma and Adobe XD",
    issuer: "Udemy",
    date: "2025",
    image: "/certificates/UI_UX_Udemy.jpg",
  },
  {
    id: "cert-16",
    title: "Fundamentals of Cloud Application Development",
    issuer: "Microsoft",
    date: "2026",
    image: "/certificates/FunOfCloudAppli_microsoftLearn.png",
  },
  
];

export const education = {
  degree:      "BICT(Hons) in Software Technologies",
  institution: "South Eastern University of Sri Lanka",
  location:    "Sri Lanka",
  period:      "Expected 2026",
  coursework:  ["Mobile App Development", "Human Computer Interaction", "Database Management Systems", "Cloud Computing", "Smart Systems"],
};
