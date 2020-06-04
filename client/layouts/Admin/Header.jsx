import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FaBars } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { Dropdown, ButtonToolbar, DropdownButton } from "react-bootstrap";
import i18n from '../../locale/i18n';
import { Translation } from 'react-i18next';
import TitleHeader from '../../commons/StyleComponent';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export default ({ history, toggle }) => {
  function changeLanguage(lang) {
    const link = document.getElementById('Translate');
    i18n.changeLanguage(lang);
    
    link && link.click();
  }

  return (
    <Navbar bg="light" expand="lg">
      <Button variant="light" onClick={toggle}><FaBars fontSize="x-large" /></Button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse>
        <TitleHeader><span>Simple Order System</span></TitleHeader>
      </Navbar.Collapse> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ButtonToolbar>
            {['down'].map((direction, index) => {
              return (
                <DropdownButton
                  key={index}
                  drop={direction}
                  title={<MdLanguage className="language" />}
                >
                  <Dropdown.Item eventKey="jp" key="jp" onClick={() => changeLanguage('jp')}>日本語</Dropdown.Item>
                  <Dropdown.Item eventKey="en" key="en" onClick={() => changeLanguage('en')}>English</Dropdown.Item>
                </DropdownButton>
              )
            })}
          </ButtonToolbar>
          <ButtonToolbar>
            {['down'].map((direction, index) => {
              return (
                <DropdownButton
                  key={index}
                  drop={direction}
                  title={<FaUserCog className="user-config" />}
                >
                  <Dropdown.Item eventKey="1" key="logout"><Translation>{t => t('logout')}</Translation></Dropdown.Item>
                </DropdownButton>
              )
            })}
          </ButtonToolbar>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
