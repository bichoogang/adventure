import React from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Plan from './components/Plan'
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Tour from './components/Tour';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Switch>
        <Route exact path='/'>

          <Navbar />
          <Home />
          <Plan />
          <Footer/>
        </Route>
        <Route exact path="/about">
         <Navbar />
         <About />
         <Footer/>
        </Route>
        <Route path='/tour'>
          <Navbar />
          <Tour/>
          <Footer/>
        </Route>
        
        <Route path='/contact'>
          <Navbar />
          <Contact/>
          <Footer/>
        </Route>
      </Switch>


    </div>
  );
}

export default App;
