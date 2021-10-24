import React from 'react'
import { Form, Formik } from 'formik'
import Wrapper from '../components/wrapper'
import InputField from '../components/InputField'
import { Box, Button } from '@chakra-ui/react'
import { useRegisterMutation } from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'
import { useRouter } from 'next/router'
interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  const [, register] = useRegisterMutation()

  const router = useRouter()
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values })

          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors))
          } else if (response.data?.register.user) {
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Register
