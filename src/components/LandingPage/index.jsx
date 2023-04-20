import { Link } from "react-router-dom";
import { Drawer, Button, Tabs, ActionIcon, createStyles, Container, Title, Text, rem } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { filterCourse, getCourses } from "../../store/actions";
import { useEffect } from "react";
import { useDisclosure } from '@mantine/hooks';
import { IconSquareChevronRight } from '@tabler/icons-react';

//-*******************************************************************************************************
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));
//-*******************************************************************************************************

const LandingPage = () => {
  const { course } = useSelector((state) => state)
  const dispatch = useDispatch();

  //-*******************************************************************************************************
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  //-*******************************************************************************************************

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <>
      <ActionIcon color="blue" size="xl" variant="subtle" onClick={open}>
        <IconSquareChevronRight size="3rem" />
      </ActionIcon>
      <Drawer opened={opened} onClose={close}>
        <Drawer.Title style={{ fontSize: "2em", marginBottom: '10px' }}>My Courses</Drawer.Title>
        <Tabs defaultValue="courses" orientation="vertical" variant="pills" radius="md">
          <Tabs.List>
            {
              course.map((course, idx) => {
                return (
                  <Tabs.Tab
                    key={idx}
                    component={Link} to="/courseLanding"
                    value={course.courseName}
                    onClick={() => dispatch(filterCourse(course._id))}
                  >
                    {course.courseName}
                  </Tabs.Tab>
                );
              })
            }
          </Tabs.List>
        </Tabs>
      </Drawer>
      {/* //-******************************************************************************************************* */}
      <div className={classes.root}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Unlock Your{' '}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: 'pink', to: 'yellow' }}
                >
                  Potential
                </Text>{' '}
                with LearnHub: Empower, Educate, Excel!
              </Title>

              <Text className={classes.description} mt={30}>
                Our mission at LearnHub is to provide free and accessible online learning for all, fostering lifelong learning, empowering individuals to acquire knowledge, skills, and opportunities to thrive in a changing world, and promoting inclusivity, diversity, and personal growth.
              </Text>

              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
                size="xl"
                className={classes.control}
                mt={40}
                component={Link}
                to="/courses"
              >
                Explore Courses
              </Button>
            </div>
          </div>
        </Container>
      </div>
      {/* //-******************************************************************************************************* */}
    </>
  )
}

export default LandingPage;
