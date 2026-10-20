import React, { useState, useEffect, useRef } from 'react';

interface TopBarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeSection: string;
}

const sectionTitles: Record<string, string> = {
  skills: '• Skills',
  highlights: '• Highlights',
  experience: '• Experience',
  education: '• Education',
  research: '• Research',
};

export const TopBar: React.FC<TopBarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroTitle = document.getElementById('main-name');
      if (heroTitle) {
        const rect = heroTitle.getBoundingClientRect();
        // When main title scrolls out of top view
        setIsVisible(rect.bottom < 0);
      } else {
        setIsVisible(window.scrollY > 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top-bar" className={isVisible ? 'visible' : ''}>
      <div className="dropdown" ref={dropdownRef}>
        <button
          className="dropbtn"
          aria-label="Menu"
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen((prev) => !prev);
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
            Skills
          </a>
          <a
            href="#highlights"
            onClick={(e) => handleNavClick(e, 'highlights')}
          >
            Highlights
          </a>
          <a
            href="#experience"
            onClick={(e) => handleNavClick(e, 'experience')}
          >
            Experience
          </a>
          <a href="#education" onClick={(e) => handleNavClick(e, 'education')}>
            Education
          </a>
          <a href="#research" onClick={(e) => handleNavClick(e, 'research')}>
            Research
          </a>
        </div>
      </div>

      <div className="name-container">
        <span className="name">Charitha Reddy</span>
        <span className="section-indicator">
          {activeSection && sectionTitles[activeSection]
            ? ` ${sectionTitles[activeSection]}`
            : ''}
        </span>
      </div>

      <button
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        title={`Current theme: ${theme}. Click to switch.`}
        onClick={onToggleTheme}
      >
        <svg
          className="sun-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <svg
          className="moon-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
  );
};
