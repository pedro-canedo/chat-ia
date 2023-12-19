import { mode } from '@chakra-ui/theme-tools';
export const progressStyles = {
  components: {
    Progress: {
      baseStyle: {
        field: {
          fontWeight: 400,
          w: '16px',
          h: '16px',
          borderRadius: '20px',
          color: 'white', // cor da fonte clara
          bg: 'black', // cor de fundo escura
          _checked: { transform: 'translate(20px, 0px)' },
        },
        track: {
          w: '40px',
          h: '20px',
          borderRadius: '20px',
          color: 'white', // cor da fonte clara
          bg: 'black', // cor de fundo escura
          _focus: {
            boxShadow: 'none',
          },
        },
      },

      variants: {
        table: (props: any) => ({
          field: {
            bg: 'brand.500',
            borderRadius: '16px',
            fontSize: 'sm',
            color: 'white', // cor da fonte clara
          },
          track: {
            borderRadius: '20px',
            bg: mode('blue.50', 'whiteAlpha.50')(props),
            h: '8px',
            w: '54px',
            color: 'white', // cor da fonte clara
          },
          thumb: {
            w: '250px',
            color: 'white', // cor da fonte clara
          },
        }),
      },
    },
  },
};
