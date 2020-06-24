import React from "react";
import styled from "styled-components";
import {
  Instagram,
  Github,
  LinkedinSquare
} from "@styled-icons/boxicons-logos";
import { Mail } from "@styled-icons/feather/Mail";


const MailIcon = styled(Mail)`
  color: white;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-left: 10px;
  &:hover {
    color: #4b6cc1;
  }
`;

const LinkedinSquareIcon = styled(LinkedinSquare)`
  color: white;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-left: 10px;
  &:hover {
    color: #4b6cc1;
  }
`;

const InstagramIcon = styled(Instagram)`
  color: white;
  cursor: pointer;
  width: 60px;
  height: 60px;
  margin-left: 10px;
  &:hover {
    color: #4b6cc1;
  }
`;


const GithubIcon = styled(Github)`
  color: white;
  width: 60px;
  height: 60px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #4b6cc1;
  }
`;

const Contact = () => {
  return (
    <div className="contact-icon">
      <a href="https://www.linkedin.com/in/sebastian-e-vogel/">
        <LinkedinSquareIcon />
      </a>
      <a href="https://www.github.com/sebastian-e-vogel">
        <GithubIcon />
      </a>
      <a href="mailito:sebastian.e.vogel@gmail.com">
        <MailIcon />
      </a>
      <a href="http://www.instagram.com/voogelsebastian">
        <InstagramIcon />
      </a>
    </div>
  );
};
export default Contact;
