import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function MyNav(props)  {
  const {
    navTabs = [],
    setCurrentTab,
    currentTab
  } = props;

  const changeButtonColor = (e, remove) => {
    const linkStyle = 'background-color: rgba(31, 121, 212, 0.767); border-radius: 5px;)';
    const target = e.target;
    remove ? target.matches('span') ?
        target.parentElement.style = '' :
        target.style = '' :
        target === 'span' ? target.parentElement.style = linkStyle :
            target.style = linkStyle
  }

  // const navStyle = {
  //   color: 'rgb(73, 81, 111)'
  // };

  return (
    <Container fluid className='navBar bg-dark'>
      <Navbar className={'d-flex flex-wrap justify-content-between p-3'}>
        <div className='d-flex flex-wrap justify-content-center'>
          <Navbar.Brand href="/" ><h1 class='ms-3 text-white'>ItsEvdok</h1> </Navbar.Brand>
        </div>
        <Nav className='d-flex flex-wrap justify-content-center'>
          {navTabs.map((tabs) => (
            <Nav.Link
              onPointerOver={(e) => { changeButtonColor(e) }}
              onPointerOut={(e) => { changeButtonColor(e, true) }}
              href={`#${tabs.name}`}
              key={tabs.name}
              className={`navLink text-white ${currentTab.name === tabs.name && 'navActive pulse'}`}
              onClick={() => { setCurrentTab(tabs) }}
            >{tabs.name}</Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </Container>
  )
}
