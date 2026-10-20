import React from 'react';

export const ResearchSection: React.FC = () => {
  return (
    <>
      <h3 id="research" className="reveal active">
        Research &amp; Publications
      </h3>
      <div className="research-card reveal active">
        <ul className="research-list">
          <li className="research-item">
            <span className="highlight">Master's Thesis (UoL):</span>{' '}
            <a
              href="https://drive.google.com/file/d/16tqmgfeqgHfBCvGCIFynDcH5d9a4e0YO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;What managerial, clinical, and operational factors influence the adoption and effectiveness of drone-based medical transport for time-critical healthcare items?&quot;
            </a>{' '}
            (Systematic literature review using TAM/UTAUT lenses).
          </li>
          <li className="research-item">
            <span className="highlight">Digital Marketing Strategy:</span>{' '}
            <a
              href="https://drive.google.com/file/d/13p_c2FCjYzzNXGNFiF7yFVvd4-RRtjrq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              &quot;The Bears of Blueberry Forest&quot;
            </a>
            , a proactive initiative enhancing pediatric mental health and emotional intelligence through educational storytelling.
          </li>
          <li className="research-item">
            <span className="highlight">IEEE Publication:</span> &quot;Machine Learning Based Fault Detection in Induction Motor using Thermal Imaging.&quot; <em>IEEE ICESC 2022</em>. DOI:{' '}
            <a
              href="https://doi.org/10.1109/ICESC54411.2022.9885282"
              target="_blank"
              rel="noopener noreferrer"
            >
              10.1109/ICESC54411.2022.9885282
            </a>
            .
          </li>
          <li className="research-item">
            <span className="highlight">Methods &amp; Frameworks:</span> Engineered automated condition monitoring pipelines, image segmentation engines, and supervised model deployments achieving up to 97.2% accuracy.
          </li>
        </ul>
      </div>
    </>
  );
};
