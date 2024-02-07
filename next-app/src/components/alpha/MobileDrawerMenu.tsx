'use client';

import {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack"
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useTheme } from "@mui/material/styles"
import { DRAWER_WIDTH } from "@/ui"

//type Anchor = 'top' | 'left' | 'bottom' | 'right';

//inset 0 1px 2px #F3F6F9, 0 1px 0.5px rgba(229, 234, 242, 0.6)
const MobileMenu = ({onClick}:{onClick:Function})=>{
    const theme = useTheme();

    return (
        <Stack 
            useFlexGap
            direction="row"
            //spacing={4}
            justifyContent="space-between"
            alignItems="center"
            sx={{
                position:"fixed",
                top:0,
                zIndex:"tooltip",
                px:1.5,
                color: "#21e5a0",
                width:"100%",
                backdropFilter:"blur(15px)",
                height:50,
                [theme.breakpoints.up('md')]:{
                    display:"none"
                }
        }}>
        
        <IconButton color="secondary" onClick={onClick}>
            <MenuOutlinedIcon />
        </IconButton>

        <Button variant="contained"
            size="small"
            sx={{
            bgcolor:"#21e5a0",
            color:"#00001c",
            fontWeight:"bold"
            }}>
            Connect Wallet
        </Button>
    </Stack>  
    )
}

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <MobileMenu onClick={()=>setIsOpen(true)}/>
        <Drawer
            anchor={"bottom"}
            open={isOpen}
            onClose={()=>setIsOpen(false)}
        >
            
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            
        </Drawer>
    </>
  );
}