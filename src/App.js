import React, { useState } from 'react';
import MyNav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navTabs] = useState([
    { name: 'About' },
    { name: 'Projects' },
    { name: 'Contact' },
    { name: 'Resume' },
  ]);

  const [currentTab, setCurrentTab] = useState(navTabs[0]);

  return (
    <div>
      <div className='container-fluid p-0 m-0'>
        <MyNav
          navTabs={navTabs}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          className='lightGray'
        ></MyNav>
        <main>
          {!currentTab ? <About></About> :
            currentTab.name === 'Projects' ? <Portfolio></Portfolio> :
              currentTab.name === 'Resume' ? <Resume></Resume> :
                currentTab.name === 'Contact' ? <Contact></Contact> : <About></About>
          }
        </main>
      </div>
    </div>
  );
}

export default App;
