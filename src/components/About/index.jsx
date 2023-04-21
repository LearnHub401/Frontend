import {Card, Image, Text} from '@mantine/core'
import { useMantineColorScheme } from '@mantine/core';
import Jonathan from '../../assets/jonathan.jpg';
import ty from '../../assets/ty.jpg';
import martin from '../../assets/martin.jpg';
import marco from '../../assets/marco.jpg';
import brandon from '../../assets/brandon.jpg'

const TeamMember = ({ name, title, words, imageSrc }) => (
  <Card>
    <Image src={imageSrc} height={400} fit="cover" alt={`${name} - ${title}`} />
    <Text weight={500} size="lg" mt={16}>
      {name}
    </Text>
    <Text size="sm" color="gray" mt={8}>
      {title}
    </Text>
    <Text size="sm" color="black" mt={8}>
      {words}
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
      <TeamMember style={dark? lightAbt : darkAbt} name="Martin Hansen" imageSrc={martin} words="Hello, my name is Martin Hansen. I grew up with a love for computer science, programming, and almost anything tech related. I pursued computer science even at a young age making basic HTML web pages and simple games with block-based programming like Scratch or GMS, even in elementary school. Today, I am a highly skilled software engineer passionate about building innovative and user-friendly software solutions." />
      <TeamMember style={dark? lightAbt : darkAbt} name="Jonathan Staib" words="Hello! My name is Jonathan Staib and I am a software developer from Long Island, New York with a background in Healthcare. I love problem solving and working on the Front-End. If I am not coding you will probably find me playing video games or Magic the Gathering." imageSrc={Jonathan} />
      <TeamMember style={dark? lightAbt : darkAbt} name="Ty Aponte" imageSrc={ty} words="I'm a FullStack Javascript Software Developer with a background in Medical Imaging, Lab Work, and CCMA. What makes me unique is my dauntless hunger for knowledge, which allows me to bring innovative solutions to any project. As a local mountain cryptid, exoteric answers have always fascinated me, and I'm ready to use that fascination to benefit your project!" />
      <TeamMember style={dark? lightAbt : darkAbt} name="Marco Villafana" imageSrc={marco} words="Hello, I'm Marco Villafana (he/him), a skilled software developer with a background as an army veteran. I am proud to call Washington state my home. My experience includes serving as an information technology specialist where I provided essential desktop and network support. Building on that foundation, I have since completed a computer science degree from Central Washington University. I am further honing my skills by enrolling in Code Fellows, where I am excited to transition into full stack development." />
      <TeamMember style={dark? lightAbt : darkAbt} name="Brandon Perard" imageSrc={brandon} words="Hello, I'm Brandon and I'm a software developer from Portland, OR. My engineering background from the Navy is complemented by communication skills gained through event management. I'm looking forward to joining a collaborative, creative development team.
" />
    </div>
  </div>

  )
}

export default About;
