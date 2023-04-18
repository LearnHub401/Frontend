import { useMantineColorScheme, Button } from '@mantine/core';

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Button onClick={() => toggleColorScheme()}>{dark ? <p>light</p> : <p>dark</p>}</Button>
  );
}

export default Demo
