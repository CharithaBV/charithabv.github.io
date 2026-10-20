import React from 'react';

export const HighlightsSection: React.FC = () => {
  return (
    <>
      <h3 id="highlights" className="reveal active">
        Key Highlights &amp; Awards
      </h3>
      <div className="highlight-card reveal active">
        <ul className="highlight-list">
          <li className="reveal-item" style={{ transitionDelay: '0ms' }}>
            <span className="highlight">Academic Recognition:</span>{' '}
            Awarded <strong>'Student of the Year' (2025-2026)</strong> at the
            University of Liverpool for outstanding academic performance and
            strategic management acuity.
          </li>
          <li className="reveal-item" style={{ transitionDelay: '65ms' }}>
            <span className="highlight">Dual Distinction:</span> Graduated with
            Distinction in both Master in Management (GPA Eq: 4.0/4.0) and M.Tech
            Industrial Intelligent Systems (CGPA 8.3/10.0).
          </li>
          <li className="reveal-item" style={{ transitionDelay: '130ms' }}>
            <span className="highlight">Published Researcher:</span> Authored
            peer-reviewed IEEE conference paper on ML-based fault detection
            using thermal imaging.
          </li>
          <li className="reveal-item" style={{ transitionDelay: '195ms' }}>
            <span className="highlight">Socio-Technical System Fluency:</span>{' '}
            Trained to bridge engineering designs with high-level strategy using
            TAM and UTAUT frameworks.
          </li>
          <li className="reveal-item" style={{ transitionDelay: '260ms' }}>
            <span className="highlight">Business Simulation Leadership:</span>{' '}
            Achieved a <strong>Top 6 ranking</strong> in a high-volatility
            market simulation at UoL, managing end-to-end car business operations
            from technical R&amp;D to financial equity.
          </li>
        </ul>
      </div>
    </>
  );
};
