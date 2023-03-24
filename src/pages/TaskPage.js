import React from "react";
import TuneIcon from '@mui/icons-material/Tune';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TopNavbar from "../components/common/TopNavBar";
import {Box,Button,IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SearchBar } from "../components/SearchBar";

const tasks = [
    {
      taskId: 1,
      movieName: "The Godfather",
      name: "John",
      team: "Production",
      role: "Producer",
      task: "Schedule filming dates",
      status: "In progress"
    },
    {
      taskId: 2,
      movieName: "The Shawshank Redemption",
      name: "Emily",
      team: "Post-production",
      role: "Editor",
      task: "Edit final cut",
      status: "Not started"
    },
    {
      taskId: 3,
      movieName: "The Dark Knight",
      name: "Tom",
      team: "Marketing",
      role: "Publicist",
      task: "Create social media campaign",
      status: "Complete"
    },
    {
      taskId: 4,
      movieName: "Jurassic Park",
      name: "Mike",
      team: "Production",
      role: "Assistant Director",
      task: "Coordinate extras casting",
      status: "In progress"
    },
    {
      taskId: 5,
      movieName: "The Matrix",
      name: "Samantha",
      team: "Post-production",
      role: "Sound Designer",
      task: "Design and mix sound effects",
      status: "Complete"
    },
    {
      taskId: 6,
      movieName: "Star Wars: A New Hope",
      name: "David",
      team: "Production",
      role: "Cinematographer",
      task: "Plan and execute camera shots",
      status: "In progress"
    },
    {
      taskId: 7,
      movieName: "The Social Network",
      name: "Emily",
      team: "Marketing",
      role: "Social Media Manager",
      task: "Create paid advertising campaign",
      status: "Not started"
    },
    {
      taskId: 8,
      movieName: "Inception",
      name: "Tom",
      team: "Post-production",
      role: "Visual Effects Artist",
      task: "Create and animate digital environments",
      status: "Complete"
    },
    {
      taskId: 9,
      movieName: "Forrest Gump",
      name: "Sarah",
      team: "Marketing",
      role: "Publicist",
      task: "Organize press junket",
      status: "In progress"
    },
    {
      taskId: 10,
      movieName: "The Godfather Part II",
      name: "John",
      team: "Production",
      role: "Line Producer",
      task: "Track expenses and budgets",
      status: "Complete"
    },
    {
      taskId: 11,
      movieName: "The Silence of the Lambs",
      name: "Emily",
      team: "Post-production",
      role: "Colorist",
      task: "Grade final image",
      status: "In progress"
    },
  ];


export default function TaskPage(){

    function deleteTask() {
        console.log("implement logic for delete task");
     }
    return(
        <>
            <TopNavbar
            title="TASKS  >  HARRY POTTER AND THE GOBLET OF FIRE" 
            buttonName="New Task"
            icon={<AssignmentTurnedInIcon/>}
            />
            <div style={{padding:"30px",display:"flex"}}>
                <SearchBar/>
                <Button>
                    <TuneIcon sx={{ fontSize: 40 }} style={{color:"white"}}/>
                </Button>
            </div>

            <Box
                sx={{
                paddingLeft: 0,
                background: "#C2C2C2",
                paddingTop: 2,
                paddingRight: 0,
                }}
            >
                <div>
                    <table className="table table-striped" style={{minWidth:"100%"}}>
                        <thead>
                            <tr>
                                <th style={{padding: "5px 40px"}}>Name</th>
                                <th style={{padding: "5px 40px"}}>Team</th>
                                <th style={{padding: "5px 40px"}}>Role</th>
                                <th style={{padding: "5px 40px"}}>Task</th>
                                <th style={{padding: "5px 40px"}}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task,index) => (
                                <tr key={task.taskId} style={{ backgroundColor: index % 2 === 0 ? '#A4A4A4' : '#C2C2C2' }}>
                                <td style={{padding: "5px 40px"}}>{task.name}</td>
                                <td style={{padding: "5px 40px"}}>{task.team}</td>
                                <td style={{padding: "5px 40px"}}>{task.role}</td>
                                <td style={{padding: "5px 40px"}}>{task.task}</td>
                                <td style={{padding: "5px 40px"}}>{task.status}</td>
                                <td style={{padding: "5px 40px"}}>
                                    <IconButton
                                    aria-label="delete"
                                    size="large"
                                    color="error"
                                    onClick={deleteTask}
                                    >
                                    <DeleteIcon />
                                    </IconButton>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Box>
        </>
    )
}