import { Routes, Route } from 'react-router-dom'

import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'

// Import the page components using React.lazy for code splitting
import { lazy, Suspense } from "react"; 
// Lazy load the page components
const Home = lazy(() => import("./pages/Home"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-slate-950">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
