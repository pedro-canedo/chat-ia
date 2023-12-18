import { Flex, Icon, Text } from "@chakra-ui/react";
import MessageBoxChat from '@/components/MessageBox';
import { MdAutoAwesome, MdEdit, MdPerson } from 'react-icons/md';

const MainBox = ({ inputOnSubmit, outputCode, styles }) => {



    return (
        <Flex
            direction="column"
            w="100%"
            mx="auto"
            display={outputCode ? 'flex' : 'none'}
            mb={'auto'}
        >
            <Flex w="100%" align={'center'} mb="10px">
                <Flex
                    borderRadius="full"
                    justify="center"
                    align="center"
                    bg={'transparent'}
                    border="1px solid"
                    borderColor={styles.borderColor}
                    me="20px"
                    h="40px"
                    minH="40px"
                    minW="40px"
                >
                    <Icon
                        as={MdPerson}
                        width="20px"
                        height="20px"
                        color={styles.brandColor}
                    />
                </Flex>
                <Flex
                    p="22px"
                    border="1px solid"
                    borderColor={styles.borderColor}
                    borderRadius="14px"
                    w="100%"
                    zIndex={'2'}
                >
                    <Text
                        color={styles.textColor}
                        fontWeight="600"
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight={{ base: '24px', md: '26px' }}
                    >
                        {inputOnSubmit}
                    </Text>
                    <Icon
                        cursor="pointer"
                        as={MdEdit}
                        ms="auto"
                        width="20px"
                        height="20px"
                        color={styles.gray}
                    />
                </Flex>
            </Flex>
            <Flex w="100%">
                <Flex
                    borderRadius="full"
                    justify="center"
                    align="center"
                    bg={'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'}
                    me="20px"
                    h="40px"
                    minH="40px"
                    minW="40px"
                >
                    <Icon
                        as={MdAutoAwesome}
                        width="20px"
                        height="20px"
                        color="white"
                    />
                </Flex>
                <MessageBoxChat output={outputCode} />
            </Flex>
        </Flex>
    );
}

export default MainBox;