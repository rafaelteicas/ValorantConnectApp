import {createTheme} from '@shopify/restyle';

const pallette = {
  red: '#E31039',
  darkBlue: '#0F1923',
};

export const theme = createTheme({
  colors: {
    primary: pallette.red,
    backgroundColor: pallette.darkBlue,
  },
  spacing: {},
  borderRadii: {},
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
