import { mode } from '@chakra-ui/theme-tools';
export const textareaStyles = {
  components: {
    Textarea: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: '8px',
        },
      },

      variants: {
        main: (props: any) => ({
          field: {
            bg: mode('transparent', 'navy.800')(props),
            border: '1px solid !important',
            color: mode('white', 'whiteAlpha.900')(props),
            borderColor: mode('gray.200', 'whiteAlpha.100')(props),
            borderRadius: '16px',
            fontSize: 'sm',
            p: '20px',
            _placeholder: { color: mode('white', 'whiteAlpha.900')(props) },
          },
        }),
        auth: (props: any) => ({
          field: {
            bg: mode('white', 'navy.800')(props),
            border: '1px solid',
            borderColor: mode('gray.200', 'whiteAlpha.100')(props),
            borderRadius: '16px',
            _placeholder: { color: mode('white', 'whiteAlpha.900')(props) },
          },
        }),
        authSecondary: (props: any) => ({
          field: {
            bg: mode('white', 'navy.800')(props),
            border: '1px solid',
            borderColor: mode('gray.200', 'whiteAlpha.100')(props),
            borderRadius: '16px',
            _placeholder: { color: mode('white', 'whiteAlpha.900')(props) },
          },
        }),
        search: (props: any) => ({
          field: {
            border: 'none',
            py: '11px',
            borderRadius: 'inherit',
            _placeholder: { color: mode('white', 'whiteAlpha.900')(props) },
          },
        }),
      },
    },
  },
};
