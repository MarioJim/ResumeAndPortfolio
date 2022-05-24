import React from 'react';
import { myProfile } from 'data';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from '@emotion/styled';

import SocialIcon from './SocialIcon';
import { SideInfoRequest } from '../lib/sideinfo-request';
import theme from '../styles/theme';

const StyledSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 2em;
  font-weight: ${theme.fonts.bold};
`;

const Description = styled.p`
  font-size: 1.2em;
  text-align: center;
  font-weight: ${theme.fonts.light};
`;

const SocialIconsWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface SideInfoProps {
  req: SideInfoRequest;
}

const SideInfo = ({ req }: SideInfoProps) => {
  const { name, mail, github, linkedin } = myProfile;
  return (
    <StyledSide>
      <ProfilePicture
        src={req.avatarUrl}
        alt="Profile picture"
        width="200px"
        height="200px"
      />
      <Title>{name}</Title>
      <Description>{req.bio}</Description>
      <SocialIconsWrapper>
        <SocialIcon title="Email" protocol="mailto:" link={mail}>
          <FaEnvelope size="2.3em" />
        </SocialIcon>
        <SocialIcon title="GitHub" protocol="https://" link={github}>
          <FaGithub size="2.3em" />
        </SocialIcon>
        <SocialIcon title="LinkedIn" protocol="https://" link={linkedin}>
          <FaLinkedin size="2.3em" />
        </SocialIcon>
      </SocialIconsWrapper>
    </StyledSide>
  );
};

export default SideInfo;
