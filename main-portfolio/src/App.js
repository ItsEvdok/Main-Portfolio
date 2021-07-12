import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    { name: 'portfolio' },
    { name: 'resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Footer></Footer>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
