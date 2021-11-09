import styled from 'styled-components';

// Layout

const PageContainer = styled.main`
  width: 601px;
  margin: 111px auto;
  font-family: Arial, Helvetica, sans-serif;
`;

// Typography

const Heading = styled.h1`
  margin-bottom: 49px;
  margin-right: auto;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
`;

// UI

const Button = styled.div`
  width: fit-content;
  padding: 14px 22px;
`;

export { PageContainer, Heading, Button };
