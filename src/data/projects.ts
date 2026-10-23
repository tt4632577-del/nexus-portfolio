import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'aura',
    title: 'AURA',
    subtitle: 'AI Desktop Voice Assistant',
    tagline: 'Local-first multimodal desktop intelligence powered by low-latency voice and computer vision.',
    description:
      'A Python-based desktop assistant that combines speech recognition, text-to-speech, local AI interaction, desktop utilities, and selected computer-vision functionality.',
    featured: true,
    status: 'Completed Prototype',
    category: 'AI & Systems',
    technologies: ['Python', 'Faster-Whisper', 'Ollama', 'OpenCV', 'NumPy'],
    problemStatement:
      'Cloud-reliant voice assistants suffer from latency, privacy vulnerabilities, and lack of offline execution. AURA solves this by running local LLM reasoning and edge speech recognition on desktop hardware without compromising personal data.',
    architectureDetails:
      'Multithreaded audio capture pipeline feeding Faster-Whisper for high-speed transcription, routed through an Ollama local LLM execution engine, coupled with an OpenCV vision monitor for real-time visual context and OS automation triggers.',
    keyFeatures: [
      'Local Speech Recognition: Low-latency offline transcription using Faster-Whisper models.',
      'Local LLM Reasoning: Offline intelligent responses powered by Ollama.',
      'Computer Vision Utilities: Real-time visual perception via OpenCV and matrix math with NumPy.',
      'Desktop OS Utilities: Automated system tasks, application launching, and telemetry feedback.',
      'Privacy-First Architecture: Zero voice audio streamed to external cloud servers.',
    ],
    implementationHighlights: [
      'Engineered an event-driven worker loop to prevent UI freezing during voice generation.',
      'Optimized memory footprint for running quantized neural models on consumer PC hardware.',
      'Implemented Canny/Haar visual detection cascades for contextual desktop awareness.',
    ],
    challengesAndSolutions: [
      'Challenge: High audio latency when waiting for full speech turn. Solution: Integrated Faster-Whisper with VAD (Voice Activity Detection) chunking.',
      'Challenge: Heavy memory usage with dual vision and LLM workloads. Solution: Implemented lazy model initialization and explicit resource cleanup.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'ibvap',
    title: 'IBVAP',
    subtitle: 'Intelligent Video Analytics Platform for Border Surveillance',
    tagline: 'AI-assisted perimeter monitoring, multi-object tracking, and automated alert telemetry.',
    description:
      'An AI-assisted video analytics project focused on existing CCTV infrastructure, object detection, tracking, and actionable alerts.',
    featured: true,
    status: 'In Active Development',
    category: 'Computer Vision',
    technologies: ['YOLO-based detection', 'ByteTrack', 'PaddleOCR', 'Computer Vision'],
    problemStatement:
      'Manual monitoring of multiple border surveillance video streams leads to operator fatigue, delayed incident response, and missed perimeter breaches. IBVAP automates continuous threat assessment on commodity camera feeds.',
    architectureDetails:
      'Video ingestion module feeding a quantized YOLO detection pipeline, stateful tracklet persistence with ByteTrack, and text/vehicle ID verification via PaddleOCR with real-time zone intrusion alerting.',
    keyFeatures: [
      'High-Accuracy Detection: YOLO-based detection fine-tuned for perimeter human and vehicle identification.',
      'Persistent Tracking: ByteTrack association across camera frames during occlusions.',
      'Optical Character Recognition: PaddleOCR integration for vehicle license and container identification.',
      'Perimeter Breach Triggers: Virtual tripwire and restricted polygon zone violation events.',
      'Actionable Alerting: Structured metadata logs and alert snapshots for fast human operator verification.',
    ],
    implementationHighlights: [
      'Constructed frame-skipping inference queues to maintain smooth 30fps processing on edge video feeds.',
      'Implemented Kalman-filter trajectory smoothing to reduce false positives in harsh outdoor lighting.',
    ],
    challengesAndSolutions: [
      'Challenge: Track identity switching during dense pedestrian crossings. Solution: Tuned ByteTrack appearance feature thresholds and IoU match weights.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'sahayak-ai',
    title: 'Sahayak AI',
    subtitle: 'Voice-First Public-Service Assistant',
    tagline: 'Multilingual conversational bridge connecting citizens to government schemes and welfare entitlements.',
    description:
      'A multilingual assistant concept designed to help people understand relevant welfare schemes and eligibility information through voice-based interaction.',
    featured: true,
    status: 'In Active Development',
    category: 'Full Stack',
    technologies: ['Java', 'Spring Boot', 'React', 'Vite', 'Tailwind CSS', 'AI Integration'],
    problemStatement:
      'Navigating complex public welfare portals and official government documentation is daunting for citizens, especially across diverse regional languages and literacy levels. Sahayak AI makes public benefits accessible through natural voice conversation.',
    architectureDetails:
      'React and Tailwind CSS frontend with Web Speech interface, communicating over REST endpoints to a Java Spring Boot backend with domain-curated knowledge mapping and AI retrieval pipelines.',
    keyFeatures: [
      'Multilingual Voice Interaction: Conversational access to citizen services in regional languages.',
      'Intelligent Eligibility Assessment: Automated checks against government scheme criteria.',
      'Enterprise Backend: High-performance Java Spring Boot REST API for scheme indexing and validation.',
      'Modern Accessible UI: Responsive interface built with Vite and Tailwind CSS with high contrast.',
      'Scheme Catalog: Curated database of public welfare entitlements, documents needed, and application steps.',
    ],
    implementationHighlights: [
      'Designed clean DTO contracts and JPA entities in Spring Boot for scheme rule evaluation.',
      'Integrated conversational prompt templates grounded in official public criteria to prevent hallucinations.',
    ],
    challengesAndSolutions: [
      'Challenge: Supporting regional phonetics and accents. Solution: Designed a confirmation fallback step enabling voice or visual confirmation before submission.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'suraksha',
    title: 'SURAKSHA',
    subtitle: 'Women\'s Safety & Emergency Response Platform',
    tagline: 'Rapid SOS dispatch, verified circle broadcast, and offline-resilient emergency coordination.',
    description:
      'A safety-oriented application concept focused on emergency assistance, trusted contacts, location sharing, and fallback communication.',
    featured: false,
    status: 'Completed Prototype',
    category: 'Mobile & Safety',
    technologies: ['Dart', 'Flutter', 'Geolocation Services', 'SMS Fallback'],
    problemStatement:
      'During emergency situations, victims cannot navigate complex multi-step mobile apps or rely solely on high-speed internet connectivity. SURAKSHA provides one-touch SOS dispatch with instant location broadcast and SMS fallback.',
    architectureDetails:
      'Flutter cross-platform application utilizing reactive state management, background GPS tracking services, native telephony wrappers for instant SMS dispatch, and local device encryption for emergency contact data.',
    keyFeatures: [
      'One-Touch Panic Trigger: Immediate distress activation with hardware key and screen shortcuts.',
      'Live Geolocation Broadcast: Periodic location coordinate dispatch to emergency circles.',
      'Offline SMS Fallback: Automatic transmission via cellular SMS when mobile data is unavailable.',
      'Safe Route Navigator: Route monitoring with periodic check-in alerts.',
    ],
    implementationHighlights: [
      'Engineered background service lifecycle handlers in Dart to sustain GPS tracking when screen is locked.',
      'Minimalist, high-contrast UI designed for high-stress usability under emergency conditions.',
    ],
    challengesAndSolutions: [
      'Challenge: Android battery optimization killing background location tasks. Solution: Implemented high-priority foreground notification service worker.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'cloud-native-ids',
    title: 'Cloud-Native Intrusion Detection System',
    subtitle: 'Machine-Learning Powered Network Threat Detection',
    tagline: 'High-throughput packet classification and anomaly identification built on Java and ONNX Runtime.',
    description:
      'A Java application exploring intrusion detection and machine-learning model integration.',
    featured: false,
    status: 'Research & Prototype',
    category: 'Security',
    technologies: ['Java', 'Spring Boot', 'ONNX Runtime', 'Vaadin', 'H2 Database'],
    problemStatement:
      'Traditional rule-based intrusion detection systems miss novel zero-day attacks and suffer high computational overhead. Integrating machine learning inference directly inside enterprise Java pipelines provides real-time threat categorization.',
    architectureDetails:
      'Spring Boot application embedding ONNX Runtime to execute pretrained neural threat classifiers in-process, persisting flagged events into H2 with a real-time reactive Vaadin telemetry dashboard.',
    keyFeatures: [
      'In-Process ML Inference: Low-latency neural classification without external Python RPC overhead using ONNX Runtime.',
      'Real-Time Telemetry: Reactive admin dashboard built with Vaadin for attack log visualization.',
      'Embedded Persistence: Lightweight H2 database for audit logging and rapid querying.',
      'Threat Categorization: Classification of DoS, probe, and unauthorized access signatures.',
    ],
    implementationHighlights: [
      'Configured off-heap memory buffers for high-speed tensor conversion in Java.',
      'Built Spring Boot health metrics and audit trail endpoints for security operations.',
    ],
    challengesAndSolutions: [
      'Challenge: JNI overhead during high-throughput packet classification. Solution: Batched vector tensors before ONNX model evaluation.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
  {
    id: 'image-to-sketch',
    title: 'Image-to-Sketch Converter',
    subtitle: 'Algorithmic Edge & Pencil Sketch Synthesizer',
    tagline: 'Mathematical image-processing pipeline transforming raster imagery into fine-line art sketches.',
    description:
      'An image-processing application that converts photographs into sketch-like outputs.',
    featured: false,
    status: 'Completed Prototype',
    category: 'Computer Vision',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Canny Edge Detection'],
    problemStatement:
      'Generating realistic hand-drawn pencil sketch aesthetics from digital photographs requires precise gradient extraction, color Dodge blending, and edge suppression to eliminate digital noise.',
    architectureDetails:
      'Python image processing pipeline applying grayscale transformation, inverted Gaussian blurring, mathematical division color-dodge blending, and optional Canny edge overlays with NumPy array acceleration.',
    keyFeatures: [
      'Color Dodge Blending: Mathematical division algorithm simulating authentic pencil hatching.',
      'Canny Edge Synthesis: Controlled gradient thresholds to highlight subtle architectural and portrait lines.',
      'Interactive Parameter Tuning: Sliders for blur kernel radius, edge thresholds, and contrast boost.',
      'High-Resolution Export: Lossless PNG rendering preserving original image dimensions.',
    ],
    implementationHighlights: [
      'Vectorized pixel math using NumPy ndarray slicing for instantaneous image transforms.',
      'Implemented bilateral filtering to smooth skin texture while preserving sharp facial edges.',
    ],
    challengesAndSolutions: [
      'Challenge: Overexposure in high-contrast photographs. Solution: Added automatic histogram equalization before the inversion and blur stage.',
    ],
    githubUrl: 'https://github.com/tt4632577-del',
  },
];
