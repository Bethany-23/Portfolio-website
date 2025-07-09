
import './App.scss';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import NavBar from './components/navBar';
import Footer from './components/footer';
import ParticlesComponent from './particles';

function App() {
  const location = useLocation();
  console.log(location);
  const isHomePage = location.pathname === '/';
  return (
    <div className="App">
      {/*particles js */}
      {isHomePage && <ParticlesComponent id="particles" />}
      {/* navbar */}
      <NavBar/>
      
      {/* main page content */}
      <div className='App__main-page-content'>
      <Routes> 
        <Route index path ='/' element ={<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/skills' element = {<Skills/>}/>
        <Route path = '/portfolio' element = {<Portfolio/>}/>
        <Route path = '/contact' element = {<Contact/>}/>

      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
