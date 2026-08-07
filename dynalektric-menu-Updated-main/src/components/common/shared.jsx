/* shared.jsx — shared data, components, hooks exporter for Dynalektric */

import { PRODUCTS, SUBCAT_DETAIL } from '../../data/products.js';
import { INDUSTRIES } from '../../data/industries.js';
import { CERTIFICATIONS, STATS, HERO_HEADLINES, QUALIFICATION } from '../../data/certifications.js';
import { CASE_STUDIES } from '../../data/caseStudies.js';
import { useReveal } from '../../hooks/useReveal.js';
import Counter from './Counter.jsx';
import EngineeringVisual from './EngineeringVisual.jsx';
import CaseStudyGrid from './CaseStudyGrid.jsx';
import FinalCTA from './FinalCTA.jsx';
import Footer from '../layout/Footer.jsx';

/* expose to window for browser script compatibility */
Object.assign(window, {
  PRODUCTS, INDUSTRIES, CERTIFICATIONS, STATS, HERO_HEADLINES, QUALIFICATION,
  CASE_STUDIES, SUBCAT_DETAIL,
  useReveal, Counter, EngineeringVisual, Footer, FinalCTA, CaseStudyGrid,
});
