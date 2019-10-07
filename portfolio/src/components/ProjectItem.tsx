import React from 'react';
import styled from 'styled-components';
import * as fonts from '../styles/fonts';

const ItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  margin: 0 auto 24px auto;
  border-radius: 8px;
  color: black;
  background-color: #fafafa;
  width: 90%;
  text-decoration: none;
`;

const Image = styled.img`
  display: block;
  margin: 4px;
  height: 25vw;
  max-height: 250px;
  border-radius: 4px;
  @media (max-width: 820px) {
    height: auto;
    max-height: 33vw;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 1.3em;
`;

const Info = styled.p`
  text-align: center;
  font-weight: ${fonts.light};
`;

const Tags = styled.ul`
  display: inline-flex;
  align-items: center;
  height: 30px;
  margin: 4px;
`;

const Tag = styled.li`
  display: inline-block;
  padding: 0.3em 0.9em;
  margin: 0.5em;
  background-color: #f1f8ff;
  border-radius: 3px;
  font-size: 0.8em;
  font-weight: ${fonts.light};
`;

interface Props {
  image: string
  title: string
  owner: string
  description: string
  url: string
  tags: string[]
}

const ProjectItem: React.FC<Props> = props => {
  const { image, title, owner, description, url, tags } = props;
  return (
    <ItemWrapper href={url} target="_blank" rel="noopener">
      <Image src={image} />
      <Title>{owner} / {title}</Title>
      <Info>{description}</Info>
      <Tags>
        {tags.map((tag, i) =>
          <Tag key={`${title}-${i}`}>{tag}</Tag>
        )}
      </Tags>
    </ItemWrapper>
  );
};

export default ProjectItem;
