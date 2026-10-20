import React, { useState, useEffect } from 'react';
import { ExperienceCategory } from '../types';

interface ItemAnimationState {
  visible: boolean;
  opacity: number;
  transform: string;
  delay: string;
}

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<ExperienceCategory>('all');

  const items = [
    {
      id: 'claims-handler',
      category: 'operations',
      title: 'Claims Handler (Recoveries)',
      meta: 'Liverpool, UK',
      date: 'April 2026 - Present',
      renderDesc: () => (
        <p className="timeline-desc">
          Managing high-volume recovery claims through critical problem-solving
          and strategic decision-making. Facilitating end-to-end communication
          between insured parties, third-party insurers, and stakeholders using
          advanced virtual claim management tools. Demonstrated high adaptability
          and software proficiency in a fast-paced environment while ensuring
          operational accuracy and risk mitigation.
        </p>
      ),
    },
    {
      id: 'tpm-vosyn',
      category: 'product',
      title: 'Technical Product Manager',
      meta: 'Vosyn | Ontario, Canada (Remote)',
      date: 'July 2025 - April 2026',
      renderDesc: () => (
        <p className="timeline-desc">
          Full roadmap strategy ownership, backlog prioritization, user story
          definition, and cross-functional pod management for a fast-growing B2C
          product line. Directed product pipeline integration to accelerate release
          cadences and drove software experimentation to validate feature
          directions.
        </p>
      ),
    },
    {
      id: 'marketing-strategist',
      category: 'product',
      title: 'Digital Marketing Strategist',
      meta: 'EQ for All Foundation | UK',
      date: 'March 2025',
      renderDesc: () => (
        <p className="timeline-desc">
          • Developed an integrated marketing strategy for &quot;The Bears of
          Blueberry Forest&quot; campaign to promote pediatric mental health,
          defining SMART goals and mapping a roadmap for global scalability. (
          <a
            href="https://drive.google.com/file/d/13p_c2FCjYzzNXGNFiF7yFVvd4-RRtjrq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Report
          </a>
          )
          <br />
          • Conducted user segmentation and funnel analysis to map drop-off trends,
          delivering a comprehensive strategic report that optimized content
          reach by an estimated 25% and boosted engagement.
        </p>
      ),
    },
    {
      id: 'strategic-lead',
      category: 'product',
      title: 'Strategic Lead (Business Simulation)',
      meta: 'Hybronn Motors, UoL | MiM Academic Project',
      date: 'August 2025 - October 2025',
      renderDesc: () => (
        <p className="timeline-desc">
          Led a virtual automotive enterprise in a competitive market simulation,
          overseeing technical customization, cost optimization, and R&amp;D.
          Developed a strategic grant proposal for manufacturing retrofit kits
          and managed financial equity to achieve a Top 6 overall ranking.
          <br />•{' '}
          <a
            href="https://drive.google.com/file/d/1VUiME-0DOY8nlQmQccGQa4IQpcCDM4jH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Presentation
          </a>{' '}
          |{' '}
          <a
            href="https://drive.google.com/file/d/1KvNx1DDTGCauZAztUpW7JObvPeME2xEb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Reflective Poster
          </a>
        </p>
      ),
    },
    {
      id: 'embedded-engineer',
      category: 'embedded',
      title: 'Embedded Systems Engineer',
      meta: 'Detect Technologies | Chennai, India',
      date: 'September 2022 - December 2024',
      renderDesc: () => (
        <p className="timeline-desc">
          Designed and implemented automated fault detection architectures for
          the heavy industrial Oil &amp; Gas sector, improving deployment
          efficiency by 20%. Led cross-functional teams in Python automation
          workflows and system-level debugging across edge cameras and hardware
          platforms.
        </p>
      ),
    },
    {
      id: 'electronics-intern',
      category: 'embedded',
      title: 'Electronics Engineer Intern',
      meta: 'Detect Technologies | Chennai, India',
      date: 'October 2021 - July 2022',
      renderDesc: () => (
        <p className="timeline-desc">
          Developed a Python-based IoT monitoring application with direct Microsoft
          Azure Cloud integration, providing critical diagnostic insights and
          technical bottleneck resolution.
        </p>
      ),
    },
  ];

  const [itemStates, setItemStates] = useState<Record<string, ItemAnimationState>>(() => {
    const initial: Record<string, ItemAnimationState> = {};
    items.forEach((item, index) => {
      initial[item.id] = {
        visible: true,
        opacity: 1,
        transform: 'translateY(0)',
        delay: `${index * 60}ms`,
      };
    });
    return initial;
  });

  const handleFilterClick = (newFilter: ExperienceCategory) => {
    if (newFilter === filter) return;
    setFilter(newFilter);

    let visibleIndex = 0;
    const timeouts: NodeJS.Timeout[] = [];

    setItemStates((prev) => {
      const next = { ...prev };
      items.forEach((item) => {
        const matches = newFilter === 'all' || item.category === newFilter;
        if (matches) {
          const delayMs = visibleIndex * 60;
          next[item.id] = {
            visible: true,
            opacity: 1,
            transform: 'translateY(0)',
            delay: `${delayMs}ms`,
          };
          visibleIndex++;

          // Reset delay after animation finishes so hover is instant
          const t = setTimeout(() => {
            setItemStates((cur) => {
              if (cur[item.id]?.visible && cur[item.id]?.opacity === 1) {
                return {
                  ...cur,
                  [item.id]: {
                    ...cur[item.id],
                    delay: '0s',
                  },
                };
              }
              return cur;
            });
          }, 500 + delayMs);
          timeouts.push(t);
        } else {
          next[item.id] = {
            visible: true,
            opacity: 0,
            transform: 'translateY(15px)',
            delay: '0s',
          };
          const t = setTimeout(() => {
            setItemStates((cur) => {
              if (cur[item.id]?.opacity === 0) {
                return {
                  ...cur,
                  [item.id]: {
                    ...cur[item.id],
                    visible: false,
                  },
                };
              }
              return cur;
            });
          }, 300);
          timeouts.push(t);
        }
      });
      return next;
    });
  };

  useEffect(() => {
    // Initial clear of delay
    const t = setTimeout(() => {
      setItemStates((cur) => {
        const next = { ...cur };
        Object.keys(next).forEach((id) => {
          next[id] = { ...next[id], delay: '0s' };
        });
        return next;
      });
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <h3 id="experience" className="reveal active">
        Professional Experience
      </h3>

      <div className="filter-container">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          data-filter="all"
          onClick={() => handleFilterClick('all')}
        >
          All Focus
        </button>
        <button
          className={`filter-btn ${filter === 'product' ? 'active' : ''}`}
          data-filter="product"
          onClick={() => handleFilterClick('product')}
        >
          Product &amp; Strategy
        </button>
        <button
          className={`filter-btn ${filter === 'operations' ? 'active' : ''}`}
          data-filter="operations"
          onClick={() => handleFilterClick('operations')}
        >
          Operations &amp; Claims
        </button>
        <button
          className={`filter-btn ${filter === 'embedded' ? 'active' : ''}`}
          data-filter="embedded"
          onClick={() => handleFilterClick('embedded')}
        >
          Embedded &amp; Engineering
        </button>
      </div>

      <div className="timeline">
        {items.map((item) => {
          const state = itemStates[item.id];
          if (!state?.visible) return null;

          return (
            <div
              key={item.id}
              className="timeline-item"
              data-category={item.category}
              style={{
                opacity: state.opacity,
                transform: state.transform,
                transitionDelay: state.delay,
              }}
            >
              <div className="timeline-header">
                <div>
                  <span className="timeline-title">{item.title}</span>
                  <div className="timeline-meta">{item.meta}</div>
                </div>
                <span className="timeline-date">{item.date}</span>
              </div>
              {item.renderDesc()}
            </div>
          );
        })}
      </div>
    </>
  );
};
