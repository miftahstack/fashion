import React from 'react'
import Container from '../container'
import Flex from '../Flex'

// Img
import heroGirl from "/src/assets/heroGirl.png"
import Button from '../Button'
// Img

const HeroSection = () => {
    return (
        <>
            <Container>
                <div className="bg-[#F4F6F5] h-[638.4px] rounded-[40px]">
                <Flex className={`justify-between p-15`} >
                    <div className="w-[40%] text-[70px] font-bold">
                        <p className='-rotate-2 w-[80%] bg-white px-5 -mx-5'>LET'S</p>
                        <p className=''>EXPLORE</p>
                        <p className='-rotate-2 bg-[#EBD96B] px-5 -mx-5'>UNIQUE </p>
                        <p className=''>CLOTHES.</p>
                        <p className='text-[20px] font-light'>Live for Influential and Innovative fashion!</p>
                        <Button className={`py-3 px-7`} text={`Shop Now`}/>
                    </div>
                    <div className="">
                        <img className='' src={heroGirl} alt="" />
                    </div>
                </Flex>

                </div>
            </Container>

        </>
    )
}

export default HeroSection