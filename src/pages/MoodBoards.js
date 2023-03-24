import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import TopNavbar from "../components/common/TopNavBar";
import Styles from "../styles/login.css";
import style from "../styles/moodboard.css"
import { Grid } from "@mui/material";

export default function MoodBoards(){
    const shots = [
        {
          number: 1,
          image: 'https://via.placeholder.com/150',
          title: 'Opening shot'
        },
        {
          number: 2,
          image: 'https://via.placeholder.com/150',
          title: 'Title sequence'
        },
        {
          number: 3,
          image: 'https://via.placeholder.com/150',
          title: 'Introduction to characters'
        },
        {
            number: 4,
            image: 'https://via.placeholder.com/150',
            title: 'Title sequence'
          },
          {
            number: 5,
            image: 'https://via.placeholder.com/150',
            title: 'Introduction to characters'
          },
        // Add more shots as needed
    ];
    return(
        <>
            <TopNavbar
            title="MOOD BOARDS"
            buttonName="New Mood Board"
            icon={<BarChartIcon/>}
            />

            <div className="container">
                <div className="left-column">
                    <h2 className="Title">Shot List</h2>
                    {shots.map((shot) => (
                        <div key={shot.number} style={{padding:"15px",}}>
                            <p className="form-label">{shot.title}</p>
                        </div>
                    ))}                    
                </div>
                <div className="right-column">
                    <div style={{display: "flex"}}>
                        <h2 className="Title" style={{fontFamily: "poppins", fontSize: "30px"}}>
                            MOVIE NAME <span style={{paddingLeft:"30px",fontFamily: "poppins", fontSize: "25px"}}>SHOTS: {shots.length}</span>
                        </h2>

                        <button className='Btn'>New Shot</button>
                    </div>
                    <div className="grid-container">
                            <Grid container direction="row" item xs={10} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                {shots.map((shot) => (
                                    <div className="grid-item" key={shot.number} style={{paddingLeft:"30px",paddingRight:"15px"}}>
                                        <p className="form-label"> Shot {shot.number}</p>
                                        <img src={shot.image} alt={shot.title} style={{ maxWidth: '100%', height: '200px' }} />
                                        <p className="form-label">{shot.title}</p>
                                    </div>
                                ))}
                            </Grid>
                    </div>
                </div>
            </div>  
        </>
    )
}