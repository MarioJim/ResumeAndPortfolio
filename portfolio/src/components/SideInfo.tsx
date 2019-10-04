import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGrin, fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import SocialIcon from './SocialIcon';
import * as fonts from '../styles/fonts';

const StyledSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 32px;
`;

const Description = styled.h3`
  font-size: 18px;
  font-weight: ${fonts.light};
`;

const SocialIconsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SideInfo: React.FC = () => {
  const showProfilePic = false;
  const { profile } = useStaticQuery(
    graphql`
      query {
        profile {
          name
          description
          socialLinks {
            title
            link
            icon {
              prefix
              iconName
            }
          }
        }
      }
    `
  );
  const { name, description, socialLinks } = profile;
  library.add(fas, fab);
  return (
    <StyledSide>
      { showProfilePic ?
        <ProfilePicture /> :
        <FontAwesomeIcon icon={faGrin} size="10x" />}
      <Title>{name}</Title>
      <Description>{description}</Description>
      <SocialIconsWrapper>
        {socialLinks.map((link, key) => (
          <SocialIcon socialLink={link} key={key} />
        ))}
      </SocialIconsWrapper>
    </StyledSide>
  );
};

export default SideInfo;
