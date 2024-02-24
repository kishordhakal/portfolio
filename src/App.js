
import './App.css';
import { HashRouter} from 'react-router-dom';
import HeroImage from './components/hero'
import Skills from './components/skill';
import Contact from './components/contact';

function App() {

  return (
    <>
    <div className='app'>
    <HashRouter>
      <HeroImage/>
      <Skills/>
      <Contact/>
    </HashRouter>
    </div>
    </>
  )
}
export default App;
