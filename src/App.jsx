import './App.css'
import {
  Mail,
  MapPin,
  Phone,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Wrench,
} from 'lucide-react'

const skills = [
  'ROS / ROS2',
  'Python',
  'C++',
  'MATLAB',
  'OpenCV',
  'FAST-LIO2',
  'Visual Odometry',
  'Sensor Fusion',
  'Motion Planning',
  'PID Control',
  'Docker',
  'Gazebo',
  'RViz',
  'SolidWorks',
  'Vicon',
  'Raspberry Pi',
]

const projects = [
  {
    title: 'RGB-Based Multi-Camera Motion Capture System',
    description:
      'Architected a distributed 6-camera ROS2 and Docker-based perception system with sub-millisecond synchronization, YOLO-based tracking, calibration, triangulation, and bundle adjustment. Achieved around 2 cm 3D tracking accuracy against Vicon ground truth.',
    tags: ['ROS2', 'OpenCV', 'Multi-View Geometry'],
  },
  {
    title: 'Decentralized Multi-Robot Collaborative Transport',
    description:
      'Built a ROS2-based distributed autonomy stack for cooperative object transport using role-based coordination, closed-loop control, planning, and perception. Validated in Gazebo and on TurtleBot3 robots for objects up to 2× robot mass on ramps up to 25°.',
    tags: ['Multi-Robot', 'Control', 'Gazebo'],
  },
  {
    title: 'Autonomous Navigation & SLAM',
    description:
      'Developed a full autonomy stack using FAST-LIO2, LiDAR–IMU odometry, costmaps, RRT, BUG2, and PID-based tracking for collision-free waypoint navigation in robotic environments.',
    tags: ['SLAM', 'FAST-LIO2', 'RRT'],
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

function App() {
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
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1>Hi, I&apos;m Yaswanth</h1>
              <h2>Robotics Engineer</h2>
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
                <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Venkata Sai Yaswanth Mohan Thota" />
              </div>
              <div className="hero-card">
                <Briefcase size={28} />
                <div>
                  <div className="hero-card-title">4.0 GPA</div>
                  <div className="hero-card-sub">MS Robotics</div>
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
              <p>Fremont, CA, USA</p>
            </div>

            <div className="info-card">
              <div className="info-title">
                <Mail size={18} /> Email
              </div>
              <p>yaswanththota000@gmail.com</p>
            </div>

            <div className="info-card">
              <div className="info-title">
                <Phone size={18} /> Phone
              </div>
              <p>+1-716-547-1353</p>
            </div>

            <div className="info-card">
              <div className="info-title">
                <GraduationCap size={18} /> Education
              </div>
              <p><strong>M.S. in Robotics, University at Buffalo</strong></p>
              <p>GPA: 4.0/4.0 · Thesis track · Dec 2025</p>
              <p className="mt"><strong>B.Tech in Mechanical Engineering (Honours)</strong></p>
              <p>Lovely Professional University · GPA: 3.77/4.0</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container">
          <div className="section-pill">
            <Wrench size={16} /> Skills
          </div>
          <h3>Core Tools & Technologies</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-card">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-pill">
            <FolderOpen size={16} /> Projects
          </div>
          <h3>Selected Work</h3>
          <p className="section-lead">
            These are the projects that actually define your profile. They are
            technical, measurable, and relevant.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <div className="project-image-placeholder">Project Preview</div>
                <div className="project-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
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
          <p>
            I am actively looking for robotics roles across autonomy,
            perception, SLAM, controls, deployment, and real-world robotic
            system integration.
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
    </div>
  )
}

export default App