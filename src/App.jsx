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
  Sparkles,
  Cpu,
  Radar,
  Workflow,
} from 'lucide-react'

const base = import.meta.env.BASE_URL

const roles = [
  'Robotics Systems Engineer',
  '3D Prototyping and Deployment Builder',
  'Perception, Control, and Sim-to-Real Engineer',
]

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

const heroSignals = [
  { icon: Radar, label: 'Perception', value: 'Multi-Camera Tracking · Stereo Vision · Calibration Pipelines' },
  { icon: Workflow, label: 'Build', value: '3D Prototyping · Hardware Integration · Real-World Deployment' },
  { icon: Cpu, label: 'Systems', value: 'ROS2 Architecture · Simulation-to-Deployment · Algorithm Optimization' },
]

const coreTechCards = [
  { title: 'C++, Python and MATLAB', icon: `${base}tech/cpp_logo.png`, category: 'Programming' },
  { title: 'PyTorch, TensorFlow and Keras', icon: `${base}tech/dummy-logo.png`, category: 'ML & Vision' },
  { title: 'ROS and ROS2', icon: `${base}tech/ROS.png`, category: 'Middleware' },
  { title: 'OpenCV and OpenCV Contrib', icon: `${base}tech/OpenCV_Logo.png`, category: 'Perception' },
  { title: 'Docker', icon: `${base}tech/docker_Logo.png`, category: 'Deployment' },
  { title: 'NVIDIA Isaac Sim / Gazebo', icon: `${base}tech/nvidia.png`, category: 'Simulation' },
  { title: 'SolidWorks (CSWP)', icon: `${base}tech/Solidworks_Badge.png`, category: '3D Design' },
  { title: 'Ubuntu / Linux', icon: `${base}tech/Ubuntu.png`, category: 'Systems' },
  // { title: 'Raspberry Pi 5 /Jetson Nano', icon: `${base}tech/Raspberry_Logo.png`, category: 'Embedded' },
  // { title: 'VICON Vero 2.0', icon: `${base}tech/ROS.png`, category: 'Validation' },
  // { title: 'TurtleBot3 / UR3 / xArm6', icon: `${base}tech/nvidia.png`, category: 'Platforms' },
  // { title: 'SSH  and TCP Streaming', icon: `${base}tech/docker_Logo.png`, category: 'Distributed Systems' },
]

const coreTechPills = [
  'FAST-LIO2',
  'Jetson Nano / Orin Nano',
  'Raspberry Pi',
  'VICON MoCap',
  'UFactory xArm6',
  'Intel RealSense Depth Sensor',
  'Git Version Control',
  'LiDAR',
  'IMU',
  'Camera Calibration',
  'Bundle Adjustment',
  'YOLO Segmentation',
]

const projects = [
  {
    id: 'rgb-mocap',
    title: 'RGB-Based Multi-Camera Motion Capture System',
    subtitle: 'Raspberry Pi 5 · ROS2 · OpenCV · Docker · SSH Sync',
    summary:
      'Engineered a low-cost six-camera motion capture system with custom 3D-printed camera nodes, distributed synchronization, calibration software, and real-time 3D robot tracking.',
    previewType: 'video',
    previewSrc: `${base}projects/rgb-mocap2.mp4`,
    previewPosition: '50% 5%',
    previewScale: 1.115,
    badge: 'Flagship Build',
    tags: ['ROS2', 'OpenCV', 'Docker', 'Raspberry Pi 5'],
    cardHighlights: ['~1 cm best case', '$1.4k vs $100k class'],
    hoverHint: 'See how this was built',
    hasExplore: true,
    exploreType: 'video',
    videoEmbed: 'https://www.youtube.com/embed/RGB_MOCAP_DEMO?autoplay=1&mute=1&rel=0',
    problem:
      'Commercial motion capture systems are accurate but expensive, closed, and difficult to adapt for custom robotics workflows. I wanted a system that could track robots reliably while staying portable, modular, and low-cost.',
    solution:
      'I engineered six Raspberry Pi 5 camera nodes with Pi HQ cameras, Ethernet connectivity, and custom 3D-printed enclosures with active cooling. I then built the full software stack for SSH-triggered synchronization, TCP image transport, calibration, triangulation, and bundle adjustment.',
    impact:
      'The system delivered best-case tracking around 1 cm and low-centimeter accuracy overall against a commercial Vicon setup while cutting cost to roughly $1.4k instead of a $100k-class commercial system.',
    metrics: [
      ['Cost', '$1.4k total system'],
      ['Accuracy', '~1 cm best case'],
      ['Sync', '< 1 ms inter-camera offset'],
      ['Architecture', '6 distributed camera nodes'],
    ],
    systemFlow: ['Camera Nodes', 'SSH Trigger', 'TCP Streaming', 'Calibration + BA', 'Triangulation + Pose Output'],
    decision:
      'Key engineering decision: replaced hardware-triggered synchronization with SSH-based software triggering, trading perfect determinism for flexibility, scalability, and major cost reduction.',
    tools: ['Raspberry Pi 5', 'Pi HQ Cameras', 'Ethernet Switch', 'OpenCV', 'ROS2', 'Docker', 'SSH', 'TCP', 'Vicon Benchmarking'],
    details: [
      'Designed custom camera nodes with a 3D-printed enclosure integrating Pi Camera, Raspberry Pi 5, lens, and active cooling.',
      'Built the distributed synchronization pipeline using SSH-triggered capture, TCP streaming, multi-core decoding, and time alignment.',
      'Wrote the calibration and multi-view geometry stack for intrinsics, extrinsics, triangulation, and bundle adjustment.',
      'Benchmarked the system against Vicon and achieved about 1 cm best-case accuracy with roughly $1.4k total system cost.',
    ],
  },
  {
    id: 'collab-transport',
    title: 'Decentralized Collaborative Transport',
    subtitle: 'ROS2 · TurtleBot3 · Isaac Sim · Role-Based Control',
    summary:
      'Built and validated a decentralized multi-robot transport system for moving box-like objects across flat, uphill, and downhill terrain in simulation and on physical TurtleBot3 robots.',
    previewType: 'video',
    previewSrc: `${base}projects/collab-transport2.mp4`,
    previewPosition: '50% 0%',
    previewScale: 1.15,
    badge: 'Sim-to-Real',
    tags: ['Multi-Robot', 'Isaac Sim', 'TurtleBot3', 'ROS2'],
    cardHighlights: ['Flat / Uphill / Downhill', 'Sim-to-real validation'],
    hoverHint: 'Open engineering breakdown',
    hasExplore: true,
    exploreType: 'grid',
    gridImages: [
      {
        src: `${base}projects/collab-sim.png`,
        label: 'Simulation Environment',
        fit: 'cover',
        position: '50% 50%',
        group: 'visual',
      },
      {
        src: `${base}projects/real.png`,
        label: 'Real-World Experiment',
        fit: 'cover',
        position: '50% 50%',
        group: 'visual',
      },
      {
        src: `${base}projects/collab-results.png`,
        label: 'Simulation Results',
        fit: 'cover',
        position: '50% 50%',
        group: 'results',
      },
      {
        src: `${base}projects/collab-extra.png`,
        label: 'Real-World Results',
        fit: 'cover',
        position: '50% 50%',
        group: 'results',
      },
    ],
    problem:
      'Coordinating multiple robots to transport large objects across uneven terrain is difficult because friction, incline, object mass, and robot coordination all interact. Centralized control gets heavy fast and becomes harder to trust on real robots.',
    solution:
      'I designed a decentralized ROS2-based transport framework where each robot assigns itself a role such as push, support, or prevent from box state and local geometry. The same control logic was tested in Isaac Sim and then deployed on physical TurtleBot3 robots.',
    impact:
      'The system achieved stable multi-robot transport across flat, uphill, and downhill terrain with similar trajectory behavior between simulation and physical robots, showing that lightweight decentralized control can transfer to real deployment.',
    metrics: [
      ['Terrain', 'Flat / Uphill / Downhill'],
      ['Robots', '6 in simulation, 4 in real'],
      ['Payload', 'Objects up to 2× robot mass'],
      ['Validation', 'Sim-to-real trajectory match'],
    ],
    systemFlow: ['Robot State', 'Role Assignment', 'Velocity Primitive', 'Formation Maintenance', 'Box Motion'],
    decision:
      'Key engineering decision: replaced centralized optimization with role-based local decision-making to improve scalability, robustness, and deployability on real robots.',
    tools: ['TurtleBot3', 'ROS2', 'Isaac Sim', 'Vicon', 'Role-Based Control', 'Proportional Control'],
    details: [
      'Implemented decentralized role assignment and proportional control for push, support, and prevent behaviors.',
      'Validated the system in Isaac Sim across multiple terrain conditions, friction values, and object masses.',
      'Deployed the same control logic on physical TurtleBot3 robots for box transport through intermediate waypoints.',
      'Showed similar box trajectories between simulation and physical experiments, with real-world runtime penalties exposing sim-to-real effects.',
    ],
  },
  {
    id: 'dream-lab',
    title: 'DREAM Lab Robotic System Deployment',
    subtitle: 'UR3 · xArm6 · ROS2 · 3D Prototyping · Integration',
    summary:
      'Built and deployed robotics training and lab systems by designing custom hardware, integrating sensors and safety systems, and bringing up real manipulators on ROS2 stacks.',
    previewType: 'video',
    previewSrc: `${base}projects/dream-lab3.mp4`,
    previewPosition: '50% 70%',
    previewScale: 1.08,
    badge: 'Deployment',
    post:
      'https://www.linkedin.com/posts/venkata-sai-thota_universityatbuffalo-robotics-dreamabrlab-ugcPost-7425722389415510018-3QI7?utm_source=share&utm_medium=member_desktop&rcm=ACoAACWSgiUBSRWe_yKKmBiKk8LXkZfzzb9iKQg',
    tags: ['UR3', 'xArm6', 'ROS2', 'System Integration'],
    cardHighlights: ['~90% cost reduction', '$300 custom build'],
    hoverHint: 'See the deployment build',
    hasExplore: true,
    exploreType: 'preview',
    problem:
      'Commercial robotic workcells are expensive, rigid, and often not designed for repeated deployment, training, or fast reconfiguration in a lab environment.',
    solution:
      'I designed and fabricated a foldable extensible support mechanism, mounted and integrated manipulators, added camera and kill-switch hardware, and built usable programming flows across block programming, Python, and ROS for the xArm6 and UR3 systems.',
    impact:
      'The custom deployment hardware reduced setup cost from roughly $3,000 to about $300 while creating a more modular and training-friendly robot workcell.',
    metrics: [
      ['Cost', '~$300 custom build'],
      ['Savings', '~90% reduction'],
      ['Platforms', 'xArm6 + UR3'],
      ['Integration', 'Camera + kill switch + control stack'],
    ],
    systemFlow: ['Custom Structure', 'Manipulator Mount', 'Power + Safety', 'Sensors', 'Programming Workflow'],
    decision:
      'Key engineering decision: prioritized modular mechanical design and integrated safety hardware so the system could be deployed, reconfigured, and taught on repeatedly instead of acting as a one-off demo.',
    tools: ['SolidWorks', '3D Prototyping', 'Fabrication', 'ROS', 'Python', 'Block Programming', 'xArm6', 'UR3'],
    details: [
      'Designed a lower-cost foldable deployment structure instead of buying a commercial workstation.',
      'Integrated sensors and safety hardware including a camera and kill switch.',
      'Brought up and validated manipulator workflows across block programming, Python, and ROS.',
      'Turned the setup into a more repeatable training and deployment platform for the lab.',
    ],
  },
  {
    id: 'autonomous-nav',
    title: 'Autonomous Navigation & Planning',
    subtitle: 'FAST-LIO2 · RRT · BUG2 · PID',
    summary:
      'Built a complete navigation pipeline using LiDAR–IMU SLAM, costmaps, motion planning, and closed-loop path tracking.',
    previewType: 'gif',
    previewSrc: `${base}projects/autonomous-nav.gif`,
    previewPosition: '50% 50%',
    previewScale: 1.08,
    badge: 'Navigation',
    github: 'https://github.com/YaswanthMohanThota',
    tags: ['FAST-LIO2', 'RRT', 'BUG2', 'PID'],
    cardHighlights: ['End-to-end nav stack', 'SLAM to control'],
    hoverHint: 'See the full stack',
    hasExplore: true,
    exploreType: 'preview',
    problem:
      'Autonomous navigation depends on localization, planning, obstacle handling, and control working together cleanly. If one layer is weak, the full stack breaks in practice.',
    solution:
      'I built a navigation pipeline combining LiDAR–IMU localization, map-based planning, BUG2 and RRT planning logic, and PID-based path tracking for waypoint execution.',
    impact:
      'The project produced a working navigation stack that connected perception, planning, and control into a deployable robotics workflow instead of isolated algorithms.',
    metrics: [
      ['Localization', 'FAST-LIO2 based'],
      ['Planning', 'RRT + BUG2'],
      ['Control', 'Closed-loop PID'],
      ['Goal', 'Collision-aware navigation'],
    ],
    systemFlow: ['LiDAR + IMU', 'Localization', 'Map / Planner', 'Trajectory Tracking', 'Robot Motion'],
    decision:
      'Key engineering decision: combined classical planning with robust localization and closed-loop control to keep the system interpretable and reliable for deployment-oriented testing.',
    tools: ['FAST-LIO2', 'ROS', 'LiDAR', 'IMU', 'RRT', 'BUG2', 'PID'],
    details: [
      'Engineered a perception pipeline for localization and obstacle-aware planning.',
      'Implemented RRT and BUG2 planning logic instead of relying only on prebuilt planners.',
      'Used PID control for stable path tracking and waypoint execution.',
      'Connected the full chain from sensor data to robot motion.',
    ],
  },
  // {
  //   id: 'stereo-vo',
  //   title: 'Stereo Visual Odometry',
  //   subtitle: 'KITTI · OpenCV · PnP + RANSAC · SE(3)',
  //   summary:
  //     'Built a stereo visual odometry pipeline for depth estimation, feature tracking, motion recovery, and trajectory evaluation.',
  //   previewType: 'gif',
  //   previewSrc: `${base}projects/stereo-vo.gif`,
  //   previewPosition: '50% 50%',
  //   previewScale: 1.08,
  //   badge: 'Perception',
  //   github: 'https://github.com/YaswanthMohanThota',
  //   tags: ['OpenCV', 'Stereo Vision', 'PnP', 'RANSAC'],
  //   cardHighlights: ['Classical vision stack', 'Geometry-driven odometry'],
  //   hoverHint: 'Inspect the pipeline',
  //   hasExplore: true,
  //   exploreType: 'preview',
  //   problem:
  //     'Recovering camera motion from vision alone is hard because of noisy correspondences, scale sensitivity, and drift accumulation over time.',
  //   solution:
  //     'I built a stereo visual odometry pipeline from classical computer-vision components including disparity-based depth estimation, feature extraction, 3D correspondences, PnP with RANSAC, and SE(3) trajectory composition.',
  //   impact:
  //     'The project produced a full geometry-based odometry stack that can be analyzed, debugged, and benchmarked instead of treated as a black-box perception result.',
  //   metrics: [
  //     ['Input', 'Stereo image pairs'],
  //     ['Estimation', 'PnP + RANSAC'],
  //     ['Pose', 'SE(3) composition'],
  //     ['Validation', 'KITTI trajectory comparison'],
  //   ],
  //   systemFlow: ['Stereo Images', 'Depth Estimation', 'Feature Matching', 'Pose Recovery', 'Trajectory Output'],
  //   decision:
  //     'Key engineering decision: kept the pipeline geometry-driven and interpretable so every failure mode in matching, pose estimation, and drift could be inspected directly.',
  //   tools: ['OpenCV', 'KITTI', 'PnP', 'RANSAC', 'SE(3)', 'Stereo Geometry'],
  //   details: [
  //     'Implemented disparity-based depth estimation and feature-based matching from scratch.',
  //     'Used PnP with RANSAC and fallback geometric logic for motion estimation.',
  //     'Recovered full trajectories by composing incremental camera poses.',
  //     'Evaluated drift against KITTI ground truth.',
  //   ],
  // },
  {
    id: 'forth-tech',
    title: 'Forth Tech Quadruped Robot',
    subtitle: 'ROS · IK · Gait Planning · IMU Stabilization',
    summary:
      'Built locomotion and control software for an 8-DOF quadruped robot on physical hardware.',
    previewType: 'image',
    previewSrc: `${base}projects/forth-tech-main.webp`,
    previewPosition: '50% 50%',
    previewScale: 1.06,
    badge: 'Embedded Control',
    tags: ['Quadruped', 'ROS', 'IMU', 'Servo Control'],
    cardHighlights: ['8-DOF hardware control', 'Reduced jitter and resets'],
    hoverHint: 'See how the control stack works',
    hasExplore: true,
    exploreType: 'slideshow',
    slides: [
      `${base}projects/forth-1.png`,
      `${base}projects/forth-2.webp`,
      `${base}projects/forth-3.webp`,
    ],
    problem:
      'Quadruped locomotion is not just gait theory. Real hardware introduces servo jitter, timing drift, resets, and stability issues that can break motion even when the math is fine.',
    solution:
      'I built the locomotion stack around inverse kinematics, gait scheduling, synchronized joint control, and IMU-based stabilization, while also adding a hardware abstraction layer to isolate low-level actuator issues.',
    impact:
      'The robot achieved more stable and repeatable locomotion on physical hardware by reducing jitter, improving timing consistency, and making gait behavior easier to tune without breaking the full stack.',
    metrics: [
      ['Platform', '8-DOF quadruped'],
      ['Control', 'IK + gait scheduling'],
      ['Stability', 'IMU feedback'],
      ['Reliability', 'Reduced jitter and resets'],
    ],
    systemFlow: ['IK', 'Gait Scheduler', 'Joint Commands', 'IMU Feedback', 'Stable Locomotion'],
    decision:
      'Key engineering decision: modularized the control stack so hardware-level timing and actuation failures could be fixed without constantly rewriting gait logic.',
    tools: ['ROS', 'Inverse Kinematics', 'Gait Planning', 'IMU', 'Servo Control'],
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
    text: 'Built robotics systems across perception and multi-robot autonomy, including a distributed RGB motion-capture platform, decentralized transport control, calibration tooling, and physical robot validation workflows.',
  },
  {
    title: 'Robotics Deployment Engineer',
    org: 'DREAM Lab, University at Buffalo',
    period: 'May 2025 – Dec 2025',
    text: 'Led bring-up of manipulator systems by integrating actuators, sensors, compute, safety hardware, and ROS-based control flows while reducing deployment cost through custom mechanical design and modular workcell development.',
  },
  {
    title: 'Robotics Junior Software Engineer',
    org: 'Forth Tech, Ahmedabad, India',
    period: 'Apr 2022 – Jul 2023',
    text: 'Built modular locomotion and control software for an 8-DOF quadruped robot, including inverse kinematics, gait scheduling, synchronized actuation, and IMU-based stabilization on physical hardware.',
  },
]

const publications = [
  {
    title: 'An Affordable and Scalable Multi-Camera RGB Motion Capture System with Sub-ms Synchronization for 3D Mobile Robot Tracking',
    venue: 'IEEE/RSJ IROS 2026',
    status: 'Under Review',
    related: 'RGB-Based Multi-Camera Motion Capture System',
  },
  {
    title: 'Multi-Robot Box Transport over Different Surfaces with Decentralized Role-Based Proportional Control',
    venue: 'ASME IDETC-CIE 2026',
    status: 'Under Review',
    related: 'Decentralized Collaborative Transport',
  },
  {
    title: 'Systematic Hardware-Software Platform to Implement and Evaluate Multi-Robot Signal-Source Localization in an Indoor Environment',
    venue: 'IEEE/RSJ IROS 2026',
    status: 'Under Review',
    related: 'Multi-Robot Hardware / Software Platform',
  },
]

function SectionHeader({ icon: Icon, eyebrow, title, lead }) {
  return (
    <div className="section-header" data-reveal="up">
      <div className="section-pill">
        {Icon && <Icon size={16} />} {eyebrow}
      </div>
      <h3>{title}</h3>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  )
}

function InteractiveSurface({
  as = 'div',
  className = '',
  children,
  tilt = 10,
  disabled = false,
  style,
  ...props
}) {
  const Component = as

  const handleMouseMove = (event) => {
    if (disabled) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const px = (x / rect.width) * 100
    const py = (y / rect.height) * 100
    const rotateY = ((x / rect.width) - 0.5) * tilt
    const rotateX = (((y / rect.height) - 0.5) * tilt) * -1

    event.currentTarget.style.setProperty('--mx', `${px}%`)
    event.currentTarget.style.setProperty('--my', `${py}%`)
    event.currentTarget.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
  }

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
    event.currentTarget.style.setProperty('--mx', '50%')
    event.currentTarget.style.setProperty('--my', '50%')
  }

  return (
    <Component
      className={`interactive-surface ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      {...props}
    >
      {children}
    </Component>
  )
}

function ProjectPreview({ project }) {
  const mediaStyle = {
    objectPosition: project.previewPosition || '50% 50%',
    transform: `scale(${project.previewScale || 1})`,
  }

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
        style={mediaStyle}
      />
    )
  }

  return (
    <img
      src={project.previewSrc}
      alt={project.title}
      className="project-media-img"
      style={mediaStyle}
    />
  )
}

function MetricGrid({ items }) {
  if (!items?.length) return null
  return (
    <div className="modal-metric-grid">
      {items.map(([label, value]) => (
        <div key={label} className="modal-metric-card glass-card">
          <div className="modal-metric-label">{label}</div>
          <div className="modal-metric-value">{value}</div>
        </div>
      ))}
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    setSlideIndex(0)
  }, [project])

  useEffect(() => {
    if (!project || project.exploreType !== 'slideshow') return
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % project.slides.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [project])

  if (!project) return null

  const visualItems =
    project.exploreType === 'grid'
      ? project.gridImages.filter((item) => item.group === 'visual')
      : []

  const resultItems =
    project.exploreType === 'grid'
      ? project.gridImages.filter((item) => item.group === 'results')
      : []

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-shell-glow" />
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-topbar">
          <div className="modal-topbar-pill">Engineering Breakdown</div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-subtitle">{project.subtitle}</p>

        {project.exploreType === 'video' && (
          <div className="modal-video-wrap modal-frame">
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
          <div className="modal-grid-layout">
            {visualItems.length > 0 && (
              <div className="modal-grid-block">
                <div className="modal-block-label">System Views</div>
                <div className="modal-grid-row modal-grid-row-visual">
                  {visualItems.map((item) => (
                    <div key={item.label} className="modal-grid-item modal-grid-item-cover modal-frame">
                      <img
                        src={item.src}
                        alt={item.label}
                        style={{ objectPosition: item.position || '50% 50%' }}
                      />
                      <div className="modal-grid-label">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resultItems.length > 0 && (
              <div className="modal-grid-block">
                <div className="modal-block-label">Validation Results</div>
                <div className="modal-grid-row modal-grid-row-results">
                  {resultItems.map((item) => (
                    <div
                      key={item.label}
                      className="modal-grid-item modal-grid-item-cover modal-grid-item-results modal-frame"
                    >
                      <img
                        src={item.src}
                        alt={item.label}
                        style={{ objectPosition: item.position || '50% 50%' }}
                      />
                      <div className="modal-grid-label">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {project.exploreType === 'slideshow' && (
          <div className="modal-slideshow modal-frame">
            <button
              className="slide-nav slide-nav-left"
              onClick={() =>
                setSlideIndex((prev) => (prev - 1 + project.slides.length) % project.slides.length)
              }
              aria-label="Previous slide"
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
              onClick={() => setSlideIndex((prev) => (prev + 1) % project.slides.length)}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>

            <div className="modal-slide-counter">
              {slideIndex + 1} / {project.slides.length}
            </div>
          </div>
        )}

        {project.exploreType === 'preview' && (
          <div className="modal-preview-wrap modal-frame">
            {project.previewType === 'video' ? (
              <video className="modal-preview-media" src={project.previewSrc} autoPlay muted loop playsInline />
            ) : (
              <img className="modal-preview-media" src={project.previewSrc} alt={project.title} />
            )}
          </div>
        )}

        <div className="modal-breakdown-grid">
          <div className="modal-breakdown-card glass-card">
            <div className="modal-block-label">Problem</div>
            <p>{project.problem}</p>
          </div>
          <div className="modal-breakdown-card glass-card">
            <div className="modal-block-label">Solution</div>
            <p>{project.solution}</p>
          </div>
          <div className="modal-breakdown-card glass-card">
            <div className="modal-block-label">Impact</div>
            <p>{project.impact}</p>
          </div>
        </div>

        {project.decision && (
          <div className="modal-insight glass-card">
            <div className="modal-block-label">Engineering Decision</div>
            <p>{project.decision}</p>
          </div>
        )}

        {project.systemFlow?.length > 0 && (
          <div className="modal-flow glass-card">
            <div className="modal-block-label">System Flow</div>
            <div className="modal-flow-row">
              {project.systemFlow.map((item, index) => (
                <div key={item} className="modal-flow-item">
                  <span className="modal-flow-chip">{item}</span>
                  {index < project.systemFlow.length - 1 && <MoveArrow />}
                </div>
              ))}
            </div>
          </div>
        )}

        <MetricGrid items={project.metrics} />

        {project.tools?.length > 0 && (
          <div className="modal-tools glass-card">
            <div className="modal-block-label">Tools and Hardware</div>
            <div className="modal-tools-row">
              {project.tools.map((item) => (
                <span key={item} className="tech-pill glass-pill">{item}</span>
              ))}
            </div>
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

function MoveArrow() {
  return <span className="modal-flow-arrow">→</span>
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeProjectId, setActiveProjectId] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0, visible: false })
  const [hoverCue, setHoverCue] = useState('')
  const [heroOffset, setHeroOffset] = useState({ x: 0, y: 0 })

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) || null,
    [activeProjectId]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2200)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setIsScrolled(scrollTop > 24)
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold: [0.18, 0.38, 0.58],
        rootMargin: '-15% 0px -35% 0px',
      }
    )

    sectionElements.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' }
    )

    revealElements.forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [activeProject])

  useEffect(() => {
    const handleContextMenu = (event) => event.preventDefault()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProjectId(null)
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursorGlow({ x: event.clientX, y: event.clientY, visible: true })
    }

    const handlePointerLeave = () => {
      setCursorGlow((prev) => ({ ...prev, visible: false }))
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  const heroBackground = {
    backgroundImage: `linear-gradient(135deg, rgba(2, 6, 23, 0.84), rgba(8, 15, 35, 0.66)), url('${base}background.png')`,
  }

  const heroVisualStyle = {
    transform: `translate3d(${heroOffset.x * 16}px, ${heroOffset.y * 16}px, 0)`,
  }

  const orbitOneStyle = {
    transform: `translate3d(${heroOffset.x * 8}px, ${heroOffset.y * 8}px, 0)`,
  }

  const orbitTwoStyle = {
    transform: `translate3d(${heroOffset.x * -10}px, ${heroOffset.y * -10}px, 0)`,
  }

  const handleHeroMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) - 0.5
    const y = ((event.clientY - rect.top) / rect.height) - 0.5
    setHeroOffset({ x, y })
  }

  const handleHeroLeave = () => {
    setHeroOffset({ x: 0, y: 0 })
  }

  return (
    <div className="site">
      <div
        className={`cursor-glow ${cursorGlow.visible ? 'cursor-glow-visible' : ''}`}
        aria-hidden="true"
        style={{ transform: `translate3d(${cursorGlow.x}px, ${cursorGlow.y}px, 0)` }}
      />
      <div
        className={`cursor-hint ${hoverCue ? 'cursor-hint-visible' : ''}`}
        aria-hidden="true"
        style={{ transform: `translate3d(${cursorGlow.x + 18}px, ${cursorGlow.y - 18}px, 0)` }}
      >
        {hoverCue || 'See how it works'}
      </div>

      <div className="site-background" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-glow bg-glow-one" />
        <div className="bg-glow bg-glow-two" />
        <div className="bg-glow bg-glow-three" />
        <div className="bg-trajectory bg-trajectory-one" />
        <div className="bg-trajectory bg-trajectory-two" />
        <div className="bg-liquid bg-liquid-one" />
        <div className="bg-liquid bg-liquid-two" />
      </div>

      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-progress">
          <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
        </div>

        <div className="container nav-inner">
          <a href="#home" className="logo" aria-label="Back to top">
            <span className="logo-mark" />
            <span className="logo-mark logo-mark-secondary" />
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'nav-active' : ''}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`${base}Venkata_S_Y_M_Thota_Resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            <FileText size={16} /> Resume
          </a>
        </div>
      </header>

      <section
        id="home"
        className="hero"
        style={heroBackground}
        onMouseMove={handleHeroMove}
        onMouseLeave={handleHeroLeave}
      >
        <div className="hero-overlay">
          <div className="container hero-grid">
            <div className="hero-text" data-reveal="up">
              <div className="hero-kicker">
                <Sparkles size={16} /> Robotics · Prototyping · Deployment
              </div>
              <h1>I build robotic systems that solve real hardware, integration, and deployment problems.</h1>
              <div className="hero-role-wrap" aria-live="polite">
                <div key={roleIndex} className="hero-role-text">
                  {roles[roleIndex]}
                </div>
              </div>
              <p>
                I build perception, autonomy, and robotics systems using 3D prototyping,
                simulation, software architecture, hardware integration, and real-world deployment.
                My work connects cameras, robots, sensors, calibration, control, and validation into
                systems that actually run.
              </p>

              <div className="hero-buttons" data-reveal="up" style={{ '--reveal-delay': '120ms' }}>
                <a className="btn btn-primary magnetic-btn" href="#projects">
                  View Work
                </a>
                <a className="btn btn-ghost magnetic-btn" href="#about">
                  About Me
                </a>
              </div>

              {/* <div className="hero-signal-grid">
                {heroSignals.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <InteractiveSurface
                      key={item.label}
                      className="hero-signal-card glass-card"
                      data-reveal="up"
                      style={{ '--reveal-delay': `${200 + index * 90}ms` }}
                      tilt={10}
                    >
                      <div className="hero-signal-icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="hero-signal-label">{item.label}</div>
                        <div className="hero-signal-value">{item.value}</div>
                      </div>
                    </InteractiveSurface>
                  )
                })}
              </div> */}
            </div>

            <div className="hero-image-wrap" data-reveal="scale" style={{ '--reveal-delay': '180ms' }}>
              <div className="hero-visual-glow" aria-hidden="true" style={heroVisualStyle} />
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" style={orbitOneStyle} />
              <div className="hero-orbit hero-orbit-two" aria-hidden="true" style={orbitTwoStyle} />
              <div className="hero-orbit-dot hero-orbit-dot-one" aria-hidden="true" />
              <div className="hero-orbit-dot hero-orbit-dot-two" aria-hidden="true" />
              <div className="hero-profile-shell">
                <div className="profile-circle">
                  <img src={`${base}profile.png`} alt="Venkata Sai Yaswanth Mohan Thota" />
                </div>
              </div>
              <InteractiveSurface className="hero-card glass-card liquid-panel" tilt={8}>
                <Briefcase size={26} />
                <div>
                  <div className="hero-card-title">4.0 GPA</div>
                  <div className="hero-card-sub">MS Robotics · Thesis Track</div>
                  <div className="hero-card-exp">Systems · Vision · Deployment</div>
                </div>
              </InteractiveSurface>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container section-shell">
          <SectionHeader icon={Briefcase} eyebrow="Profile / System Overview" title="About Me" />

          <div className="two-col about-grid">
            <div className="about-copy glass-panel liquid-panel" data-reveal="left">
              <h4>Venkata Sai Yaswanth Mohan Thota</h4>
              <p>
                I am a Robotics Engineer focused on building deployable systems across perception,
                autonomy, multi-robot coordination, and robotic integration. My work spans ROS2,
                OpenCV, SLAM, motion planning, calibration, 3D prototyping, and system bring-up on
                physical hardware.
              </p>
              <p>
                At the University at Buffalo, I built a low-cost RGB motion capture system, validated
                multi-robot transport in simulation and on real TurtleBot3 robots, and deployed lab
                robotics systems using UR3 and UFactory xArm6 platforms. Before that, I built
                locomotion and control software for an 8-DOF quadruped robot in industry.
              </p>
            </div>

            <div className="info-grid">
              {[
                {
                  icon: MapPin,
                  title: 'Location',
                  body: (
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Fremont,+CA,+USA"
                      target="_blank"
                      rel="noreferrer"
                      className="info-link"
                    >
                      Fremont, CA, USA
                    </a>
                  ),
                },
                {
                  icon: Mail,
                  title: 'Email',
                  body: (
                    <a href="mailto:yaswanththota000@gmail.com" className="info-link">
                      yaswanththota000@gmail.com
                    </a>
                  ),
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  body: (
                    <a href="tel:+17165471353" className="info-link">
                      +1-716-547-1353
                    </a>
                  ),
                },
                {
                  icon: GraduationCap,
                  title: 'Education',
                  body: (
                    <>
                      <p>
                        <strong>M.S. in Robotics, University at Buffalo</strong>
                      </p>
                      <p>GPA: 4.0/4.0 | Thesis track | Dec 2025</p>
                      <p className="mt">
                        <strong>B.Tech in Mechanical Engineering (Honours)</strong>
                      </p>
                      <p>Lovely Professional University | GPA: 3.77/4.0</p>
                    </>
                  ),
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <InteractiveSurface
                    key={item.title}
                    className="info-card glass-card liquid-panel"
                    data-reveal="right"
                    style={{ '--reveal-delay': `${80 + index * 90}ms` }}
                    tilt={9}
                  >
                    <div className="info-title">
                      <span className="info-icon-wrap">
                        <Icon size={18} />
                      </span>
                      <span>{item.title}</span>
                    </div>
                    <div>{item.body}</div>
                  </InteractiveSurface>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="container section-shell">
          <SectionHeader
            icon={Wrench}
            eyebrow="Technology / Core Stack"
            title="Core Technologies"
            lead="I keep the toolset broad because the work is broad: perception, machine learning, distributed systems, simulation, hardware integration, and deployment."
          />

          <div className="skills-grid tech-grid">
            {coreTechCards.map((item, index) => (
              <InteractiveSurface
                key={item.title}
                className="skill-card tech-card glass-card liquid-panel"
                data-reveal="up"
                style={{ '--reveal-delay': `${index * 55}ms` }}
                tilt={11}
              >
                <div className="tech-category">{item.category}</div>
                <img src={item.icon} alt="" className="tech-logo" />
                <div className="tech-name">{item.title}</div>
              </InteractiveSurface>
            ))}
          </div>

          <div className="tech-pill-row" data-reveal="up" style={{ '--reveal-delay': '120ms' }}>
            {coreTechPills.map((item) => (
              <span key={item} className="tech-pill glass-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container section-shell">
          <SectionHeader
            icon={FolderOpen}
            eyebrow="Portfolio / Systems Built"
            title="Selected Projects"
            lead="Engineering-focused work across perception systems, multi-robot control, simulation, hardware integration, and robotic deployment."
          />

          <div className="projects-grid-wide compact-projects-grid">
            {projects.map((project, index) => {
              const openProject = () => project.hasExplore && setActiveProjectId(project.id)

              return (
                <InteractiveSurface
                  key={project.title}
                  as="article"
                  className={`project-card wide-card compact-project-card glass-card liquid-panel ${project.hasExplore ? 'project-card-clickable' : ''}`}
                  data-reveal="up"
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                  tilt={12}
                  role={project.hasExplore ? 'button' : undefined}
                  tabIndex={project.hasExplore ? 0 : undefined}
                  aria-label={project.hasExplore ? `Open ${project.title}` : project.title}
                  onClick={openProject}
                  onKeyDown={(event) => {
                    if (!project.hasExplore) return
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      openProject()
                    }
                  }}
                  onMouseEnter={() => project.hasExplore && setHoverCue(project.hoverHint || 'See how it works')}
                  onMouseLeave={() => setHoverCue('')}
                >
                  <div className="project-spotlight" />
                  <div className="project-media compact-project-media">
                    <div className="project-media-overlay" />
                    <div className="project-sheen" />
                    <div className="project-badge">{project.badge}</div>
                    <div className="project-card-hover-hint">
                      <span>{project.hoverHint || 'See how it works'}</span>
                    </div>
                    <ProjectPreview project={project} />
                  </div>

                  <div className="project-body compact-project-body">
                    <h4>{project.title}</h4>
                    <div className="project-subtitle">{project.subtitle}</div>
                    <p className="project-summary">{project.summary}</p>

                    {project.problem && project.impact && (
                      <div className="project-story-grid">
                        <div className="project-story-card">
                          <div className="project-story-label">Problem</div>
                          <div className="project-story-text">{project.problem}</div>
                        </div>
                        <div className="project-story-card">
                          <div className="project-story-label">Impact</div>
                          <div className="project-story-text">{project.impact}</div>
                        </div>
                      </div>
                    )}

                    {project.metrics && (
                      <div className="project-card-metrics">
                        {project.metrics.slice(0, 2).map(([label, value]) => (
                          <div key={label} className="project-card-metric glass-pill">
                            <span className="project-card-metric-label">{label}</span>
                            <strong className="project-card-metric-value">{value}</strong>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag glass-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-links text-links project-links-bottom">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-text-link"
                          onClick={(event) => event.stopPropagation()}
                        >
                          GitHub <ArrowUpRight size={16} />
                        </a>
                      )}

                      {project.post && (
                        <a
                          href={project.post}
                          target="_blank"
                          rel="noreferrer"
                          className="project-text-link"
                          onClick={(event) => event.stopPropagation()}
                        >
                          LinkedIn <ArrowUpRight size={16} />
                        </a>
                      )}

                      {project.hasExplore && (
                        <button
                          className="project-text-link project-explore-btn"
                          onClick={(event) => {
                            event.stopPropagation()
                            openProject()
                          }}
                        >
                          <span className="project-explore-text">See how it works</span> <ArrowUpRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </InteractiveSurface>
              )
            })}
          </div>
        </div>
      </section>

      <section id="publications" className="section section-alt">
        <div className="container section-shell">
          <SectionHeader
            icon={FileText}
            eyebrow="Publications / Under Review"
            title="Research Papers"
            lead="These projects also produced papers currently under review. I keep them here as supporting evidence, but the site is positioned around engineering execution, system building, and deployment."
          />

          <div className="publication-grid">
            {publications.map((paper, index) => (
              <InteractiveSurface
                key={paper.title}
                className="publication-card glass-card liquid-panel"
                data-reveal="up"
                style={{ '--reveal-delay': `${index * 90}ms` }}
                tilt={8}
              >
                <div className="publication-status">{paper.status}</div>
                <h4>{paper.title}</h4>
                <p className="publication-meta">{paper.venue}</p>
                <p className="publication-related">Related Project: {paper.related}</p>
              </InteractiveSurface>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-shell">
          <SectionHeader icon={Briefcase} eyebrow="Timeline / Execution History" title="Experience" />

          <div className="experience-list timeline-list">
            {experience.map((item, index) => (
              <div
                key={item.title}
                className="experience-row"
                data-reveal="up"
                style={{ '--reveal-delay': `${index * 100}ms` }}
              >
                <div className="timeline-node" />
                <InteractiveSurface className="experience-card glass-card liquid-panel" tilt={9}>
                  <div className="experience-head">
                    <div>
                      <h4>{item.title}</h4>
                      <div className="experience-org">{item.org}</div>
                    </div>
                    <div className="experience-period">{item.period}</div>
                  </div>
                  <p>{item.text}</p>
                </InteractiveSurface>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container section-shell">
          <div className="contact-box glass-panel liquid-panel contact-panel" data-reveal="scale">
            <SectionHeader
              icon={Mail}
              eyebrow="Contact / Collaboration Channel"
              title="Let’s build something useful."
              lead="Open to conversations around robotics, perception,autonomous navigation, system integration, deployment, controls, simulation, and engineering execution."
            />

            <div className="contact-buttons">
              <a className="btn btn-primary magnetic-btn" href="mailto:yaswanththota000@gmail.com">
                <Mail size={18} /> Email Me
              </a>

              <a
                className="btn btn-ghost magnetic-btn"
                href="https://linkedin.com/in/venkata-sai-thota"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.19h.06C11.92 8.97 13.56 8 15.75 8 20.08 8 21 10.85 21 14.56V24h-4v-8.07c0-1.92-.03-4.39-2.67-4.39-2.67 0-3.08 2.09-3.08 4.25V24h-4V8z" />
                </svg>
                LinkedIn
              </a>

              <a
                className="btn btn-ghost magnetic-btn"
                href="https://github.com/YaswanthMohanThota"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.19a11.1 11.1 0 0 1 5.8 0c2.22-1.5 3.19-1.19 3.19-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.4-5.25 5.69.41.35.78 1.03.78 2.08v3.08c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
    </div>
  )
}

export default App
