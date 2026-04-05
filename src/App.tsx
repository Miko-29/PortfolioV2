import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Settings,
  Terminal,
  Home,
  Fingerprint,
  GitBranch,
  Network,
  Sliders,
  Power,
  Activity,
  Map,
  BarChart3,
  MapPin,
  Code2,
  Cloud,
  Share2,
  Database,
  ChevronUp,
  X
} from 'lucide-react';
import { cn } from './lib/utils';
import cityImage from './assets/city.png';
import buildingImage from './assets/building.png';
import office1Image from './assets/office1.png';
import office2Image from './assets/office2.png';

type Section = 'MISSION_LOG' | 'DISTRICT_01' | 'SECTOR_X' | 'INTEL';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('MISSION_LOG');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-on-surface font-body overflow-x-hidden">
      {/* Global Scanline Overlay */}
      <div className="fixed inset-0 z-[100] scanline-overlay opacity-30 pointer-events-none" />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-black/40 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_20px_rgba(0,240,255,0.1)]">
        <div className="text-xl font-black tracking-tighter text-primary font-headline uppercase italic drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
          SYSTEM_CORE_V1.0
        </div>

        <div className="hidden md:flex items-center gap-8 h-full">
          {(['MISSION_LOG', 'DISTRICT_01', 'SECTOR_X', 'INTEL'] as Section[]).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={cn(
                "font-headline uppercase tracking-tighter font-bold transition-all duration-300 pb-1 border-b-2",
                activeSection === section
                  ? "text-primary border-primary"
                  : "text-primary/40 border-transparent hover:text-primary/80"
              )}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-primary hover:bg-primary/10 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-primary hover:bg-primary/10 transition-colors">
            <Terminal className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Side Navigation Bar */}
      <aside
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-64px)] z-40 flex flex-col items-center py-8 bg-surface-container-low/80 backdrop-blur-md border-r border-primary/20 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className={cn(
          "flex flex-col w-full space-y-1 mb-8 px-6 transition-opacity duration-300",
          isSidebarOpen ? "opacity-100" : "opacity-0"
        )}>
          <div className="text-lg font-bold text-primary font-headline uppercase tracking-tight">DISTRICT_OVERLAY</div>
          <div className="text-[10px] uppercase tracking-widest text-primary/60 font-headline">SECTOR: NEURAL_CORE</div>
        </div>

        <div className="flex flex-col w-full space-y-2">
          <SidebarItem
            icon={<Home className="w-5 h-5" />}
            label="Home"
            active={activeSection === 'MISSION_LOG'}
            isOpen={isSidebarOpen}
            onClick={() => setActiveSection('MISSION_LOG')}
          />
          <SidebarItem
            icon={<Fingerprint className="w-5 h-5" />}
            label="About"
            active={activeSection === 'DISTRICT_01'}
            isOpen={isSidebarOpen}
            onClick={() => setActiveSection('DISTRICT_01')}
          />
          <SidebarItem
            icon={<GitBranch className="w-5 h-5" />}
            label="Projects"
            active={activeSection === 'SECTOR_X'}
            isOpen={isSidebarOpen}
            onClick={() => setActiveSection('SECTOR_X')}
          />
          <SidebarItem
            icon={<Network className="w-5 h-5" />}
            label="Experience"
            active={activeSection === 'INTEL'}
            isOpen={isSidebarOpen}
            onClick={() => setActiveSection('INTEL')}
          />
        </div>

        <div className="mt-auto w-full flex flex-col items-center space-y-4 mb-6">
          <button className={cn(
            "bg-primary text-background font-headline text-[10px] font-bold py-2 px-4 uppercase tracking-tighter notch-tr transition-all hover:brightness-110",
            isSidebarOpen ? "block" : "hidden"
          )}>
            DEPLOY_HUD
          </button>
          <div className="flex items-center px-6 py-3 text-primary/40 hover:bg-primary/5 hover:text-primary transition-all cursor-pointer w-full">
            <Sliders className="w-5 h-5" />
            <span className={cn("ml-4 font-headline text-xs uppercase tracking-widest transition-opacity", isSidebarOpen ? "block" : "hidden")}>SETTINGS</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-20 pt-16 min-h-screen relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeSection === 'MISSION_LOG' && <HeroSection key="hero" />}
          {activeSection === 'DISTRICT_01' && <AboutSection key="about" />}
          {activeSection === 'SECTOR_X' && <ProjectsSection key="projects" />}
          {activeSection === 'INTEL' && <ExperienceSection key="experience" onOpenContact={() => setIsContactModalOpen(true)} />}
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-4 py-1 h-8 bg-black border-t border-tertiary/30">
        <div className="font-headline text-[10px] tracking-[0.2em] font-medium text-tertiary animate-pulse">
          SYS_AUTH: NEURAL_OVERRIDE_V2.0.4 | LATENCY: 12ms | ENC: AES-256 | SCANNING_DISTRICTS...
        </div>
        <div className="flex gap-6">
          <button className="font-headline text-[10px] tracking-[0.2em] font-medium text-tertiary/50 hover:text-on-surface transition-colors">SYS_INFO</button>
          <button className="font-headline text-[10px] tracking-[0.2em] font-medium text-tertiary/50 hover:text-on-surface transition-colors">REBOOT</button>
        </div>
      </footer>

      <AnimatePresence>
        {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

function SidebarItem({ icon, label, active, isOpen, onClick }: { icon: React.ReactNode, label: string, active: boolean, isOpen: boolean, onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center px-6 py-3 transition-all cursor-pointer border-l-4",
        active
          ? "bg-primary/20 text-primary border-primary"
          : "text-primary/40 border-transparent hover:bg-primary/5 hover:text-primary"
      )}
    >
      {icon}
      <span className={cn(
        "ml-4 font-headline text-xs uppercase tracking-widest transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 hidden"
      )}>
        {label}
      </span>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-[calc(100vh-64px)] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src={cityImage}
          alt="Cyberpunk City"
          className="w-full h-full object-cover scale-110 blur-[2px] brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          <span className="font-label text-primary tracking-[0.5em] text-[10px] font-bold uppercase opacity-80">ESTABLISHING_NEURAL_LINK...</span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="font-headline font-black text-7xl md:text-9xl text-primary tracking-tighter uppercase leading-none text-glow-cyan"
        >
          MUSKAN
        </motion.h1>

        <div className="relative w-full mt-2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 font-headline text-2xl md:text-4xl text-tertiary font-bold tracking-widest uppercase text-glow-magenta"
        >
          SOFTWARE ENGINEER
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-6"
        >
          <button className="bg-primary-container text-on-primary-container font-headline font-bold text-lg px-12 py-4 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition-transform">
            INITIATE_DIVE
          </button>
          <button className="border border-tertiary text-tertiary font-headline font-bold text-lg px-12 py-4 hover:bg-tertiary/10 transition-colors uppercase">
            VIEW_ARCHIVES
          </button>
        </motion.div>
      </div>

      {/* HUD Elements */}
      <div className="absolute left-6 md:left-24 bottom-16 md:bottom-24 z-20 glass-panel p-4 border-l-2 border-primary-container">
        <div className="flex flex-col gap-3">
          <div className="space-y-1">
            <div className="font-label text-[10px] text-primary/60 uppercase">Altitude</div>
            <div className="font-headline text-xl font-bold text-primary">1,248M</div>
          </div>
          <div className="space-y-1">
            <div className="font-label text-[10px] text-primary/60 uppercase">Velocity</div>
            <div className="font-headline text-xl font-bold text-primary">Mach 1.28</div>
          </div>
          <div className="mt-2 flex gap-1">
            <div className="h-1 w-8 bg-primary"></div>
            <div className="h-1 w-8 bg-primary"></div>
            <div className="h-1 w-8 bg-primary/20"></div>
            <div className="h-1 w-8 bg-primary/20"></div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 md:right-12 bottom-16 md:bottom-24 z-20 flex flex-col items-end gap-4 text-right">
        <div className="glass-panel p-4 border-r-2 border-tertiary">
          <div className="font-label text-[10px] text-tertiary/60 uppercase">Mission Status</div>
          <div className="font-headline text-lg font-bold text-tertiary">SYNC_STABLE: 98%</div>
        </div>
        <div className="glass-panel p-4 border-r-2 border-secondary">
          <div className="font-label text-[10px] text-secondary/60 uppercase">Sector Location</div>
          <div className="font-headline text-lg font-bold text-secondary">DISTRICT_01_CORE</div>
        </div>
      </div>

      {/* Animated L-Bracket Corners */}
      <div className="absolute top-24 left-24 w-8 h-8 border-t-2 border-l-2 border-primary-container opacity-50 hidden md:block"></div>
      <div className="absolute top-24 right-12 w-8 h-8 border-t-2 border-r-2 border-primary-container opacity-50 hidden md:block"></div>
    </motion.section>
  );
}

function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden"
    >
      {/* Background Imagery */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80 z-10" />
        <img
          src={buildingImage}
          alt="Building Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-8 md:p-12">
        <div className="mb-12 border-l-4 border-primary pl-6">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2 uppercase text-glow-cyan">
            SECTOR_X: <span className="text-primary italic">NEURAL PROFILE</span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="bg-secondary/20 text-secondary px-3 py-1 text-[10px] tracking-widest uppercase font-bold border border-secondary/30">STATUS: OPERATIONAL</span>
            <span className="text-outline text-[10px] tracking-widest uppercase font-mono">ID: MSK_9901_BRAVO</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Identity Module */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-surface-container-low backdrop-blur-md p-1 border-l-4 border-primary shadow-glow-cyan">
              <div className="bg-surface-container-high p-6 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  className="w-full aspect-square object-cover mix-blend-luminosity brightness-110 mb-6 border border-primary/20"
                  alt="Muskan Profile"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary/20 px-2 py-1 text-[10px] text-primary border border-primary/40 backdrop-blur-md font-mono">LIVE_FEED</div>
                <h2 className="text-2xl font-bold uppercase mb-1 tracking-wider text-white italic">MUSKAN</h2>
                <p className="text-sm text-primary/80 mb-6 leading-relaxed uppercase font-mono tracking-wider">Full-Stack Pilot / Structural Architect</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-secondary">
                    <span>SYNAPSE_LEVEL</span>
                    <span className="font-mono">89.4%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-lowest">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '89.4%' }}
                      className="h-full bg-secondary shadow-[0_0_10px_#8bfc6e]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low backdrop-blur-md p-6 border-t border-primary/10">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-4">LOG.01: MISSION_STATEMENT</h3>
              <p className="text-sm leading-relaxed text-on-surface/80 font-light">
                Engineering digital landscapes where high-performance backends meet intuitive neural interfaces. Currently focused on building autonomous architectural frameworks that scale beyond standard terrestrial limits.
              </p>
            </div>
          </div>

          {/* Right Column: Data Streams */}
          <div className="md:col-span-8 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-primary/30"></span>
                CORE_TECH_STACK
                <span className="text-[10px] text-primary/50 font-normal uppercase tracking-normal">[PRIORITY_A]</span>
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <TechCard icon={<Code2 className="w-5 h-5" />} title="DOCKER" subtitle="Containerization" />
                <TechCard icon={<Cloud className="w-5 h-5" />} title="AWS" subtitle="Cloud Compute" />
                <TechCard icon={<Share2 className="w-5 h-5" />} title="GRAPHQL" subtitle="Query Language" />
                <TechCard icon={<Database className="w-5 h-5" />} title="REDIS" subtitle="Caching Tier" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard
                title="REACT ECOSYSTEM"
                color="cyan"
                items={[
                  { label: 'NEXT.JS ARCHITECTURE', value: 'OPTIMIZED' },
                  { label: 'STATE_MANAGEMENT', value: 'FLUX/REDUX' },
                  { label: 'UI_ENGINE', value: 'TAILWIND_V4' },
                ]}
              />
              <SkillCard
                title="NEURAL BACKEND"
                color="pink"
                items={[
                  { label: 'NODE_CORE_SERVICES', value: 'RUNTIME_EXT' },
                  { label: 'POSTGRES_NESTING', value: 'RELATIONAL' },
                  { label: 'KAFKA_STREAMS', value: 'SYNC_READY' },
                ]}
              />
            </div>

            {/* Footer Activity Monitor */}
            <div className="bg-surface-container-lowest/60 backdrop-blur-md p-6 border border-tertiary/20 font-mono text-[10px]">
              <div className="flex items-center justify-between mb-4 border-b border-tertiary/20 pb-2">
                <span className="text-tertiary uppercase font-bold tracking-widest">ACTIVE_STREAMS_MONITOR</span>
                <span className="text-outline">REFRESH: 0.5s</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-outline uppercase">Latency</span>
                  <span className="text-white text-xs">24ms</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-outline uppercase">Packet_Loss</span>
                  <span className="text-white text-xs">0.00%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-outline uppercase">Secure_Link</span>
                  <span className="text-secondary text-xs uppercase font-bold">Encrypted</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}

function TechCard({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="bg-surface-container-low backdrop-blur-md p-4 border border-outline-variant/40 hover:bg-surface-container-high transition-colors group">
      <div className="text-secondary mb-2 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-xs font-bold uppercase tracking-wider mb-1">{title}</div>
      <div className="text-[9px] text-outline uppercase">{subtitle}</div>
    </div>
  );
}

function SkillCard({ title, items, color }: { title: string, items: { label: string, value: string }[], color: 'cyan' | 'pink' }) {
  const colorClass = color === 'cyan' ? 'text-primary' : 'text-tertiary';
  const bgClass = color === 'cyan' ? 'bg-primary' : 'bg-tertiary';
  const shadowClass = color === 'cyan' ? 'shadow-[0_0_8px_#8ff5ff]' : 'shadow-[0_0_8px_#ff75f6]';

  return (
    <div className={cn(
      "bg-surface-container-low backdrop-blur-md p-8 border-l border-b relative group overflow-hidden",
      color === 'cyan' ? "border-primary/20" : "border-tertiary/20"
    )}>
      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
        <span className={cn("w-2 h-2", bgClass, shadowClass)} />
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center justify-between text-xs font-mono">
            <span className="text-on-surface-variant uppercase">{item.label}</span>
            <span className={cn("font-bold", colorClass)}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      } as React.CSSProperties}
    >
      {/* Interactive Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              600px circle at var(--mouse-x) var(--mouse-y),
              rgba(0, 240, 255, 0.15),
              transparent 40%
            )`,
          }}
        />
      </div>


      <div className="relative z-10 p-8 md:p-12">
        {/* Background Atmospheric Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>

        {/* Central Sphere / Neural Core */}
        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center pointer-events-none mb-12 opacity-80">
          <div className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] border border-primary/20 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] border border-primary/40 rounded-full flex items-center justify-center">
              <div className="w-[100px] md:w-[150px] h-[100px] md:h-[150px] bg-gradient-to-tr from-primary/20 to-secondary/20 backdrop-blur-3xl rounded-full flex items-center justify-center glow-cyan">
                <div className="text-center">
                  <p className="font-headline text-xl md:text-3xl font-black text-primary leading-none">NEURAL</p>
                  <p className="font-headline text-sm md:text-lg text-secondary tracking-[0.4em] mt-1">CORE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Data Streams */}
          <div className="absolute top-0 md:top-10 right-0 md:right-10 flex flex-col items-end gap-2 text-right">
            <span className="font-label text-[10px] text-primary tracking-widest uppercase">Fragment_Stability</span>
            <span className="font-headline text-xl md:text-2xl font-bold text-tertiary">99.9%</span>
            <div className="w-24 md:w-32 h-1 bg-surface-container overflow-hidden">
              <div className="w-full h-full bg-tertiary animate-pulse"></div>
            </div>
          </div>

          <div className="absolute bottom-0 md:bottom-10 left-0 md:left-10 flex flex-col gap-2">
            <span className="font-label text-[10px] text-primary tracking-widest uppercase">Data_Stream_Capacity</span>
            <div className="flex gap-1">
              <div className="w-3 md:w-4 h-4 md:h-6 bg-primary"></div>
              <div className="w-3 md:w-4 h-4 md:h-6 bg-primary"></div>
              <div className="w-3 md:w-4 h-4 md:h-6 bg-primary"></div>
              <div className="w-3 md:w-4 h-4 md:h-6 bg-primary"></div>
              <div className="w-3 md:w-4 h-4 md:h-6 bg-primary/20"></div>
            </div>
            <span className="font-headline text-xs md:text-sm font-bold text-primary">4096 TB/S</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 border-l-4 border-primary pl-6">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-2 uppercase text-glow-cyan">
              SECTOR_X: <span className="text-primary italic">PROJECT_LOGS</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard
              title="GTRopy Fleet Intelligence"
              category="Project_01 // Fleet_Intel"
              icon={<Activity className="w-8 h-8" />}
              image="https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070&auto=format&fit=crop"
              description="High-fidelity telematics platform utilizing neural mapping to optimize fleet logistics in real-time. Built for the Synthetic Architect's grid."
              tags={['REACT.JS', 'WEBSOCKETS', 'KAFKA', 'D3.JS']}
              color="cyan"
            />
            <ProjectCard
              title="Mappls API Visualizer"
              category="Project_02 // Spatial_Data"
              icon={<Map className="w-8 h-8" />}
              image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
              description="A neural-spatial interface visualizing multi-dimensional map data through the Mappls API ecosystem. Optimized for hyper-growth urban sectors."
              tags={['TYPESCRIPT', 'MAPBOX_GL', 'NEXT.JS', 'POSTGIS']}
              color="pink"
            />
          </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none -z-10">
        <h2 className="font-headline text-[30vw] font-black leading-none whitespace-nowrap">FRAGMENTS</h2>
      </div>
    </motion.section>
  );
}

function ProjectCard({ title, category, icon, image, description, tags, color }: { title: string, category: string, icon: React.ReactNode, image: string, description: string, tags: string[], color: 'cyan' | 'pink' }) {
  const borderColor = color === 'cyan' ? 'border-primary' : 'border-tertiary';
  const textColor = color === 'cyan' ? 'text-primary' : 'text-tertiary';
  const glowShadow = color === 'cyan' ? 'hover:shadow-[0_0_40px_rgba(0,219,233,0.25)]' : 'hover:shadow-[0_0_40px_rgba(255,117,246,0.25)]';

  return (
    <div className={cn(
      "group relative bg-surface-container-low border-l-4 hover:bg-surface-container transition-all duration-500 overflow-hidden",
      borderColor,
      glowShadow
    )}>
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className={cn("font-label text-[10px] uppercase tracking-widest", textColor)}>{category}</span>
            <h3 className="font-headline text-3xl font-black text-on-surface uppercase tracking-tight mt-1">{title}</h3>
          </div>
          <div className={textColor}>{icon}</div>
        </div>

        <div className="aspect-video mb-8 bg-black relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
          <img
            src={image}
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
            alt={title}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-4 left-4 flex gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            <button className={cn("flex items-center gap-2 px-3 py-1.5 border bg-background/80 backdrop-blur-sm hover:brightness-125 transition-all", borderColor, textColor)}>
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-headline font-bold uppercase text-[9px] tracking-widest">SOURCE_CODE</span>
            </button>
            <button className={cn("flex items-center gap-2 px-3 py-1.5 border bg-background/80 backdrop-blur-sm hover:brightness-125 transition-all", borderColor, textColor)}>
              <Power className="w-3.5 h-3.5" />
              <span className="font-headline font-bold uppercase text-[9px] tracking-widest">LAUNCH_DEPLOY</span>
            </button>
          </div>
        </div>

        <p className="font-body text-on-surface-variant leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map(tag => (
            <span key={tag} className={cn("text-[10px] font-label px-3 py-1 bg-surface-container-high border border-outline-variant", textColor)}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection({ onOpenContact }: { key?: string, onOpenContact?: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden"
    >
      {/* Skyscraper Perspective Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden translate-y-10">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
              <stop offset="100%" stopColor="rgba(0, 240, 255, 0.2)" />
            </linearGradient>
          </defs>
          {/* Vertical converging lines (Skyscraper beams) */}
          {Array.from({ length: 24 }).map((_, i) => {
            const xPos = (i / 23) * 100;
            return (
              <line
                key={`v-${i}`}
                x1={`${xPos}%`}
                y1="100%"
                x2="50%"
                y2="-150%"
                stroke="url(#grid-fade)"
                strokeWidth="1"
              />
            );
          })}
          {/* Horizontal floor bands (Increasing spacing downwards) */}
          {Array.from({ length: 20 }).map((_, i) => {
            const progress = i / 19;
            const yPos = Math.pow(progress, 1.8) * 105; // Curve for better perspective
            return (
              <line
                key={`h-${i}`}
                x1="0"
                y1={`${yPos}%`}
                x2="100%"
                y2={`${yPos}%`}
                stroke="rgba(0, 240, 255, 0.06)"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-outline-variant/30 pb-6 mb-20 gap-8">
          <div className="relative">
            <span className="font-label text-xs text-primary tracking-[0.4em] block mb-2">INTEL // SECTOR_CORPORATE</span>
            <h1 className="font-headline text-7xl md:text-8xl font-black text-on-background leading-none tracking-tighter uppercase">CAREER<br /><span className="text-primary">HISTORY</span></h1>
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary" />
          </div>

          <div className="glass-panel p-6 border border-primary/20 min-w-[320px]">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">CAREER_UPTIME: 5 YEARS</span>
              <span className="font-label text-[10px] text-secondary">STABLE</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-label mb-1">
                  <span className="text-on-surface-variant">EXP_ACCUMULATED</span>
                  <span className="text-primary">88%</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest">
                  <div className="h-full bg-primary w-[88%] shadow-glow-cyan" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 flex-1 bg-surface-container border border-outline-variant flex items-center justify-center font-label text-[10px] text-on-surface-variant">NODE_ACTIVE</div>
                <div className="h-8 flex-1 bg-secondary text-background flex items-center justify-center font-label text-[10px] font-bold">SYNC_READY</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-32 pb-32">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-outline-variant to-transparent -translate-x-1/2 hidden md:block" />

          <ExperienceItem
            title="SENIOR SYSTEMS ARCHITECT"
            company="Tower GTRopy"
            description="Deployed high-concurrency neural pipelines for traffic processing. Optimized core engine latency by 45ms across multiple edge nodes."
            points={['REDUCED_DB_LOCK_CONTENTION', 'SCALED_ORCHESTRATION_LAYER', 'ZERO_DOWNTIME_MIGRATION']}
            image={office1Image}
            icon={<BarChart3 className="w-6 h-6" />}
            side="left"
            color="cyan"
          />

          <ExperienceItem
            title="CORE_ENGINEERING_LEAD"
            company="Tower MapmyIndia"
            description="Pioneered the 'Neural-Path' mapping protocol. Integrated real-time spatial telemetry into the central district hub with 99.9% uptime."
            points={['SPATIAL_QUERY_OPTIMIZATION', 'GEOSPATIAL_DISTRIBUTION_V3', 'LEGACY_API_DEPRECATION']}
            image={office2Image}
            icon={<MapPin className="w-6 h-6" />}
            side="right"
            color="pink"
          />
        </div>

        <div className="flex justify-center pt-12">
          <div className="glass-panel p-10 border border-primary/30 relative max-w-2xl w-full text-center">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
            <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-headline text-3xl font-bold mb-4 uppercase">Initialize Protocol?</h4>
            <p className="font-body text-sm text-on-surface-variant mb-8 px-12">Requesting full neural dossier access for the corporate recruitment protocol. Secure channel established.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-primary text-background px-8 py-4 font-headline font-black text-sm uppercase tracking-widest hover:shadow-glow-cyan transition-all">
                DOWNLOAD_RESUME.EXE
              </button>
              <button
                onClick={() => onOpenContact && onOpenContact()}
                className="border border-primary text-primary px-8 py-4 font-headline font-black text-sm uppercase tracking-widest hover:bg-primary/10 transition-all">
                CONTACT_TERMINAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceItem({ title, company, description, points, image, icon, side, color }: { title: string, company: string, description: string, points: string[], image: string, icon: React.ReactNode, side: 'left' | 'right', color: 'cyan' | 'pink' }) {
  const borderColor = color === 'cyan' ? 'border-primary' : 'border-tertiary';
  const textColor = color === 'cyan' ? 'text-primary' : 'text-tertiary';
  const bgColor = color === 'cyan' ? 'bg-primary' : 'bg-tertiary';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16">
      {/* Absolute Icon Block on Far Edge */}
      <div className={cn(
        "hidden md:flex absolute top-8 w-14 h-14 items-center justify-center text-background z-20 shadow-lg",
        bgColor,
        side === 'left' ? "-left-16" : "-right-16"
      )}>
        {icon}
      </div>

      <div className={cn("order-2 flex flex-col", side === 'left' ? "md:order-1 items-end text-right" : "md:order-2 items-start text-left")}>
        <div className="mb-6">
          <h3 className="font-headline text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-wider">{title}</h3>
          <p className={cn("font-headline text-sm font-bold tracking-[0.2em] uppercase mt-2", textColor)}>{company}</p>
        </div>
        <div className={cn("space-y-6 max-w-lg mt-4", side === 'left' ? "items-end" : "items-start")}>
          <div className={cn("py-2", side === 'left' ? "border-r-[3px] pr-6" : "border-l-[3px] pl-6", borderColor)}>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed opacity-90">{description}</p>
          </div>
          <ul className="font-headline text-xs space-y-3 text-on-surface-variant font-bold tracking-widest">
            {points.map((point, i) => (
              <li key={i} className={cn("flex items-center gap-3", side === 'left' ? "justify-end" : "justify-start")}>
                <span className={textColor}>0{i + 1}</span>
                <span className="opacity-40">//</span>
                <span className="opacity-80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cn("order-1 relative group w-full h-[360px]", side === 'left' ? "md:order-2" : "md:order-1")}>
        <div className={cn(
          "w-full h-full bg-surface-container-high overflow-hidden relative shadow-2xl shadow-black/50 border-primary/50",
          side === 'left' ? "border-t-[3px] border-r-[3px] skew-x-[-12deg]" : "border-b-[3px] border-l-[3px] skew-x-[12deg]",
          borderColor
        )}>
          <img
            src={image}
            className={cn(
              "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 scale-[1.2]",
              side === 'left' ? "skew-x-[12deg]" : "skew-x-[-12deg]"
            )}
            alt={company}
            referrerPolicy="no-referrer"
          />
          <div className={cn("absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/20", side === 'left' ? "bg-gradient-to-tr" : "bg-gradient-to-tl")} />

          <div className={cn("absolute top-8", side === 'left' ? "left-16" : "right-16")}>
            <div className={cn(
              "px-6 py-2 border bg-background/40 backdrop-blur-md",
              borderColor,
              side === 'left' ? "skew-x-[-12deg]" : "skew-x-[12deg]"
            )}>
              <span className={cn(
                "block font-headline text-xl font-bold italic tracking-wider",
                textColor,
                side === 'left' ? "skew-x-[12deg]" : "skew-x-[-12deg]"
              )}>{company.replace('Tower ', '')}</span>
            </div>
          </div>

          <div className={cn("absolute bottom-6 opacity-50", side === 'left' ? "right-12" : "left-12")}>
            <span className={cn(
              "block font-label text-[9px] tracking-[0.25em] uppercase text-white",
              side === 'left' ? "skew-x-[12deg]" : "skew-x-[-12deg]"
            )}>COORDINATES: 40.7128° N, 74.0060° W</span>
          </div>
        </div>

        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 w-12 h-14 border-[3px] bg-background flex flex-col items-center justify-center z-10 hidden md:flex",
          side === 'left' ? "-left-6 border-l-0" : "-right-6 border-r-0",
          borderColor
        )}>
          <div className="flex flex-col items-center justify-center -space-y-3">
            <ChevronUp className={cn("w-6 h-6", textColor)} strokeWidth={3} />
            <ChevronUp className={cn("w-6 h-6", textColor)} strokeWidth={3} />
            <ChevronUp className={cn("w-6 h-6", textColor)} strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-surface/60 backdrop-blur-md" onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-4xl bg-[#1a1a1c]/90 border-2 border-primary shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-xl overflow-hidden"
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary z-20"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary z-20"></div>

        {/* Modal Header */}
        <div className="flex justify-between items-start p-8 pb-0">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black font-headline tracking-tighter text-on-surface leading-none opacity-90">
              DISTRICT <span className="text-primary">04</span>
            </h1>
            <h2 className="text-lg font-headline font-bold text-outline uppercase tracking-tight mt-1">CONTACT_TERMINAL</h2>
          </div>
          <button onClick={onClose} className="flex items-center space-x-2 text-primary hover:text-white transition-colors group z-20 cursor-pointer">
            <span className="font-mono text-[10px] tracking-widest hidden md:block">CLOSE_UPLINK</span>
            <X className="w-8 h-8 md:w-10 md:h-10 border border-primary/40 p-1 group-hover:bg-primary group-hover:text-[#00363a] transition-all duration-300" />
          </button>
        </div>

        {/* Terminal Form Body */}
        <div className="p-8 lg:p-12 relative z-10">
          <form className="space-y-8 relative" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-primary tracking-widest uppercase block group-focus-within:text-white transition-colors">UPLINK_ID</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant text-on-surface font-mono placeholder:text-on-surface-variant/50 focus:ring-0 focus:border-primary transition-all py-3 px-2 outline-none focus:bg-primary/5" placeholder="GUEST_IDENTITY" type="text" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-primary tracking-widest uppercase block group-focus-within:text-white transition-colors">COMM_CHANNEL</label>
                <div className="relative">
                  <input className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant text-on-surface font-mono placeholder:text-on-surface-variant/50 focus:ring-0 focus:border-primary transition-all py-3 px-2 outline-none focus:bg-primary/5" placeholder="ENCRYPTED_ADR@PROTO.CY" type="email" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
            <div className="space-y-2 group">
              <label className="font-mono text-[10px] text-primary tracking-widest uppercase block group-focus-within:text-white transition-colors">ENCRYPTED_MESSAGE</label>
              <div className="relative">
                <textarea className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant text-on-surface font-mono placeholder:text-on-surface-variant/50 focus:ring-0 focus:border-primary transition-all py-3 px-2 resize-none outline-none focus:bg-primary/5" placeholder="ENTER_DATA_STREAM_HERE..." rows={4}></textarea>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
              </div>
            </div>
            <div className="pt-4 mt-8">
              <button type="submit" className="group relative w-full py-4 bg-primary text-[#00363a] font-headline font-black text-lg tracking-[0.3em] overflow-hidden hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all cursor-pointer">
                <span className="relative z-10 block group-hover:scale-105 transition-transform duration-300">INITIATE_UPLINK</span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            </div>
          </form>

          {/* Terminal Readout Meta */}
          <div className="mt-12 pt-6 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-6 font-mono text-[9px] text-outline uppercase relative z-10">
            <div className="flex gap-8">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-[#8bfc6e] animate-pulse shadow-[0_0_8px_#8bfc6e]"></span>
                <span className="opacity-80">NODE_STABLE</span>
              </div>
              <div className="opacity-80">BUFFER: 4096KB</div>
              <div className="opacity-80">TRANS_ID: <span className="text-on-surface font-bold">#4491-00-XC</span></div>
            </div>
            <div className="text-primary animate-pulse tracking-widest font-bold">PENDING_USER_INPUT...</div>
          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

      </motion.div>
    </motion.div>
  );
}
