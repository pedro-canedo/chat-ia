'use client';
// Chakra Imports
import { Box } from '@chakra-ui/react';
import APIModal from '@/components/apiModal';
import React, { use } from 'react';

export default function HeaderLinks(props: {
  secondary: boolean;
  setApiKey: any;
}) {
  const { setApiKey } = props;

  return (
    <Box>
      <span>Chave de Api Para GPT: {}</span>
      <APIModal setApiKey={setApiKey} />

      {/* <SearchBar
        mb={() => {
          if (secondary) {
            return { base: '10px', md: 'unset' };
          }
          return 'unset';
        }}
        me="10px"
        borderRadius="30px"
      /> */}
      {/* <SidebarResponsive routes={routes} /> */}
    </Box>
  );
}
