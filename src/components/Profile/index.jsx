import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card, Image, Text, Group } from "@mantine/core";
import AuthButtons from "../AuthButton";


const Profile = () => {

  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>

        <Card shadow="md" padding="lg" radius="md" style={{width: '20%', height: '20%' }} withBorder>
        <Image variant="top" src={user.picture} alt={user.name} styles={{width:'100%', height:'50%'}}/>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Group>
            <Button>Light/Dark</Button>
            <AuthButtons/>
          </Group>
        </Card>
        <h1>hi</h1>
      </>
    )
  )
}

export default Profile;