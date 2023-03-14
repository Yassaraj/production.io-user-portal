import React from "react";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TopNavbar from "../components/common/TopNavBar";


export default function ScriptPage(){
    return(
        <>
            <TopNavbar
            title="Scripts"
            buttonName="Import Scripts"
            icon={<TravelExploreIcon/>}
            />  
        </>
    )
}