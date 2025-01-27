'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from "next/link";
export default function Navbar_com() {
  

  return (
    <Navbar>
    <NavbarBrand>
      
     <Link href="/"><p className="font-bold text-inherit">My Blog</p></Link> 
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          blogs
        </Link>
      </NavbarItem>
      <NavbarItem >
        <Link href="#" aria-current="page">
          About
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          contact
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
}
