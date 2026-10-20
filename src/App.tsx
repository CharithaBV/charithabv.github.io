import React, { useState, useEffect, useCallback } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedSummaryCard } from './components/FeaturedSummaryCard';
import { HighlightsSection } from './components/HighlightsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ResearchSection } from './components/ResearchSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  });

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Dynamic Scroll-Spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('h3[id], .hero');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 140) {
          if (section.id) {
            currentSection = section.id;
          } else if (section.classList.contains('hero')) {
            currentSection = 'home';
          }
        }
      });

      if (currentSection && currentSection !== 'home') {
        setActiveSection(currentSection);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const elements = document.querySelectorAll(
      'h3, .summary-card, .timeline-item, .education-item, .skills-card, .hero, .highlight-card, .research-card'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <TopBar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <SkillsSection />
        <FeaturedSummaryCard />
        <HighlightsSection />
        <ExperienceSection />
        <EducationSection />
        <ResearchSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
