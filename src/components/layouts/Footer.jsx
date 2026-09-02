import React from 'react'
import Container from '../container';
import Flex from '../Flex'

// React Icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// React Icons

const Footer = () => {
    return (
        <>
            <div className="bg-black">
                <Container className={`py-25`}>
                    <Flex>
                        <div className="space-y-5">
                            <h4 className='text-white font-bold text-[30px]'>Fashion</h4>
                            <p className='text-[#8E8E8E]'>Complete your style with awesome clothes from us.</p>
                            <Flex className={`gap-x-2`}>
                                <div className="bg-[#EBD96B] p-2 rounded-[10px]">
                                    <FaFacebookF />
                                </div>
                                <div className="bg-[#EBD96B] p-2 rounded-[10px]">
                                    <FaInstagram />
                                </div>
                                <div className="bg-[#EBD96B] p-2 rounded-[10px]">
                                    <FaLinkedinIn />
                                </div>
                                <div className="bg-[#EBD96B] p-2 rounded-[10px]">
                                    <FaXTwitter />
                                </div>
                            </Flex>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Footer