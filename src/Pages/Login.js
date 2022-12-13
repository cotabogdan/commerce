import React from "react";
import { Container, Wrapper,Title,Form,Input,Button,Link} from "./Login.style";



const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>CAN'T REMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;