import { Header, Burger, Menu } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-bootstrap';
import AuthButtons from "../AuthButton";
import ThemeButton from "../ThemeButton/index.jsx";
import { withAuth0 } from "@auth0/auth0-react";

const Headers = () => {

  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <Header>
        <h1>Learn Hub</h1>

        <Menu shadow="md" width={200} onChange={e => setOpened(e)} transitionProps={{ transition: 'slide-right', duration: 500 }}>
          <Menu.Target>
            <Burger title="Settings" color="#fe6734" opened={opened} aria-label={label} />
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
      </Header>

    </>
  )
}

export default withAuth0(Headers);
