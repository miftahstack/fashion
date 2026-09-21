import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

// Img
import heroGirl from "/src/assets/heroGirl.png"
import Button from '../Button'
// Img

const HeroSection = () => {
    return (
        <>
            <Container className={`md:py-0`}>
                <div className="bg-[#F4F6F5] h-[660.5px] md:h-[638.4px] rounded-[40px]">
                    <Flex className={`flex-col  md:flex-row  md:justify-between md:p-15 pt-5 md:pt-5`} >
                        <div className="md:w-[40%] md:text-left text-center text-[36px] md:text-[70px] font-bold">
                            <p className='-rotate-2 md:w-[80%] bg-white px-5 -mx-5'>LET'S</p>
                            <p className=''>EXPLORE</p>
                            <p className='-rotate-2 bg-[#EBD96B] px-5 -mx-5'>UNIQUE </p>
                            <p className=''>CLOTHES.</p>
                            <p className='text-[20px] font-light'>Live for Influential and Innovative fashion!</p>
                            <Button className={`py-3 px-7`} text={`Shop Now`} />
                        </div>
                        <div className="">
                            <img className='scale-80 md:scale-100' src={heroGirl} alt="" />
                        </div>
                    </Flex>

                </div>
            </Container>

        </>
    )
}

export default HeroSection