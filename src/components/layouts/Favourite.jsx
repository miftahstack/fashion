import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaArrowRightLong } from 'react-icons/fa6'

const Favourite = () => {
    return (
        <>
            <Container className={`py-25`}>
                <h3 className='text-[48px] uppercase font-bold mb-15'>Young’s Favourite</h3>
                <Flex className={`gap-x-10`}>
                    <div className="">
                        <img src="src/assets/favgTwo.png" alt="" />
                       <Flex className={`justify-between items-center`}>
                        <div className="">
                            <p className='text-[26px]'>Trend on instagram</p>
                            <p className='text-[#797979] text-[20px]'>Explore Now!</p>
                        </div>
                        <div className="text-[#797979] text-[32px]">
                            <FaArrowRightLong />
                        </div>
                    </Flex>
                    </div>
                    <div className="">
                        <img src="src/assets/favgOne.png" alt="" />
                        <p className='text-[24px] '>All Under $40</p>
                        <p className='text-[18px] text-[#7F7F7F]'>Explore Now!</p>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Favourite