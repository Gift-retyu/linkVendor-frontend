import React from 'react'
import { Form, Formik } from 'formik'
import Wrapper from '../components/wrapper'
import InputField from '../components/InputField'
import { Box, Button } from '@chakra-ui/react'
import { useLoginMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'
interface LoginProps {}

const Login: React.FC<{}> = ({}) => {
  const [, login] = useLoginMutation()

  const router = useRouter()
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({ options: values })

          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors))
          } else if (response.data?.login.user) {
            router.push('/')
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField
              label="Username"
              name="username"
              placeholder="username"
            />
            <Box mt={4}>
              <InputField
                label="Password"
                name="password"
                placeholder="password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              isLoading={isSubmitting}
              colorScheme="whatsapp"
              type="submit"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Login
