import * as React from "react";
import "./Swipt.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars } from "react-icons/fa";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import { BsTruckFlatbed } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import TextDropdown from "../DropdownText/TextDropdown";
export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        <h2 className="Eg-grocery-nav-heading">EG SHOP GROCERY </h2>
      </List>
      <Divider />
      <List>
        <TextDropdown
          nmLogin="true"
          lgItem="login_dropdown"
          className="login_collabs"
          text_className=""
          drop_text="Talha"
        />
      </List>
      <NavbarDropdown
        slider_dropdown="slider-dropdown"
        dropLink="Shop"
        dropDownData={[
          { item: "Product", href_link: "product" },
          {
            item: "Product Sidebar",
            href_link: "productsidebar",
          },
        ]}
      />
      <List>
        <NavbarDropdown
          slider_dropdown="slider-dropdown"
          dropLink="Pages"
          dropDownData={[
            { item: "About", href_link: "about" },
            { item: "Cart", href_link: "cart" },
            { item: "Checkout", href_link: "checkout" },
            { item: "My Account", href_link: "acount" },
            { item: "Register", href_link: "register" },
            { item: "Login", href_link: "login" },
            { item: "FAQ", href_link: "faq" },
            { item: "Error", href_link: "error" },
          ]}
        />
      </List>
      <NavbarDropdown
        slider_dropdown="slider-dropdown"
        dropLink="Blogs"
        dropDownData={[
          { item: "Blog Grid", href_link: "blogGrid" },
          { item: "Blog Standard", href_link: "blogStandard" },
          { item: "Blog Details", href_link: "blogDetails" },
        ]}
      />

      <List>
        <a className="nav-drop" href="/contact">
          Contact
        </a>
      </List>
      <div className="nav-pera-touch">
        <h3>Get in touch</h3>
        <p>541 Melville Ave, Palo Alto, CA 94301</p>
        <p>connect.us@gmail.com</p>
        <div className="logo-nav-icons">
          <span className="left-icon">
            <FaFacebookF />
          </span>
          <span className="left-icon">
            <FaWhatsapp />
          </span>
          <span className="left-icon">
            <FiInstagram />
          </span>
          <span className="left-icon">
            <FiTwitter />
          </span>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="btn-faBar" onClick={toggleDrawer(anchor, true)}>
            {" "}
            <FaBars />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
