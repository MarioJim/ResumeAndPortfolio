import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { myProfile } from 'data';
import SocialIcon from './SocialIcon';
import * as fonts from '../styles/fonts';

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
  font-weight: ${fonts.bold};
`;

const Description = styled.p`
  font-size: 1.2em;
  text-align: center;
  font-weight: ${fonts.light};
`;

const SocialIconsWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SideInfo: React.FC = () => {
  const query = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            avatarUrl(size: 400)
            bio
          }
        }
      }
    `,
  );
  const { avatarUrl, bio } = query.github.viewer;
  const { name, mail, github, linkedin } = myProfile;
  return (
    <StyledSide>
      <ProfilePicture
        src={avatarUrl}
        alt="Profile picture"
        width="200px"
        height="200px"
      />
      <Title>{name}</Title>
      <Description>{bio}</Description>
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
