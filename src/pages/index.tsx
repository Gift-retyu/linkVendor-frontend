import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
  } from '@chakra-ui/react'
  import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
  import { Hero } from '../components/Hero'
  import { Container } from '../components/Container'
  import { Main } from '../components/Main'
  import { DarkModeSwitch } from '../components/DarkModeSwitch'
  import { CTA } from '../components/CTA'
  import Footer from '../components/Footer'
  import {PaginationComponent} from '../components/PaginatorGrid'

import NavBar from '../components/NavBar'
  
  const Index = () => (
    
     <>
     <NavBar/>
     <p></p>
     <Hero/>
     <p></p>
     <Main/>
     <p></p>
     <Footer/>
     {/* <PaginationComponent/> */}
     </>
      
  )
  
  export default Index