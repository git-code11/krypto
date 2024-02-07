import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

export default ()=>{
    return (
    <Box
        sx={{
            borderRadius:2,
            border:"solid 2px rgba(255,255,255,0.5)",
            maxWidth:"95%",
            overflow:"hidden"
            //height:300
        }}
    >
        <Grid container>
            <Grid xs={3}>
                <Avatar
                variant="square"
                src="/assets/contact.jpg"
                sx={{
                    width:"100%",
                    height:"100%",
                }}/>
            </Grid>

            <Grid xs={9}
                sx={{
                    backgroundImage:"linear-gradient(45deg, #070a1d, #06030c)",
                    color:"#fff"
                }}
            >
                <Stack
                    useFlexGap
                    spacing={2.5}
                    alignItems="center"
                    sx={{
                        p:2
                    }}
                >
                    <Typography component="div" variant="h5" textAlign="center" fontWeight={700}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Typography>
                    <Typography component="div" variant="body1" textAlign="center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error sit repellat, voluptatum minus fuga reprehenderit enim deserunt!
                    </Typography>
                    <Stack useFlexGap 
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        >
                        <OutlinedInput placeholder="Lorem ipsum dolor sit amet consectetur"
                            sx={{
                                minWidth:"70vmin"
                            }}
                        />
                        <Button variant="contained">Lorem ipsum</Button>
                    </Stack>
                    <Typography component="div" variant="body1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    </Box>
    )
}