import './App.css';
import Effect from './Effect';
import WebFont from 'webfontloader';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Mission from './Mission';
import Team from './Team';
import { Box, Button, Image, Heading, Text, Flex } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';

const LogoButton = styled.div`
  font-family: 'Bungee Inline';
  font-size: 3vh;
  color: white;
  user-select: none;
  cursor: pointer;
  padding: 30px;
  margin-left: 8%;
  background-color: rgba(26, 25, 28, 0.15);
  backdrop-filter: blur(2px);
  display: inline-block;
`

const Header = styled.div`
  position: sticky;
  top: 0;
  /* width: 100%; */
  z-index: 999;
  /* background-color: rgba(255, 255, 255, 0.01); */
`

const App = () => {

  return (
    <div className="App">
      <Header>
        <LogoButton>Out<br />block</LogoButton>
      </Header>
      <Flex flexDirection="column">
        <Box sx={{ height: '100vh' }}>
          <Effect />
          <Flex sx={{ justifyContent: 'center', bottom: '10%', alignSelf: 'flex-end' }}>
            <FontAwesomeIcon sx={{ color: '#3fff00' }} color="#3fff00" icon={faCoffee} />
            {/* <Button
              onClick={(e) => { window.open('https://twitter.com/realoutblock').focus() }}
              variant='outline'
              color="#3fff00"
              sx={{
                backgroundColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderRadius: 0,
                borderColor: '# 3fff00',
                fontSize: '30px',
                fontFamily: 'Bungee',
                transform: 'matrix(1, -0.15, 0, 1, 0, -10)',
                textShadow: '0px 0px 10px #3fff00',
                boxShadow: '0px 0px 10px #3fff00',
                shadowBlur: 30,
                position: 'absolute',
                cursor: 'pointer',
                userSelect: 'none',
                bottom: '20vh'
              }} >
              Get updates
            </Button> */}
          </Flex>
        </Box>
      </Flex >
      <Flex sx={{ height: '100vh', width: '100vw' }}>
        <Mission />
      </Flex>
      <Flex sx={{ height: '100vh', width: '100vw', margin: '0 auto' }}>
        <Team />
      </Flex>
      <Flex sx={{ height: '20vh', width: '100vw' }} >
        <Footer />
      </Flex>
    </div >
  );
}

export default App;
