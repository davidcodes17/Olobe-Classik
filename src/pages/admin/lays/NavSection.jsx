import { Box, Flex, Image } from "@chakra-ui/react";
import {
  Box1,
  Category,
  Home,
  Home2,
  Home3,
  HomeHashtag,
  HomeTrendDown,
  HomeTrendUp,
  HomeWifi,
  Message,
  Setting2,
  Settings,
  Task,
  TaskSquare,
  TrendUp,
  User,
} from "iconsax-react";
import React from "react";
import { TbHome2, TbHomeBolt, TbSettings } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo";

const NavSection = () => {
  return (
    <Box className="sideBar" bg={'whiteAlpha.100'} position={'absolute'} px={5} borderRadius={40} top={'40px'}>
      <Link>
        <Home variant="Bold" />
      </Link>
      <Link>
        <Category variant='Bold' />
      </Link>
      <Link>
        <Task variant='Bold' />
      </Link>
      <Link>
        <Message variant='Bold' />
      </Link>
      <Link>
        <TrendUp variant='Bold' />
      </Link>
      <Link>
        <User variant='Bold' />
      </Link>
      <Link>
        <Setting2 variant='Bold' />
      </Link>
    </Box>
  );
};

export default NavSection;
