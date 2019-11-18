import styled from 'styled-components';
import { Flex } from '@rebass/grid';

export const Base = styled(Flex)`
`
export const Photo = styled.div`
  width: 500px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
`
export const Thumbnails = styled(Flex)`
  width: 500px;
  overflow-x: scroll
  img {
    cursor: pointer;
  }
`