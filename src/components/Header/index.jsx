import { Header, Burger, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {

  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <Header>
        <h1>Learn Hub</h1>
        <Menu shadow="md" width={200} transitionProps={{ transition: 'slide-right', duration: 500 }}>
          <Menu.Target>
            <Burger title="Settings" color="#fe6734" opened={opened} onClick={toggle} aria-label={label} />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item><Link to="/"> Home</Link></Menu.Item>
            {/* make conditional saying if light mode then say dark mode and can switch to dark mode and vise versa */}
            <Menu.Item><Link to="/profile" >Profile</Link></Menu.Item>
            <Menu.Item>Dark/Light Mode</Menu.Item>
            <Menu.Item color="red">Log Out</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Header>

    </>
  )
}

export default Headers;