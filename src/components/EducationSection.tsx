import React from 'react';
import { educationItems } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <>
      <h3 id="education" className="reveal active">
        Education
      </h3>
      <div className="education-list">
        {educationItems.map((item) => (
          <div key={item.degree} className="education-item reveal active">
            <div className="edu-header">
              <div>
                <span className="edu-degree">{item.degree}</span>
                <div className="edu-school">{item.institution}</div>
              </div>
              <span className="edu-date">{item.period}</span>
            </div>
            <div className="edu-details">{item.details}</div>
          </div>
        ))}
      </div>
    </>
  );
};
