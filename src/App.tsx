import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment'));
const MobileDevelopment = lazy(() => import('./pages/MobileDevelopment'));
const Design = lazy(() => import('./pages/Design'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const ClientLogin = lazy(() => import('./pages/ClientLogin'));
const ClientDashboard = lazy(() => import('./pages/ClientDashboard'));
const ActiveProjectDetails = lazy(() => import('./pages/ActiveProjectDetails'));
const SubmitTicket = lazy(() => import('./pages/SubmitTicket'));

// Loading Fallback
const LoadingFallback = () => <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Public Routes with Main Navbar */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            {/* Services Routes */}
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="web" element={<WebDevelopment />} />
              <Route path="mobile" element={<MobileDevelopment />} />
              <Route path="design" element={<Design />} />
            </Route>

            {/* Portfolio Routes */}
            <Route path="portfolio">
              <Route index element={<Portfolio />} />
              <Route path=":id" element={<CaseStudy />} />
            </Route>

            {/* Login Route */}
            <Route path="login" element={<ClientLogin />} />
          </Route>

          {/* Private/Client Dashboard Routes with Dashboard Navbar */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="project-details" element={<ActiveProjectDetails />} />
            <Route path="ticket" element={<SubmitTicket />} />
          </Route>

          {/* Catch-all / 404 Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
