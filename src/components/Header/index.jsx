import { Header, Burger, Menu, Center } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-bootstrap';
import AuthButtons from "../AuthButton";
import ThemeButton from "../ThemeButton/index.jsx";
import { withAuth0 } from "@auth0/auth0-react";
import './styles.scss'

const Headers = () => {

  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <Header id="header">
        <h1>Learn Hub</h1>
        <Center style={{position:'absolute', right:'3%', top:'6%'}}>

        <Menu id="menu" shadow="md" width={200} onChange={e => setOpened(e)} transitionProps={{ transition: 'slide-left', duration: 500 }}>
          <Menu.Target>
            <Burger id="burger" title="Settings" color="#fe6734" opened={opened} aria-label={label} />
          </Menu.Target>

          <Menu.Dropdown>
            <ThemeButton />
            <Menu.Label>Settings</Menu.Label>
            <Navbar>
              <NavItem>
                <Menu.Item><Link to="/"> Home</Link></Menu.Item>
                <Menu.Item><Link to="/profile" >Profile</Link></Menu.Item>
                <Menu.Item><Link to="/courses" >Courses</Link></Menu.Item>
                <Menu.Item><Link to="/about" >About Us</Link></Menu.Item>
                <Menu.Item color="red"> <AuthButtons /> </Menu.Item>
              </NavItem>
            </Navbar>
          </Menu.Dropdown>
        </Menu>
        </Center>
      </Header>

    </>
  )
}

export default withAuth0(Headers);
