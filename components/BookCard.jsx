import styled from 'styled-components';
import { IconButton } from './ui';

const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  margin-bottom: 36px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 51px 80px rgba(0, 0, 0, 0.04),
    0px 21.3066px 33.4221px rgba(0, 0, 0, 0.0287542),
    0px 11.3915px 17.869px rgba(0, 0, 0, 0.0238443),
    0px 6.38599px 10.0172px rgba(0, 0, 0, 0.02),
    0px 3.39155px 5.32008px rgba(0, 0, 0, 0.0161557),
    0px 1.4113px 2.21381px rgba(0, 0, 0, 0.0112458);
  border-radius: 8px;
`;

const ImageWrapper = styled.div`
  width: 182px;
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  line-height: 16;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Author = styled.h3`
  color: #5f5f5f;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const Description = styled.p`
  display: -webkit-box;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookCard = ({
  id,
  description,
  imageUrl,
  author,
  title,
  handleDelete,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          src={imageUrl ?? <span className="material-icons">image</span>}
          alt=""
        />
      </ImageWrapper>
      <Content>
        <Title>{title ?? 'Untitled'}</Title>
        <Author>{author ?? 'Author Unknown'}</Author>
        <Description>{description ?? '(No description)'}</Description>
      </Content>
      <IconButton onClick={() => handleDelete(id)}>
        <span className="material-icons">delete</span>
      </IconButton>
    </Wrapper>
  );
};
