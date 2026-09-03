import React from 'react'
import Container from '../container';
import Flex from '../Flex'
import Button from '../Button';

// React Icons
import { IoStar } from "react-icons/io5";
// React Icons

// Img
import girl from '/src/assets/girl.png';
// Img

const Shop = () => {
  return (
    <>
      <div className="bg-linear-to-r from-[#E0C340] to-[#F9DF56] ">
        <Container className={`my-25`}>
          <Flex className={`items-center`}>
            <div className="w-[60%] relative">
              <img className='scale-100 ' src={girl} alt="" />
              <IoStar className=' opacity-60 rotate-45 absolute top-10 left-30' fill='white' size={`30px`} />
              <IoStar className=' opacity-60 rotate-67 absolute top-20 right-45' fill='white' size={`30px`} />
              <IoStar className=' opacity-60 rotate-24 absolute bottom-30 right-50' fill='white' size={`30px`} />
              <IoStar className=' opacity-60 rotate-57 absolute bottom-50 left-30' fill='white' size={`30px`} />
            </div>
            <div className=" text-[60px] font-bold">
              <p className='-rotate-2 w-[50%] uppercase bg-white px-5 -mx-5'>Payday</p>
              <p className='uppercase'>Sale now</p>
              <p className=' text-[20px]'>Spend minimal $100 get 30% off
                voucher code for your next purchase </p>
              <p className='text-[20px] font-light'>1 June - 10 June 2021
                *Terms & Conditions apply</p>
              <Button className={`uppercase font-normal`} text={`Shop Now`} />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Shop