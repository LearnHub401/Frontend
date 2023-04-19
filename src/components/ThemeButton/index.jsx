import { useMantineColorScheme, Button } from '@mantine/core';

function ThemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
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
    <Button style={dark? lightButton : darkButton} onClick={() => toggleColorScheme()}>{dark ? <p>light</p> : <p>dark</p>}</Button>
  );
}

export default ThemeButton
