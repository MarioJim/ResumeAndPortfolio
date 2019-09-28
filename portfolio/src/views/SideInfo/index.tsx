import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin } from '@fortawesome/free-solid-svg-icons';

import { myProfile } from 'data';
import SocialIcon from '../../components/SocialIcon';

import { StyledSide, ProfilePicture, Title, Description, SocialIconsWrapper } from './styles';

const SideInfo: React.FC = () => {
  const showProfilePic = false;
  const { name, description, socialLinks } = myProfile;
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
