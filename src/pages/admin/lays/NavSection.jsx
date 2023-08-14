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
    <Box className="sideBar" px={7}>
      <Link>
        <Home variant="Outline" />
      </Link>
      <Link>
        <Category />
      </Link>
      <Link>
        <Task />
      </Link>
      <Link>
        <Message />
      </Link>
      <Link>
        <TrendUp />
      </Link>
      <Link>
        <User />
      </Link>
      <Link>
        <Setting2 />
      </Link>
    </Box>
  );
};

export default NavSection;
