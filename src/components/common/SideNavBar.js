import { navData } from "../../assets/data/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from "react-router-dom";
import {useState} from 'react';
import styles from "../../styles/common/sidenavbar.module.css";
export default function SideNavBar() {
    const [open, setopen] = useState(false)
    const toggleOpen = () => {
        setopen(!open)
    }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
        <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 25 }} />: <KeyboardDoubleArrowRightIcon sx={{ fontSize: 25 }}/>}
        </button>
        {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            <div style={{paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px", paddingLeft:"10px"}}>
                {item.icon}
            </div>
            <span style={{fontSize:"20px"}} className={styles.linkText}>{item.text}</span>
        </NavLink>
        })}
    </div>
  )
}