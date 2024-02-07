import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default ()=>{
    return(
        <Stack
          useFlexGap 
          alignItems="center"
          justifyContent="end"
          sx={{
            width:280,
            height:200,
            //border:"solid 1px #596181",
            boxShadow:"0px 0px 1px 2px #141c38",
            borderRadius:3,
            backgroundImage:"linear-gradient(45deg, #070a1d, #06030c)",
            textAlign:"center",
            position:"relative",
            p:1
          }}
          spacing={1}
        >
          <Avatar
          src="/assets/zainab.webp"
          sx={{
            width:50,
            height:50,
            position:"absolute",
            top:-30,
            //border:"solid 2px #596181"
            boxShadow:"0px 0px 1px 2px #141c38",
          }}
          />
          <Typography
            sx={{
              textAlign:"center",
              fontWeight:700,
              fontSize:18
            }}
          >Lorem ipsum</Typography>
          <Typography
            variant="body2"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quod eos voluptas aut, inventore sed!
          </Typography>
          <Stack>
            <IconButton>
              <Avatar src="/assets/x_social.png" variant="square"
              sx={{
                  width:30,
                  height:30,
                  bgcolor:"#596181",
                  borderRadius:1
              }}
              />
            </IconButton>
          </Stack>
        </Stack>
    )
}