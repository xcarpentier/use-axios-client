import React from 'react';
import { Flex } from '@chakra-ui/core';
import { RouteComponentProps } from '@reach/router';
import {
  UseAxiosBasic,
  UseAxiosCancel,
  UseAxiosChange,
  UseAxiosRetry,
  UseAxiosCustomInstance,
} from '../useAxios';

const UseAxiosPage: React.FC<RouteComponentProps> = () => (
  <Flex wrap="wrap">
    <UseAxiosBasic />
    <UseAxiosCancel />
    <UseAxiosChange />
    <UseAxiosRetry />
    <UseAxiosCustomInstance />
  </Flex>
);

export default UseAxiosPage;
