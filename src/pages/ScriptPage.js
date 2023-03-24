import React from "react";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TopNavbar from "../components/common/TopNavBar";
import styles from "../styles/scripts.css"

export default function ScriptPage(){
    return(
        <>
            <TopNavbar
            title="SCRIPTS"
            buttonName="Import Scripts"
            icon={<TravelExploreIcon/>}
            />  
        </>
    )
}