import React from 'react';
import styled from '@emotion/styled';

import theme from '../styles/theme';

const ItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  margin: 0 auto 24px auto;
  border-radius: 8px;
  color: black;
  background-color: #f5f5f5;
  width: 90%;
  text-decoration: none;
`;

const Image = styled.img`
  display: block;
  margin: 6px;
  height: 25vw;
  max-height: 240px;
  border-radius: 4px;

  @media (max-width: 820px) {
    height: auto;
    max-height: 33vw;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-weight: ${theme.fonts.regular};
  font-size: 1.3em;
`;

const Info = styled.p`
  text-align: center;
  font-weight: ${theme.fonts.light};
  padding: 0 22px;
`;

const Tags = styled.ul`
  display: inline-flex;
  align-items: center;
  margin: 4px;
`;

const Tag = styled.li`
  display: inline-block;
  padding: 0.3em 0.9em;
  margin: 0.2em 0.5em;
  background-color: #e8f1fa;
  border-radius: 3px;
  font-size: 0.8em;
  font-weight: ${theme.fonts.light};
  text-align: center;

  @media (max-width: 420px) {
    &:nth-of-type(4) {
      display: none;
    }
  }
`;

const OnlineDemoBtn = styled.a`
  position: absolute;
  top: -10px;
  right: calc(5% - 20px);
  padding: 14px 20px;
  background: #2f9366;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 1.2em;

  @media (max-width: 700px) {
    padding: 2vw 3vw;
  }
`;

interface Props {
  image: string;
  title: string;
  owner: string;
  description: string;
  url: string;
  website?: string;
  tags: string[];
}

const ProjectItem: React.FC<Props> = ({
  image,
  title,
  owner,
  description,
  url,
  website,
  tags,
}) => (
  <div style={{ position: 'relative' }}>
    <ItemWrapper href={url}>
      <Image src={image} alt={`${title} repo image`} />
      <Title>
        {owner && `${owner} / `}
        {title}
      </Title>
      <Info>{description}</Info>
      <Tags>
        {tags.map((tag, i) => (
          <Tag key={`${title}-${i}`}>{tag}</Tag>
        ))}
      </Tags>
    </ItemWrapper>
    {website && (
      <OnlineDemoBtn href={website}>
        Check it out
        <br /> online!
      </OnlineDemoBtn>
    )}
  </div>
);

export default ProjectItem;
