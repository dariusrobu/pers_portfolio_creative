export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  focus: string;
  imageUrl: string;
  tags: string[];
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
  gridSpan?: string;
}

export const projects: Project[] = [
  {
    id: "lora",
    title: "Lora",
    description: "AI Assistant Personal Telegram Bot.",
    longDescription: "Lora is a sophisticated personal assistant integrated directly into Telegram. Leveraging advanced AI models, it handles task scheduling, provides intelligent responses and manages briefs and habits through a seamless chat interface. It's designed to be the ultimate companion for productivity on the go.",
    focus: "Real-time AI interaction, Contextual Memory, and Scalable Cloud Deployment.",
    imageUrl: "/imgs/classlly_banner.png",
    tags: ["AI", "Automation", "Bot"],
    technologies: ["Python", "Gemini API", "Neon Database", "Railway", "Telegram API"],
    links: {
      github: "https://github.com/dariusrobu/Lora",
    },
    gridSpan: "col-span-12 md:col-span-8 h-[400px]",
  },
  {
    id: "devr",
    title: "<DevR>",
    description: "Agency Tool for small freelancing web dev teams.",
    longDescription: "<DevR> is a specialized project management and collaboration suite tailored for boutique web development agencies. It streamlines client onboarding, task tracking, and billing, allowing small teams to operate with the efficiency of a large-scale agency.",
    focus: "Workflow Optimization, Multi-tenant Architecture, and Seamless Client Collaboration.",
    imageUrl: "/imgs/foodify.png",
    tags: ["SaaS", "Agency", "Management"],
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    links: {
      live: "https://devr.agency",
    },
    gridSpan: "col-span-12 md:col-span-4 h-[400px]",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "A comprehensive collection of my website projects.",
    longDescription: "This curated collection showcases a diverse range of web projects, from high-converting landing pages to complex web applications. Each project focuses on high performance, accessibility, and modern UI/UX principles to deliver measurable results for clients.",
    focus: "Interactive Motion Design, Core Web Vitals, and Immersive 3D Environments.",
    imageUrl: "/imgs/webdev_banner.png",
    tags: ["Portfolio", "UI/UX", "Frontend"],
    technologies: ["HTML 5", "Tailwind CSS", "React", "Next.js", "Three.js", "CMS"],
    links: {
      live: "https://dariusrobu.com/work",
    },
    gridSpan: "col-span-12 md:col-span-4 h-[400px]",
  },
  {
    id: "i-lab",
    title: "i-Lab",
    description: "Elite Venture Incubation Program at FSEGA, UBB Cluj.",
    longDescription: "i-Lab is a prestigious business incubator designed to accelerate student-led startups through rigorous mentorship from academic experts, successful founders, and global executives. The program provides a deep dive into business analytics and strategic development. During this residency, I had the unique opportunity to consult with the VP of Google & Director of Research, gaining invaluable insights into global innovation and leadership.",
    focus: "Strategic Market Analysis, Venture Scalability, and Executive Mentorship.",
    imageUrl: "/imgs/ilab_banner.png",
    tags: ["Business", "Incubator", "Mentorship"],
    technologies: ["Business Analysis", "Market Strategy", "Data Analytics", "Venture Capital"],
    links: {
      live: "https://i-lab.ro",
    },
    gridSpan: "col-span-12 md:col-span-8 h-[400px]",
  },
  {
    id: "chorus",
    title: "Chorus",
    description: "Multi-persona AI Chatbot experience.",
    longDescription: "Chorus is an exploration of AI psychology and human interaction. By building specialized personas, the tool allows users to engage with AI in specific professional or creative contexts, demonstrating the potential of LLMs to go beyond generic responses into highly specialized roles.",
    focus: "Personality Engineering, Prompt Orchestration, and Human-AI Empathy.",
    imageUrl: "/imgs/classlly_banner.png",
    tags: ["AI", "UX", "React"],
    technologies: ["React", "Google AI Studio", "Tailwind CSS", "Framer Motion"],
    links: {},
  },
  {
    id: "classlly",
    title: "Classlly",
    description: "The modern academic manager for students.",
    longDescription: "Classlly was born from the need to unify the fragmented student experience. It combines note-taking, task management, and academic scheduling into a single, high-performance interface, proving that rapid prototyping can lead to robust consumer-facing solutions.",
    focus: "Ecosystem Thinking, Educational Logic, and Cross-Platform Consistency.",
    imageUrl: "/imgs/classlly_banner.png",
    tags: ["Product", "Cross-Platform", "UX"],
    technologies: ["Flutter", "Dart", "Firebase", "App Store Connect"],
    links: {},
  },
  {
    id: "sesiune",
    title: "Sesiune",
    description: "Hyper-local academic OS for FSEGA students.",
    longDescription: "Built specifically for the student body at FSEGA UBB Cluj, Sesiune is a masterclass in local problem-solving. It features an intelligent AI schedule importer that automates the tedious process of subject tracking, allowing students to focus on what matters: their education.",
    focus: "Localized Problem Solving, Workflow Automation, and User-Centric Utilities.",
    imageUrl: "/imgs/foodify.png",
    tags: ["iOS", "Education", "Automation"],
    technologies: ["Swift", "SwiftUI", "CoreData", "AI Importer"],
    links: {},
  },
  {
    id: "lancepilot",
    title: "LancePilot",
    description: "The AI strategic roadmap for new freelancers.",
    longDescription: "LancePilot is designed to bridge the gap between 'knowing how to code' and 'knowing how to run a business.' It guides new freelancers through the entire lifecycle—from customer discovery and sitemaps to contracts and prototypes—using AI as a strategic partner.",
    focus: "Strategic Entrepreneurship, Business Lifecycle Mapping, and AI-Powered Consulting.",
    imageUrl: "/imgs/webdev_banner.png",
    tags: ["Business", "SaaS", "Strategy"],
    technologies: ["React", "Google AI Studio", "Tailwind CSS", "Prisma"],
    links: {},
  },
  {
    id: "hapback",
    title: "Hapback",
    description: "Hardware nostalgia reborn on iPhone.",
    longDescription: "Hapback is a digital tribute to the iPod era. It leverages the iPhone's advanced haptics and touch interface to recreate the tactile joy of the retro click-wheel experience, proving that software can successfully evoke hardware-level nostalgia.",
    focus: "Emotional Software Design, Sensory UX, and Digital-Physical Nostalgia.",
    imageUrl: "/imgs/foodify.png",
    tags: ["iOS", "UX", "Haptics"],
    technologies: ["SwiftUI", "Haptic Engine", "AVFoundation", "Modern UI"],
    links: {},
  },
  {
    id: "campaign-genai",
    title: "Campaign GenAI",
    description: "Prompt-to-campaign marketing engine.",
    longDescription: "Campaign GenAI targets the biggest bottleneck for new entrepreneurs: content creation. By transforming a single vision into a full suite of posts and reels, it demonstrates the power of AI to democratize marketing and accelerate brand growth.",
    focus: "Speed-to-Market, Content Democratization, and Multi-Channel AI Pipelines.",
    imageUrl: "/imgs/webdev_banner.png",
    tags: ["GenAI", "Marketing", "SaaS"],
    technologies: ["React", "Google AI Studio", "Tailwind CSS", "Cloudinary"],
    links: {},
  },
];
