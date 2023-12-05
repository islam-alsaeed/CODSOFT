import { createTheme } from '@mui/material/styles';
import { green, lightGreen } from '@mui/material/colors';
export const theme = createTheme({
    palette: {
        primary: {
            main: green[500]
        },
        secondary: {
            main: lightGreen[800],
            midNightGreen: '#004953'
        }
    }
});