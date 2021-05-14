
import './App.css';
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
        <PicboxComponent />
        <ReviewSection />
    </div>
  );
}

export default App;
