import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:xiaqianz1999@gmail.com">xiaqianz1999@gmail.com</LinkItem>
        </LinkColumn>

        <SocialIconsContainer>
          {/* <CompanyContainer>
            <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer> */}

          <SocialContainer>
            <SocialIcons href="https://github.com/xiaqian1999">
              <AiFillGithub size="3rem" />
            </SocialIcons>

            <SocialIcons href="https://www.linkedin.com/in/xiaqianzhang/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>

          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
