import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import TopNavbar from "../components/common/TopNavBar";
import Styles from "../styles/login.css";
import style from "../styles/moodboard.css"
import { Grid } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';

export default function TeamsPage(){
    const teams =[
        {
            teamId :"t1",
            teamType:"Sound team",
        },
        {
            teamId :"t2",
            teamType:"Editing team",
        },
        {
            teamId :"t3",
            teamType:"Lighting team",
        },
        {
            teamId :"t4",
            teamType:"Costume team",
        },
    ]
    
    const soundTeam = [
        { name: 'Joan Keller', role: 'HEAD OF SOUND TEAM' },
        { name: 'Jamey Lannister', role: 'SPEAKER MANAGEMENT' },
        { name: 'Abdul Fakeer', role: 'VOICE ACTOR' },
        { name: 'Daniel Radcliffe', role: 'VOICE ACTOR' }
    ];
      
    const editingTeam = [
        { name: 'Mia Thompson', role: 'HEAD OF SOUND TEAM' },
        { name: 'Jonny Smith', role: 'SPEAKER MANAGEMENT' },
        { name: 'Lathip Kanna', role: 'VOICE ACTOR' },
        { name: 'Daniel Radcliffe', role: 'VOICE ACTOR' }
    ];

    return(
        <>
            <TopNavbar
            title="TEAMS"
            buttonName="Add Team"
            icon={<GroupsIcon/>}
            />

            <div className="container">
                <div className="left-column" style={{backgroundColor:"#1E1E1E",padding:"20px"}}>
                    <h2 className="Title">Teams</h2>
                    {teams.map((team) => (
                        <div key={team.teamId} >
                            <p className="form-label" style={{color:"#cfcfcf"}}>{team.teamType}</p>
                        </div>
                    ))}                    
                </div>
                <div className="right-column" >
                    <div style={{display: "flex", width:"100%",paddingLeft:"20px"}}>
                        <h2 className="Title" style={{fontFamily: "poppins", fontSize: "30px"}}>
                            MOVIE NAME 
                        </h2>

                        <button className='Btn' >Add Team Member</button>
                    </div>
                    <hr></hr>
                    <div style={{paddingLeft:"20px"}}>
                            <h2 className="Title" style={{fontFamily: "poppins", fontSize: "20px"}}>
                                SOUND TEAM
                            </h2>
                            {soundTeam.map((member,index) => (
                                <div style={{paddingTop:"5px",paddingBottom:"5px"}}>
                                    <div key={member.name} style={{border: "1px solid #a5a5a5", paddingLeft:"10px"}}>
                                        <p className="form-label" style={{width:"75%"}}>{index+1}   -  {member.name} - <span style={{paddingLeft:"30px",fontFamily: "poppins", fontSize: "15px"}}>{member.role}</span></p>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div style={{paddingLeft:"20px"}}>
                            <h2 className="Title" style={{fontFamily: "poppins", fontSize: "20px"}}>
                                EDITING TEAM
                            </h2>
                            {editingTeam.map((member,index) => (
                                <div style={{paddingTop:"5px",paddingBottom:"5px"}}>
                                    <div key={member.name} style={{border: "1px solid #a5a5a5", paddingLeft:"10px"}}>
                                        <p className="form-label" style={{width:"75%"}}>{index+1}   -  {member.name} - <span style={{paddingLeft:"30px",fontFamily: "poppins", fontSize: "15px"}}>{member.role}</span></p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>  
        </>
    )
}
