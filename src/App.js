
import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import ContactSection from './Components/ContactSection/ContactSection';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import GallerySection from './Components/GallerySection/GallerySection';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import ReviewSection from './Components/ReviewsSection/ReviewsSection';
import ShowcaseSection from './Components/ShowcaseSection/ShowcaseSection'

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <ShowcaseSection />
        <AboutSection />
        <GallerySection />
        {/* <ReviewSection /> */}
        <ContactSection />
        <FooterComponent />
    </div>
  );
}

export default App;
