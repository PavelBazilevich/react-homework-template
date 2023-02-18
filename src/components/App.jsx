import Container from './Container/Container';
import Balance from './Balance/Balance';
import ToGoReport from './ToGoReport/ToGoReport';
export const App = () => {
  return (
    <Container>
      <ToGoReport />
      <Balance />
    </Container>
  );
};
