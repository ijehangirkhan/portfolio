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

  // console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  // console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
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