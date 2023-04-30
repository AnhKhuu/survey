import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface CustomPalette {
    anger: PaletteColorOptions;
    vani: PaletteColorOptions;
    white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    anger: true;
    vani: true;
    white: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
export const theme = createTheme({
  palette: {
    anger: createColor('#7F1717'),
    vani: createColor('#FDF5CC'),
    white: createColor('#FFFFFF'),
  },
});
