// ============================================================
// SITE DATA — Justin Davis Personal Academic Website
// "Warm Slate" design system
// All content sourced from existing justincdavis.github.io
// ============================================================

export const profile = {
  name: "Justin Davis",
  title: "PhD Student",
  affiliation: "HPSS Lab @ Colorado School of Mines",
  location: "Golden, CO",
  email: "jcdavis@mines.edu",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663303817755/NwXtpGw2BKpmDDxCF2yozD/headshot_full_0353a54e.jpg",
  cv: "/files/cv.pdf",
  bio: [
    "I am a PhD student in computer science at the Colorado School of Mines working in the HPSS lab under Dr. Mehmet Belviranli. I previously completed my BS in computer science also at Mines, specializing in robotics and intelligent systems.",
    "My research interests include efficient machine learning, object detection, multi-object tracking, edge computing, and heterogeneous computing. I have worked on optimizing the performance of object detection workloads in continuous detection scenarios, specifically focusing on how multiple object detection DNNs can be utilized across multiple hardware accelerators.",
    "Throughout my PhD, I have primarily worked with NVIDIA Jetson SoCs and other edge devices, such as the Luxonis OAK and Raspberry Pi series. My work has focused on performance modeling, energy and power draw profiling, DNN accuracy assessment, and developing heuristics for all of the above."
  ],
  links: {
    googleScholar: "https://scholar.google.com/citations?user=6K9apqAAAAAJ&hl=en",
    orcid: "https://orcid.org/0009-0001-1009-419X",
    github: "https://github.com/justincdavis",
    kaggle: "https://www.kaggle.com/justinconnordavis",
    linkedin: "https://www.linkedin.com/in/justinconnordavis/",
    labAdvisor: "https://mehmet.belviranli.com/",
    university: "https://cs.mines.edu/",
  },
  researchInterests: [
    "Efficient Machine Learning",
    "Object Detection",
    "Multi-Object Tracking",
    "Edge Computing",
    "Heterogeneous Computing",
    "Performance Modeling",
  ],
};

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  date: string;
  category: "conference" | "journal" | "workshop" | "preprint";
  abstract: string;
  excerpt: string;
  figure?: string;
  figureCaption?: string;
  paperUrl?: string;
  slidesUrl?: string;
  codeUrl?: string;
  docsUrl?: string;
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    id: "ics25_harness",
    title: "Harness: Enabling Automated Performance Characterization of Heterogeneous Accelerators",
    authors: "Justin Davis and Mehmet E. Belviranli",
    venue: "ACM International Conference on Supercomputing (ICS) 2025",
    year: 2025,
    date: "June 2025",
    category: "conference",
    excerpt: "Harness is an automated framework for characterizing the performance of heterogeneous accelerators, enabling systematic benchmarking across diverse hardware platforms.",
    abstract: "Modern computing systems increasingly rely on heterogeneous accelerators to meet performance and energy demands. However, characterizing the performance of these accelerators remains a labor-intensive and error-prone process. We present Harness, an automated framework that enables systematic performance characterization of heterogeneous accelerators. Harness provides a unified interface for defining workloads, managing hardware resources, and collecting performance metrics across diverse hardware platforms including GPUs, NPUs, and FPGAs. Our evaluation demonstrates that Harness significantly reduces the engineering effort required for performance characterization while providing comprehensive and reproducible results.",
    figure: "https://d2xsxph8kpxj0f.cloudfront.net/310519663303817755/NwXtpGw2BKpmDDxCF2yozD/ics25_figure-mo5C3JS5b3QK662WVFACLa.webp",
    figureCaption: "Harness framework architecture showing the pipeline from CPU host through the workload scheduler and memory manager to multiple hardware accelerators.",
    paperUrl: "/files/ics25_harness.pdf",
    bibtex: `@inproceedings{davis2025harness,
  title     = {Harness: Enabling Automated Performance Characterization of Heterogeneous Accelerators},
  author    = {Davis, Justin and Belviranli, Mehmet E.},
  booktitle = {Proceedings of the ACM International Conference on Supercomputing (ICS)},
  year      = {2025},
  publisher = {ACM},
}`,
  },
  {
    id: "date24_context",
    title: "Context-aware Multi-Model Object Detection for Diversely Heterogeneous Compute Systems",
    authors: "Justin Davis and Mehmet E. Belviranli",
    venue: "Design Automation Test Europe (DATE) 2024",
    year: 2024,
    date: "March 25, 2024",
    category: "conference",
    excerpt: "Improving energy efficiency on heterogeneous compute systems by exploiting non-monotonic relationships between accuracy-energy-latency between model and hardware architecture pairs.",
    abstract: "In recent years, deep neural networks (DNNs) have gained widespread adoption for continuous mobile object detection (OD) tasks, particularly in autonomous systems. However, a prevalent issue in their deployment is the one-size-fits-all approach, where a single DNN is used, resulting in inefficient utilization of computational resources. This inefficiency is particularly detrimental in energy-constrained systems, as it degrades overall system efficiency. We identify that the contextual information embedded in the input data stream could be exploited to allow a more efficient multi-model-based OD process. In this paper, we propose SHIFT which continuously selects from a variety of DNN-based OD models depending on the dynamically changing contextual information and computational constraints. During this selection, SHIFT uniquely considers multi-accelerator execution to better optimize the energy-efficiency while satisfying the latency constraints. Our proposed methodology results in improvements of up to 7.5× in energy usage and 2.8× in latency compared to state-of-the-art GPU-based single model OD approaches.",
    figure: "https://d2xsxph8kpxj0f.cloudfront.net/310519663303817755/NwXtpGw2BKpmDDxCF2yozD/publication_fig-HteqHzWTr9cpSVXtFLDK25.webp",
    figureCaption: "The SHIFT framework dynamically selects among multiple DNN-based OD models based on contextual information and computational constraints, leveraging multi-accelerator execution for energy efficiency.",
    paperUrl: "/files/date24_context.pdf",
    slidesUrl: "/files/date24_context_slides.pdf",
    codeUrl: "https://github.com/justincdavis/cv2ext/tree/main/src/cv2ext/research/shift",
    docsUrl: "https://cv2tools.readthedocs.io/en/latest/source/cv2ext.research.shift.html",
    bibtex: `@inproceedings{davis2024context,
  title     = {Context-aware Multi-Model Object Detection for Diversely Heterogeneous Compute Systems},
  author    = {Davis, Justin and Belviranli, Mehmet E.},
  booktitle = {Proceedings of Design, Automation and Test in Europe Conference (DATE)},
  year      = {2024},
  pages     = {1--6},
  publisher = {IEEE},
  doi       = {10.23919/DATE58400.2024.10546844},
}`,
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  codeUrl: string;
  docsUrl?: string;
  tags: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: "trtutils",
    title: "trtutils",
    description: "Lightweight and generic TensorRT engines in Python, with a fast YOLO implementation",
    longDescription: "trtutils is a lightweight Python library that simplifies working with TensorRT for deep learning inference. It offers a generic YOLO interface designed to provide up to a 2× end-to-end inference speedup compared to similar Python-only inference frameworks. Additionally, it provides a unified TRTEngine class to easily load and run TensorRT engines. By managing memory usage and allocations efficiently, trtutils helps streamline deployment and ensures optimal resource utilization during model inference.",
    codeUrl: "https://github.com/justincdavis/trtutils",
    docsUrl: "https://trtutils.readthedocs.io/en/latest/index.html",
    tags: ["TensorRT", "Python", "Deep Learning", "YOLO", "Inference"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    id: "cv2ext",
    title: "cv2ext",
    description: "JIT compiled wrappers and utilities for OpenCV allowing fast and highly threaded workloads",
    longDescription: "cv2ext provides a collection of submodules allowing faster processing or ease-of-use of common OpenCV tasks via Python. For IO reading of videos or displaying images, provides a buffered and threaded implementation for each allowing up to 8× speedup compared to a serial implementation. Additionally, provides a submodule for bounding box operations with JIT compilation and provides a research submodule with various research paper implementations.",
    codeUrl: "https://github.com/justincdavis/cv2ext",
    docsUrl: "https://cv2tools.readthedocs.io/en/latest/index.html",
    tags: ["OpenCV", "Python", "JIT", "Computer Vision", "Threading"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  },
  {
    id: "jetsontools",
    title: "jetsontools",
    description: "Processor utilization and power draw profiling with context managers for NVIDIA Jetson",
    longDescription: "Provides utilities for processing tegrastats on NVIDIA Jetson devices in a background process via Python context managers. Allows a significantly faster sampling rate compared to utilizing jetson-stats during runtime in a Python process. Enables precise power draw and utilization profiling for edge AI workloads.",
    codeUrl: "https://github.com/justincdavis/jetsontools",
    docsUrl: "https://jetsontools.readthedocs.io/en/latest/index.html",
    tags: ["NVIDIA Jetson", "Python", "Profiling", "Edge Computing", "Power"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  },
  {
    id: "oakutils",
    title: "oakutils",
    description: "Wrapper around depthai API for easily defining pipelines, with a custom PyTorch model compiler",
    longDescription: "oakutils is a library designed to provide an easy-to-use wrapper around the depthai API for the Luxonis OAK cameras. The wrappers allow a pipeline to be defined with only a few lines of code and are interoperable with the Luxonis official libraries. oakutils also bundles OpenCV compatible calibration modules, Aruco detection utilities, and a custom compiler pipeline to compile custom PyTorch model definitions onto the cameras internal processor.",
    codeUrl: "https://github.com/justincdavis/oakutils",
    docsUrl: "https://oakutils.readthedocs.io/en/latest/index.html",
    tags: ["Luxonis OAK", "depthai", "PyTorch", "Computer Vision", "Edge AI"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
  },
  {
    id: "remotescript",
    title: "remotescript",
    description: "Remotely run Python scripts on multiple devices concurrently",
    longDescription: "The remotescript library enables users to execute Python scripts on remote machines with ease. It facilitates seamless remote connections, allowing for efficient script deployment and execution across various systems. The mapping to systems is defined with a single configuration file, making distributed experiment management straightforward.",
    codeUrl: "https://github.com/justincdavis/remotescript",
    docsUrl: "https://remotescript.readthedocs.io/en/latest/index.html",
    tags: ["Python", "Remote Execution", "Distributed Systems", "Automation"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  },
];

export interface Talk {
  id: string;
  title: string;
  type: "Conference Talk" | "Guest Lecture" | "Poster" | "Invited Talk";
  venue: string;
  location: string;
  date: string;
  description: string;
  slidesUrl?: string;
  paperUrl?: string;
}

export const talks: Talk[] = [
  {
    id: "date24",
    title: "DATE24 — Conference Proceedings Talk",
    type: "Conference Talk",
    venue: "Palacio De Congresos Valencia",
    location: "Valencia, Spain",
    date: "March 25, 2024",
    description: "Presented a conference proceeding talk on optimizing object detection deep neural networks (DNNs) for edge devices, focusing on the role of context awareness in improving energy efficiency. The talk explored the inefficiencies of a one-size-fits-all approach in continuous mobile object detection (OD) tasks and introduced SHIFT, a framework that dynamically selects among multiple OD models based on contextual information and computational constraints. Additionally, the discussion highlighted how SHIFT leverages multi-accelerator execution to optimize energy efficiency while meeting latency requirements, achieving up to 7.5× energy savings and 2.8× latency reduction compared to state-of-the-art GPU-based single-model OD approaches.",
    slidesUrl: "/files/date24_context_slides.pdf",
    paperUrl: "/files/date24_context.pdf",
  },
  {
    id: "gtc25-jetson-poster",
    title: "Jetson Performance Characterization — GTC 2025 Poster",
    type: "Poster",
    venue: "NVIDIA GTC 2025",
    location: "San Jose, CA",
    date: "March 2025",
    description: "Presented a poster on performance characterization of NVIDIA Jetson edge AI platforms, covering power draw profiling, DNN accuracy assessment, and benchmarking methodology across the Jetson product family.",
    paperUrl: "/files/gtc25_jetson_poster.pdf",
  },
  {
    id: "beyond-hardware-2023",
    title: "Beyond CPU Computing (Heterogeneous Computing) — Guest Lecture",
    type: "Guest Lecture",
    venue: "Brown Hall, Colorado School of Mines",
    location: "Golden, CO",
    date: "September 15, 2023",
    description: "Delivered a guest lecture on non-CPU hardware models and non-Von Neumann architectures, covering Flynn's taxonomy, including Single Instruction Single Data (SISD), Single Instruction Multiple Data (SIMD), Multiple Instruction Single Data (MISD), and Multiple Instruction Multiple Data (MIMD) models. Additionally, discussed very-long-instruction-word (VLIW) processors and field-programmable gate arrays (FPGAs), highlighting their architectures, applications, and distinctions from traditional computing paradigms.",
  },
  {
    id: "beyond-programming-2023",
    title: "Beyond CPU Computing (Heterogeneous Computing) — Guest Lecture",
    type: "Guest Lecture",
    venue: "Brown Hall, Colorado School of Mines",
    location: "Golden, CO",
    date: "September 8, 2023",
    description: "Delivered a guest lecture on parallel programming models, focusing on CUDA and demonstrating kernel creation. Additionally, covered general-purpose parallel programming frameworks such as OpenCL and SYCL with brief examples. Discussed domain-specific languages like Halide and hardware-specific acceleration models such as TensorRT, highlighting their applications and distinctions in high-performance computing.",
  },
  {
    id: "os-interrupts-2023",
    title: "Operating Systems — Guest Lecture",
    type: "Guest Lecture",
    venue: "Brown Hall, Colorado School of Mines",
    location: "Golden, CO",
    date: "February 14, 2023",
    description: "Delivered a guest lecture on interrupts in operating systems, covering key concepts, practical examples, and engaging in a Q&A session with students.",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  preview: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "accelerating-yolo-inference",
    title: "Accelerating End-to-End YOLO Inference in Python",
    date: "March 2025",
    tags: ["TensorRT", "YOLO", "Python", "Performance", "NVIDIA Jetson"],
    preview: "There are many ways to run inference of a YOLO model through Python. Underneath many of these methods is the popular machine learning framework PyTorch. While PyTorch is great for creating, iterating, and training models it suffers in inference performance — particularly on edge devices like the NVIDIA Jetson series.",
    content: `There are many ways to run inference of a YOLO model through Python. Underneath many of these methods is the popular machine learning framework PyTorch. PyTorch powers much of the industry and academic community who do research in machine learning focusing on CNN models through modern day transformer based architectures.

While PyTorch is great for creating, iterating, and training models it suffers in inference performance. This is because each layer in PyTorch corresponds to a single (or multiple) kernel call on the GPU inference programming model used by the hardware — examples of this could be NVIDIA's CUDA or AMD's ROCM.

On fast and modern desktop hardware GPUs the usage of PyTorch provides reasonable performance since the runtime is low. But on more performance limited devices the use of PyTorch can introduce significant overhead.

Take for example, a NVIDIA Jetson series board such as the Xavier NX or the Orin AGX. These SoCs are designed to provide significant GPU computational power relative to a fixed physical size and power profile. The Orin AGX provides a 2048 CUDA core GPU and an 8-core ARM CPU. Compared to the GPU, the CPU is very weak, meaning that all possible computation should be offloaded to the GPU when possible.

When PyTorch executes a layer of a DNN, it is represented with at least a single CUDA kernel call and then a thread synchronization. Once the first pass on the model has been executed this overhead is lower since the memory allocations do not need to occur. However, the cost of calling a kernel and synchronizing on each layer execution means that the processing time can be prohibitively high.

On such devices, there typically exists a DNN "compiler" which aims to remove these inefficiencies in execution. For NVIDIA GPUs and Jetsons this is called TensorRT, for Intel based processors this is OpenVINO.

By compiling a DNN with TensorRT, you can typically observe up to a 2× reduction in inference latency. However, when comparing the inference time in Python for popular inference frameworks vs. the raw execution time of the compiled model, the overhead of using the framework can be incredibly high.

**What are the bottlenecks?**

The primary bottlenecks in Python-based YOLO inference are: (1) CPU-side preprocessing overhead, (2) memory transfer latency between host and device, (3) Python interpreter overhead for per-layer execution, and (4) lack of page-locked (pinned) memory usage.

By addressing each of these systematically — using pinned memory allocations, minimizing CPU-side setup, eliminating unnecessary data transfers, and leveraging TensorRT's optimized execution engine — significant end-to-end speedups are achievable. The trtutils library was developed to address exactly these bottlenecks.`,
  },
];
