import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import TopNavbar from "../components/common/TopNavBar";


export default function CallSheet(){
    return(
        <>
            <TopNavbar
            title="CALL SHEET"
            icon={<SettingsIcon/>}
            />  
        </>
    )
}