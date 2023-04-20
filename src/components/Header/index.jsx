import { Header, Burger, Menu, createStyles } from "@mantine/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-bootstrap';
import AuthButtons from "../AuthButton";
import ThemeButton from "../ThemeButton/index.jsx";
import { withAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo-no-background.png'

const useStyles = createStyles(() => ({
  image: {
    display: 'block',
    height: '100px',
    // marginRight: 'auto',
    // marginLeft: 'auto'
  }
}));

const Headers = () => {

  const [opened, setOpened] = useState(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const { classes } = useStyles();

  return (
    <>
      <Header>
        {/* <h1>Learn Hub</h1> */}
        <img src={logo} alt="learnHub logo" className={classes.image} />

        <Menu shadow="md" width={200} onChange={e => setOpened(e)} transitionProps={{ transition: 'slide-right', duration: 500 }}>
          <Menu.Target>
            <Burger title="Settings" color="#fe6734" opened={opened} aria-label={label} size={'xl'} />
          </Menu.Target>

          <Menu.Dropdown>
          <ThemeButton />
            <Navbar>
              <NavItem>
                <Menu.Item component={Link} to="/">Home</Menu.Item>
                <Menu.Item component={Link} to="/profile">Profile</Menu.Item>
                <Menu.Item component={Link} to="/courses">Courses</Menu.Item>
                <Menu.Item component={Link} to="/about">About Us</Menu.Item>
                <Menu.Item component={Link} to="/"> Home</Menu.Item>
                <Menu.Item component={Link} to="/profile">Profile</Menu.Item>
                <Menu.Item component={Link} to="/courses">Courses</Menu.Item>
                <Menu.Item component={Link} to="/about">About Us</Menu.Item>
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
