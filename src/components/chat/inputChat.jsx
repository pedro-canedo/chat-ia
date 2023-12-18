const { Flex, Button } = require("@chakra-ui/react");
import { Input } from '@chakra-ui/react';




const InputChat = ({ handleChange, handleTranslate, loading, styles }) => {

    return (
        <Flex
            ms={{ base: '0px', xl: '60px' }}
            mt="20px"
            justifySelf={'flex-end'}
        >
            <Input
                minH="54px"
                h="100%"
                border="1px solid"
                borderColor={styles.borderColor}
                borderRadius="45px"
                p="15px 20px"
                me="10px"
                fontSize="sm"
                fontWeight="500"
                _focus={{ borderColor: 'none' }}
                color={styles.inputColor}
                _placeholder={styles.placeholderColor}
                placeholder="Digite sua mensagem aqui..."
                onChange={handleChange}
            />
            <Button
                variant="primary"
                py="20px"
                px="16px"
                fontSize="sm"
                borderRadius="45px"
                ms="auto"
                w={{ base: '160px', md: '210px' }}
                h="54px"
                _hover={{
                    boxShadow:
                        '0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important',
                    stylesbg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%) !important',
                    _disabled: {
                        bg: 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
                    },
                }}
                onClick={handleTranslate}
                isLoading={loading ? true : false}
            >
                Enviar
            </Button>
        </Flex>
    );
}

export default InputChat;
