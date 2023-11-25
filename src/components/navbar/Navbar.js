// Navbar.js
'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import classes from "../navbar/Navbar.module.css";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={classes.header}>
      <nav className={classes.navbar}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}>
            <Link href="/">brands</Link>
            <ul className={classes.dropdown}>
              <li><Link href="/">BitFins</Link></li>
              <li><Link href="/">$HOSKY</Link></li>
              <li><Link href="/">CryptoRaggies</Link></li>
              <li><Link href="/">Danketsu</Link></li>
              <li><Link href="/">Vudu Brigada</Link></li>
              <li><Link href="/">Pendulum</Link></li>
              <li><Link href="/">Future Fest</Link></li>
            </ul>
          </li>
          <li className={classes.nav_item}>
            <Link href="/about">shop</Link>
            <ul className={classes.dropdown2}>
              <div>
                <li><h1 style={{textAlign:"center"}}>Home</h1></li>
              <li><Link href="/">BitFins</Link></li>
              <li><Link href="/">$HOSKY</Link></li>
              <li><Link href="/">CryptoRaggies</Link></li>
              <li><Link href="/">Danketsu</Link></li>
              <li><Link href="/">Vudu Brigada</Link></li>
              <li><Link href="/">Pendulum</Link></li>
              <li><Link href="/">Future Fest</Link></li>
              </div>
              <div>
                <li><h1 style={{textAlign:"center"}}>WELCOME</h1></li>
              <li><Link href="/">BitFins</Link></li>
              <li><Link href="/">$HOSKY</Link></li>
              <li><Link href="/">CryptoRaggies</Link></li>
              <li><Link href="/">Danketsu</Link></li>
              <li><Link href="/">Vudu Brigada</Link></li>
             
              </div>
            </ul>
          </li>
          <li className={classes.nav_item}>
            <Link href="/services">premium</Link>
          </li>
          <li className={classes.nav_item}>
            <Link href="/contact">gift card</Link>
          </li>
        </ul>
      </nav>

      <div className={classes.menue}>
        {!toggle ? (
          <TiThMenu onClick={() => setToggle(true)} />
        ) : (
          <IoClose onClick={() => setToggle(false)} />
        )}
      </div>

      <div>
        <Image src="/logo.png" width={100} height={100} alt="logo" priority={true} className={classes.Image} />
      </div>

      <nav className={classes.mobileview_view} style={{ top: toggle ? "10%" : "100%" }}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}>
            <Link href="/">brands</Link>
          </li>
          <li className={classes.nav_item}>
            <Link href="/about">shop</Link>
          </li>
          <li className={classes.nav_item}>
            <Link href="/services">premium</Link>
          </li>
          <li className={classes.nav_item}>
            <Link href="/contact">gift card</Link>
          </li>
          <li className={classes.nav_item} style={{gap:"0.5rem" ,display:"flex"}}> 
            <FaInstagramSquare></FaInstagramSquare>
            <FaTiktok></FaTiktok>
            <IoMdPerson></IoMdPerson>
          </li>
        </ul>
      </nav>

      <nav className={classes.icons}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}>
            <Link href="/">become an affiliate</Link>
          </li>
          <li className={classes.nav_item}>
            <FaTwitter></FaTwitter>
          </li>
          <li className={classes.nav_item}>
            <FaInstagramSquare></FaInstagramSquare>
          </li>
          <li className={classes.nav_item}>
            <FaTiktok></FaTiktok>
          </li>
          <li className={classes.nav_item}>
            <IoMdPerson></IoMdPerson>
          </li>
          <li className={classes.nav_item}>
            <FiSearch></FiSearch>
          </li>
          <li className={classes.nav_item} >
            <FaShoppingCart></FaShoppingCart>
          </li>
        </ul>
      </nav>
      <nav className={classes.mobile_icons}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_item}>
            <FiSearch></FiSearch>
          </li>
          <li className={classes.nav_item} >
            <FaShoppingCart></FaShoppingCart>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
