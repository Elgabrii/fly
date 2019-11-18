import styled from 'styled-components';
import { Flex } from '@rebass/grid';

export const Base = styled(Flex)`
  width: 100%;

  border: 1px solid black;
`
export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Review = styled(Flex)`

`
export const Page = styled.div`
  width: 15px;
  height: 15px
  border: 1px solid black;
  background: ${({selected}) => selected? "black": ""};
  color: ${({selected}) => selected? "white": ""};
  display: flex;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
`
export const Arrow = styled.div`
  font-size: 25px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

` 