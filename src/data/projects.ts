import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'phishing-detection',
    title: 'Real-Time AI/ML Phishing Detection & Prevention System',
    subtitle: 'Multi-Tier Defense & Chrome Extension',
    tagline: 'Multi-tier AI phishing detection platform analyzing URLs, messages, OCR text, and QR codes with browser-side prevention.',
    description:
      'Contributed to a multi-tier design: React frontend, Spring Boot REST API, Python FastAPI service for ML inference, and MySQL database, with client-side browser prevention delivered as a Chrome extension on Manifest V3.',
    featured: true,
    status: 'Completed System',
    category: 'Cybersecurity & AI',
    technologies: ['React', 'Spring Boot', 'FastAPI', 'MySQL', 'Manifest V3'],
    keyFeatures: [
      'Contributed to a multi-tier design: React frontend, Spring Boot REST API, Python FastAPI service for ML inference, and MySQL database.',
      'Worked on detection modules for URLs, emails and messages, text in screenshots (OCR) and QR codes, with explainable output showing why content was flagged.',
      'Browser-side prevention is delivered as a Chrome extension built on Manifest V3.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'sahayak-ai',
    title: 'Sahayak AI: Voice-First Welfare Scheme Assistant',
    subtitle: 'Multilingual Progressive Web App',
    tagline: 'Voice-first PWA helping non-literate rural users find government welfare schemes by voice in 12 regional languages.',
    description:
      'Developed a Progressive Web App that helps non-literate rural users find government welfare schemes by voice in 12 regional languages, identifying browser TTS gaps and implementing neural TTS with PostgreSQL persistence.',
    featured: true,
    status: 'In Active Development',
    category: 'GovTech & Voice AI',
    technologies: ['Java 21', 'Spring Boot', 'React 18', 'Vite', 'Tailwind CSS'],
    keyFeatures: [
      'Developed a Progressive Web App that helps non-literate rural users find government welfare schemes by voice in 12 regional languages.',
      'Identified gaps in unreliable browser text-to-speech on low-cost Android devices and a stateless backend; currently implementing neural TTS and PostgreSQL persistence.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'aura-voice-assistant',
    title: 'AI Desktop Voice Assistant (AURA)',
    subtitle: 'Voice-Controlled Desktop Automation',
    tagline: 'Voice-controlled desktop assistant that uses an Ollama LLM for conversation and task automation.',
    description:
      'Developed a voice-controlled desktop assistant that uses an Ollama LLM for conversation and task automation with speech-to-text, text-to-speech, file management, browser search, and screenshot capture.',
    featured: true,
    status: 'Completed Prototype',
    category: 'Voice AI & LLM',
    technologies: ['Python', 'Ollama LLM'],
    keyFeatures: [
      'Developed a voice-controlled desktop assistant that uses an Ollama LLM for conversation and task automation.',
      'Implemented speech-to-text, text-to-speech, file management, browser search and screenshot features using a modular command structure.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'intrusion-detection-system',
    title: 'Machine Learning-Based Intrusion Detection System',
    subtitle: 'Enterprise Java & ONNX Runtime Web App',
    tagline: 'Spring Boot web application that integrates a pre-trained ONNX model through ONNX Runtime and shows real-time predictions in Vaadin.',
    description:
      'Developed a Spring Boot web application that integrates a pre-trained ONNX model through ONNX Runtime and shows real-time predictions in a Vaadin interface, applying modular design principles for maintainability.',
    featured: false,
    status: 'Completed Application',
    category: 'Systems & ML',
    technologies: ['Java', 'Spring Boot', 'ONNX Runtime', 'Vaadin'],
    keyFeatures: [
      'Developed a Spring Boot web application that integrates a pre-trained ONNX model through ONNX Runtime and shows real-time predictions in a Vaadin interface.',
      'Applied modular design principles to keep the code maintainable.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'image-to-sketch',
    title: 'Image to Sketch Converter',
    subtitle: 'Computational Vision & Edge Detection',
    tagline: 'Image processing application that converts photos into pencil sketches using Dodge & Burn and Canny edge detection.',
    description:
      'Built an image processing application that converts photos into pencil sketches using Dodge & Burn and Canny edge detection, with support for multiple image formats and adjustable sketch settings.',
    featured: false,
    status: 'Completed Utility',
    category: 'Computer Vision',
    technologies: ['Python', 'OpenCV'],
    keyFeatures: [
      'Built an image processing application that converts photos into pencil sketches using Dodge & Burn and Canny edge detection, with support for multiple image formats and adjustable sketch settings.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
];
