import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Base = styled(Flex)`
  font-size: 30px;
  height: calc(100vh - 100px);
`
export const LoginContainer = styled(Flex)`
  width: 330px;
  height: 350px;
  color: back;
  border-radius: 10px;
  box-shadow: 0px 0px 10px lightgray;
`
export const Input = styled.input`
 width: 100%;
 height: 35px;
 margin: 5px 0;
 box-sizing: border-box;
 padding: 14px 10px;
 font-size: 12px;
 &&:focus {
   outline: none
 }
 border: 1px solid lightgray;
 border-radius: 3px;
`
export const Header = styled.p`
  margin: 5px 0;
  font-size: 20px;
  font-weight: 600;
`
export const IconContainer = styled.div`
  margin-bottom: 10px;
  img {
    width: 40px;
  }
`
export const MicroText = styled.p`
 font-size: 12px;
 text-decoration: ${({underline}) => underline? 'underline': 'none'}
`
export const Submit = styled.button`
 width: 100%;
 height: 35px;
 background: #0070cd;
 border: none;
 color: white;
 font-weight: 600;
 &&:focus {
   outline: none;
 }
 border-radius: 3px;
 cursor: pointer;
`