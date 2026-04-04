import './App.css'
import { useEffect, useMemo, useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Wrench,
  FileText,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const base = import.meta.env.BASE_URL

const roles = [
  'Robotics Engineer',
  'Certified CAD Designer & 3D Prototyper',
  'Graduate Researcher in Robotics',
]

const coreTechCards = [
  {
    title: 'C++, Python and MATLAB',
    icon: `${base}tech/cpp_logo.png`,
  },
  {
    title: 'PyTorch, TensorFlow and Keras',
    icon: `${base}tech/dummy-logo.png`,
  },
  {
    title: 'ROS and ROS2',
    icon: `${base}tech/ROS.png`,
  },
  {
    title: 'OpenCV and OpenCV Contrib',
    icon: `${base}tech/OpenCV_Logo.png`,
  },
  {
    title: 'Docker',
    icon: `${base}tech/docker_Logo.png`,
  },
  {
    title: 'NVIDIA Isaac Sim / Gazebo',
    icon: `${base}tech/nvidia.png`,
  },
  {
    title: 'SolidWorks (CSWP)',
    icon: `${base}tech/Solidworks_Badge.png`,
  },
  {
    title: 'Ubuntu',
    icon: `${base}tech/Ubuntu.png`,
  },
]

const coreTechPills = [
  'FAST-LIO2',
  'Jetson Nano / Orin Nano',
  'Raspberry Pi',
  'VICON MoCap',
  'UFactory xArm6',
  'Intel RealSense Depth Sensor',
  'Git Version Control',
]

const projects = [
  {
    id: 'rgb-mocap',
    title: 'RGB-Based Multi-Camera Motion Capture System',
    subtitle: 'ROS2 · OpenCV · Multi-View Geometry · Docker',
    summary:
      'Built a distributed 6-camera perception system for 3D robot tracking with sub-millisecond synchronization and real-time pose estimation.',
    previewType: 'video',
    previewSrc: `${base}projects/rgb-mocap.mp4`,
    github: 'https://github.com/YOUR_USERNAME/rgb-mocap',
    demo: 'https://www.youtube.com/watch?v=RGB_MOCAP_DEMO',
    post: 'https://www.linkedin.com/posts/YOUR_LINKEDIN_POST_RGB_MOCAP',
    tags: ['ROS2', 'OpenCV', 'Calibration', 'Triangulation'],
    hasExplore: true,
    exploreType: 'video',
    videoEmbed: 'https://www.youtube.com/embed/RGB_MOCAP_DEMO?autoplay=1&mute=1&rel=0',
    details: [
      'Designed a ROS2 + Docker pipeline for synchronized multi-camera capture with less than 1 ms temporal offset.',
      'Implemented calibration, triangulation, and bundle adjustment for accurate 3D localization.',
      'Integrated YOLO-based marker detection and published robot pose at 40 Hz.',
      'Benchmarked performance against Vicon and achieved around 2 cm 3D accuracy.',
    ],
  },
  {
    id: 'collab-transport',
    title: 'Decentralized Collaborative Transport',
    subtitle: 'ROS2 · TurtleBot3 · Isaac Sim · Sim-to-Real',
    summary:
      'Developed a decentralized multi-robot transport framework validated in simulation and on physical TurtleBot3 robots.',
    previewType: 'video',
    previewSrc: `${base}projects/collab-transport.mp4`,
    github: 'https://github.com/YOUR_USERNAME/decentralized-collab-transport',
    demo: 'https://www.youtube.com/watch?v=COLLAB_TRANSPORT_DEMO',
    post: 'https://www.linkedin.com/posts/YOUR_LINKEDIN_POST_COLLAB_TRANSPORT',
    tags: ['Multi-Robot', 'Isaac Sim', 'TurtleBot3', 'ROS2'],
    hasExplore: true,
    exploreType: 'grid',
    gridImages: [
      { src: `${base}projects/collab-sim.png`, label: 'Simulation Environment' },
      { src: `${base}projects/collab-real.png`, label: 'Real-World Experiment' },
      { src: `${base}projects/collab-results.png`, label: 'Results' },
      { src: `${base}projects/collab-extra.png`, label: 'Additional View' },
    ],
    details: [
      'Built distributed perception, localization, planning, and control pipeline for cooperative transport.',
      'Implemented role-based coordination and closed-loop transport on flat and inclined terrain.',
      'Validated on physical TurtleBot3 robots with objects up to 2× robot mass.',
      'Reduced sim-to-real gap by testing in Isaac Sim and transferring the system to real robots.',
    ],
  },
  {
    id: 'dream-lab',
    title: 'DREAM Lab Robotic System Deployment',
    subtitle: 'UR3 · xArm6 · ROS2 · System Integration',
    summary:
      'Deployed and debugged robotic platforms for real-world use by integrating sensors, actuators, motor controllers, and ROS2 control stacks.',
    previewType: 'video',
    previewSrc: `${base}projects/dream-lab.mp4`,
    github: 'https://github.com/YOUR_USERNAME/dream-lab-deployment',
    demo: 'https://www.youtube.com/watch?v=DREAM_LAB_DEMO',
    post: 'https://www.linkedin.com/posts/YOUR_LINKEDIN_POST_DREAM_LAB',
    tags: ['UR3', 'xArm6', 'ROS2', 'Deployment'],
    hasExplore: false,
  },
  {
    id: 'autonomous-nav',
    title: 'Autonomous Navigation & Planning',
    subtitle: 'FAST-LIO2 · RRT · BUG2 · PID',
    summary:
      'Built a complete navigation pipeline using LiDAR–IMU SLAM, costmaps, motion planning, and closed-loop tracking.',
    previewType: 'video',
    previewSrc: `${base}projects/autonomous-nav.mp4`,
    github: 'https://github.com/YOUR_USERNAME/autonomous-navigation-planning',
    demo: 'https://www.youtube.com/watch?v=AUTONOMOUS_NAV_DEMO',
    post: 'https://www.linkedin.com/posts/YOUR_LINKEDIN_POST_AUTONOMOUS_NAV',
    tags: ['FAST-LIO2', 'RRT', 'BUG2', 'PID'],
    hasExplore: false,
  },
  {
    id: 'stereo-vo',
    title: 'Stereo Visual Odometry',
    subtitle: 'KITTI · OpenCV · PnP + RANSAC · SE(3)',
    summary:
      'Developed a stereo VO pipeline for depth estimation, motion estimation, and trajectory recovery using classical vision methods.',
    previewType: 'video',
    previewSrc: `${base}projects/stereo-vo.mp4`,
    github: 'https://github.com/YOUR_USERNAME/stereo-visual-odometry',
    demo: 'https://www.youtube.com/watch?v=STEREO_VO_DEMO',
    post: 'https://www.linkedin.com/posts/YOUR_LINKEDIN_POST_STEREO_VO',
    tags: ['OpenCV', 'Stereo Vision', 'PnP', 'RANSAC'],
    hasExplore: false,
  },
  {
    id: 'forth-tech',
    title: 'Forth Tech Quadruped Robot',
    subtitle: 'ROS · IK · Gait Planning · IMU Stabilization',
    summary:
      'Built locomotion and control software for an 8-DOF quadruped robot on physical hardware.',
    previewType: 'image',
    previewSrc: `${base}projects/forth-tech-main.png`,
    github: 'https://github.com/YOUR_USERNAME/forth-tech-quadruped',
    demo: 'https://www.youtube.com/watch?v=FORTH_TECH_QUADRUPED_DEMO',
    post: 'https://www.linkedin.com/posts/YOUR_LINKEDIN_POST_FORTH_TECH',
    tags: ['Quadruped', 'ROS', 'IMU', 'Servo Control'],
    hasExplore: true,
    exploreType: 'slideshow',
    slides: [
      `${base}projects/forth-1.png`,
      `${base}projects/forth-2.png`,
      `${base}projects/forth-3.png`,
    ],
    details: [
      'Developed joint-level locomotion stack with inverse kinematics and gait scheduling.',
      'Built hardware abstraction layer to eliminate actuator jitter and reset failures.',
      'Integrated IMU feedback for posture stability and motion robustness.',
      'Improved synchronized servo actuation and controller timing under load on physical hardware.',
    ],
  },
]

const experience = [
  {
    title: 'Graduate Research Assistant',
    org: 'ADAMS Lab, University at Buffalo',
    period: 'Jan 2025 – Present',
    text: 'Leading research on RGB-based motion capture and decentralized multi-robot collaborative transport, building end-to-end ROS2 pipelines across perception, localization, planning, and control.',
  },
  {
    title: 'Robotics Deployment Engineer',
    org: 'DREAM Lab, University at Buffalo',
    period: 'May 2025 – Dec 2025',
    text: 'Led bring-up and deployment of robotic systems including UR3 and UFactory xArm6 platforms by integrating actuators, sensors, motor controllers, and ROS2-based control stacks while reducing onboarding time by 66%.',
  },
  {
    title: 'Robotics Junior Software Engineer',
    org: 'Forth Tech, Ahmedabad, India',
    period: 'Apr 2022 – Jul 2023',
    text: 'Built real-time locomotion and control architecture for an 8-DOF quadruped, including inverse kinematics, gait scheduling, synchronized actuator control, and IMU-based stabilization.',
  },
]

function ProjectModal({ project, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    if (!project || project.exploreType !== 'slideshow') return
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % project.slides.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [project])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <h3 className="modal-title">{project.title}</h3>

        {project.exploreType === 'video' && (
          <div className="modal-video-wrap">
            <iframe
              src={project.videoEmbed}
              title={project.title}
              className="modal-video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {project.exploreType === 'grid' && (
          <div className="modal-grid">
            {project.gridImages.map((item) => (
              <div key={item.label} className="modal-grid-item">
                <img src={item.src} alt={item.label} />
                <div className="modal-grid-label">{item.label}</div>
              </div>
            ))}
          </div>
        )}

        {project.exploreType === 'slideshow' && (
          <div className="modal-slideshow">
            <button
              className="slide-nav slide-nav-left"
              onClick={() =>
                setSlideIndex((prev) => (prev - 1 + project.slides.length) % project.slides.length)
              }
            >
              <ChevronLeft size={20} />
            </button>

            <img
              src={project.slides[slideIndex]}
              alt={`${project.title} ${slideIndex + 1}`}
              className="modal-slide-image"
            />

            <button
              className="slide-nav slide-nav-right"
              onClick={() =>
                setSlideIndex((prev) => (prev + 1) % project.slides.length)
              }
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {project.details && (
          <div className="modal-details">
            <p className="modal-summary">{project.summary}</p>
            <ul>
              {project.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectPreview({ project }) {
  if (project.previewType === 'video') {
    return (
      <video
        className="project-media-video"
        src={project.previewSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    )
  }

  return <img src={project.previewSrc} alt={project.title} className="project-media-img" />
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeProjectId, setActiveProjectId] = useState(null)

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) || null,
    [activeProjectId]
  )

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 40 : 70

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayedText.length + 1)
        setDisplayedText(nextText)

        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        const nextText = currentRole.slice(0, displayedText.length - 1)
        setDisplayedText(nextText)

        if (nextText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [activeProject])

  return (
    <div className="site">
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo">YASWANTH PORTFOLIO</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href={`${base}Venkata_S_Y_M_Thota_Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="nav-resume"
            >
              <FileText size={16} /> Resume
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1>Hi, I&apos;m Yaswanth</h1>
              <h2 className="typewriter-line">
                <span>{displayedText}</span>
                <span className="cursor">|</span>
              </h2>
              <p>
                Robotics engineer specializing in perception, autonomy, SLAM,
                planning, and real-world robotic system deployment. I build
                ROS2-based pipelines that connect sensing, localization,
                planning, and feedback control on physical robotic platforms.
              </p>
              <div className="hero-buttons">
                <a className="btn btn-light" href="#about">
                  About Me
                </a>
                <a className="btn btn-outline" href="#projects">
                  View Work
                </a>
              </div>
            </div>

            <div className="hero-image-wrap">
              <div className="profile-circle">
                <img
                  src={`${base}profile.png`}
                  alt="Venkata Sai Yaswanth Mohan Thota"
                />
              </div>
              <div className="hero-card">
                <Briefcase size={28} />
                <div>
                  <div className="hero-card-title">4.0 GPA</div>
                  <div className="hero-card-sub">MS Robotics</div>
                  <div className="hero-card-exp">3 Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container two-col">
          <div>
            <div className="section-pill">About Me</div>
            <h3>Venkata Sai Yaswanth Mohan Thota</h3>
            <p>
              I am a Robotics Engineer focused on real-world autonomy systems,
              multi-robot coordination, perception, and system integration. My
              work spans ROS2, SLAM, multi-view geometry, motion planning,
              feedback control, and deployment of robotic systems on physical
              hardware.
            </p>
            <p>
              At the University at Buffalo, I have worked on a low-cost
              RGB-based motion capture system and decentralized collaborative
              transport using TurtleBot3 robots. I have also deployed robotic
              platforms such as UR3 and UFactory xArm6, and previously built
              locomotion and control software for an 8-DOF quadruped robot in
              industry.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-title">
                <MapPin size={18} /> Location
              </div>
              <p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Fremont,+CA,+USA"
                  target="_blank"
                  rel="noreferrer"
                  className="info-link"
                >
                  Fremont, CA, USA
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-title">
                <Mail size={18} /> Email
              </div>
              <p>
                <a href="mailto:yaswanththota000@gmail.com" className="info-link">
                  yaswanththota000@gmail.com
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-title">
                <Phone size={18} /> Phone
              </div>
              <p>
                <a href="tel:+17165471353" className="info-link">
                  +1-716-547-1353
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-title">
                <GraduationCap size={18} /> Education
              </div>
              <p><strong>M.S. in Robotics, University at Buffalo</strong></p>
              <p>GPA: 4.0/4.0 | Thesis track | Dec 2025</p>
              <p className="mt"><strong>B.Tech in Mechanical Engineering (Honours)</strong></p>
              <p>Lovely Professional University | GPA: 3.77/4.0</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <div className="section-pill">
            <Wrench size={16} /> Core Technologies
          </div>
          <h3>Core Technologies</h3>

          <div className="skills-grid tech-grid">
            {coreTechCards.map((item) => (
              <div key={item.title} className="skill-card tech-card">
                <img src={item.icon} alt="" className="tech-logo" />
                <div className="tech-name">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="tech-pill-row">
            {coreTechPills.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-pill">
            <FolderOpen size={16} /> Projects
          </div>
          <h3>Selected Projects</h3>
          <p className="section-lead">
            Research, deployment, autonomy, perception, and real-world robotic systems work.
          </p>

          <div className="projects-grid-wide compact-projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card wide-card compact-project-card">
                <div className="project-media compact-project-media">
                  <ProjectPreview project={project} />
                </div>

                <div className="project-body compact-project-body">
                  <h4>{project.title}</h4>
                  <div className="project-subtitle">{project.subtitle}</div>
                  <p className="project-summary">{project.summary}</p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links text-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-text-link">
                      GitHub <ArrowUpRight size={16} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-text-link">
                      YouTube <ArrowUpRight size={16} />
                    </a>
                    <a href={project.post} target="_blank" rel="noreferrer" className="project-text-link">
                      LinkedIn <ArrowUpRight size={16} />
                    </a>
                    {project.hasExplore && (
                      <button
                        className="project-text-link project-explore-btn"
                        onClick={() => setActiveProjectId(project.id)}
                      >
                        Explore <ArrowUpRight size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-pill">
            <Briefcase size={16} /> Experience
          </div>
          <h3>Experience</h3>

          <div className="experience-list">
            {experience.map((item) => (
              <div key={item.title} className="experience-card">
                <div className="experience-head">
                  <div>
                    <h4>{item.title}</h4>
                    <div className="experience-org">{item.org}</div>
                  </div>
                  <div className="experience-period">{item.period}</div>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-box">
          <h3>Contact</h3>
          <p className="contact-intro">
            Open to conversations around robotics, autonomy, perception, controls, simulation, and real-world system deployment.
          </p>

          <div className="contact-buttons">
            <a className="btn btn-dark" href="mailto:yaswanththota000@gmail.com">
              <Mail size={18} /> Email Me
            </a>
            <a
              className="btn btn-secondary"
              href="https://linkedin.com/in/venkata-sai-thota"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProjectId(null)}
      />
    </div>
  )
}

export default App