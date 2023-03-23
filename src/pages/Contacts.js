import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import TopNavbar from "../components/common/TopNavBar";


export default function MoodBoards(){
    return(
        <>
            <TopNavbar
            title="Contacts List"
            buttonName="New Contact"
            icon={<BarChartIcon/>}
            />  
        </>
    )
}