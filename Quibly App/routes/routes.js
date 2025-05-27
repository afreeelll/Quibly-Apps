import renderHomePage from './components/home-page.js';
import { renderPrivacyPolice } from './components/privacy.js';
import { renderTerms } from './components/terms.js';
import './components/navbar.js';
import './components/footer.js';

const routes = {
  '/': renderHomePage,
  '/home': renderHomePage,
  '/library': renderLibrary,
  '/summarize': renderSummarize,
  '/about': renderAbout,
  '/contact': renderContact,
  '/signin': renderSignIn,   
  '/privacy': renderPrivacyPolice,
  '/terms': renderTerms
};
