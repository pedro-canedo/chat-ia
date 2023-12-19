import { mode } from '@chakra-ui/theme-tools';

export const badgeStyles = {
  components: {
    Badge: {
      baseStyle: {
        borderRadius: '10px',
        lineHeight: '100%',
        padding: '7px',
        paddingLeft: '12px',
        paddingRight: '12px',
        color: '#f8f8f2', // cor do texto Dracula
        bg: '#282a36', // cor de fundo Dracula
      },
      variants: {
        outline: () => ({
          borderRadius: '16px',
        }),
        brand: (props: any) => ({
          bg: mode('#282a36', '#282a36')(props), // cor de fundo Dracula
          color: '#f8f8f2', // cor do texto Dracula
          _focus: {
            bg: mode('#282a36', '#282a36')(props), // cor de fundo Dracula
          },
          _active: {
            bg: mode('#282a36', '#282a36')(props), // cor de fundo Dracula
          },
          _hover: {
            bg: mode('#44475a', '#44475a')(props), // cor de fundo Dracula mais clara para hover
          },
        }),
      },
    },
  },
};
