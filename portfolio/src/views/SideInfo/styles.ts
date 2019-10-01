import styled from 'styled-components';
import * as fonts from '../../styles/fonts';

export const StyledSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const ProfilePicture = styled.img`
  width: 200px;
  height: 200px;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 32px;
`;

export const Description = styled.h3`
  font-size: 18px;
  font-weight: ${fonts.light};
`;

export const SocialIconsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
