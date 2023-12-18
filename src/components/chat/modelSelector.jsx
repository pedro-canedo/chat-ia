import { Flex, Icon } from "@chakra-ui/react";
import { MdAutoAwesome, MdBolt } from 'react-icons/md';

const ModelSelector = ({ currentModel, onSelectModel, outputCode, styles }) => {
    return (
        <Flex direction={'column'} w="100%" mb={outputCode ? '20px' : 'auto'}>
            <Flex
                mx="auto"
                zIndex="2"
                w="max-content"
                mb="20px"
                borderRadius="60px"
            >
                <Flex
                    cursor={'pointer'}
                    transition="0.3s"
                    justify={'center'}
                    align="center"
                    bg={currentModel === 'gpt-3.5-turbo' ? styles.buttonBg : 'transparent'}
                    w="174px"
                    h="70px"
                    boxShadow={currentModel === 'gpt-3.5-turbo' ? styles.buttonShadow : 'none'}
                    borderRadius="14px"
                    color={styles.textColor}
                    fontSize="18px"
                    fontWeight={'700'}
                    onClick={() => onSelectModel('gpt-3.5-turbo')}
                >
                    <Flex
                        borderRadius="full"
                        justify="center"
                        align="center"
                        bg={styles.bgIcon}
                        me="10px"
                        h="39px"
                        w="39px"
                    >
                        <Icon
                            as={MdAutoAwesome}
                            width="20px"
                            height="20px"
                            color={styles.iconColor}
                        />
                    </Flex>
                    GPT-3.5
                </Flex>
                <Flex
                    cursor={'pointer'}
                    transition="0.3s"
                    justify={'center'}
                    align="center"
                    bg={currentModel === 'gemni' ? styles.buttonBg : 'transparent'}
                    w="164px"
                    h="70px"
                    boxShadow={currentModel === 'gemni' ? styles.buttonShadow : 'none'}
                    borderRadius="14px"
                    color={styles.textColor}
                    fontSize="18px"
                    fontWeight={'700'}
                    onClick={() => onSelectModel('gemni')}
                >
                    <Flex
                        borderRadius="full"
                        justify="center"
                        align="center"
                        bg={styles.bgIcon}
                        me="10px"
                        h="39px"
                        w="39px"
                    >
                        <Icon
                            as={MdBolt}
                            width="20px"
                            height="20px"
                            color={styles.iconColor}
                        />
                    </Flex>
                    Gemni
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ModelSelector;
