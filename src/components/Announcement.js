import styledComponents from 'styled-components';

const Container = styledComponents.div`
  height: 30px;
  background-color: #8367c7;
  color: #DAD7CD;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders over $99</Container>;
};

export default Announcement;
