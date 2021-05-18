
import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import PicboxComponent from './Components/PicboxComponent/PicboxComponent';
import ReviewSection from './Components/ReviewsSection/ReviewsSection';
// import LogoComponent from './Components/LogoComponent/LogoComponent'
import ShowcaseSection from './Components/ShowcaseSection/ShowcaseSection'

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <ShowcaseSection />
        <AboutSection />
        <PicboxComponent />
        <ReviewSection />
    </div>
  );
}

export default App;
