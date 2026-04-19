import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import {
  SiTypescript, SiJavascript, SiHtml5, SiCss, SiAngular, SiIonic, SiReactivex,
  SiSqlite, SiMongodb, SiGit, SiGitlab, SiPostman, SiFigma, SiJira,
  SiCplusplus, SiPython, SiGnubash, SiReact, SiGithub, SiFirebase, SiLinux,
  SiCapacitor, SiApacheecharts, SiTailwindcss, SiLeetcode, SiGmail
} from 'react-icons/si';
import { FaAws, FaJava, FaLinkedin } from 'react-icons/fa';
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
  X,
  Timer,
  Mail
} from 'lucide-react';
import { cn } from './lib/utils';
import cityImage from './assets/city.png';
import buildingImage from './assets/building.png';
import office1Image from './assets/office1.png';
import office2Image from './assets/office2.png';
import muskanImage from './assets/Muskan.jpg';
import intouchIcon from './assets/intouch_icon.png';
import pomodoroIcon from './assets/pomodoro_icon.png';
import intouchImage from './assets/Intouch.png';
import pomodoroImage from './assets/pomodoro.png';
import neuralLinkImage from './assets/neuralink.png';
import resumePDF from './assets/Muskan_Kumari_Frontend_Resume.pdf';

type Section = 'MISSION_LOG' | 'DISTRICT_01' | 'SECTOR_X' | 'INTEL';

function CyberpunkCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
      const el = e.target as HTMLElement;
      const clickable =
        el.closest('button, a, [role="button"], input, select, textarea, label') !== null ||
        window.getComputedStyle(el).cursor === 'pointer';
      setIsLocked(clickable);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Inner dot — hollow ring on lock */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full transition-all duration-150"
        style={{
          willChange: 'transform',
          width: isLocked ? '10px' : '8px',
          height: isLocked ? '10px' : '8px',
          background: isLocked ? 'transparent' : '#ff8400',
          border: isLocked ? '2px solid #ff8400' : 'none',
          boxShadow: '0 0 10px #ff8400, 0 0 20px #ff8400, 0 0 30px #ff8400',
        }}
      />
      {/* Outer crosshair */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          willChange: 'transform',
          width: '40px',
          height: '40px',
          filter: isLocked
            ? 'drop-shadow(0 0 6px #ff2020) drop-shadow(0 0 18px rgba(255,32,32,0.7))'
            : 'drop-shadow(0 0 4px rgba(255,132,0,0.8)) drop-shadow(0 0 12px rgba(255,132,0,0.4))',
          transition: 'filter 0.15s ease',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {isLocked ? (
            <>
              {/* Outer glow circle */}
              <circle cx="20" cy="20" r="18" stroke="#ff2020" strokeWidth="1.5" fill="rgba(255,32,32,0.06)" />
              {/* Crosshair lines with center gap */}
              <line x1="20" y1="2" x2="20" y2="14" stroke="#ff2020" strokeWidth="1.5" />
              <line x1="20" y1="26" x2="20" y2="38" stroke="#ff2020" strokeWidth="1.5" />
              <line x1="2" y1="20" x2="14" y2="20" stroke="#ff2020" strokeWidth="1.5" />
              <line x1="26" y1="20" x2="38" y2="20" stroke="#ff2020" strokeWidth="1.5" />
              {/* Center dot */}
              <circle cx="20" cy="20" r="2.5" fill="#ff2020" />
            </>
          ) : (
            <>
              <line x1="0" y1="8" x2="0" y2="0" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="0" y1="0" x2="8" y2="0" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="32" y1="0" x2="40" y2="0" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="40" y1="0" x2="40" y2="8" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="40" y1="32" x2="40" y2="40" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="40" y1="40" x2="32" y2="40" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="8" y1="40" x2="0" y2="40" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="0" y1="40" x2="0" y2="32" stroke="#ff8400" strokeWidth="2" strokeLinecap="square" />
              <line x1="20" y1="14" x2="20" y2="26" stroke="#ff8400" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
              <line x1="14" y1="20" x2="26" y2="20" stroke="#ff8400" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
            </>
          )}
        </svg>

      </div>
    </>
  );
}

function CyberTransition({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <div className="cyber-transition-overlay">
      <div className="glitch-layer" />
      <div className="noise-layer" />
      <div className="scan-bar" />
      <div className="hud-text">NEURAL_LINK_ESTABLISHED...</div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('MISSION_LOG');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navItems: { section: Section; label: string; icon: React.ReactNode }[] = [
    { section: 'MISSION_LOG', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { section: 'DISTRICT_01', label: 'About', icon: <Fingerprint className="w-5 h-5" /> },
    { section: 'SECTOR_X', label: 'Projects', icon: <GitBranch className="w-5 h-5" /> },
    { section: 'INTEL', label: 'Experience', icon: <Network className="w-5 h-5" /> },
  ];

  const navigateTo = (section: Section) => {
    if (isTransitioning || activeSection === section) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 500);
  };

  const handleDive = () => navigateTo('DISTRICT_01');

  return (
    <div className="relative min-h-screen bg-background text-on-surface font-body overflow-x-hidden cursor-none">
      <CyberpunkCursor />
      <CyberTransition active={isTransitioning} />
      {/* Global Scanline Overlay */}
      <div className="fixed inset-0 z-[100] scanline-overlay opacity-30 pointer-events-none" />

      {/* Top System Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-3 sm:px-4 md:px-6 h-12 bg-black/60 backdrop-blur-md border-b border-primary/20">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="hidden sm:block text-[10px] font-black tracking-[0.2em] text-primary/80 font-headline uppercase italic">
            SYSTEM_OS.EXE // <span className="opacity-50 font-medium">V4.0.2</span>
          </div>
          <div className="hidden md:flex items-center gap-3 ml-4 pl-4 border-l border-primary/10">
            <Activity className="w-3 h-3 text-primary/40" />
            <div className="w-16 h-1 bg-primary/10 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-primary/40 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 max-w-[42vw] sm:max-w-none">
          <Terminal className="hidden sm:block w-4 h-4 text-primary animate-pulse" />
          <h2 className="font-headline text-[10px] sm:text-xs font-bold text-primary tracking-[0.2em] sm:tracking-[0.4em] uppercase truncate">
            {activeSection.replace('_', ' ')}
          </h2>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[8px] font-label text-primary/40 leading-none">CORE_TEMP</span>
            <span className="text-[10px] font-headline text-primary font-bold leading-none">32°C</span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-primary/20" />
          <div className="flex gap-3">
            <Settings className="w-4 h-4 text-primary/60 hover:text-primary cursor-pointer transition-colors" />
            <Power className="w-4 h-4 text-red-500/60 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </header>

      {/* Side Navigation Bar */}
      <aside
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
        className={cn(
          "hidden md:flex fixed left-0 top-12 h-[calc(100vh-48px)] z-40 flex-col bg-surface-container-low/80 backdrop-blur-md border-r border-primary/20 transition-all duration-500 ease-in-out overflow-hidden",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className={cn(
          "flex flex-col w-full h-20 justify-center px-6 transition-all duration-500 whitespace-nowrap",
          isSidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
        )}>
          <div className="text-lg font-bold text-primary font-headline uppercase tracking-tight">DISTRICT_OVERLAY</div>
          <div className="text-[10px] uppercase tracking-widest text-primary/60 font-headline">SECTOR: NEURAL_CORE</div>
        </div>

        <div className="flex flex-col w-full flex-grow py-4">
          {navItems.map(({ section, label, icon }) => (
            <SidebarItem
              key={section}
              icon={icon}
              label={label}
              active={activeSection === section}
              isOpen={isSidebarOpen}
              onClick={() => navigateTo(section)}
            />
          ))}
        </div>

        <div className="mt-auto w-full flex flex-col py-6">
          {/* DEPLOY_HUD BUTTON (COMMENTED_OUT)
          <div className="px-5 mb-4">
            <button className={cn(
              "w-full bg-primary text-background font-headline text-[10px] font-bold py-3 uppercase tracking-widest notch-tr transition-all duration-500 hover:brightness-110 whitespace-nowrap overflow-hidden",
              isSidebarOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
            )}>
              {isSidebarOpen ? "DEPLOY_HUD" : ""}
            </button>
          </div>
          */}

          {/* SETTINGS LINK (COMMENTED_OUT)
          <div 
            className="flex items-center h-12 text-primary/40 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer group"
          >
            <div className="w-20 flex items-center justify-center flex-shrink-0">
              <Sliders className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500 text-primary" />
            </div>
            <span className={cn(
              "font-headline text-xs uppercase tracking-widest transition-all duration-500 whitespace-nowrap",
              isSidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}>
              SETTINGS
            </span>
          </div>
          */}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="pt-12 pb-24 md:pb-10 md:ml-20 min-h-screen relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeSection === 'MISSION_LOG' && <HeroSection key="hero" onDive={handleDive} />}
          {activeSection === 'DISTRICT_01' && <AboutSection key="about" />}
          {activeSection === 'SECTOR_X' && <ProjectsSection key="projects" />}
          {activeSection === 'INTEL' && <ExperienceSection key="experience" onOpenContact={() => setIsContactModalOpen(true)} />}
        </AnimatePresence>
      </main>

      <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t border-primary/20 bg-black/80 backdrop-blur-md">
        <div className="grid grid-cols-4">
          {navItems.map(({ section, label, icon }) => (
            <MobileNavItem
              key={section}
              icon={icon}
              label={label}
              active={activeSection === section}
              onClick={() => navigateTo(section)}
            />
          ))}
        </div>
      </nav>

      {/* Global Footer */}
      <footer className="hidden md:flex fixed bottom-0 w-full z-50 justify-between items-center px-4 py-1 h-8 bg-black border-t border-secondary/30">
        <div className="font-headline text-[10px] tracking-[0.2em] font-medium text-secondary animate-pulse truncate pr-4">
          SYS_AUTH: NEURAL_OVERRIDE_V2.0.4 | LATENCY: 12ms | ENC: AES-256 | SCANNING_DISTRICTS...
        </div>
        <div className="flex gap-6">
          <button className="font-headline text-[10px] tracking-[0.2em] font-medium text-secondary/50 hover:text-on-surface transition-colors">SYS_INFO</button>
          <button className="font-headline text-[10px] tracking-[0.2em] font-medium text-secondary/50 hover:text-on-surface transition-colors">REBOOT</button>
        </div>
      </footer>

      <AnimatePresence>
        {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

function SidebarItem({ icon, label, active, isOpen, onClick }: { key?: React.Key, icon: React.ReactNode, label: string, active: boolean, isOpen: boolean, onClick: () => void }) {
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (glitchTimeoutRef.current) window.clearTimeout(glitchTimeoutRef.current);
    };
  }, []);

  const triggerClickFeedback = () => {
    if (glitchTimeoutRef.current) window.clearTimeout(glitchTimeoutRef.current);
    setIsGlitching(true);
    glitchTimeoutRef.current = window.setTimeout(() => setIsGlitching(false), 70);
    onClick();
  };

  return (
    <div
      role="button"
      onClick={triggerClickFeedback}
      className={cn(
        "flex items-center h-14 transition-all duration-300 border-l-4 group relative overflow-hidden",
        active
          ? "bg-primary/15 text-primary border-primary shadow-[inset_10px_0_15px_-10px_rgba(0,240,255,0.2)]"
          : "text-primary/40 border-transparent hover:bg-primary/5 hover:text-primary hover:border-primary/20"
      )}
    >
      <div className="w-20 flex items-center justify-center flex-shrink-0">
        <div className={cn(
          "transition-transform duration-500",
          isGlitching && "crt-click-glitch",
          isOpen ? "scale-110" : "scale-100",
          active && "scale-110 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
        )}>
          {icon}
        </div>
      </div>
      <span className={cn(
        "font-headline text-xs font-bold uppercase tracking-widest transition-all duration-500 whitespace-nowrap",
        isGlitching && "crt-click-glitch",
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
      )}>
        {label}
      </span>
    </div>
  );
}

function MobileNavItem({ icon, label, active, onClick }: { key?: React.Key, icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  const [isGlitching, setIsGlitching] = useState(false);
  const glitchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (glitchTimeoutRef.current) window.clearTimeout(glitchTimeoutRef.current);
    };
  }, []);

  const triggerClickFeedback = () => {
    if (glitchTimeoutRef.current) window.clearTimeout(glitchTimeoutRef.current);
    setIsGlitching(true);
    glitchTimeoutRef.current = window.setTimeout(() => setIsGlitching(false), 70);
    onClick();
  };

  return (
    <button
      onClick={triggerClickFeedback}
      className={cn(
        "flex flex-col items-center justify-center gap-1 px-2 py-3 text-[10px] font-headline uppercase tracking-[0.15em] transition-colors",
        active ? "text-primary bg-primary/10" : "text-primary/55"
      )}
    >
      <span className={cn("flex items-center justify-center", isGlitching && "crt-click-glitch")}>{icon}</span>
      <span className={cn("truncate", isGlitching && "crt-click-glitch")}>{label}</span>
    </button>
  );
}

function MagneticCTA({
  children,
  className,
  radius = 140,
  strength = 12,
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  strength?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || !window.matchMedia('(pointer: fine)').matches) return;

    let frameId = 0;

    const reset = () => {
      element.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    const onMove = (event: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance > radius) {
          reset();
          return;
        }

        const pull = (1 - distance / radius) * strength;
        const translateX = (deltaX / radius) * pull;
        const translateY = (deltaY / radius) * pull;

        element.style.transform = `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0)`;
      });
    };

    const onLeave = () => {
      if (frameId) cancelAnimationFrame(frameId);
      reset();
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      reset();
    };
  }, [radius, strength]);

  return (
    <div
      ref={wrapperRef}
      className={cn("inline-block transition-transform duration-200 ease-out will-change-transform", className)}
    >
      {children}
    </div>
  );
}

function DecryptText({
  text,
  className,
  trigger,
  runOnMount = false,
  duration = 420,
}: {
  text: string;
  className?: string;
  trigger?: string | number | boolean;
  runOnMount?: boolean;
  duration?: number;
}) {
  const [displayText, setDisplayText] = useState(text);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    const shouldRun = runOnMount || hasMountedRef.current;
    hasMountedRef.current = true;

    if (!shouldRun) {
      setDisplayText(text);
      return;
    }

    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+-=?<>[]{}';
    const target = text.toUpperCase();
    const totalFrames = Math.max(8, Math.floor(duration / 32));
    let frame = 0;

    const interval = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(target.length * progress);

      const nextText = target
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < revealCount) return target[index];
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        })
        .join('');

      setDisplayText(nextText);

      if (frame >= totalFrames) {
        window.clearInterval(interval);
        setDisplayText(target);
      }
    }, 32);

    return () => window.clearInterval(interval);
  }, [duration, runOnMount, text, trigger]);

  return <span className={className}>{displayText}</span>;
}

function HeroSection({ onDive }: { key?: React.Key, onDive: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-[calc(100vh-48px)] md:h-[calc(100vh-64px)] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Imagery */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={cityImage}
          alt="Cyberpunk City"
          className="w-full h-full object-cover brightness-[0.25]"
          style={{ imageRendering: 'auto' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-transparent" />
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl py-20 sm:py-24">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          <span className="font-mono text-primary tracking-[0.4em] text-[11px] font-bold uppercase opacity-70">// ESTABLISHING_NEURAL_LINK</span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring' }}
          className="font-headline font-black text-5xl sm:text-7xl md:text-9xl text-primary tracking-tighter uppercase leading-none text-glow-cyan"
        >
          MUSKAN
        </motion.h1>

        <div className="relative w-full mt-2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 font-headline text-lg sm:text-xl md:text-3xl text-tertiary font-bold tracking-[0.18em] sm:tracking-[0.3em] uppercase text-glow-magenta"
        >
          FRONTEND ENGINEER
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col md:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto"
        >
          <button onClick={onDive} className="btn-cyberpunk relative w-full sm:w-auto bg-primary-container text-on-primary-container font-headline font-bold text-sm sm:text-lg px-6 sm:px-12 py-4 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:brightness-110 transition-all duration-200 group uppercase tracking-[0.2em] sm:tracking-widest">
            {/* Glitch layers */}
            <span
              className="glitch-layer-1 absolute inset-0 flex items-center justify-center font-headline font-bold text-lg tracking-widest select-none opacity-0 group-hover:opacity-100"
              aria-hidden="true"
              style={{ color: 'transparent', textShadow: '-3px 0 rgba(60,60,60,0.9)' }}
            >
              INITIATE_DIVE
            </span>
            <span
              className="glitch-layer-2 absolute inset-0 flex items-center justify-center font-headline font-bold text-lg tracking-widest select-none opacity-0 group-hover:opacity-100"
              aria-hidden="true"
              style={{ color: 'transparent', textShadow: '3px 0 rgba(100,100,100,0.7)' }}
            >
              INITIATE_DIVE
            </span>
            <span className="relative z-10">INITIATE_DIVE</span>
          </button>
          {/* VIEW_ARCHIVES BUTTON (COMMENTED_OUT)
          <button className="border border-tertiary text-tertiary font-headline font-bold text-lg px-12 py-4 hover:bg-tertiary/10 transition-colors uppercase">
            VIEW_ARCHIVES
          </button>
          */}
        </motion.div>
      </div>

      {/* HUD Elements */}
      <div className="hidden sm:block absolute left-6 md:left-24 bottom-16 md:bottom-24 z-20 glass-panel p-4 border-l-2 border-primary-container">
        <div className="flex flex-col gap-3">
          <div className="space-y-1">
            <div className="font-mono text-[10px] text-primary/50 uppercase tracking-widest">Altitude</div>
            <div className="font-headline text-lg font-bold text-primary tracking-wider">1,248M</div>
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[10px] text-primary/50 uppercase tracking-widest">Velocity</div>
            <div className="font-headline text-lg font-bold text-primary tracking-wider">Mach 1.28</div>
          </div>
          <div className="mt-2 flex gap-1">
            <div className="h-1 w-8 bg-primary"></div>
            <div className="h-1 w-8 bg-primary"></div>
            <div className="h-1 w-8 bg-primary/20"></div>
            <div className="h-1 w-8 bg-primary/20"></div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex absolute right-6 md:right-12 bottom-16 md:bottom-24 z-20 flex-col items-end gap-4 text-right">
        <div className="glass-panel p-4 border-r-2 border-tertiary">
          <div className="font-mono text-[10px] text-tertiary/50 uppercase tracking-widest">Mission Status</div>
          <div className="font-headline text-base font-bold text-tertiary tracking-wider">SYNC_STABLE: 98%</div>
        </div>
        <div className="glass-panel p-4 border-r-2 border-secondary">
          <div className="font-mono text-[10px] text-secondary/50 uppercase tracking-widest">Sector Location</div>
          <div className="font-headline text-base font-bold text-secondary tracking-wider">DISTRICT_01_CORE</div>
        </div>
      </div>

      {/* Animated L-Bracket Corners */}
      <div className="absolute top-24 left-24 w-8 h-8 border-t-2 border-l-2 border-primary-container opacity-50 hidden md:block"></div>
      <div className="absolute top-24 right-12 w-8 h-8 border-t-2 border-r-2 border-primary-container opacity-50 hidden md:block"></div>
    </motion.section>
  );
}

function SocialIconLink({ href, icon, label, glowColor, borderColor }: { key?: React.Key, href: string, icon: React.ReactNode, label: string, glowColor: string, borderColor: string }) {
  const [hovered, setHovered] = useState(false);
  const style = hovered
    ? { borderColor, boxShadow: `0 0 14px ${glowColor}`, color: borderColor }
    : {};
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      title={label}
      className="relative w-10 h-10 flex items-center justify-center border border-outline-variant/40 bg-surface-container text-on-surface-variant transition-all duration-300"
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon}
    </a>
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
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={buildingImage}
          alt="Building Background"
          className="w-full h-full object-cover brightness-[0.25]"
          style={{ imageRendering: 'auto' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-4 sm:p-6 md:p-12">
        <div className="mb-10 md:mb-12 border-l-4 border-primary pl-4 sm:pl-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-white mb-3 uppercase text-glow-cyan">
              SECTOR_X:{' '}
              <DecryptText text="NEURAL PROFILE" runOnMount className="text-primary italic" />
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <span className="bg-secondary/20 text-secondary px-3 py-1 text-[11px] tracking-widest uppercase font-bold font-mono border border-secondary/30">STATUS: OPERATIONAL</span>
              <span className="text-outline text-[11px] tracking-widest uppercase font-mono">ID: MSK_9901_BRAVO</span>
            </div>
          </div>

          {/* Social Links — icon row */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { href: "https://github.com/Miko-29", icon: <SiGithub size={18} />, label: "GitHub", glowColor: "rgba(170,170,170,0.4)", borderColor: "#aaaaaa" },
              { href: "https://www.linkedin.com/in/muskan-kumari-3b5a19222/", icon: <FaLinkedin size={18} />, label: "LinkedIn", glowColor: "rgba(10,102,194,0.4)", borderColor: "#0A66C2" },
              { href: "https://leetcode.com/u/muskan2912/", icon: <SiLeetcode size={18} />, label: "LeetCode", glowColor: "rgba(255,161,22,0.4)", borderColor: "#FFA116" },
              { href: "mailto:muskan2912002@gmail.com", icon: <SiGmail size={18} />, label: "Gmail", glowColor: "rgba(234,67,53,0.4)", borderColor: "#EA4335" },
            ].map(({ href, icon, label, glowColor, borderColor }) => (
              <SocialIconLink key={label} href={href} icon={icon} label={label} glowColor={glowColor} borderColor={borderColor} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Identity Module */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-surface-container-low backdrop-blur-md p-1 border-l-4 border-primary shadow-glow-cyan">
              <div className="bg-surface-container-high p-6 relative overflow-hidden">
                <img
                  src={muskanImage}
                  className="w-full aspect-square object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-500 brightness-110 mb-6 border border-primary/20"
                  alt="Muskan Profile"
                  style={{ imageRendering: 'auto' }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary/20 px-2 py-1 text-[10px] text-primary border border-primary/40 backdrop-blur-md font-mono">LIVE_FEED</div>
                <h2 className="font-headline text-xl font-bold uppercase mb-1 tracking-wider text-white italic">MUSKAN</h2>
                <p className="font-mono text-[11px] text-primary/70 mb-6 leading-relaxed uppercase tracking-widest">Frontend Engineer</p>

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

          </div>

          {/* Right Column: Data Streams */}
          <div className="md:col-span-8 space-y-8">
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-outline mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-primary/30"></span>
                CORE_TECH_STACK
                <span className="text-[10px] text-primary/40 font-normal uppercase">[PRIORITY_A]</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 pb-4">
                <TechCard url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" icon={<SiJavascript size={20} color="#F7DF1E" />} title="JAVASCRIPT" subtitle="Core" brandColor="#F7DF1E" />
                <TechCard url="https://www.typescriptlang.org/" icon={<SiTypescript size={20} color="#3178C6" />} title="TYPESCRIPT" subtitle="Typed" brandColor="#3178C6" />
                <TechCard url="https://developer.mozilla.org/en-US/docs/Web/HTML" icon={<SiHtml5 size={20} color="#E34F26" />} title="HTML5" subtitle="Structure" brandColor="#E34F26" />

                <TechCard url="https://developer.mozilla.org/en-US/docs/Web/CSS" icon={<SiCss size={20} color="#1572B6" />} title="CSS / SCSS" subtitle="Styling" brandColor="#1572B6" />
                <TechCard url="https://isocpp.org/" icon={<SiCplusplus size={20} color="#00599C" />} title="C++" subtitle="System" brandColor="#659AD2" />
                <TechCard url="https://www.java.com/" icon={<FaJava size={20} color="#007396" />} title="JAVA" subtitle="Backend" brandColor="#007396" />

                <TechCard url="https://www.python.org/" icon={<SiPython size={20} color="#3776AB" />} title="PYTHON" subtitle="Scripting" brandColor="#3776AB" />
                <TechCard url="https://www.gnu.org/software/bash/" icon={<SiGnubash size={20} color="#4EAA25" />} title="BASH" subtitle="Shell" brandColor="#4EAA25" />
                <TechCard url="https://angular.dev/" icon={<SiAngular size={20} color="#DD0031" />} title="ANGULAR" subtitle="Framework" brandColor="#DD0031" />

                <TechCard url="https://react.dev/" icon={<SiReact size={20} color="#61DAFB" />} title="REACT" subtitle="Library" brandColor="#61DAFB" />
                <TechCard url="https://ionicframework.com/" icon={<SiIonic size={20} color="#3880FF" />} title="IONIC" subtitle="Hybrid" brandColor="#3880FF" />
                <TechCard url="https://spring.io/projects/spring-boot" icon={<FaJava size={20} color="#6DB33F" />} title="SPRINGBOOT" subtitle="Framework" brandColor="#6DB33F" />
                <TechCard url="https://rxjs.dev/" icon={<SiReactivex size={20} color="#B7178C" />} title="RXJS" subtitle="Streams" brandColor="#B7178C" />

                <TechCard url="https://ngrx.io/" icon={<Share2 size={20} color="#00DBE9" />} title="NGRX" subtitle="State" brandColor="#00DBE9" />
                <TechCard url="https://www.sqlite.org/" icon={<SiSqlite size={20} color="#0d88d5" />} title="SQLITE" subtitle="Embedded" brandColor="#0d88d5" />
                <TechCard url="https://www.mongodb.com/" icon={<SiMongodb size={20} color="#47A248" />} title="MONGODB" subtitle="NoSQL" brandColor="#47A248" />

                <TechCard url="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" icon={<Database size={20} color="#00DBE9" />} title="INDEXED_DB" subtitle="Cache" brandColor="#00DBE9" />
                <TechCard url="https://firebase.google.com/" icon={<SiFirebase size={20} color="#FFCA28" />} title="FIREBASE" subtitle="BaaS" brandColor="#FFCA28" />
                <TechCard url="https://git-scm.com/" icon={<SiGit size={20} color="#F05032" />} title="GIT" subtitle="VCS" brandColor="#F05032" />

                <TechCard url="https://github.com/" icon={<SiGithub size={20} color="#aaaaaa" />} title="GITHUB" subtitle="Source" brandColor="#aaaaaa" />
                <TechCard url="https://about.gitlab.com/" icon={<SiGitlab size={20} color="#FC6D26" />} title="GITLAB" subtitle="CI/CD" brandColor="#FC6D26" />
                <TechCard url="https://www.postman.com/" icon={<SiPostman size={20} color="#FF6C37" />} title="POSTMAN" subtitle="API Tool" brandColor="#FF6C37" />

                <TechCard url="https://www.figma.com/" icon={<SiFigma size={20} color="#F24E1E" />} title="FIGMA" subtitle="Design" brandColor="#F24E1E" />
                <TechCard url="https://www.atlassian.com/software/jira" icon={<SiJira size={20} color="#0052CC" />} title="JIRA" subtitle="Agile" brandColor="#0052CC" />
                <TechCard url="https://aws.amazon.com/" icon={<FaAws size={20} color="#FF9900" />} title="AWS" subtitle="Cloud" brandColor="#FF9900" />

                <TechCard url="https://www.linux.org/" icon={<SiLinux size={20} color="#FCC624" />} title="LINUX" subtitle="OS" brandColor="#FCC624" />
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-surface-container-low backdrop-blur-md p-5 sm:p-6 border-t border-primary/10">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-outline mb-4">// LOG.01_MISSION_STATEMENT</h3>
              <p className="font-body text-sm leading-relaxed text-on-surface/75">
                Playing computer games at five years old ignited my curiosity about the invisible magic behind the glowing screen. By 13, that fascination turned into action as I began writing my own code, and I grew my roots in the pure logic of system building. Today, that same childhood wonder drives my craft as an engineer, fueling my relentless passion to solve complex puzzles and architect elegant solutions from the ground up.
              </p>
            </div>

            {/* Footer Activity Monitor */}
            <div className="bg-surface-container-lowest/60 backdrop-blur-md p-5 sm:p-6 border border-tertiary/20 font-mono text-[10px]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 border-b border-tertiary/20 pb-2">
                <span className="text-tertiary uppercase font-bold tracking-widest">ACTIVE_STREAMS_MONITOR</span>
                <span className="text-outline">REFRESH: 0.5s</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

function TechCard({ icon, title, subtitle, brandColor = '#00DBE9', url }: { icon: React.ReactNode, title: string, subtitle: string, brandColor?: string, url?: string }) {
  const [hovered, setHovered] = useState(false);
  const [scrambleTick, setScrambleTick] = useState(0);

  const hoverStyle = hovered ? {
    borderColor: `${brandColor}90`,
    boxShadow: `0 0 16px ${brandColor}35`,
    background: `${brandColor}0d`,
  } : {};

  const baseClass = cn(
    "bg-surface-container-low backdrop-blur-md p-2 flex items-center gap-3 border border-outline-variant/40 transition-all duration-300 group",
    url && "cursor-pointer"
  );

  const handleMouseEnter = () => {
    setHovered(true);
    setScrambleTick((value) => value + 1);
  };

  const handleMouseLeave = () => setHovered(false);

  const content = (
    <>
      <div className="group-hover:scale-110 transition-transform flex items-center justify-center pl-1">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <DecryptText
          text={title}
          trigger={scrambleTick}
          className="font-headline text-[10px] font-bold uppercase tracking-widest text-white leading-tight mb-0.5 block h-[1.1rem] whitespace-nowrap overflow-hidden"
        />
        <div className="font-mono text-[8px] text-outline uppercase tracking-wider leading-tight">{subtitle}</div>
      </div>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        style={hoverStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={baseClass}
      style={hoverStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  );
}

function SkillCard({ title, items, color }: { title: string, items: { label: string, value: string }[], color: 'cyan' | 'pink' | 'secondary' }) {
  const colorClass = color === 'cyan' ? 'text-primary' : color === 'pink' ? 'text-tertiary' : 'text-secondary';
  const bgClass = color === 'cyan' ? 'bg-primary' : color === 'pink' ? 'bg-tertiary' : 'bg-secondary';
  const shadowClass = color === 'cyan' ? 'shadow-[0_0_8px_#8ff5ff]' : color === 'pink' ? 'shadow-[0_0_8px_#ff75f6]' : 'shadow-[0_0_8px_#8bfc6e]';

  return (
    <div className={cn(
      "bg-surface-container-low backdrop-blur-md p-8 border-l border-b relative group overflow-hidden",
      color === 'cyan' ? "border-primary/20" : "border-tertiary/20"
    )}>
      <h4 className="font-headline text-base font-bold text-white mb-4 flex items-center gap-3 tracking-wider">
        <span className={cn("w-2 h-2", bgClass, shadowClass)} />
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider">{item.label}</span>
            <span className={cn("font-mono text-[11px] font-bold tracking-widest", colorClass)}>{item.value}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

const PROJECTS_DATA = [
  {
    title: "Intouch Pro",
    category: "Project_01 // Fleet_Management",
    icon: <img src={intouchIcon} alt="Intouch Icon" className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(0,219,233,0.6)]" />,
    image: intouchImage,
    description: "Intouch is a high-performance, cross-platform logistics management app engineered to streamline operations and provide real-time tracking for large vehicle fleets. Built using Ionic, Angular, and TypeScript, the application handles high-frequency data to power interactive dashboards, instant fleet segmentation, real-time alarm push notifications, and detailed historical vehicle trails. Currently supporting over 10,000 active vehicles in production with a modular architecture designed to scale to 50,000, Intouch delivers a seamless, reliable experience across Android and iOS that significantly improves day-to-day operational efficiency for logistics teams.",
    tags: ['IONIC', 'ANGULAR', 'CAPACITOR', 'NGRX', 'SQLITE', 'TYPESCRIPT', 'HTML5', 'SCSS'],
    color: "cyan" as const,
    // sourceUrl: "#",
    deployUrl: "https://play.google.com/store/apps/details?id=intouch.mappls.app"
  },
  {
    title: "Pomodoro Timer",
    category: "Project_02 // Time_Management",
    icon: <img src={pomodoroIcon} alt="Pomodoro Icon" className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(255,117,246,0.6)]" />,
    image: pomodoroImage,
    description: "This aesthetically driven Pomodoro app is designed to elevate the standard time-management experience by blending productivity with immersive visual design. Built around the core principles of deep work and mindful recovery, the app features a sleek, glassmorphic interface that dynamically shifts between distinct states: Focus, Break, and Rest. **All timer durations and intervals are fully customizable, ensuring a personalized productivity experience.** Each phase is paired with its own unique, ambient background—from a deep starry night to a calming forest—creating a distraction-free, visually engaging environment that helps users stay perfectly synced with their workflow.",
    tags: ['REACT', 'TAILWIND', 'TYPESCRIPT', 'HTML5', 'SCSS'],
    color: "pink" as const,
    sourceUrl: "https://github.com/Miko-29/Pomodoro",
    deployUrl: "https://miko-29.github.io/Pomodoro/"
  },
];

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
      {/* Background Imagery */}
      <div className="absolute inset-0 z-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img
            src={neuralLinkImage}
            alt="Neural Link Background"
            className="w-full h-full object-cover object-[center_15%] brightness-[0.2]"
            style={{ imageRendering: 'auto' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>

      {/* Interactive Grid Background */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-20">
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


      <div className="relative z-10 p-4 sm:p-6 md:p-12">
        {/* Background Atmospheric Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>

        {/* Central Sphere / Neural Core */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] flex items-center justify-center pointer-events-none mb-10 md:mb-12 opacity-80">
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
          <div className="absolute top-0 md:top-10 right-0 md:right-10 hidden sm:flex flex-col items-end gap-2 text-right">
            <span className="font-label text-[10px] text-primary tracking-widest uppercase">Fragment_Stability</span>
            <span className="font-headline text-xl md:text-2xl font-bold text-secondary">99.9%</span>
            <div className="w-24 md:w-32 h-1 bg-surface-container overflow-hidden">
              <div className="w-full h-full bg-secondary animate-pulse"></div>
            </div>
          </div>

          <div className="absolute bottom-0 md:bottom-10 left-0 md:left-10 hidden sm:flex flex-col gap-2">
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
          <div className="mb-10 md:mb-12 border-l-4 border-primary pl-4 sm:pl-6">
            <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-white mb-2 uppercase text-glow-cyan">
              SECTOR_X:{' '}
              <DecryptText text="PROJECT_LOGS" runOnMount className="text-primary italic" />
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS_DATA.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none -z-10 hidden md:block">
        <h2 className="font-headline text-[30vw] font-black leading-none whitespace-nowrap">FRAGMENTS</h2>
      </div>
    </motion.section>
  );
}

function ProjectCard({ title, category, icon, image, description, tags, color, sourceUrl, deployUrl }: { key?: React.Key, title: string, category: string, icon: React.ReactNode, image: string, description: string, tags: string[], color: 'cyan' | 'pink' | 'secondary', sourceUrl?: string, deployUrl?: string }) {
  const borderColor = color === 'cyan' ? 'border-primary' : color === 'pink' ? 'border-tertiary' : 'border-secondary';
  const textColor = color === 'cyan' ? 'text-primary' : color === 'pink' ? 'text-tertiary' : 'text-secondary';
  const glowShadow = color === 'cyan' ? 'hover:shadow-[0_0_40px_rgba(0,219,233,0.25)]' : color === 'pink' ? 'hover:shadow-[0_0_40px_rgba(255,117,246,0.25)]' : 'hover:shadow-[0_0_40px_rgba(139,252,110,0.25)]';

  return (
    <div className={cn(
      "group relative bg-surface-container-low border-l-4 hover:bg-surface-container transition-all duration-500 overflow-hidden",
      borderColor,
      glowShadow
    )}>
      <div className="p-5 sm:p-8">
        <div className="flex justify-between items-start gap-4 mb-6">
          <div>
            <span className={cn("font-label text-[10px] uppercase tracking-widest", textColor)}>{category}</span>
            <h3 className="font-headline text-2xl sm:text-3xl font-black text-on-surface uppercase tracking-tight mt-1">{title}</h3>
          </div>
          <div className={cn(textColor, "shrink-0")}>{icon}</div>
        </div>

        <div className="aspect-video mb-8 bg-black relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
          <img
            src={image}
            className="w-full h-full object-cover"
            style={{ imageRendering: 'auto' }}
            alt={title}
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 opacity-100 sm:opacity-40 sm:group-hover:opacity-100 transition-opacity duration-500">
            {sourceUrl && sourceUrl !== '#' && (
              <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 px-3 py-1.5 border bg-background/80 backdrop-blur-sm hover:brightness-125 transition-all", borderColor, textColor)}>
                <Terminal className="w-3.5 h-3.5" />
                <span className="font-headline font-bold uppercase text-[9px] tracking-widest">SOURCE_CODE</span>
              </a>
            )}
            {deployUrl && deployUrl !== '#' && (
              <a href={deployUrl} target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2 px-3 py-1.5 border bg-background/80 backdrop-blur-sm hover:brightness-125 transition-all", borderColor, textColor)}>
                <Power className="w-3.5 h-3.5" />
                <span className="font-headline font-bold uppercase text-[9px] tracking-widest">LAUNCH_DEPLOY</span>
              </a>
            )}
          </div>
        </div>

        <p className="font-body text-on-surface-variant leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map(tag => {
            const size = 12;
            const t = tag.toUpperCase();
            let icon = null;
            switch (t) {
              case 'ANGULAR': icon = <SiAngular size={size} color="#DD0031" />; break;
              case 'IONIC': icon = <SiIonic size={size} color="#3880FF" />; break;
              case 'TYPESCRIPT': icon = <SiTypescript size={size} color="#3178C6" />; break;
              case 'JAVASCRIPT': icon = <SiJavascript size={size} color="#F7DF1E" />; break;
              case 'REACT': icon = <SiReact size={size} color="#61DAFB" />; break;
              case 'TAILWIND': icon = <SiTailwindcss size={size} color="#06B6D4" />; break;
              case 'HTML5': icon = <SiHtml5 size={size} color="#E34F26" />; break;
              case 'SCSS':
              case 'CSS': icon = <SiCss size={size} color="#1572B6" />; break;
              case 'NGRX': icon = <Share2 size={size} color="#00DBE9" className="shrink-0" />; break;
              case 'SQLITE': icon = <SiSqlite size={size} color="#003B57" />; break;
              case 'CAPACITOR': icon = <SiCapacitor size={size} color="#119EFF" />; break;
              case 'INDEXEDDB': icon = <Database size={size} color="#00DBE9" className="shrink-0" />; break;
              case 'ECHARTS': icon = <SiApacheecharts size={size} color="#AA344D" />; break;
              case 'FIREBASE': icon = <SiFirebase size={size} color="#FFCA28" />; break;
              case 'MAPPLS MAPS': icon = <Map size={size} className={cn(textColor, "shrink-0")} />; break;
            }
            return (
              <span key={tag} className={cn("flex items-center gap-1.5 text-[10px] font-label px-3 py-1 bg-surface-container-high border border-outline-variant", textColor)}>
                {icon}
                {tag}
              </span>
            );
          })}
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
      {/* Lightweight neural grid backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,240,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,240,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-[38vh]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,240,255,0.12), transparent)',
            clipPath: 'polygon(0 0, 100% 0, 68% 100%, 32% 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[34vh]"
          style={{
            background: 'linear-gradient(to top, rgba(0,240,255,0.09), transparent)',
            clipPath: 'polygon(18% 0, 82% 0, 100% 100%, 0 100%)',
          }}
        />
        <div className="absolute inset-y-0 left-0 w-[22vw] bg-gradient-to-r from-primary/12 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[22vw] bg-gradient-to-l from-primary/12 to-transparent" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at center, transparent 0%, var(--color-background) 72%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 p-4 sm:p-6 md:p-12">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end border-b border-outline-variant/30 pb-6 mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="relative">
            <span className="font-mono text-[11px] font-bold text-primary tracking-[0.4em] uppercase block mb-3">// MAPMYINDIA_INTERNAL_LOG</span>
            <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-white mb-2 uppercase text-glow-cyan">
              SECTOR_X:{' '}
              <DecryptText text="CAREER HISTORY" runOnMount className="text-primary italic" />
            </h1>
            <div className="absolute -left-4 top-0 w-1 h-full bg-primary" />
          </div>

          <div className="glass-panel p-5 sm:p-6 border border-primary/20 w-full lg:w-auto lg:min-w-[320px]">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">CAREER_UPTIME: 2+ YEARS</span>
              <span className="font-label text-[10px] text-secondary">STABLE</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-label mb-1">
                  <span className="text-on-surface-variant">EXP_ACCUMULATED</span>
                  <span className="text-primary">45%</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest">
                  <div className="h-full bg-primary w-[45%] shadow-glow-cyan" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 flex-1 bg-surface-container border border-outline-variant flex items-center justify-center font-label text-[10px] text-on-surface-variant">NODE_ACTIVE</div>
                <div className="h-8 flex-1 bg-secondary text-background flex items-center justify-center font-label text-[10px] font-bold">SYNC_READY</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-16 md:space-y-32 pb-12">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-outline-variant to-transparent -translate-x-1/2 hidden md:block" />

          <ExperienceItem
            title="SOFTWARE ENGINEER"
            company="MapMyIndia"
            description="Led frontend development for enterprise fleet and transit platforms serving government and commercial clients, supporting real-time operations for 200,000+ end users. Built scalable Angular/Ionic apps handling high-frequency live data for 50,000+ vehicles using RxJS and NgRx, integrated 100+ REST APIs with shared interceptor layers, and drove performance, scalability, and cross-functional Agile delivery."
            points={[
              'ANGULAR_v14→v19_STANDALONE_UPGRADE',
              '200K+_USERS_/_50K+_LIVE_VEHICLES',
              '100+_REST_APIs_INTERCEPTOR_LAYER',
              'LIGHTHOUSE_30%_LOAD_TIME_REDUCTION',
              'NGRX_STATE_PATTERNS_/_REUSABLE_LIBS',
              'RXJS_OBSERVABLES_TELEMETRY_PIPELINES',
              'AGILE_SCRUM_MULTI_TRACK_DELIVERY',
            ]}
            image={office1Image}
            icon={<BarChart3 className="w-6 h-6" />}
            side="left"
            color="cyan"
          />
        </div>

        {/* --- ACADEMIC ARCHIVES (EDUCATION) --- */}
        <div className="mt-4 pt-12 border-t border-primary/20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent blur-[2px]" />

          <div className="mb-10 md:mb-12 border-l-4 border-tertiary pl-4 sm:pl-6">
            <span className="font-mono text-[11px] font-bold text-tertiary tracking-[0.4em] uppercase block mb-3">// NEURAL_TRAINING_FACILITY</span>
            <h2 className="font-headline text-3xl md:text-5xl font-black tracking-tight text-white mb-2 uppercase text-glow-magenta">
              <DecryptText text="ACADEMIC" runOnMount className="text-white" />{' '}
              <DecryptText text="ARCHIVES" runOnMount className="text-tertiary italic" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <EducationCard
              degree="MASTER OF COMPUTER APP"
              university="Manipal University Jaipur"
              period="2024 - 2026 (EXPECTED)"
              focus="Cybersecurity, Network Security, Cryptography & Ethical Hacking"
              color="cyan"
            />
            <EducationCard
              degree="BSC COMPUTER APP"
              university="St. Xavier's College, Ranchi"
              period="2020 - 2023"
              focus="Core Computer Science, Object-Oriented Programming, & System Fundamentals"
              grade="CGPA: 8.41 / 10"
              color="pink"
            />
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <div className="glass-panel p-6 sm:p-8 md:p-10 border border-primary/30 relative max-w-2xl w-full text-center">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
            <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-headline text-2xl sm:text-3xl font-bold mb-4 uppercase">Initialize Protocol?</h4>
            <p className="font-body text-sm text-on-surface-variant mb-8 px-0 sm:px-6 md:px-12">Requesting full neural dossier access for the corporate recruitment protocol. Secure channel established.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <MagneticCTA className="w-full md:w-auto" radius={170} strength={14}>
                <a
                  href={resumePDF}
                  download="Muskan_Kumari_Frontend_Resume.pdf"
                  className="bg-primary text-background px-8 py-4 font-headline font-black text-sm uppercase tracking-widest hover:shadow-glow-cyan transition-all inline-block w-full md:w-auto"
                >
                  DOWNLOAD_RESUME.EXE
                </a>
              </MagneticCTA>
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

function ExperienceItem({ title, company, description, points, image, icon, side, color }: { title: string, company: string, description: string, points: string[], image: string, icon: React.ReactNode, side: 'left' | 'right', color: 'cyan' | 'pink' | 'secondary' }) {
  const borderColor = color === 'cyan' ? 'border-primary' : color === 'pink' ? 'border-tertiary' : 'border-secondary';
  const textColor = color === 'cyan' ? 'text-primary' : color === 'pink' ? 'text-tertiary' : 'text-secondary';
  const bgColor = color === 'cyan' ? 'bg-primary' : color === 'pink' ? 'bg-tertiary' : 'bg-secondary';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center my-12 md:my-16">
      {/* Absolute Icon Block on Far Edge */}
      <div className={cn(
        "hidden md:flex absolute top-8 w-14 h-14 items-center justify-center text-background z-20 shadow-lg",
        bgColor,
        side === 'left' ? "-left-16" : "-right-16"
      )}>
        {icon}
      </div>

      <div className={cn("order-2 flex flex-col", side === 'left' ? "md:order-1 md:items-end md:text-right" : "md:order-2 items-start text-left")}>
        <div className="mb-6">
          <h3 className="font-headline text-3xl md:text-4xl font-bold text-white leading-tight uppercase tracking-wider">{title}</h3>
          <p className={cn("font-headline text-sm font-bold tracking-[0.2em] uppercase mt-2", textColor)}>{company}</p>
        </div>
        <div className={cn("space-y-6 max-w-lg mt-4 w-full", side === 'left' ? "md:items-end" : "items-start")}>
          <div className={cn("py-2", side === 'left' ? "border-l-[3px] md:border-l-0 md:border-r-[3px] pl-4 md:pl-0 md:pr-6" : "border-l-[3px] pl-4 md:pl-6", borderColor)}>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed opacity-90">{description}</p>
          </div>
          <ul className="font-headline text-xs space-y-3 text-on-surface-variant font-bold tracking-widest">
            {points.map((point, i) => (
              <li key={i} className={cn("flex items-start gap-3", side === 'left' ? "md:justify-end" : "justify-start")}>
                <span className={textColor}>0{i + 1}</span>
                <span className="opacity-40">//</span>
                <span className="opacity-80 break-all">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cn("order-1 relative group w-full h-[260px] sm:h-[320px] md:h-[360px]", side === 'left' ? "md:order-2" : "md:order-1")}>
        <div className={cn(
          "w-full h-full bg-surface-container-high overflow-hidden relative shadow-2xl shadow-black/50 border-primary/50",
          side === 'left' ? "border-t-[3px] border-r-[3px] md:skew-x-[-12deg]" : "border-b-[3px] border-l-[3px] md:skew-x-[12deg]",
          borderColor
        )}>
          <img
            src={image}
            className={cn(
              "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90",
              side === 'left' ? "md:skew-x-[12deg]" : "md:skew-x-[-12deg]"
            )}
            style={{ imageRendering: 'auto' }}
            alt={company}
            referrerPolicy="no-referrer"
          />
          <div className={cn("absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/20", side === 'left' ? "bg-gradient-to-tr" : "bg-gradient-to-tl")} />

          <div className={cn("absolute top-4 sm:top-8", side === 'left' ? "left-4 sm:left-16" : "right-4 sm:right-16")}>
            <div className={cn(
              "px-3 sm:px-6 py-2 border bg-background/40 backdrop-blur-md",
              borderColor,
              side === 'left' ? "md:skew-x-[-12deg]" : "md:skew-x-[12deg]"
            )}>
              <span className={cn(
                "block font-headline text-base sm:text-xl font-bold tracking-wider",
                textColor,
                side === 'left' ? "md:skew-x-[12deg]" : "md:skew-x-[-12deg]"
              )}>{company.replace('Tower ', '')}</span>
            </div>
          </div>

          <div className={cn("absolute bottom-4 sm:bottom-6 opacity-50", side === 'left' ? "right-4 sm:right-12" : "left-4 sm:left-12")}>
            <span className={cn(
              "block font-label text-[8px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.25em] uppercase text-white",
              side === 'left' ? "md:skew-x-[12deg]" : "md:skew-x-[-12deg]"
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
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Typing placeholders state
  const [ph1, setPh1] = useState('');
  const [ph2, setPh2] = useState('');
  const [ph3, setPh3] = useState('');

  useEffect(() => {
    const t1 = "GUEST_IDENTITY";
    const t2 = "ENCRYPTED_ADR@PROTO.CY";
    const t3 = "ENTER_DATA_STREAM_HERE...";
    let i1 = 0, i2 = 0, i3 = 0;
    
    const timer = setInterval(() => {
      let active = false;
      if (i1 < t1.length) { setPh1(t1.slice(0, i1 + 1) + '█'); i1++; active = true; }
      else if (i1 === t1.length && i2 === 0) { setPh1(t1); setPh2('█'); i2++; active = true; }
      else if (i2 < t2.length) { setPh2(t2.slice(0, i2 + 1) + '█'); i2++; active = true; }
      else if (i2 === t2.length && i3 === 0) { setPh2(t2); setPh3('█'); i3++; active = true; }
      else if (i3 < t3.length) { setPh3(t3.slice(0, i3 + 1) + '█'); i3++; active = true; }
      else { setPh3(t3); clearInterval(timer); }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      formRef.current.reset();
      // Auto-dismiss modal after 3s on success
      setTimeout(() => { onClose(); setStatus('idle'); }, 3000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'UPLINK_FAILED';
      setErrorMsg(msg);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4"
    >
      <div className="absolute inset-0 bg-surface/60 backdrop-blur-md" onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-2rem)] overflow-y-auto bg-[#1a1a1c]/90 border-2 border-primary shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-xl"
      >
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary z-20"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary z-20"></div>

        {/* Modal Header */}
        <div className="flex justify-between items-start gap-4 p-5 sm:p-8 pb-0">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline tracking-tighter text-on-surface leading-none opacity-90">
              DISTRICT <span className="text-primary">04</span>
            </h1>
            <h2 className="text-sm sm:text-lg font-headline font-bold text-outline uppercase tracking-tight mt-1">CONTACT_TERMINAL</h2>
          </div>
          <button onClick={onClose} className="flex items-center space-x-2 text-primary hover:text-white transition-colors group z-20 cursor-pointer">
            <span className="font-mono text-[10px] tracking-widest hidden md:block">CLOSE_UPLINK</span>
            <X className="w-8 h-8 md:w-10 md:h-10 border border-primary/40 p-1 group-hover:bg-primary group-hover:text-[#00363a] transition-all duration-300" />
          </button>
        </div>

        {/* Terminal Form Body */}
        <div className="p-5 sm:p-8 lg:p-12 relative z-10">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-16 gap-6 text-center"
            >
              <div className="w-16 h-16 border-2 border-secondary flex items-center justify-center shadow-[0_0_20px_rgba(139,252,110,0.4)]">
                <span className="text-secondary text-3xl font-black">✓</span>
              </div>
              <h3 className="font-headline text-2xl font-black text-white uppercase tracking-widest">UPLINK_ESTABLISHED</h3>
              <p className="font-mono text-sm text-on-surface-variant">Message transmitted successfully. Closing terminal in 3s...</p>
            </motion.div>
          ) : (
            <form ref={formRef} className="space-y-6 sm:space-y-8 relative" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-2 group">
                  <label className="font-mono text-[10px] text-primary tracking-widest uppercase block group-focus-within:text-white transition-colors">UPLINK_ID</label>
                  <div className="relative">
                    <input
                      name="name"
                      required
                      className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant text-on-surface font-mono placeholder:text-on-surface-variant/50 focus:ring-0 focus:border-primary transition-all py-3 px-2 outline-none focus:bg-primary/5 terminal-caret"
                      placeholder={ph1}
                      type="text"
                    />
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-2 group">
                  <label className="font-mono text-[10px] text-primary tracking-widest uppercase block group-focus-within:text-white transition-colors">COMM_CHANNEL</label>
                  <div className="relative">
                    <input
                      name="email"
                      required
                      className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant text-on-surface font-mono placeholder:text-on-surface-variant/50 focus:ring-0 focus:border-primary transition-all py-3 px-2 outline-none focus:bg-primary/5 terminal-caret"
                      placeholder={ph2}
                      type="email"
                    />
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="font-mono text-[10px] text-primary tracking-widest uppercase block group-focus-within:text-white transition-colors">ENCRYPTED_MESSAGE</label>
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    className="w-full bg-surface-container-low/50 border-0 border-b border-outline-variant text-on-surface font-mono placeholder:text-on-surface-variant/50 focus:ring-0 focus:border-primary transition-all py-3 px-2 resize-none outline-none focus:bg-primary/5 terminal-caret"
                    placeholder={ph3}
                    rows={4}
                  ></textarea>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-500"></div>
                </div>
              </div>

              {/* Error message */}
              {status === 'error' && (
                <p className="font-mono text-[11px] text-tertiary tracking-wider border border-tertiary/30 bg-tertiary/5 px-4 py-2">
                  ⚠ TRANSMISSION_ERROR: {errorMsg || 'CHECK_CONNECTION_AND_RETRY'}
                </p>
              )}

              <div className="pt-4 mt-8">
                <MagneticCTA className="block w-full" radius={180} strength={16}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative w-full py-4 bg-primary text-[#00363a] font-headline font-black text-sm sm:text-lg tracking-[0.18em] sm:tracking-[0.3em] overflow-hidden hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 block group-hover:scale-105 transition-transform duration-300">
                      {status === 'sending' ? 'TRANSMITTING...' : 'INITIATE_UPLINK'}
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </button>
                </MagneticCTA>
              </div>
            </form>
          )}

          {/* Terminal Readout Meta */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-outline-variant/30 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 font-mono text-[9px] text-outline uppercase relative z-10">
            <div className="flex flex-wrap gap-4 sm:gap-8">
              <div className="flex items-center space-x-3">
                <span className={`w-2 h-2 animate-pulse ${status === 'sending' ? 'bg-yellow-400 shadow-[0_0_8px_#facc15]' : status === 'error' ? 'bg-tertiary shadow-[0_0_8px_#ff75f6]' : 'bg-[#8bfc6e] shadow-[0_0_8px_#8bfc6e]'}`}></span>
                <span className="opacity-80">{status === 'sending' ? 'TRANSMITTING' : status === 'error' ? 'UPLINK_FAILED' : 'NODE_STABLE'}</span>
              </div>
              <div className="opacity-80">BUFFER: 4096KB</div>
              <div className="opacity-80">TRANS_ID: <span className="text-on-surface font-bold">#4491-00-XC</span></div>
            </div>
            <div className={`tracking-widest font-bold animate-pulse ${status === 'sending' ? 'text-yellow-400' : 'text-primary'}`}>
              {status === 'sending' ? 'TRANSMITTING_DATA...' : 'PENDING_USER_INPUT...'}
            </div>
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

function EducationCard({ degree, university, period, focus, grade, color }: { degree: string, university: string, period: string, focus: string, grade?: string, color: 'cyan' | 'pink' | 'secondary' }) {
  const borderColor = color === 'cyan' ? 'border-primary' : color === 'pink' ? 'border-tertiary' : 'border-secondary';
  const textColor = color === 'cyan' ? 'text-primary' : color === 'pink' ? 'text-tertiary' : 'text-secondary';
  const bgGlow = color === 'cyan' ? 'bg-primary/5 hover:bg-primary/20 hover:border-primary/50' : color === 'pink' ? 'bg-tertiary/5 hover:bg-tertiary/20 hover:border-tertiary/50' : 'bg-secondary/5 hover:bg-secondary/20 hover:border-secondary/50';

  return (
    <div className={cn(
      "glass-panel border p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group",
      "border-outline-variant/50",
      bgGlow
    )}>
      {/* Decorative corner brackets */}
      <div className={cn("absolute top-0 left-0 w-3 h-3 border-t border-l transition-all duration-300 group-hover:w-6 group-hover:h-6", borderColor)} />
      <div className={cn("absolute bottom-0 right-0 w-3 h-3 border-b border-r transition-all duration-300 group-hover:w-6 group-hover:h-6", borderColor)} />

      <div>
        <div className="flex flex-col xl:flex-row justify-between items-start mb-6 gap-4">
          <h3 className={cn("font-headline text-xl md:text-2xl font-black uppercase tracking-tight w-full xl:w-2/3", textColor)}>{degree}</h3>
          <span className="font-mono text-[10px] font-bold tracking-widest text-on-surface bg-surface-container px-2 py-1 border border-outline-variant/50 whitespace-nowrap">{period}</span>
        </div>

        <p className="font-headline text-sm font-bold text-white uppercase tracking-widest mb-6">
          <span className="opacity-50 mr-2">AT //</span>{university}
        </p>

        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">{focus}</p>
      </div>

      {grade && (
        <div className="mt-auto pt-4 border-t border-outline-variant/30">
          <div className="inline-block px-3 py-1 bg-background/50 border border-outline-variant backdrop-blur-md">
            <span className={cn("font-mono text-[11px] font-bold tracking-widest", textColor)}>{grade}</span>
          </div>
        </div>
      )}
    </div>
  );
}
