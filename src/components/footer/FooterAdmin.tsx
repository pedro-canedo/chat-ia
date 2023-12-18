'use client';
/*eslint-disable*/

import {
  Flex,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from '@/components/link/Link';

export default function Footer() {
  const textColor = useColorModeValue('gray.500', 'white');
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        xl: 'row',
      }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '30px', md: '50px' }}
      pb="30px"
    >
      {/* adicionar copywrite de 2023 Pedro Augusto  */}
      <Text
        fontSize="sm"
        color={textColor}
        textAlign={{
          base: 'center',
          xl: 'left',
        }}
        mb={{
          base: '20px',
          xl: '0',
        }}
      >
        © 2023 Pedro Augusto. All rights reserved.
      </Text>
    </Flex>
  );
}
