import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import vision from "../../public/headerTree.jpg";
import classes from "../../styles/Vision.module.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';



const Vision = () => {
  return (
    <div className={classes.vision}>
      <Grid className={classes.image}>
        <Image src={vision}  />
      </Grid>
      <Grid
        container
        className={classes.content}
        spacing={2}
       
      >
        <Grid item sm={10} md={4}
        sx={{
              fontSize: "35px",
              justifyContent: "center",
              color: "#FF8F56",
              zIndex: "100",
            }}>
          <Typography
            variant="h3"
            component="h4"
            sx={{
              fontSize: "35px",
              justifyContent: "center",
              color: "#FF8F56",
              zIndex: "100",
            }}
          >
            OUR KEY FACTORS
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontSize: "20px",
              justifyContent: "center",
              color: "#FF8F56",
              paddingTop: "2rem",
            }}
          >
            GIVE US A CALL FOR A FREE QUOTATION{" "}
            <AddIcCallIcon
              sx={{
                paddingTop: "6px",
              }}
            />
          </Typography>
        </Grid>
        <Grid item sm={10} md={6}
         sx={{
            fontSize: "35px",
            justifyContent: "center",
            alignItems:"center",
           
           
          }}>
          <Stack justifyContent="end"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent:"end",
              width:"100%",
              paddingLeft:"13rem",
              alignContent:"center"
            }}
          >
         
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "20px",
                justifyContent: "center",
                color: "#FF8F56",
                paddingTop: "1rem",
              }}
            >
          OUR    VISION
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "14px",
                justifyContent: "center",
                color: "#FF8F56",
                paddingTop: ".5rem",
              }}
            >
        our vision is to be southern africa's most renowned 
        electrical contracting company for all domestic, 
        commercial and industrial clients.
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "20px",
                justifyContent: "center",
                color: "#FF8F56",
                paddingTop: "1rem",
              }}
            >
          Our Mission
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "14px",
                justifyContent: "center",
                color: "#FF8F56",
                paddingTop: ".5rem",
              }}
            >
     Our mission is to provide our clients with a guaranteed 
     superior quality service, workmanship and professionalism. Training our teams and keeping up to date with the latest trends and technology. We will lead by example, with passion, integrity, reliability and efficiency for
      all our domestic, commercial and industrial clients.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Vision;
