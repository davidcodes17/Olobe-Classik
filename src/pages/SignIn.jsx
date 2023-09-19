import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SignIn = () => {
  const url = "http://localhost:8080/api/v1/login";
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    })
      .then((res) => {
        res.json();
        console.log(res.status)
        if(res.status==200){
          console.log("mem")
        }
        else{
          console.log("first")
        }
      })
      .then((data) => {
        localStorage.setItem(1,data);
        console.log(data.username);
      }).catch((err)=>{
        // console.log(err)
      });
  };
  return (
    <Box mt={"80px"}>
      <Flex justifyContent={"center"}>
        <Box
          bg={"white"}
          p={10}
          borderRadius={40}
          boxShadow={"0px 0px 10px #ddd"}
        >
          <Text fontSize={30}>Hello User👋</Text>
          <Text fontSize={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla{" "}
            <br />
            perspiciatis quidem quibusdam, soluta doloribus reprehenderit vel
          </Text>
          <FormControl my={5} isRequired>
            <form>
              <FormLabel pt={3}>Email</FormLabel>
              <Input
                borderRadius={40}
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                fontSize={12}
                placeholder="you@gmail.com"
              />
              <FormControl />
              <FormControl isRequired>
              <FormLabel pt={3}>Secrect Password</FormLabel>
              <Input
                name="password"
                borderRadius={40}
                minLength={10}
                fontSize={12}
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                type="password"
                placeholder="**************"
                />
                </FormControl>
              <Flex gap={5}>
                <Button
                  type="reset"
                  mt={5}
                  //   width={"full"}
                  fontWeight={400}
                  bg={"linear-gradient(45deg,darkorange,tomato);"}
                  width={"100%"}
                  _hover={"none"}
                borderRadius={40}
                color={"white"}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  mt={5}
                  //   width={"full"}
                  fontWeight={400}
                  bg={"linear-gradient(45deg,darkorange,tomato);"}
                  borderRadius={40}
                  width={"100%"}
                  onClick={(e)=>{
                    e.preventDefault();
                    handleSignIn();
                  }}
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