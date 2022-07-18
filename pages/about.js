import React from "react";
import Typography from "@mui/material/Typography";
import { Grid,  Stack } from "@mui/material";
import Navbar from "../src/components/Navbar";
import AboutHeader from "../src/components/AboutHeader";
import Footer from './../src/components/Footer';
import Head from "next/head"
const about = () => {
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

      <AboutHeader />

      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={10} md={6}>
          <Typography
            justifyContent="center"
            variant="h2"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "4rem",
              fontSize: "34px",
              fontWeight: "400",
              maxWidth: "290px",
              margin: "auto",
              borderBottom: "2px solid #D79016 ",
              paddingBottom: "1.6rem",
            }}
          >
            About Malunjwa
          </Typography>
          <Typography
            justifyContent="center"
            variant="p2"
            component="p2"
            sx={{
              display: "flex",
              justifyContent: "start",
              paddingTop: "1rem",
              fontSize: "16px",
              fontWeight: "400",
              margin:"1rem"
            }}
          >
            Lemay Group was founded in 2009 by Rob Duncan, Duan van Wijk and
            Simon Kruger. “We initially started as a construction firm but being
            in the middle of the world’s worst economic recession in living
            memory, the tender market was exceptionally flat. We realised we had
            to become more proactive and create our own opportunities,” explain
            the directors. As a result, Lemay Properties was established later
            in 2009, followed in October 2010 by Lemay Renovations and Painting.
            Tim Govender and Gary Darvall joined the original team as directors
            in Lemay Renovations and Painting. The structuring of the company
            into three specialist divisions enables Lemay to package its service
            offerings to clients in a way that ensures maximum benefit and
            minimum hassle.
          </Typography>
          <Typography
            justifyContent="center"
            variant="h2"
            component="h2"
            sx={{
              display: "flex",
              jusifyContent: "center",
              paddingTop: "4rem",
              fontSize: "34px",
              fontWeight: "400",
              maxWidth: "250px",
              margin: "auto",
              borderBottom: "2px solid #D79016 ",
              paddingBottom: "1.6rem",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            justifyContent="center"
            variant="p2"
            component="p2"
            sx={{
              display: "flex",
              justifyContent: "start",
              paddingTop: "1rem",
              fontSize: "16px",
              fontWeight: "400",
              margin:"1rem"
            }}
          >
            exceptionally flat. We realised we had to become more proactive and
            create our own opportunities,” explain the directors. As a result,
            Lemay Properties was established later in 2009, followed in October
            2010 by Lemay Renovations and Painting. Tim Govender and Gary
            Darvall joined the original team as directors in Lemay Renovations
            and Painting. The structuring of the company into three specialist
            divisions enables Lemay to package its service offerings to clients
            in a way that ensures maximum benefit and minimum hassle.
          </Typography>
        </Grid>
        <Grid item sm={10} md={5}>
          <Stack
            justifyContent="center"
            justifyItems="center"
            sx={{
              backgroundColor: "#F1F1F1",
              marginTop: "7rem ",
            }}
          >
            <Typography
              justifyContent="center"
              variant="h2"
              component="h2"
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
                fontSize: "34px",
                fontWeight: "400",
                maxWidth: "430px",
                margin: "auto",
                borderBottom: "2px solid #D79016 ",
                paddingBottom: "1.7rem",
              }}
            >
              Our Vision
            </Typography>
            <Typography
              justifyContent="center"
              variant="p2"
              component="p2"
              sx={{
                display: "flex",
                justifyContent: "start",
                padding: "2rem",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              exceptionally flat. We realised we had to become more proactive
              and create our own opportunities,” explain the directors. As a
              result, Lemay Properties was established later in 2009, followed
              in October 2010 by Lemay Renovations and Painting. Tim Govender
              and Gary Darvall joined the original team as directors in Lemay
              Renovations and Painting. The structuring of the company into
              three specialist divisions enables Lemay to package its service
              offerings to clients in a way that ensures maximum benefit and
              minimum hassle.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

     <Footer/>
    </div>
  );
};

export default about;
