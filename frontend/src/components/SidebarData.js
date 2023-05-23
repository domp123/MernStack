import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-text",
  },
  {
    title: "About Us",
    path: "/AboutUs",
    icon: <IoIcons.IoMdPeople />,
    cName: "side-text",
  },
  {
    title: "Products/Services",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "side-text",
  },

  {
    title: "Contact US",
    path: "/Contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "side-text",
  },
];
