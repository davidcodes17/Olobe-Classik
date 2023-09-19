import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SignUp = () => {
  const url = "http://localhost:8080/api/v1/signup";
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Box mt={"50px"}>
      <Flex justifyContent={"center"}>
        <Box
          bg={"white"}
          p={10}
          borderRadius={40}
          boxShadow={"0px 0px 10px #ddd"}
        >
          <Text fontSize={30}>Hello User👋</Text>
          <Text fontSize={10}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            <br />
            perspiciatis quidem quibusdam, soluta doloribus reprehenderit vel
          </Text>
          <FormControl my={5}>
            <form>
              <FormLabel>Username</FormLabel>
              <Input
                required
                name="username"
                type="text"
                fontSize={12}
                borderRadius={40}
                value={form.username}
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
                placeholder="Olobe Classik User"
              />
              <FormLabel pt={3}>Email</FormLabel>
              <Input
                required
                name="email"
                borderRadius={40}
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                fontSize={12}
                placeholder="you@gmail.com"
              />
              <FormLabel pt={3}>Secrect Password</FormLabel>
              <Input
                name="password"
                required
                fontSize={12}
                borderRadius={40}
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                type="password"
                placeholder="**************"
              />
              <Flex gap={5}>
                <Button
                  type="reset"
                  mt={5}
                  //   width={"full"}
                  fontWeight={400}
                  borderRadius={40}
                  bg={"linear-gradient(45deg,tomato,darkorange);"}
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
                  bg={"linear-gradient(45deg,darkorange,tomato);"}
                  borderRadius={40}
                  width={"100%"}
                  _hover={"none"}
                  onClick={(e)=>{
                    e.preventDefault();
                    handleSignUp()
                  }}
                  color={"white"}
                >
                  Sign Up
                </Button>
              </Flex>
            </form>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
