import { mode } from '@chakra-ui/theme-tools';

export const switchStyles = {
  components: {
    Switch: {
      baseStyle: {
        thumb: {
          fontWeight: 400,
          borderRadius: '50%',
          w: '16px',
          h: '16px',
          _checked: { transform: 'translate(20px, 0px)', bg: '#50fa7b' }, // cor de fundo Dracula quando selecionado
        },
        track: {
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
          w: '40px',
          h: '20px',
          p: '2px',
          ps: '2px',
          bg: '#282a36', // cor de fundo Dracula
          _focus: {
            boxShadow: 'none',
          },
        },
      },

      variants: {
        main: (props: any) => ({
          track: {
            bg: mode('#282a36', '#282a36')(props), // cor de fundo Dracula
          },
        }),
      },
    },
  },
};
