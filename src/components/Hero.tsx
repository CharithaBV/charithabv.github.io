import React from 'react';
import {
  contactInfo,
  headline,
  bioParagraphs,
  researchInterests,
  researchToDate,
  doctoralCallout,
} from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <>
      <div className="hero reveal active">
        <h1 id="main-name">Charitha Reddy</h1>
        <h2>{headline}</h2>

        <div className="contact-bar">
          <span className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {contactInfo.location}
          </span>
          <a href={`mailto:${contactInfo.email}`} className="contact-item">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {contactInfo.email}
          </a>
          <a
            href={contactInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      <p>{bioParagraphs[0]}</p>

      <p>
        My path runs from engineering to management. I hold an{' '}
        <strong>
          MTech in Industrial Intelligent Systems (First Class with Distinction)
        </strong>{' '}
        and a{' '}
        <strong>
          Master in Management (MiM, Distinction, GPA equivalent 4.0/4.0)
        </strong>{' '}
        from the University of Liverpool, where I was named{' '}
        <strong>Student of the Year 2025/26</strong>. I have worked on both
        sides of the problem: building machine-learning systems, and studying why
        technically sound systems stall at the pilot stage.
      </p>

      <div className="academic-summary">
        {/* Research Interests Card */}
        <div className="academic-card reveal active">
          <strong className="card-title">Research Interests</strong>
          <ul className="academic-list">
            {researchInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>

        {/* Research to Date Card */}
        <div className="academic-card reveal active">
          <strong className="card-title">Research to Date</strong>
          <div className="milestones-container">
            {researchToDate.map((item) => (
              <div key={item.title} className="milestone-item">
                <span className="milestone-title">{item.title}</span>
                <p className="milestone-desc">
                  {item.description}
                  {item.link && (
                    <>
                      {' '}
                      [
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.link.label}
                      </a>
                      ]
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="phd-callout-text">{doctoralCallout}</p>
    </>
  );
};
