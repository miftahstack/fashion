// Own
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'
// Own

// Img
import logo from '/logo.svg'
// Img

// React Icons
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
// React Icons


const Menu = () => {
  const [bar, setBar] = useState(false)

  return (
    <>
      {/* Mobile Device Only */}
      <div className="px-5 mt-2 mb-5 md:hidden">
        <Flex className={`justify-between items-center`}>
          <img src={logo} alt="" />
          <FaBars size={22} onClick={() => setBar(!bar)} />
        </Flex>

        {bar && (
          <ul className='uppercase my-2 py-5 w-full bg-[#E6C744] text-white text-center text-[16.5px] flex flex-col items-center gap-y-5'>
            <li>Catalogue</li>
            <li>Fashion</li>
            <li>Favourite</li>
            <li>Lifestyle</li>
          </ul>
        )}
      </div>
      {/* Mobile Device Only */}

      <Container className={`hidden md:block  my-5`}>
        <Flex className={`justify-between`}>
          <div className="">
            <img src={logo} alt="heroGirl" />
          </div>
          <div className="flex gap-x-7">
            <ul className='uppercase text-[16.5px] flex items-center gap-x-5'>
              <li>Catalogue</li>
              <li>Fashion</li>
              <li>Favourite</li>
              <li>Lifestyle</li>
            </ul>
            <Button text={`Sign UP`} />
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default Menu