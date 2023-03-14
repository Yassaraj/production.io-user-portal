import React from "react";
import BarChartIcon from '@mui/icons-material/BarChart';
import TopNavbar from "../components/common/TopNavBar";


export default function MoodBoards(){
    return(
        <>
            <TopNavbar
            title="Mood Boards"
            buttonName="New Mood Board"
            icon={<BarChartIcon/>}
            />  
        </>
    )
}