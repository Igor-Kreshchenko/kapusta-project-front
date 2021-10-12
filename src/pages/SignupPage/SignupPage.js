import ContainerHome from "../../components/Container/ContainerHome";
import FormSignup from "../../components/Form/FormSignup";
import Header from "../../components/Header/Header";

const SignupPage = () => {
  return (
    <>
      <Header />
      <ContainerHome>
        <FormSignup />
      </ContainerHome>
    </>
  );
};

export default SignupPage;
