import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profilepic.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );
  const { name, description, socialLinks } = myProfile;
  return (
    <StyledSide>
      <Img
        style={{ width: '200px', height: '200px', borderRadius: '50%' }}
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
