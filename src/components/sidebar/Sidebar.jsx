import DashboardIcon from "@mui/icons-material/Dashboard";
import  ExitToAppIcon  from "@mui/icons-material/ExitToApp";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import { Link } from "react-router-dom"
import  { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext"
import  "./sidebar.css"

export const Sidebar = () => {

    const { dispatch} = useContext(DarkModeContext)
    return (
<>
<div className="sidebar_component">
    <div className="top">
        <Link to="/">
        <span className="logo">CricBuzz </span>
        <ListOutlinedIcon />
        </Link>
    </div>
    <hr/>
    <div className="center">
        <ul>
            <p className="title">Main</p>
            <li>
                <DashboardIcon/>
                <span>
                
                Dasboard</span>
            </li>
            <li>
                <span>Dasboard</span>
            </li>
            <p className="title">User</p>
            <li>
                <Link to="/login">
                <ExitToAppIcon/>
                <span>Logout</span>
                </Link>
            </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorchanger" onClick={()=> dispatch({type : "LIGHT"})} ></div>
        <div className="colorchanger" onClick={()=> dispatch({type : "DARK"})}></div>
    </div>
</div>
</>
    )
}