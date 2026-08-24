import logo from '/logo.svg'
import Container from '../container'
import Flex from '../Flex'
import Button from '../Button'


const Menu = () => {
  return (
    <>
      <Container className={`my-5`}>
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
            <Button text={`Sign UP`}/>
        </div>
       </Flex>
      </Container>
    </>
  )
}

export default Menu