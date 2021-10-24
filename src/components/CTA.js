import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
   // position="fixed"
    top="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink flexGrow={1} mx={2}>
      <Button width="100%" >
        OUR RETAILERS
      </Button>
    </ChakraLink>

    <ChakraLink flexGrow={1} mx={2}>
      <Button width="100%" >
        ORDER ONLINE
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" >
        OPEN A STORE
      </Button>
    </ChakraLink>

    <ChakraLink flexGrow={1} mx={2}>
      <Button width="100%" >
        REGISTER/LOGIN
      </Button>
    </ChakraLink>
  </Container>
)
