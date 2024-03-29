import React from 'react'
import "./Navbar.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Navbar() {
    return (
        <div className='titleContainer'>
            <p className='titleStyle' >Approve Timesheet</p>
            <div className='introNotification'>
                <div className='nameBlock'>
                    <div className="avatar">
                        <PermIdentityIcon />
                    </div>
                    <div className='textBlock'>
                        <p className='gmText'>Good Morning !</p>
                        <p className='nameText'>John Doe</p>
                    </div>
                </div>
                <div className='avatar'>
                    <NotificationsIcon style={{ color: "#b40000" }} />
                </div>
            </div>

        </div >
    )
}

export default Navbar