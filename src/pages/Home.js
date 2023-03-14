import React from "react";
import TopNavbar from "../components/common/TopNavBar";
import HomeIcon from '@mui/icons-material/Home';
import { newProjs, ongoing, completed } from "../assets/data/carouselImages";
import ImageCarousel from "../components/common/ImageCarousel";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, color, padding } from "@mui/system";
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Home(){
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 8000, min: 3000 },
            items: 6.5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        }
      };
      
    return(
        <>
            <TopNavbar
            title="PROJECTS"
            buttonName="New Project"
            icon={<HomeIcon />}
            /> 
            
            {/* delete btn and catch phrase */}
            <div className="Toolbar" style={{paddingTop:"20px"}}>
                <div style={{paddingLeft:"50px",color: 'rgba(255, 255, 255, 0.693)', fontSize:"19px"}} className="Title">ALL YOUR PROJECTS IN ONE PLACE.....</div>
                <DeleteOutlineIcon/>
                <div style={{paddingRight:"50px"}} >
                    <Box sx={{border: 1, borderColor: "white", borderRadius: '5px' }}>
                        <DeleteOutlineIcon sx={{ color: "white",padding:"5px", fontSize: 30 }}/>
                    </Box>
                </div>
            </div>

            {/* new projects carousel */}
            <div style={{paddingTop:"30px",paddingLeft:"60px",overflow: "hidden"}}>
                <div style={{ paddingBottom:"20px", fontSize:"19px"}} className="Title">NEW PROJECTS <ArrowForwardIcon sx={{ fontSize: 30 }}/></div>
                <div>
                <Grid container direction="row">
                    {newProjs.map((image) => (
                        <div style={{paddingLeft:"30px",paddingRight:"15px"}}>
                            <img key={image.id} src={image.src} style={{ maxWidth: '100%', height: '200px' }} />
                            {/* <p style={{ color: 'white', fontSize:"18px" }} className="form-label">PROJECT NAME</p>
                            <p style={{ color: 'rgba(255, 255, 255, 0.693)' }}>Authour</p> */}
                        </div>
                    ))}
                </Grid>
                </div>

            </div>

            {/* Ongoing projects carousel */}
            <div style={{paddingLeft:"60px",overflow: "hidden"}}>
                <div style={{ paddingBottom:"20px", fontSize:"19px"}} className="Title">ONGOING PROJECTS <ArrowForwardIcon sx={{ fontSize: 30 }}/></div>
                <div>
                <Grid container direction="row">
                    {ongoing.map((image) => (
                        <div style={{paddingLeft:"30px",paddingRight:"15px"}}>
                            <img key={image.id} src={image.src} style={{ maxWidth: '100%', height: '200px' }} />
                            {/* <p style={{ color: 'white', fontSize:"18px" }} className="form-label">PROJECT NAME</p>
                            <p style={{ color: 'rgba(255, 255, 255, 0.693)' }}>Authour</p> */}
                        </div>
                    ))}
                </Grid>
                </div>

            </div>

            {/* Completed projects carousel */}
            <div style={{paddingLeft:"60px",overflow: "hidden"}}>
                <div style={{ paddingBottom:"20px", fontSize:"19px"}} className="Title">COMPLETED PROJECTS <ArrowForwardIcon sx={{ fontSize: 30 }}/></div>
                <div>
                <Grid container direction="row">
                    {newProjs.map((image) => (
                        <div style={{paddingLeft:"30px",paddingRight:"15px"}}>
                            <img key={image.id} src={image.src} style={{ maxWidth: '100%', height: '200px' }} />
                            {/* <p style={{ color: 'white', fontSize:"18px" }} className="form-label">PROJECT NAME</p>
                            <p style={{ color: 'rgba(255, 255, 255, 0.693)' }}>Authour</p> */}
                        </div>
                    ))}
                </Grid>
                </div>

            </div>

        </>
    )
}