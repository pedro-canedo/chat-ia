'use client';
import React, { PropsWithChildren } from 'react';

import { Box } from '@chakra-ui/react';

import { IRoute } from '@/types/navigation';

export interface SidebarProps extends PropsWithChildren {
  routes: IRoute[];
  [x: string]: any;
}

function Sidebar(props: SidebarProps) {
  return (
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="fixed"
      minH="100%"
    ></Box>
  );
}

export function SidebarResponsive(props: { routes: IRoute[] }) {
  const { routes } = props;
  return (
    <>
      <Sidebar routes={routes} />
    </>
  );
}

export default Sidebar;
