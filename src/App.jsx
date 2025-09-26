"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  ChevronDown,
  Code,
  Database,
  Brain,
  Smartphone,
  Globe,
  Server,
  ArrowRight,
  Star,
  Zap,
   
  
  Palette,
  Brush,
  Layout,
  Coffee,
} from "lucide-react"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "tech-stack", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#222222]/90 backdrop-blur-xl border-b border-[#929292]/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-[#FAFAFA] text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Projects", id: "projects" },
              { name: "Tech Stack", id: "tech-stack" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full group ${
                  activeSection === item.id
                    ? "text-[#222222] bg-[#FAFAFA] shadow-lg"
                    : "text-[#D1D1D1] hover:text-[#FAFAFA] hover:bg-[#FAFAFA]/10"
                }`}
              >
                {item.name}
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#FAFAFA]/20 to-[#D1D1D1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeSection === item.id ? "hidden" : ""}`}
                ></div>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#FAFAFA] hover:text-[#D1D1D1] transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#222222]/95 backdrop-blur-xl border-t border-[#929292]/20 rounded-b-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {["Home", "About", "Projects", "Tech Stack", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="block w-full text-left px-4 py-3 text-[#D1D1D1] hover:text-[#FAFAFA] hover:bg-[#FAFAFA]/10 transition-all duration-300 rounded-xl"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  const HeroSection = () => (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#222222] via-[#222222] to-[#1a1a1a] flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-[#222222]/90 backdrop-blur-sm text-[#FAFAFA] text-sm font-medium rounded-full border border-[#FAFAFA]/30 animate-fade-in-up delay-300">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#FAFAFA] mb-8 leading-none tracking-tight">
            Hi, I'm{" "}
            <span className="relative inline-block text-[#FAFAFA] hover:text-[#D1D1D1] transition-colors duration-500 cursor-default">
              Laksitha
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#FAFAFA] mb-6 font-light tracking-wide animate-fade-in-up delay-500">
            Final Year <span className="font-semibold text-[#FAFAFA]">CSD Student</span>
          </p>

          <p className="text-lg sm:text-xl lg:text-2xl text-[#D1D1D1] mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-700">
             Passionate about UI/UX design, creative problem-solving, and building user-centered solutions that blend technology with design.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-1000">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-10 py-5 bg-[#FAFAFA] text-[#222222] font-bold text-lg rounded-2xl hover:bg-[#D1D1D1] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-[#FAFAFA]/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] to-[#D1D1D1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group px-10 py-5 border-2 border-[#FAFAFA]/50 text-[#FAFAFA] font-bold text-lg rounded-2xl hover:border-[#FAFAFA] hover:bg-[#FAFAFA]/10 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center">
                Get In Touch
                <Mail className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#D1D1D1]" />
      </div>
    </section>
  )

  const AboutSection = () => (
    <section id="about" className="relative py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V60c100,40,200,40,300,20c100,-20,200,-20,300,0c100,20,200,20,300,0c100,-20,200,-20,300,20V0Z"
            fill="#222222"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-[#222222]/10 text-[#222222] text-sm font-semibold rounded-full">
              About Me
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#222222] mb-6 tracking-tight">
            Crafting Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#222222] to-[#929292]">
              Experiences
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#222222] to-[#929292] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-12">
          <p className="text-2xl sm:text-3xl text-[#222222] font-light leading-relaxed tracking-wide">
  I'm a passionate <span className="font-semibold text-[#222222]">Final Year CSD student</span> with strong interests in <span className="font-medium text-[#222222]">software development</span> and <span className="font-medium text-[#222222]">UI/UX design</span>, solving problems creatively, and building human-centered digital experiences.
</p>

<p className="text-xl sm:text-2xl text-[#222222]/80 leading-relaxed max-w-4xl mx-auto">
  My journey in technology and design is driven by <span className="font-medium text-[#222222]">curiosity</span> and the desire to craft solutions that combine functionality, performance, and aesthetics.
</p>

<p className="text-xl sm:text-2xl text-[#222222]/80 leading-relaxed max-w-4xl mx-auto">
  Throughout my academic journey, I've worked on projects ranging from <span className="font-medium text-[#222222]">efficient web applications and backend systems</span> to <span className="font-medium text-[#222222]">intuitive UI/UX designs</span>, integrating technical skills with design thinking.
</p>

<p className="text-xl sm:text-2xl text-[#222222]/80 leading-relaxed max-w-4xl mx-auto">
  When I'm not coding or designing, you can find me exploring <span className="font-medium text-[#222222]">emerging technologies</span>, experimenting with <span className="font-medium text-[#222222]">creative interfaces</span>, or sharing insights with the tech and design community.
</p>


          <div className="pt-8">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-[#222222]/5 rounded-full border border-[#222222]/10 hover:border-[#222222]/30 transition-all duration-700 transform hover:scale-110 hover:-translate-y-6 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer">
              <Star className="w-6 h-6 text-[#222222]" />
              <span className="text-lg font-medium text-[#222222]">Always learning, always growing</span>
              <Star className="w-6 h-6 text-[#222222]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const ProjectsSection = () => {
    const projects = [
      {
        title: "ICEDREAMS",
        description:
          "Designed a visually appealing UI for an ice cream-selling platform, focusing on engaging layouts and smooth user interactions.",
         github: "https://github.com/laksitha-s/ICEDREAMS",
        demo: "https://www.figma.com/proto/LBKGH8MrLn54rIgb5rxXhc/Untitled?page-id=0%3A1&node-id=1-136&viewport=80%2C99%2C0.26&t=0WLPrrKHL8HvlQgF-1&scaling=min-zoom&content-scaling=fixed ",
        tags: ["Figma", "Canva", "UI Design", ],
        featured: true,
        image: "/assets/ice cream.png",
      },
      {
        title: "KVR Plashtics",
        description:
          "Developed an intuitive UX design for a hanger-selling app, optimizing user flow, navigation, and accessibility for a seamless shopping experience.",
        github: "https://github.com/laksitha-s/KVR-Plashtics",
        demo: "https://www.figma.com/proto/17jpfbUjLmdyEFmznlzLGs/new-ui-icecream?page-id=0%3A1&node-id=1-2&viewport=345%2C254%2C0.13&t=DaNSJbwe5mdbeirD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A86",
        tags: ["Figma", "UX Design", ],
        image: "/assets/kvr.png",
      },
      {
        title: "QuickBite ",
        description:
          "Created a responsive and modern UI for a quick-order food application, combining vibrant visuals with functional design to enhance user engagement.",
        github: "https://github.com/laksitha-s/QuickBite",
        demo: "https://www.figma.com/proto/RuOUbpVdvkkQiu30YE7WgT/food-delivery-app?page-id=0%3A1&node-id=1-292&p=f&viewport=90%2C230%2C0.24&t=L0awWxqsGJ0rnrYZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A448",
        tags: ["Figma", "Canva", "UI Design", ],
        image: "/assets/quick bite.png",
      },
      {
        title: "Mood-Based Movie Recommender",
        description:
          "Built a machine learning model that provides personalized movie recommendations based on user preferences and viewing history.",
        github: "https://github.com/laksitha-s/Mood-Based-Movie-Recommender",
        demo: "https://mood-based-movie-recommender.streamlit.app/",
        tags: ["Python", "Pandas", "NumPy", "Machine Learning"],
        image: "/assets/movie.png",
      },
      {
        title: "BookLyft ",
        description:
          "Developed a MERN stack application that recommends books based on user mood and reading habits, featuring personalized dashboards and interactive tracking.",
        github: "https://github.com/laksitha-s/BOOK-RECOMMENDATION-WEBSITE---BOOKLYFT",
        demo: "",
        tags: ["Node.js", "Express", "MongoDB", "React"],
        image: "/assets/booklyt.png",
      },
      {
        title: "Allure Homez",
        description:
          "Built a MERN stack portfolio application for a textile company to showcase materials and projects, emphasizing clean UI/UX and seamless navigation.",
        github: "#",
        demo: "#",
        tags: ["Node.js", "Express", "MongoDB", "React"],
        image: "/assets/homes.png",
      },
    ]

    return (
      <section id="projects" className="py-32 bg-[#222222] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z"
              fill="#222222"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-[#FAFAFA]/10 text-[#FAFAFA] text-sm font-semibold rounded-full border border-[#FAFAFA]/20">
                My Work
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA] mb-6 tracking-tight">
              Featured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAFA] to-[#D1D1D1]">
                Projects
              </span>
            </h2>
            <p className="text-xl text-[#929292] max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I've worked on, showcasing my skills in various technologies and domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-[#FAFAFA]/5 to-[#929292]/5 backdrop-blur-sm rounded-3xl p-8 border border-[#929292]/20 hover:border-[#FAFAFA]/40 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FAFAFA]/20 to-[#D1D1D1]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {project.featured && (
                    <div className="absolute -top-4 -right-4">
                      <div className="bg-[#FAFAFA] text-[#222222] px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Zap className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#FAFAFA] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FAFAFA] group-hover:to-[#D1D1D1] transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-[#D1D1D1] leading-relaxed text-lg mb-6">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags?.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-[#FAFAFA]/10 text-[#FAFAFA] text-sm rounded-full border border-[#FAFAFA]/20 hover:bg-[#FAFAFA]/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="group/btn flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#FAFAFA]/10 text-[#FAFAFA] rounded-xl hover:bg-[#FAFAFA]/20 transition-all duration-300 border border-[#FAFAFA]/20 hover:border-[#FAFAFA]/40 hover:scale-105"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="group/btn flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#FAFAFA] text-[#222222] rounded-xl hover:bg-[#D1D1D1] transition-all duration-300 font-semibold hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const TechStackSection = () => {
    const technologies = [
  { name: "Figma", icon: <Palette className="w-12 h-12" />, color: "from-pink-400 to-purple-600" },
  { name: "Adobe Illustrator", icon: <Brush className="w-12 h-12" />, color: "from-orange-400 to-red-600" },
  { name: "Framer", icon: <Layout className="w-12 h-12" />, color: "from-blue-400 to-indigo-600" },
  { name: "React", icon: <Code className="w-12 h-12" />, color: "from-blue-400 to-blue-600" },
  { name: "Python", icon: <Server className="w-12 h-12" />, color: "from-yellow-400 to-yellow-600" },
  { name: "Java", icon: <Coffee className="w-12 h-12" />, color: "from-red-500 to-orange-600" },
  { name: "Node.js", icon: <Server className="w-12 h-12" />, color: "from-green-400 to-green-600" },
  { name: "MongoDB", icon: <Database className="w-12 h-12" />, color: "from-green-500 to-green-700" },
]


    return (
      <section id="tech-stack" className="relative py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V60c100,40,200,40,300,20c100,-20,200,-20,300,0c100,20,200,20,300,0c100,-20,200,-20,300,20V0Z"
              fill="#222222"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-[#222222]/10 text-[#222222] text-sm font-semibold rounded-full">
                Technologies
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#222222] mb-6 tracking-tight">
              Tech
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#222222] to-[#929292]">
                Stack
              </span>
            </h2>
            <p className="text-xl text-[#222222]/70 max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border-2 border-[#222222]/10 hover:border-[#222222]/30 transition-all duration-700 transform hover:scale-110 hover:-translate-y-6 shadow-xl hover:shadow-2xl overflow-hidden cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-700`}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="text-[#222222] group-hover:text-white transition-all duration-700 mb-6 transform group-hover:scale-125 group-hover:rotate-12">
                      {tech.icon}
                    </div>
                    <h3 className="text-[#222222] font-bold text-center text-lg group-hover:text-white transition-all duration-700">
                      {tech.name}
                    </h3>
                  </div>

                  <div
                    className={`absolute -inset-2 bg-gradient-to-br ${tech.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10`}
                  ></div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 group-hover:animate-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const ContactSection = () => (
    <section id="contact" className="py-32 bg-[#222222] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V60c100,40,200,40,300,20c100,-20,200,-20,300,0c100,20,200,20,300,0c100,-20,200,-20,300,20V0Z"
            fill="#FAFAFA"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-[#FAFAFA]/10 text-[#FAFAFA] text-sm font-semibold rounded-full border border-[#FAFAFA]/20">
              Contact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FAFAFA] mb-6 tracking-tight">
            Let's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAFA] to-[#D1D1D1]">
              Connect
            </span>
          </h2>
          <p className="text-xl text-[#929292] max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              { icon: Mail, title: "Email", info: "laksithaa2704@gmail.com", color: "from-red-400 to-red-600" },
              {
                icon: Linkedin,
                title: "LinkedIn",
                info: "linkedin.com/in/laksitha-s-450572259",
                color: "from-blue-400 to-blue-600",
              },
              { icon: Github, title: "GitHub", info: "github.com/laksitha-s", color: "from-gray-400 to-gray-600" },
            ].map((contact, index) => (
              <div
                key={index}
                className="group flex items-center space-x-6 p-6 bg-[#FAFAFA]/5 backdrop-blur-sm rounded-3xl border border-[#929292]/20 hover:border-[#FAFAFA]/40 transition-all duration-500 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-[#FAFAFA] font-bold text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FAFAFA] group-hover:to-[#D1D1D1] transition-all duration-500">
                    {contact.title}
                  </h3>
                  <p className="text-[#929292] text-lg group-hover:text-[#D1D1D1] transition-colors duration-300">
                    {contact.info}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#FAFAFA]/10 to-[#929292]/5 backdrop-blur-sm rounded-3xl p-10 border border-[#929292]/20 hover:border-[#FAFAFA]/30 transition-all duration-500 shadow-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[#FAFAFA] font-semibold mb-3 text-lg">Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-[#222222]/50 border-2 border-[#929292]/30 rounded-2xl text-[#FAFAFA] placeholder-[#929292] focus:border-[#FAFAFA] focus:outline-none transition-all duration-300 backdrop-blur-sm hover:border-[#D1D1D1]/50"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label className="block text-[#FAFAFA] font-semibold mb-3 text-lg">Email</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-[#222222]/50 border-2 border-[#929292]/30 rounded-2xl text-[#FAFAFA] placeholder-[#929292] focus:border-[#FAFAFA] focus:outline-none transition-all duration-300 backdrop-blur-sm hover:border-[#D1D1D1]/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-[#FAFAFA] font-semibold mb-3 text-lg">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-6 py-4 bg-[#222222]/50 border-2 border-[#929292]/30 rounded-2xl text-[#FAFAFA] placeholder-[#929292] focus:border-[#FAFAFA] focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm hover:border-[#D1D1D1]/50"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full px-8 py-5 bg-[#FAFAFA] text-[#222222] font-bold text-lg rounded-2xl hover:bg-[#D1D1D1] transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center justify-center">
                  Send Message
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )

  const Footer = () => (
    <footer className="bg-[#222222] border-t border-[#929292]/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-[#929292] text-lg">
              © 2025 <span className="text-[#FAFAFA] font-semibold">Laksitha</span>. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8">
  {[
    { icon: Github, href: "https://github.com/laksitha-s", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "https://linkedin.com/in/laksitha-s-450572259", color: "hover:text-blue-400" },
    // { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ].map((social, index) => (
    <a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[#929292] ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
    >
      <social.icon className="w-7 h-7" />
    </a>
  ))}
</div>

        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-[#222222] text-[#FAFAFA] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Added shimmer animation for tech stack cards */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #222222;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #929292;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #D1D1D1;
        }
      `}</style>
    </div>
  )
}

export default App
