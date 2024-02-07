'use client';
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useTheme } from "@mui/material/styles"
import { DRAWER_WIDTH } from "@/ui"


export default ()=>{
    const theme = useTheme()

    return (
        <Stack 
            useFlexGap
            direction="row"
            spacing={4}
            justifyContent="end"
            alignItems="center"
            sx={{
            position:"fixed",
            top:0,
            zIndex:"tooltip",
            ml: `${DRAWER_WIDTH}px`,
            pr:`${DRAWER_WIDTH *2}px`,
            color: "#21e5a0",
            width:"100%",
            backdropFilter:"blur(15px)",
            height:58,
            [theme.breakpoints.down('md')]:{
                display:"none"
            }
            }}>
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">About Us</Typography>
            <Typography variant="body1">Service</Typography>
            <Typography variant="body1">Contact</Typography>
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