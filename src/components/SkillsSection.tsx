import React, { useEffect, useRef, useState } from 'react';
import { skillGroups } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h3 id="skills" className="reveal active">
        Skills &amp; Competencies
      </h3>
      <div
        ref={cardRef}
        className={`skills-card reveal active ${isActive ? 'active' : ''}`}
      >
        <div className="skills-container">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.title}>
              <span className="skills-subtitle">{group.title}</span>
              <div className="skills-badges">
                {group.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{ transitionDelay: `${index * 45}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
