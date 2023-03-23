import React from "react";
import TopNavbar from "../components/common/TopNavBar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ProfilePage(){
    return(
        <>
            <TopNavbar
            title="PROFILE"
            icon={<AccountCircleIcon/>}
            />  
        </>
    )
}