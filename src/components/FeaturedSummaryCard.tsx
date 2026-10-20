import React from 'react';

export const FeaturedSummaryCard: React.FC = () => {
  return (
    <div className="summary-card reveal active">
      <strong>Featured Research &amp; Publications</strong>
      <ul>
        <li>
          <span>🎓</span>
          <div>
            <span className="highlight">MiM Master's Thesis (UoL):</span>{' '}
            <a
              href="https://drive.google.com/file/d/16tqmgfeqgHfBCvGCIFynDcH5d9a4e0YO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Thesis on Drone-based Medical Transport
            </a>
          </div>
        </li>
        <li>
          <span>💼</span>
          <div>
            <span className="highlight">Business Strategy (UoL):</span> Hybronn Motors{' '}
            <a
              href="https://drive.google.com/file/d/1VUiME-0DOY8nlQmQccGQa4IQpcCDM4jH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simulation
            </a>{' '}
            &amp;{' '}
            <a
              href="https://drive.google.com/file/d/1KvNx1DDTGCauZAztUpW7JObvPeME2xEb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reflective Poster
            </a>
          </div>
        </li>
        <li>
          <span>📱</span>
          <div>
            <span className="highlight">Digital Marketing (UoL):</span>{' '}
            <a
              href="https://drive.google.com/file/d/13p_c2FCjYzzNXGNFiF7yFVvd4-RRtjrq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Bears of Blueberry Forest Campaign
            </a>
          </div>
        </li>
        <li>
          <span>📄</span>
          <div>
            <span className="highlight">IEEE Publication:</span>{' '}
            <a
              href="https://doi.org/10.1109/ICESC54411.2022.9885282"
              target="_blank"
              rel="noopener noreferrer"
            >
              Machine Learning Based Fault Detection in Induction Motor using Thermal Imaging
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
