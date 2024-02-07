'use client';
import Drawer from '@mui/material/Drawer';
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from "@mui/material/styles";
import { DRAWER_WIDTH } from '@/ui';

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];


export default ()=>{
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                position:"relative",
                '& .MuiDrawer-paper': {
                    background:"transparent",
                    alignItems:"center",
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    height: 'auto',
                    bottom: 0,
                },
                [theme.breakpoints.down('md')]:{
                    display:"none"
                }
            }}
            variant="permanent"
            anchor="left"
        >
            <IconButton key={"Home"}
            sx={{
                my:1,
                color:"#2a56db"
            }}
            >
            <HomeIcon/>
            </IconButton>

            <Stack
            direction="column"
            spacing={1}
            sx={{ 
                position:"absolute",
                bottom:0,
                mb:5
            }}
            >
            {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <IconButton key={text}>
                    <Icon sx={{ color:"#2a56db" }}/>
                </IconButton>
            ))}
            </Stack>
      </Drawer>
    )
}