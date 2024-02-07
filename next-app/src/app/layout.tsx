import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import AlphaLayout from '@/components/alpha/Layout';


export const metadata = {
  title: 'The Jungle Protocol',
  description: 'The Blockchain with the jungle protocol',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AlphaLayout children={children}/>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
