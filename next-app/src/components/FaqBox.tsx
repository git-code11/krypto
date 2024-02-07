import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default ()=>{
    return(
        <Accordion
            sx={{
                overflow:"hidden",
                backgroundColor: "transparent",
                color: "#fff",
                "&.MuiAccordion-root.Mui-expanded":{
                    margin:"5px 0px"
                }
            }}
            >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
                sx={{

                    "&.Mui-expanded":{
                        minHeight:"48px"
                    },
                    "& .MuiAccordionSummary-content.Mui-expanded":{
                        margin:"10px 0px"
                    }
                }}
                >
                <Typography component="span"
                    sx={{
                        fontWeight:500,
                    }}
                    >
                    Lorem ipsum dolor amet consectetur adipisicing elit
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="span">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus pariatur veritatis ab aspernatur quibusdam cum, saepe similique, non magnam sed iusto? Explicabo, eligendi! Voluptatum perferendis rerum magnam dignissimos a!
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}