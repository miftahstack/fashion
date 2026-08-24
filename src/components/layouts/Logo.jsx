import React from 'react'
import Container from '../container'
import Flex from '../Flex'

// Img
import amazon from "/src/assets/logos/amazon.png";
import h_m from "/src/assets/logos/amazon.png";
import lacoste from "/src/assets/logos/amazon.png";
import levis from "/src/assets/logos/amazon.png";
import obey from "/src/assets/logos/amazon.png";
import shopify from "/src/assets/logos/amazon.png";
// Img

const Logo = () => {
  return (
    <>
      <Container>
        <Flex>
          <img src={amazon} alt="" />
          <img src={h_m} alt="" />
          <img src={lacoste} alt="" />
          <img src={levis} alt="" />
          <img src={obey} alt="" />
          <img src={shopify} alt="" />
        </Flex>
      </Container>
    </>
  )
}

export default Logo