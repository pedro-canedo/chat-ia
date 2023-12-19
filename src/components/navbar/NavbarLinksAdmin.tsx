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

  return <APIModal setApiKey={setApiKey} />;
}
