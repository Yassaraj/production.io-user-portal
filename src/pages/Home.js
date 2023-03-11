import React from "react";
import TopNavbar from "../components/common/TopNavBar";
import HomeIcon from '@mui/icons-material/Home';



export default function Home(){
    return(
        <>
            <TopNavbar
            title="Projects"
            buttonName="New Project"
            icon={<HomeIcon />}
            />  
        </>
    )
}