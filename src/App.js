import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectPage/ProjectPage";
import Project1 from "./pages/ProjectPage/Project1/Project1";
import Project2 from "./pages/ProjectPage/Project2/Project2";
import ContactPage from "./pages/ContactPage/ContactPage";
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import Reviews from "./pages/ReviewsPage/Reviews/Reviews";
import SetReviews from "./pages/ReviewsPage/SetReviews/SetReviews";



function App() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projets" element={<ProjectsPage />} />
        <Route path="/projects/project1" element={<Project1 />} />
        <Route path="/projects/project2" element={<Project2 />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={< ReviewsPage/>}/>
        <Route path="/Reviews/Reviews" element={<Reviews />} />
        <Route path="//Reviews/SetReviews" element={<SetReviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App();