import styled from 'styled-components';

// Layout

const PageContainer = styled.div`
  width: 601px;
  margin: 111px auto;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 49px;
`;

// Typography

const Heading = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
`;

// UI

const Button = styled.button`
  width: fit-content;
  margin: 0;
  padding: 14px 22px;
  background: #1cb08d;
  border: unset;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  border: unset;
  cursor: pointer;
`;

const IconButton = styled.button`
  border: unset;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
  & > .material-icons {
    color: #929292;
    width: 22px;
  }
`;

export { PageContainer, Header, Heading, Button, IconButton };
