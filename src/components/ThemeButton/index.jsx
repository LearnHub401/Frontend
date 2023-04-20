import { useMantineColorScheme, Button, Center } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

function ThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const light = colorScheme === 'light';

  const darkButton = {
    backgroundColor: '#31B073',
    color: '#ffffff',
    borderRadius: '25px',
    transition: '0.2s',
  };

  const lightButton = {
    backgroundColor: 'orange',
    color: '#01010a',
    borderRadius: '25px',
    transition: '0.2s',
  };



  return (
    <Button style={dark ? lightButton : darkButton} onClick={() => toggleColorScheme()}>
      {
      dark ? 
      <>
        <p style={{paddingRight: '5px'}}>light</p>
        <Center>
          <IconSun size="1.05rem" stroke={1.5} />
        </Center>
      </>
      :
      <>
        <p style={{paddingRight: '5px'}}>dark </p>
        <Center>
          <IconMoon size="1.05rem" stroke={1.5} />
        </Center>
      </>
    }</Button>

  );
}

export default ThemeButton
