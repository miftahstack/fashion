import React from 'react'
import Container from '../Container';
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
                    <Flex className={`text-white justify-between`}>
                        <div className="space-y-5">
                            <h4 className='text-white font-bold text-[30px]'>Fashion</h4>
                            <p className='text-[#8E8E8E]'>Complete your style with awesome clothes from us.</p>
                            <Flex className={`gap-x-2 text-black`}>
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
                        <div className="text-[#8E8E8E]">
                            <ul>
                                <li className='text-white'>Company</li>
                                <li>About</li>
                                <li>Contact us</li>
                                <li>Support</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="text-[#8E8E8E]">
                            <ul>
                                <li className='text-white'>Quick Link</li>
                                <li>Share Location</li>
                                <li>Orders Tracking</li>
                                <li>Size Guide</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="text-[#8E8E8E]">
                            <ul>
                                <li className='text-white'>Legal</li>
                                <li>Terms & conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Footer