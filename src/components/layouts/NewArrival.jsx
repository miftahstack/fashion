import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaArrowRightLong } from "react-icons/fa6";

// Img
import cardOne from '/src/assets/cardOne.png';
import cardTwo from '/src/assets/cardTwo.png';
import cardThree from '/src/assets/cardThree.png';
// Img

const NewArrival = () => {
    return (<>
        <Container className={`my-25`}>
            <h3 className='text-[48px] uppercase font-bold mb-15'>New Arrival</h3>
            <Flex className={`gap-x-20`}>
                <div className="">
                    <div className="">
                        <img src={cardOne} alt="" />
                    </div>
                    <Flex className={`justify-between items-center`}>
                        <div className="">
                            <p className='text-[26px]'>Hoodies & Sweetshirt</p>
                            <p className='text-[#797979] text-[20px]'>Explore Now!</p>
                        </div>
                        <div className="text-[#797979] text-[32px]">
                            <FaArrowRightLong />
                        </div>
                    </Flex>
                </div>
                <div className="">
                    <div className="">
                        <img src={cardTwo} alt="" />
                    </div>
                    <Flex className={`justify-between items-center`}>
                        <div className="">
                            <p className='text-[26px]'>Hoodies & Sweetshirt</p>
                            <p className='text-[#797979] text-[20px]'>Explore Now!</p>
                        </div>
                        <div className="text-[#797979] text-[32px]">
                            <FaArrowRightLong />
                        </div>
                    </Flex>
                </div>
                <div className="">
                    <div className="">
                        <img src={cardThree} alt="" />
                    </div>
                    <Flex className={`justify-between items-center`}>
                        <div className="">
                            <p className='text-[26px]'>Hoodies & Sweetshirt</p>
                            <p className='text-[#797979] text-[20px]'>Explore Now!</p>
                        </div>
                        <div className="text-[#797979] text-[32px]">
                            <FaArrowRightLong />
                        </div>
                    </Flex>
                </div>


            </Flex>
        </Container>
    </>)
}

export default NewArrival