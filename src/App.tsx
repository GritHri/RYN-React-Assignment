import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home, { ReviewsSection } from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"

function App() {

  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="md:mx-25 mx-2">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <ReviewsSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
