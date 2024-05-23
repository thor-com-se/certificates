import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const sections = [
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Contact Me",
    id: "contactme",
  },
];

const Header = () => {
  const boxRef = useRef(null);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (boxRef.current) {
      const scrollGreaterThanZero = currentScrollY > 0;
      const scrollGreaterThanPrevious = currentScrollY > prevScrollY.current;
      if (scrollGreaterThanZero && scrollGreaterThanPrevious) {
        boxRef.current.style.transform = "translateY(-200px)";
      } else {
        boxRef.current.style.transform = "translateY(0)";
      }
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(link => {
                return (
                  <a key={link.url} target="_blank" href={link.url}>
                    <FontAwesomeIcon icon={link.icon} size="2x" />
                  </a>
                )
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {sections.map(link => {
                return (
                  <a key={link.id} target="_blank" onClick={handleClick(link.id)} style={{cursor: "pointer"}}>
                    {link.title}
                  </a>
                )
              })}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
