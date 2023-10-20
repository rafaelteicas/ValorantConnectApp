import {createTheme} from '@shopify/restyle';

const pallette = {
  red: '#E31039',
  darkBlue: '#0F1923',
  white: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    primary: pallette.red,
    backgroundColor: pallette.darkBlue,
    backgroundContrast: pallette.white,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
  },
  borderRadii: {
    b4: 4,
    b8: 8,
    b12: 12,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
