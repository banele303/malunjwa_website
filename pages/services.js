import { Typography} from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import React from "react";
 import servicesI from "../public/serviceOne.jpg";
import classes from "../styles/servicess.module.css";
import Navbar from "./../src/components/Navbar";
import ServicesIcon from './../src/components/ServicesIcons';
import Footer from "../src/components/Footer";
import FormTrue from "../src/components/FormTrue";


const servicesMain = () => {
  return (
    <div>

       <Head>
        <title>Malunjwa Construction</title>
        <meta
          name='Your best Constraction company'
          content='malunjwa contraction company'
          
        />
        <link rel="icon" href="/favicon.ico" />
        

      </Head>
      <Navbar />
      <div className={classes.main_service}>
        <div className={classes.image_container}>
          <Image src={servicesI} layout="fill" className={classes.image} />
        </div>
        <div className={classes.content}>
        <Typography variant="h5" component="h5" sx={{
          display:"flex",
          justifyContent:"center",
          width:"100%",
          padding:"2rem 4rem",
          
          color:"#0D2240",
          fontSize:"43px",
          
          fontWeight:"bold"

        }}>
Do You Have A Construction Project We Can Help With?
        </Typography>
        </div>
      </div>


      <Typography variant="h3" component="h3" sx={{
          display:"flex",
          justifyContent:"center",
          padding:"3rem .3rem",
          color:"#0D2240",
          fontSize:"24px",
          fontWeight:"bold",
          paddingLeft:"2rem"
        }}>
           COMMECIAL/INDUSTRIAL AND RESIDENSIAL SERVICES AND LOBOUR HIRE
      </Typography>
     <ServicesIcon/>
     
   <FormTrue/>
     <Footer/>
    </div>
  );
};

export default servicesMain;
