import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import TuneIcon from '@mui/icons-material/Tune';
import BadgeIcon from '@mui/icons-material/Badge';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TopNavbar from "../components/common/TopNavBar";
import {Box,Button,IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SearchBar } from "../components/SearchBar";


const users = [
    {
      userId: 1,
      name: "John Smith",
      contactNumber: "555-1234",
      email: "john.smith@example.com",
      team: "Sales",
      role: "Sales Representative"
    },
    {
      userId: 2,
      name: "Sarah Johnson",
      contactNumber: "555-5678",
      email: "sarah.johnson@example.com",
      team: "Marketing",
      role: "Marketing Manager"
    },
    {
      userId: 3,
      name: "Michael Lee",
      contactNumber: "555-2468",
      email: "michael.lee@example.com",
      team: "Engineering",
      role: "Software Developer"
    },
    {
      userId: 4,
      name: "Emily Davis",
      contactNumber: "555-9876",
      email: "emily.davis@example.com",
      team: "Human Resources",
      role: "HR Manager"
    },
    {
      userId: 5,
      name: "David Martinez",
      contactNumber: "555-3698",
      email: "david.martinez@example.com",
      team: "Customer Support",
      role: "Customer Support Specialist"
    },
    {
      userId: 6,
      name: "Alicia Rodriguez",
      contactNumber: "555-4321",
      email: "alicia.rodriguez@example.com",
      team: "Sales",
      role: "Sales Manager"
    },
    {
      userId: 7,
      name: "Joshua Brown",
      contactNumber: "555-2468",
      email: "joshua.brown@example.com",
      team: "Engineering",
      role: "Senior Software Developer"
    },
    {
      userId: 8,
      name: "Natalie Kim",
      contactNumber: "555-8765",
      email: "natalie.kim@example.com",
      team: "Marketing",
      role: "Marketing Coordinator"
    },
    {
      userId: 9,
      name: "Robert Johnson",
      contactNumber: "555-1111",
      email: "robert.johnson@example.com",
      team: "Human Resources",
      role: "Recruiter"
    },
    {
      userId: 10,
      name: "Jennifer Lee",
      contactNumber: "555-2222",
      email: "jennifer.lee@example.com",
      team: "Customer Support",
      role: "Customer Support Manager"
    },
    {
      userId: 11,
      name: "Ethan Davis",
      contactNumber: "555-3333",
      email: "ethan.davis@example.com",
      team: "Sales",
      role: "Sales Representative"
    },
    {
      userId: 12,
      name: "Grace Hernandez",
      contactNumber: "555-4444",
      email: "grace.hernandez@example.com",
      team: "Engineering",
      role: "Software Engineer"
    },
    {
      userId: 13,
      name: "Samuel Rodriguez",
      contactNumber: "555-5555",
      email: "samuel.rodriguez@example.com",
      team: "Marketing",
      role: "Marketing Specialist"
    },
  ]

export default function Contacts(){

    function deleteUser() {
        console.log("implement logic for delete user");
     }
    return(
        <>
            <TopNavbar
            title="CONTACT LIST"
            buttonName="New Contact"
            icon={<BadgeIcon/>}
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
                                <th style={{padding: "5px 40px"}}>Contact Number</th>
                                <th style={{padding: "5px 40px"}}>Email</th>
                                <th style={{padding: "5px 40px"}}>Team</th>
                                <th style={{padding: "5px 40px"}}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index) => (
                                <tr key={user.userId} style={{ backgroundColor: index % 2 === 0 ? '#898989' : '#C2C2C2' }}>
                                <td style={{padding: "5px 40px"}}>{user.name}</td>
                                <td style={{padding: "5px 40px"}}>{user.contactNumber}</td>
                                <td style={{padding: "5px 40px"}}>{user.email}</td>
                                <td style={{padding: "5px 40px"}}>{user.team}</td>
                                <td style={{padding: "5px 40px"}}>{user.role}</td>
                                <td style={{padding: "5px 40px"}}>
                                    <IconButton
                                    aria-label="delete"
                                    size="large"
                                    color="error"
                                    onClick={deleteUser}
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