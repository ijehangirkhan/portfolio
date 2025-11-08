import React, { useContext } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function PageViewTracker() {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null; // This component does not render anything
}

function App() {
  const { theme } = useContext(ThemeContext);

  React.useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const { body } = document;
    const html = document.documentElement;
    const previousBodyBg = body.style.backgroundColor;
    const previousHtmlBg = html.style.backgroundColor;
    const nextBg = theme.secondary;

    body.style.backgroundColor = nextBg;
    html.style.backgroundColor = nextBg;

    return () => {
      body.style.backgroundColor = previousBodyBg;
      html.style.backgroundColor = previousHtmlBg;
    };
  }, [theme.secondary]);

  // console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  // console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app" style={{ backgroundColor: theme.secondary }}>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <PageViewTracker />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
