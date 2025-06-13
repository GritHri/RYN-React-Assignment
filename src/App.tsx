import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home, { ReviewsSection } from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"

function App() {

  const BASE_URL = '/RYN-React-Assignment';
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="md:mx-25 mx-2">
        <Routes>
          <Route path={BASE_URL + "/"} element={
            <>
              <Home />
              <ReviewsSection />
            </>
          } />
          <Route path={BASE_URL + "/about"} element={<About />} />
          <Route path={BASE_URL + "/contact"} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
