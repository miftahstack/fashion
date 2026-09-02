import React from 'react'
import Container from '../container'
import Button from '../Button'
import Flex from '../Flex'

const JoinCommunity = () => {
    return (
        <>
            <div className="bg-[#E5C643] py-25">
                <Container>
                    <Flex className={`justify-center items-center text-center flex-col`}>
                        <p className='text-[60px] font-bold text-white'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</p>
                        <p className='text-[24px] text-white'>Type your email down below and be young wild generation</p>

                        <div className="bg-white w-100.5 rounded-[5px] py-1 mt-5">
                            <input type="text" className=' py-2 pl-3' placeholder='Add your email here' />
                            <Button className={`uppercase mr-1`} text={`Send`} />
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default JoinCommunity