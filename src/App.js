/*
*Title: App/Main Component
*Description: Main react component to render.
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/

//  Dependencies
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import GlobalStyle from './globalStyles';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';

//  Main Component (using react)
function App() {
  let location = useLocation();
  return (
    <>
      {/* Initializing framer motion in the app */}
      <AnimatePresence  exitBeforeEnter>
        <GlobalStyle/>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

//  Export main component
export default App;
