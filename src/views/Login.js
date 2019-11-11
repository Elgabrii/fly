import React, { Component } from 'react';
import { Flex } from '@rebass/grid';
import Logo from './Assets/logo.svg';
import {
  Base,
  LoginContainer,
  Input,
  Header,
  IconContainer,
  MicroText,
  Submit
} from './Login.style';
console.log(Logo);
export class Login extends Component {
  render() {
    return (
      <div>
        <Base justifyContent="center" alignItems="center" >
          <LoginContainer alignItems="center" py={3} px={'25px'}  flexDirection="column">
            <IconContainer>
              <img src={require('./Assets/logo.svg')}></img>
            </IconContainer>
            <Header>Order Management System</Header>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Flex width={1} justifyContent="space-between">
              <MicroText>
                <input type="checkbox"></input>
                Remember me
              </MicroText>
              <MicroText underline>
                Forgot Password?
              </MicroText>
            </Flex>
            <Submit>
              LOGIN
            </Submit>
          </LoginContainer>
        </Base>
      </div>
    );
  }
}

export default Login;
