'use client';
/*eslint-disable*/
import { ChatBody, OpenAIModel } from '@/types/types';
import { Flex, Img, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import Bg from '../public/img/chat/bg-image.png';
import ModelSelector from '../src/components/chat/modelSelector';
import MainBox from '../src/components/chat/mainBox';
import InputChat from '../src/components/chat/inputChat';

export default function Chat(props: { apiKeyApp: string }) {
  const { apiKeyApp } = props;
  const [inputOnSubmit, setInputOnSubmit] = useState<string>('');
  const [inputCode, setInputCode] = useState<string>('');
  const [outputCode, setOutputCode] = useState<string>('');
  const [model, setModel] = useState<OpenAIModel>('gpt-3.5-turbo');
  const [loading, setLoading] = useState<boolean>(false);
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const inputColor = useColorModeValue('navy.700', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgIcon = useColorModeValue(
    'linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)',
    'whiteAlpha.200',
  );
  const brandColor = useColorModeValue('brand.500', 'white');
  const buttonBg = useColorModeValue('white', 'whiteAlpha.100');
  const gray = useColorModeValue('gray.500', 'white');
  const buttonShadow = useColorModeValue(
    '14px 27px 45px rgba(112, 144, 176, 0.2)',
    'none',
  );
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );

  const [apiKey, setApiKey] = useState<string>(apiKeyApp);

  // Função para validar a entrada do usuário
  const validateInput = () => {
    const maxCodeLength = model === 'gpt-3.5-turbo' ? 700 : 700;

    if (!apiKeyApp?.includes('sk-') && !apiKey?.includes('sk-')) {
      alert('Please enter an API key.');
      return false;
    }

    if (!inputCode) {
      alert('Please enter your message.');
      return false;
    }

    if (inputCode.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
      );
      return false;
    }

    return true;
  };

  // Função para fazer a chamada fetch
  const fetchApi = async (apiUrl: string, body: ChatBody) => {
    const controller = new AbortController();
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(
          'Something went wrong went fetching from the API. Make sure to use a valid API key.',
        );
      }

      return response;
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };

  // Função para lidar com a tradução
  const handleTranslate = async () => {
    setInputOnSubmit(inputCode);

    if (!validateInput()) {
      return;
    }

    setOutputCode(' ');
    setLoading(true);

    const body: ChatBody = {
      inputCode,
      model,
      apiKey: apiKeyApp,
    };

    let response;
    if (model === 'gpt-3.5-turbo') {
      response = await fetchApi('/api/gptApi', body);
    } else if (model === 'gemni') {
      response = await fetchApi('/api/gemniApi', body);
    }

    if (!response) {
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      setLoading(true);
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setOutputCode((prevCode) => prevCode + chunkValue);
    }

    setLoading(false);
  };

  //fim do handle translate
  const handleChange = (Event: any) => {
    setInputCode(Event.target.value);
  };

  return (
    <Flex
      w="100%"
      pt={{ base: '70px', md: '0px' }}
      direction="column"
      position="relative"
    >
      <Img
        src={Bg.src}
        position={'absolute'}
        w="350px"
        left="50%"
        top="50%"
        transform={'translate(-50%, -50%)'}
      />
      <Flex
        direction="column"
        mx="auto"
        w={{ base: '100%', md: '100%', xl: '100%' }}
        minH={{ base: '75vh', '2xl': '85vh' }}
        maxW="1000px"
      >
        {/* Model Change */}
        <ModelSelector
          currentModel={model}
          onSelectModel={setModel}
          outputCode={outputCode}
          styles={{
            buttonBg: buttonBg,
            textColor: textColor,
            bgIcon: bgIcon,
            buttonShadow: buttonShadow,
            iconColor: iconColor,
          }}
        />

        {/* Main Box */}
        <MainBox
          inputOnSubmit={inputOnSubmit}
          outputCode={outputCode}
          styles={{
            buttonBg: buttonBg,
            textColor: textColor,
            bgIcon: bgIcon,
            buttonShadow: buttonShadow,
            iconColor: iconColor,
          }}
        />

        {/* Chat Input */}
        <InputChat
          handleChange={handleChange}
          handleTranslate={handleTranslate}
          loading={loading}
          styles={{
            borderColor: borderColor,
            inputColor: inputColor,
            placeholderColor: placeholderColor,
          }}
        />

        <Flex
          justify="center"
          mt="20px"
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
        ></Flex>
      </Flex>
    </Flex>
  );
}
