import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import TopNavbar from "../components/common/TopNavBar";


export default function MoodBoards(){
    return(
        <>
            <TopNavbar
            title="MOOD BOARDS"
            buttonName="New Mood Board"
            icon={<BarChartIcon/>}
            />  
        </>
    )
}