import {Card, Image, Text} from '@mantine/core'
import { useMantineColorScheme } from '@mantine/core';


const TeamMember = ({ name, title, imageSrc }) => (
  <Card>
    <Image src={imageSrc} height={200} fit="cover" alt={`${name} - ${title}`} />
    <Text weight={500} size="lg" mt={16}>
      {name}
    </Text>
    <Text size="sm" color="gray" mt={8}>
      {title}
    </Text>
  </Card>
);



const darkAbt = {
  backgroundColor: '#31B073',
  color: '#ffffff',
  borderRadius: '25px',
  transition: '0.2s',
};

const lightAbt = {
  backgroundColor: 'orange',
  color: '#01010a',
  borderRadius: '25px',
  transition: '0.2s',
};




const About = () => {
  const { colorScheme} = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return(
  <div style={{ padding: 24 }}>
    <Text size="lg" weight={500} mt={24} mb={16}>
      Meet Our Team
    </Text>
    <div  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: 16 }}>
      <TeamMember style={dark? lightAbt : darkAbt} name="John Smith" title="CEO" imageSrc="https://picsum.photos/200/300" />
      <TeamMember style={dark? lightAbt : darkAbt} name="Jane Doe" title="CTO" imageSrc="https://picsum.photos/200/301" />
      <TeamMember style={dark? lightAbt : darkAbt} name="Bob Johnson" title="CFO" imageSrc="https://picsum.photos/200/302" />
      <TeamMember style={dark? lightAbt : darkAbt} name="Alice Williams" title="COO" imageSrc="https://picsum.photos/200/303" />
    </div>
  </div>

  )
}

export default About;