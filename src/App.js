import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Education from './components/Educations';
import Interests from './components/Interests';
import Courses from './components/Courses';
function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <Nav/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Experience/>
        <Courses/>
        <Education/>
        <Interests/>
        <Contact/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
