import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

const Author = styled.h3`
  color: #5f5f5f;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 16px;
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
      <img
        src={imageUrl ?? <span className="material-icons">image</span>}
        alt=""
      />
      <Content>
        <Title>{title ?? 'Untitled'}</Title>
        <Author>{author ?? 'Author Unknown'}</Author>
        <Description>{description ?? '(No description)'}</Description>
      </Content>
      <button onClick={() => handleDelete(id)}>
        <span className="material-icons">delete</span>
      </button>
    </Wrapper>
  );
};
