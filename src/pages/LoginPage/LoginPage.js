import ContainerHome from "../../components/Container/ContainerHome";
import FormLogin from "../../components/Form/FormLogin";
import Header from "../../components/Header/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <ContainerHome>
        <FormLogin />
      </ContainerHome>
    </>
  );
};

export default LoginPage;
