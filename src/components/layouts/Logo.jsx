import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

// Img
import amazon from "/src/assets/logos/amazon.png";
import h_m from "/src/assets/logos/h_m.png";
import lacoste from "/src/assets/logos/lacoste.png";
import levis from "/src/assets/logos/levis.png";
import obey from "/src/assets/logos/obey.png";
import shopify from "/src/assets/logos/shopify.png";
// Img

const Logo = () => {
  return (
    <>
    <div className="bg-[#EBD96B] py-5 my-25">

      <Container>
        <Flex className={`justify-evenly`}>
          <img src={amazon} alt="" />
          <img src={h_m} alt="" />
          <img src={lacoste} alt="" />
          <img src={levis} alt="" />
          <img src={obey} alt="" />
          <img src={shopify} alt="" />
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Logo