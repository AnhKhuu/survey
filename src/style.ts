import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface CustomPalette {
    anger: PaletteColorOptions;
    blue: PaletteColorOptions;
    green: PaletteColorOptions;
    vani: PaletteColorOptions;
    white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    anger: true;
    blue: true;
    green: true;
    vani: true;
    white: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
export const theme = createTheme({
  palette: {
    green: createColor('#64D72F'),
    blue: createColor('#0F4062'),
    anger: createColor('#7F1717'),
    vani: createColor('#CFE8D4'),
    white: createColor('#FFFFFF'),
  },
});
