"use client";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Calendar, Clock, Github, Instagram, Linkedin, MapPin, Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const COMMUNITY_URL = "https://gdg.community.dev/gdg-on-campus-vignans-institute-of-information-technology-visakhapatnam-india/";

const learning = [
  { n: '01', title: 'Learn', text: 'Get curious. Pick up new tools, explore Google technologies, and find your people along the way.', color: 'blue', icon: '↗' },
  { n: '02', title: 'Build', text: 'Turn the “what if?” into something real. Make projects, join a team, and learn by doing.', color: 'red', icon: '✳' },
  { n: '03', title: 'Share', text: 'Your journey can kick-start someone else’s. Show your work, teach a skill, and grow together.', color: 'yellow', icon: '↗' },
];

const events = [
  {
    n: '01 / KICK-OFF',
    title: 'GDG Inaugural',
    kind: 'COMMUNITY MEETUP',
    location: 'Seminar Hall 1',
    color: 'coral',
    date: 'NOV 22, 2026',
    time: '10:00 AM – 1:00 PM IST',
    mark: 'HELLO,\nVIIT!'
  },
  {
    n: '02 / LEARN TOGETHER',
    title: 'Google Study Jams',
    kind: 'LEARNING SERIES',
    location: 'Seminar Hall 2',
    color: 'cobalt',
    date: 'DEC 05, 2026',
    time: '2:00 PM – 5:30 PM IST',
    mark: 'MAKE\nSOMETHING.'
  },
  {
    n: '03 / COMING UP',
    title: 'DevFest & Hackathons',
    kind: 'UPCOMING SERIES',
    location: 'Seminar Hall 3',
    color: 'emerald',
    date: 'JAN 18, 2027',
    time: '9:30 AM – 4:00 PM IST',
    mark: 'FUTURE\nEVENTS'
  },
];

const team = [
  {
    initials: '01',
    name: 'Aarav Sharma',
    role: 'Chapter Organizer & Lead',
    domain: 'LEAD',
    tagColor: '#4285F4',
    image: 'photo-1534528741775-53994a69daeb',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '02',
    name: 'Priya Varma',
    role: 'Co-Organizer & Operations Lead',
    domain: 'OPERATIONS',
    tagColor: '#EA4335',
    image: 'photo-1517841905240-472988babdf9',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '03',
    name: 'Rohan Kulkarni',
    role: 'Technical Lead — Web & Cloud',
    domain: 'WEB DEV',
    tagColor: '#FBBC04',
    image: 'photo-1507003211169-0a1dd7228f2d',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '04',
    name: 'Sneha Reddy',
    role: 'Technical Lead — AI & ML',
    domain: 'AI / ML',
    tagColor: '#34A853',
    image: 'photo-1494790108377-be9c29b29330',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '05',
    name: 'Karthik Rao',
    role: 'Technical Lead — Android & Flutter',
    domain: 'MOBILE',
    tagColor: '#4285F4',
    image: 'photo-1500648767791-00dcc994a43e',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '06',
    name: 'Ananya Joshi',
    role: 'Head of Design & UI/UX',
    domain: 'UI / UX',
    tagColor: '#EA4335',
    image: 'photo-1524504388940-b1c1722653e1',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '07',
    name: 'Vikram Aditya',
    role: 'Cloud Architect & DevOps Lead',
    domain: 'DEVOPS',
    tagColor: '#FBBC04',
    image: 'photo-1539571696357-5a69c17a67c6',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '08',
    name: 'Meera Nair',
    role: 'Community & Outreach Lead',
    domain: 'OUTREACH',
    tagColor: '#34A853',
    image: 'photo-1531746020798-e6953c6e8e04',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '09',
    name: 'Sai Teja',
    role: 'Cybersecurity & Open Source Lead',
    domain: 'SECURITY',
    tagColor: '#4285F4',
    image: 'photo-1522075469751-3a6694fb2f61',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '10',
    name: 'Harini Patel',
    role: 'Events & Logistics Lead',
    domain: 'EVENTS',
    tagColor: '#EA4335',
    image: 'photo-1517256673479-792823618bf5',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '11',
    name: 'Aditya Chaitanya',
    role: 'Full-Stack Developer',
    domain: 'FULLSTACK',
    tagColor: '#FBBC04',
    image: 'photo-1506794778202-cad84cf45f1d',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '12',
    name: 'Kavya Sree',
    role: 'Content & Editorial Lead',
    domain: 'CONTENT',
    tagColor: '#34A853',
    image: 'photo-1544005313-94ddf0286df2',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '13',
    name: 'Nikhil Verma',
    role: 'Public Relations & Marketing',
    domain: 'MARKETING',
    tagColor: '#4285F4',
    image: 'photo-1519085360753-af0119f7cbe7',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '14',
    name: 'Pooja Hegde',
    role: 'Creative Media & Photography',
    domain: 'CREATIVE',
    tagColor: '#EA4335',
    image: 'photo-1501196354995-cbb51c65aaea',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    initials: '15',
    name: 'Varun Kumar',
    role: 'Sponsorship & Partnerships Lead',
    domain: 'SPONSOR',
    tagColor: '#FBBC04',
    image: 'photo-1492562080023-ab3db95bfbce',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
];

const trackerSections = [
  { id: 'home', num: '01', label: 'Home', color: '#06b6d4', activeBg: '#155e75' },
  { id: 'about', num: '02', label: 'About', color: '#06b6d4', activeBg: '#0e7490' },
  { id: 'events', num: '03', label: 'Events', color: '#a855f7', activeBg: '#6b21a8' },
  { id: 'team', num: '04', label: 'Team', color: '#f43f5e', activeBg: '#9f1239' },
  { id: 'join', num: '05', label: 'Join', color: '#10b981', activeBg: '#065f46' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Dark theme default
  const [activeSection, setActiveSection] = useState(0);
  const bannerRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  // Active section tracker on scroll
  useEffect(() => {
    const ids = ['home', 'about', 'events', 'team', 'join'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.42;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(i);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cursor-following radial highlight for bottom banner (expanded 3x)
  const handleBannerMouseMove = (e) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    bannerRef.current.style.setProperty('--cursor-x', `${x}px`);
    bannerRef.current.style.setProperty('--cursor-y', `${y}px`);
    bannerRef.current.style.setProperty('--cursor-opacity', '1');
  };

  const handleBannerMouseLeave = () => {
    if (!bannerRef.current) return;
    bannerRef.current.style.setProperty('--cursor-opacity', '0');
  };

  return (
    <div className={darkMode ? 'site dark' : 'site'}>
      <header className="nav">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="GDG on Campus VIIT Home">
          <img
            src="https://gdgc-viit.netlify.app/images/Header_Logo.svg"
            alt="Google Developer Groups on Campus - VIIT"
            className="brand-logo"
          />
        </a>

        <div className="nav-right">
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#events" onClick={closeMenu}>Events</a>
            <a href="#team" onClick={closeMenu}>Team</a>
            <a
              className="nav-join"
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Join the community <ArrowUpRight size={15}/>
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="menu-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>

            <button
              className="theme-toggle"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun size={17}/> : <Moon size={17}/>}
              <span>{darkMode ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot"/> VIZAG, INDIA</p>
            <h1>
              <span className="hero-title-small">Google Developer Groups</span>
              <span className="title-line"><span className="title-accent">on Campus</span> · VIIT</span>
            </h1>
            <p className="hero-desc">A place to get curious, make things that matter, and meet the people who make the journey better.</p>
            <div className="hero-actions">
              <a href="#team" className="button button-dark">Find your people <ArrowRight size={16}/></a>
              <a href="#events" className="text-link">Explore what we do <ArrowDownRight size={16}/></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Enhanced 3D futuristic composition">
            <div className="art-ambient-glow" />
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="sphere sphere-blue" />
            <div className="sphere sphere-yellow" />
            <div className="sphere sphere-red" />
            <div className="sphere sphere-green" />
            
            {/* Enhanced 3D Isometric Crystal Cube */}
            <div className="cube-wrapper">
              <div className="cube">
                <i className="face-front" />
                <i className="face-right" />
                <i className="face-top" />
                <i className="face-left" />
                <i className="face-bottom" />
                <i className="face-back" />
              </div>
              <div className="cube-shadow" />
            </div>

            <span className="art-star">✳</span>
            <div className="art-caption">
              <span>01 — ALWAYS IN MOTION</span>
              <b>Make room for<br/>what’s possible.</b>
            </div>
          </div>

          <a href="#about" className="scroll-cue"><span/>SCROLL TO EXPLORE</a>
        </section>

        <section className="manifesto" id="about">
          <div className="section-head">
            <p className="eyebrow">01 / THE WAY WE GROW</p>
          </div>
          <h2>Curiosity looks good<br/>on <em>everyone.</em></h2>
          <p className="manifesto-intro">Tech moves fast. The best way to keep up? Learn alongside people who are just as excited to try.</p>
          <div className="values-grid">
            {learning.map(v => (
              <article className={`value-card ${v.color}`} key={v.title}>
                <div className="value-top">
                  <span>{v.n} / 03</span>
                  <span>{v.icon}</span>
                </div>
                <h3>{v.title}<span>.</span></h3>
                <p>{v.text}</p>
                <div className="value-decoration">{v.title === 'Learn' ? '↗' : v.title === 'Build' ? '✳' : '↗'}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="events-section" id="events">
          <div className="section-head">
            <p className="eyebrow">02 / COME THROUGH</p>
          </div>
          <div className="events-title">
            <h2>Good things<br/>happen <em>in person.</em></h2>
            <p>Small steps, shared screens, big ideas.<br/>There’s a seat for you here.</p>
          </div>
          <div className="event-grid">
            {events.map(e => (
              <article className={`event-card ${e.color}`} key={e.title}>
                <div className="event-image">
                  <span className="event-number">{e.n}</span>
                  <span className="event-sticker">✳&nbsp; GDG<br/>ON CAMPUS</span>
                  <div className="event-display">
                    {e.mark.split('\n').map(x => <span key={x}>{x}</span>)}
                  </div>
                  <span className="event-date">{e.date}</span>
                </div>
                <div className="event-details">
                  <div>
                    <span className="event-kind">{e.kind}</span>
                    <h3>{e.title}</h3>
                    <div className="event-schedule">
                      <span className="schedule-item"><Calendar size={13}/> {e.date}</span>
                      <span className="schedule-item"><Clock size={13}/> {e.time}</span>
                      <span className="schedule-item location"><MapPin size={13}/> {e.location}</span>
                    </div>
                  </div>
                  <a
                    href={COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Register for ${e.title}`}
                  >
                    <ArrowUpRight/>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="event-footnote">MORE GOOD THINGS ARE IN THE WORKS <span>✳</span></p>
        </section>

        <section className="team-section" id="team">
          <div className="section-head">
            <p className="eyebrow">03 / PEOPLE MAKE THE PLACE</p>
          </div>
          <div className="team-title">
            <h2>Say hi to<br/>your <em>co-conspirators.</em></h2>
            <p>Different paths, shared curiosity.<br/>We’re glad you’re here.</p>
          </div>

          <div className="team-grid">
            {team.map(m => (
              <article className="team-card" key={m.initials}>
                <div className="team-photo">
                  <img
                    src={`https://images.unsplash.com/${m.image}?auto=format&fit=crop&w=720&q=85`}
                    alt={m.name}
                    loading="lazy"
                  />
                  <div className="team-badge-row">
                    <span className="team-num">{m.initials}</span>
                    <span className="team-domain-tag">
                      <i style={{ backgroundColor: m.tagColor }} />
                      {m.domain}
                    </span>
                  </div>
                  <div className="team-overlay-actions">
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} LinkedIn`}>
                      <Linkedin size={15} />
                    </a>
                    <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} GitHub`}>
                      <Github size={15} />
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{m.name}</h3>
                  <p className="team-role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="team-foot">YOUR PEOPLE ARE HERE <span>✳</span></p>
        </section>

        <section id="join" className="join-section">
          <div className="join-graphic">
            <span className="join-orbit"/>
            <span className="join-asterisk">✳</span>
            <span className="join-smile">:)</span>
            <span className="join-small">GOOD IDEAS<br/>START HERE</span>
          </div>
          <div className="join-copy">
            <p className="eyebrow">04 / YOUR MOVE</p>
            <h2>Come as you are.<br/>Leave a little <em>bolder.</em></h2>
            <p>You don’t need a polished portfolio or a five-year plan. Bring your questions, your curiosity, and whatever you’re working on.</p>
            <a
              className="button button-light"
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the community <ArrowUpRight size={17}/>
            </a>
            <span className="join-caption">OPEN TO EVERY CURIOUS MIND · VIIT, VIZAG</span>
          </div>
        </section>

        {/* Bottom Highlight Section with GDGC_VIIT_26 & Google Colors Spotlight */}
        <section className="brand-statement-section" id="bottom-brand">
          <div className="brand-statement-container">
            <div
              ref={bannerRef}
              className="stroke-banner"
              onMouseMove={handleBannerMouseMove}
              onMouseLeave={handleBannerMouseLeave}
              tabIndex={0}
              role="img"
              aria-label="GDGC_VIIT_26"
            >
              <span className="stroke-text stroke-text-base">GDGC_VIIT_26</span>
              <span className="stroke-text stroke-text-highlight" aria-hidden="true">GDGC_VIIT_26</span>
            </div>
          </div>
        </section>
      </main>

      {/* Wider Fixed Positioned Block Tracker at Bottom */}
      <aside className="block-tracker" aria-label="Section block tracker">
        <div className="tracker-rail">
          <div
            className="tracker-progress-line"
            style={{
              width: `${(activeSection / (trackerSections.length - 1)) * 100}%`
            }}
          />
          <div
            className="tracker-pip"
            style={{
              left: `${(activeSection / (trackerSections.length - 1)) * 100}%`
            }}
          />
        </div>

        <div className="tracker-nodes">
          {trackerSections.map((sec, idx) => {
            const isActive = idx === activeSection;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`tracker-node ${isActive ? 'active' : ''}`}
                style={{
                  '--node-color': sec.color,
                  '--node-active-bg': sec.activeBg,
                }}
                aria-label={`Jump to ${sec.label} section`}
                title={`${sec.num} — ${sec.label}`}
              >
                <span>{sec.num}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <footer className="footer">
        <a href="#home" className="brand" aria-label="GDG on Campus VIIT Home">
          <img
            src="https://gdgc-viit.netlify.app/images/Header_Logo.svg"
            alt="Google Developer Groups on Campus - VIIT"
            className="brand-logo footer-logo"
          />
        </a>
        <span className="footer-tag">GOOD PEOPLE. BIG IDEAS. NO GATEKEEPING.</span>
        <div className="footer-links">
          <a aria-label="Instagram" href="https://instagram.com"><Instagram size={17}/></a>
          <a aria-label="LinkedIn" href="https://linkedin.com"><Linkedin size={17}/></a>
          <a aria-label="GitHub" href="https://github.com"><Github size={17}/></a>
        </div>
        <span className="copyright">© 2026 GDG ON CAMPUS VIIT</span>
      </footer>
    </div>
  );
}

export default App;
