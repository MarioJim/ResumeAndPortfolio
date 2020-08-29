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

const ProfilePhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 2em;
  font-weight: ${fonts.bold};
`;

const Description = styled.h3`
  font-size: 1.2em;
  text-align: center;
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
            avatarUrl
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
      <ProfilePhoto src={avatarUrl} />
      <Title>{name}</Title>
      <Description>{bio}</Description>
      <SocialIconsWrapper>
        <SocialIcon
          title="Email"
          link_protocol="mailto:"
          link_base={mail}
          icon={FaEnvelope}
        />
        <SocialIcon
          title="GitHub"
          link_protocol="https://"
          link_base={`github.com/${github}/`}
          icon={FaGithub}
        />
        <SocialIcon
          title="LinkedIn"
          link_protocol="https://"
          link_base={`linkedin.com/in/${linkedin}`}
          icon={FaLinkedin}
        />
      </SocialIconsWrapper>
    </StyledSide>
  );
};

export default SideInfo;
