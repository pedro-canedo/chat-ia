'use client';
// Chakra imports
import { Flex } from '@chakra-ui/react';

import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  return (
    <Flex alignItems="center" flexDirection="column">
      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
