//https://stackblitz.com/github/mui/material-ui/tree/master/examples/vitejs?file=src%2Fmain.jsx
//Lo transfromamos en un HigherOrderComponent, y no lo usamos directamente en el main
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { purpleTheme } from './purpleTheme';

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
       { children }
    </ThemeProvider>
  )
}
