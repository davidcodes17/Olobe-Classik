import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'

const SignIn = () => {
  return (
    <Box mt={"80px"}>
      <Flex justifyContent={"center"}>
        <Box
          bg={"white"}
          p={10}
          borderRadius={20}
          boxShadow={"0px 0px 10px #ddd"}
        >
          <Text fontSize={30}>Hello User👋</Text>
          <Text fontSize={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla{" "}
            <br />
            perspiciatis quidem quibusdam, soluta doloribus reprehenderit vel
          </Text>
          <FormControl my={5}>
            <form action="">
              <FormLabel pt={3}>Email</FormLabel>
              <Input
                required
                name="email"
                type="email"
                fontSize={12}
                placeholder="you@gmail.com"
              />
              <FormLabel pt={3}>Secrect Password</FormLabel>
              <Input
                name="password"
                required
                fontSize={12}
                type="password"
                placeholder="**************"
              />
              <Flex gap={5}>
                <Button
                  type="reset"
                  mt={5}
                  //   width={"full"}
                  fontWeight={400}
                  bg={"darkorange"}
                  width={"100%"}
                  _hover={"none"}
                  color={"white"}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  mt={5}
                  //   width={"full"}
                  fontWeight={400}
                  bg={"darkorange"}
                  width={"100%"}
                  _hover={"none"}
                  color={"white"}
                >
                  Sign In
                </Button>
              </Flex>
            </form>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  )
}

export default SignIn