import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

// React Icons
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Button from '../Button';
// React Icons

// Img
import application from '/src/assets/application.jpg';
// Img


const Application = () => {
    return (
        <>
            <Container>
                <Flex className={`items-center`}>
                    <div className="">
                        <p className='text-[60px] font-bold'>DOWNLOAD APP &
                            GET THE VOUCHER!</p>
                        <p className='text-[#797979] text-[20px] pr-100'>Get 30% off for first transaction using
                            Rondovision mobile app for now.</p>

                        <Flex className={`gap-x-5 mt-5`}>
                            <button className="bg-black px-2 py-1 text-white rounded-[7.5px]">
                                <Flex className={` items-center text-left`}>
                                    <FaApple size={`35`} />
                                    <div className="">
                                        <p className='text-[12px]'>Download on the</p>
                                        <p className='text-[20px] -mt-1.5'>AppStore</p>
                                    </div>
                                </Flex>
                            </button>
                            <button className="bg-black px-2 py-1 text-white rounded-[7.5px]">
                                <Flex className={` items-center text-left`}>
                                    <IoLogoGooglePlaystore size={`35`} />
                                    <div className="">
                                        <p className='text-[12px]'>Download on the</p>
                                        <p className='text-[20px] -mt-1.5'>AppStore</p>
                                    </div>
                                </Flex>
                            </button>
                        </Flex>


                    </div>
                    <div className="w-[60%]">
                        <img src={application} alt="" />
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default Application