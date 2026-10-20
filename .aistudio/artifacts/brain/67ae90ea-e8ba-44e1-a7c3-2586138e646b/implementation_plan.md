# Update Degree Acronym: MSc to MiM (Master in Management)

Accurately reflect Charitha Reddy's degree title as **MiM (Master in Management)** across all sections of the portfolio, replacing outdated "MSc" references in headlines, narrative text, education history, highlights, and meta tags.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following confirmed conventions will be applied across all files:

- **Confirmed Decision 1 (Headline & Meta)**: Use **`MiM (Distinction), Liverpool`** in the main headline subtitle, page `<title>`, OpenGraph tags, and `metadata.json`:  
  `Doctoral Applicant | Technology Adoption & Implementation Science | MiM (Distinction), Liverpool | MTech Industrial Intelligent Systems | IEEE-Published`
- **Confirmed Decision 2 (Education Section)**: Use **`Master in Management (MiM)`** as the degree title in the Education history section (`#education`), noting Distinction and the 4.0/4.0 GPA equivalent.
- **Confirmed Decision 3 (Bio Narrative & Highlights)**: Update narrative mentions to reference **`Master in Management (MiM, Distinction)`** and update the thesis milestone heading to **`Master's Thesis (MiM)`**.

---

### 1. Overview & Core Concept

- **What It Does**: Corrects the postgraduate management qualification from MSc to MiM (Master in Management) throughout the application to ensure 100% academic accuracy and alignment with European business school nomenclature for doctoral applications.
- **Key Value**: Prevents administrative discrepancy during academic credential checks and application reviews with European universities.

---

### 2. Comprehensive Inventory of Updates

1. **Headline (`src/data/portfolioData.ts`, `src/components/Hero.tsx`)**:
   - `Doctoral Applicant | Technology Adoption & Implementation Science | MiM (Distinction), Liverpool | MTech Industrial Intelligent Systems | IEEE-Published`
2. **Hero Bio Paragraph 2 (`src/components/Hero.tsx`, `src/data/portfolioData.ts`)**:
   - Change from `an MSc in Management (Distinction, GPA equivalent 4.0/4.0)` to:  
     `a Master in Management (MiM, Distinction, GPA equivalent 4.0/4.0)`
3. **Research to Date Milestone (`src/data/portfolioData.ts`)**:
   - Change `title: 'MSc Thesis'` to:  
     `title: "Master's Thesis (MiM)"`
4. **Key Highlights Section (`src/components/HighlightsSection.tsx`, `src/data/portfolioData.ts`)**:
   - Change `Graduated with Distinction in both M.Sc. Management (GPA Eq: 4.0/4.0)...` to:  
     `Graduated with Distinction in both Master in Management (GPA Eq: 4.0/4.0) and M.Tech Industrial Intelligent Systems (CGPA 8.3/10.0).`
5. **Education Section (`src/data/portfolioData.ts`)**:
   - Change `degree: 'M.Sc. in Management'` to:  
     `degree: 'Master in Management (MiM)'`
6. **SEO & Applet Metadata (`index.html`, `metadata.json`)**:
   - Synchronize description strings with `MiM (Distinction), Liverpool`.

---

### 3. Technical Architecture & File Plan

- **Files to Modify**:
  - `src/data/portfolioData.ts`: Update `headline`, `bioParagraphs`, `researchToDate`, `highlightItems`, and `educationItems`.
  - `src/components/Hero.tsx`: Update paragraph 2 JSX strong tags to `Master in Management (MiM, Distinction, GPA equivalent 4.0/4.0)`.
  - `src/components/HighlightsSection.tsx`: Update item 2 text from `M.Sc. Management` to `Master in Management`.
  - `index.html`: Update `<meta name="description">` and `og:description`.
  - `metadata.json`: Update `"description"`.
- **Verification**:
  - Run `compile_applet` and `lint_applet` to ensure clean build.
