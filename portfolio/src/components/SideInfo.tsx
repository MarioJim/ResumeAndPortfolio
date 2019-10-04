import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { icons } from 'data';
import SocialIcon from './SocialIcon';
import * as fonts from '../styles/fonts';

const StyledSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
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
  const { profile, placeholderImage } = useStaticQuery(
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
        placeholderImage: file(relativePath: { eq: "profilepic.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  const { name, description, socialLinks } = profile;
  icons.forEach(icon => library.add(icon));
  return (
    <StyledSide>
      <Img
        style={{ width: '200px', height: '200px', borderRadius: '50%', }}
        fluid={placeholderImage.childImageSharp.fluid}
      />
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
