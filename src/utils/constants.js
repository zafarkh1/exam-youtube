import React from "react";

import { AiFillHome, AiOutlineStar } from "react-icons/ai";
import { MdLocalFireDepartment } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { IoIosAlbums, IoMdFolder, IoIosTimer } from "react-icons/io";
import { IoGameControllerSharp } from "react-icons/io5";
import { TfiAlarmClock } from "react-icons/tfi";
import { MdFavorite } from "react-icons/md";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
  {
    name: "Subscriptions",
    icon: <IoIosAlbums />,
    type: "category",
    divider: true,
  },
  { name: "Library", icon: <IoMdFolder />, type: "category" },
  { name: "History", icon: <IoIosTimer />, type: "category" },
  { name: "Watch later", icon: <TfiAlarmClock />, type: "category" },
  { name: "Favourites", icon: <AiOutlineStar />, type: "category" },
  {
    name: "Liked videos",
    icon: <MdFavorite />,
    type: "category",
  },
  { name: "Music", icon: <CgMusicNote />, type: "category" },
  {
    name: "Gaming",
    icon: <IoGameControllerSharp />,
    type: "category",
    divider: true,
  },
];
