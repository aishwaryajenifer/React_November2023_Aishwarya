import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "green", color: "white", p: 1 }}
      >
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <WhatsAppIcon/>
          <TwitterIcon />
          <LinkedInIcon/>
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:400px)": {
              fontSize: "",
            },
          }}
        >
         <h6> All Rights Reserved &copy; FitMart</h6><br></br>
          <pre>

          </pre>
        <h6> Cities We Serve</h6>
<h6>       
Dhamnod|Medinipur|Modasa|Bhiwadi|Goa|Bahadurgarh|Raichur|Sindudurg|Sangareddy|Kurnool|Jadcherla|Rupnagar|Faridkot|Shamli|Pench|Visakhapatnam District|Vellore|Thiruvananthapura|Bokaro|Tirupura|Machilipatnam|North 24 Parganas|Khambhat
</h6>

        </Typography>
      </Box>
    </>
  );
};

export default Footer;