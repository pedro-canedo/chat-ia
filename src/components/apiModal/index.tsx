'use client';
import Card from '@/components/card/Card';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Link,
  ListItem,
  UnorderedList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdLock } from 'react-icons/md';

function APIModal(props: { setApiKey: any; sidebar?: boolean }) {
  const { setApiKey, sidebar } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputCode, setInputCode] = useState<string>('');

  const textColor = useColorModeValue('navy.700', 'white');
  const grayColor = useColorModeValue('gray.500', 'gray.500');
  const inputBorder = useColorModeValue('gray.200', 'whiteAlpha.200');
  const inputColor = useColorModeValue('navy.700', 'white');
  const link = useColorModeValue('brand.500', 'white');
  const navbarIcon = useColorModeValue('gray.500', 'white');
  const toast = useToast();

  const handleChange = (Event: any) => {
    setInputCode(Event.target.value);
  };

  const handleApiKeyChange = (value: string) => {
    setApiKey(value);

    localStorage.setItem('apiKey', value);
    //verificar se a chave é valida e se esta no localstorage
    console.log('API KEY: ', localStorage.getItem('apiKey'));
  };
  return (
    <>
      {sidebar ? (
        <Button
          onClick={onOpen}
          display="flex"
          variant="api"
          fontSize={'sm'}
          fontWeight="600"
          borderRadius={'45px'}
          mt="8px"
          minH="40px"
        >
          Set API Key - from GPT
        </Button>
      ) : (
        <Button
          onClick={onOpen}
          minW="max-content !important"
          p="0px"
          me="10px"
          _hover={{ bg: 'none' }}
          _focus={{ bg: 'none' }}
          _selected={{ bg: 'none' }}
          bg="none !important"
        >
          <Icon w="30px" h="30px" as={MdLock} color={navbarIcon} />
        </Button>
      )}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="none" boxShadow="none">
          <Card textAlign={'center'}>
            <ModalHeader
              fontSize="22px"
              fontWeight={'700'}
              mx="auto"
              textAlign={'center'}
              color={textColor}
            >
              Insira sua chave de API do OpenAI
            </ModalHeader>
            <ModalCloseButton _focus={{ boxShadow: 'none' }} />
            <ModalBody p="0px">
              <Flex mb="20px">
                <Input
                  h="100%"
                  border="1px solid"
                  borderColor={inputBorder}
                  borderRadius="45px"
                  p="15px 20px"
                  me="10px"
                  fontSize="sm"
                  fontWeight="500"
                  _focus={{ borderColor: 'none' }}
                  _placeholder={{ color: 'gray.500' }}
                  color={inputColor}
                  placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  onChange={handleChange}
                  value={inputCode}
                />
                <Button
                  variant="chakraLinear"
                  py="20px"
                  px="16px"
                  fontSize="sm"
                  borderRadius="45px"
                  ms="auto"
                  mb={{ base: '20px', md: '0px' }}
                  w={{ base: '300px', md: '180px' }}
                  h="54px"
                  onClick={() => {
                    inputCode?.includes('sk-')
                      ? handleApiKeyChange(inputCode)
                      : null;
                    if (inputCode)
                      toast({
                        title: inputCode?.includes('sk-')
                          ? `Sucesso! Você adicionou sua chave de API com sucesso!`
                          : !inputCode?.includes('sk-')
                          ? `Chave de API inválida. Certifique-se de que sua chave de API ainda esteja funcionando corretamente.`
                          : 'Por favor, adicione sua chave de API!',
                        position: 'top',
                        status: inputCode?.includes('sk-')
                          ? 'success'
                          : !inputCode?.includes('sk-')
                          ? `error`
                          : !inputCode
                          ? 'warning'
                          : 'error',
                        isClosable: true,
                      });
                  }}
                >
                  Save API Key
                </Button>
              </Flex>
              <Link
                color={link}
                fontSize="sm"
                href="https://platform.openai.com/account/api-keys"
                textDecoration="underline !important"
                fontWeight="600"
              >
                Obtenha sua chave de API no Painel da Open AI
              </Link>
              <Accordion allowToggle w="100%" my="16px">
                <AccordionItem border="none">
                  <AccordionButton
                    borderBottom="0px solid"
                    maxW="max-content"
                    mx="auto"
                    _hover={{ border: '0px solid', bg: 'none' }}
                    _focus={{ border: '0px solid', bg: 'none' }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text
                        color={textColor}
                        fontWeight="700"
                        fontSize={{ sm: 'md', lg: 'md' }}
                      >
                        Sua chave de API não está funcionando?
                      </Text>
                    </Box>
                    <AccordionIcon color={textColor} />
                  </AccordionButton>
                  <AccordionPanel p="18px 0px 10px 0px">
                    <UnorderedList p="5px">
                      <ListItem
                        mb="26px"
                        color={grayColor}
                        fontSize=",d"
                        fontWeight="500"
                      >
                        Certifique-se de ter um{' '}
                        <Link
                          textDecoration="underline"
                          fontSize=",d"
                          href="https://platform.openai.com/account/"
                          fontWeight="500"
                          color={grayColor}
                        >
                          OpenAI account
                        </Link>{' '}
                        e uma chave de API válida para usar o ChatGPT. Nós não
                        vendemos chaves de API.
                      </ListItem>
                      <ListItem
                        color={grayColor}
                        fontSize="md"
                        lineHeight="28px"
                        fontWeight="500"
                      >
                        Certifique-se de ter suas informações de faturamento
                        adicionadas em{' '}
                        <Link
                          textDecoration="underline"
                          fontSize="md"
                          lineHeight="28px"
                          href="https://platform.openai.com/account/billing/overview"
                          fontWeight="500"
                          color={grayColor}
                        >
                          OpenAI Billing
                        </Link>{' '}
                        página. Sem informações de faturamento, sua chave de API
                        não funcionará.
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Text
                color={grayColor}
                fontWeight="500"
                fontSize="sm"
                mb="42px"
                mx="30px"
              >
                *O aplicativo se conectará ao servidor da API do OpenAI para
                verificar se sua chave de API está funcionando corretamente.
              </Text>
            </ModalBody>
          </Card>
        </ModalContent>
      </Modal>
    </>
  );
}

export default APIModal;
