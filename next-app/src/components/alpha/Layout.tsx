import * as React from 'react';
import Box from "@mui/material/Box";
import { DRAWER_WIDTH } from '@/ui';
import DesktopDrawer from '@/components/alpha/DesktopDrawer';
import DesktopMenu from '@/components/alpha/DesktopMenu';
import MobileDrawerMenu from './MobileDrawerMenu';

const AlphaLayout = ({ children }: { children: React.ReactNode })=>{
    return (
        <Box sx={{
            backgroundColor:"#00001c"
          }}>
            <DesktopDrawer/>
            <DesktopMenu/>
            <MobileDrawerMenu/>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'transparent',//'background.default',
                ml:{
                  md: `${DRAWER_WIDTH}px`,
                },
                mt: ['48px', '56px', '64px']
              }}
            >
              {children}
            </Box>
        </Box>  
    )
}

export default AlphaLayout;