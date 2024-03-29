import * as React from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

import './SideBar.css'

export default function SideBar() {


    return (
        <div className='sideBarContainer'>

            <div className='upper'>
                <div className='logo'>
                    <a href="">
                        <p>LOGO</p>
                    </a>
                </div>
                <div className='menu'>
                    <div className='menuEachItem'>
                        <DashboardOutlinedIcon style={{ marginRight: 6, color: "#222124b3" }} />
                        <a href="" className="menuAnchor">

                            <p className='menuTextStyle'>Dashboard</p>
                        </a>
                    </div>
                    <div className='menuEachItem'>
                        <PersonAddAltOutlinedIcon style={{ marginRight: 6, color: "#222124b3" }} />
                        <a href="" className="menuAnchor">

                            <p className='menuTextStyle'>Add Candidate</p>
                        </a>
                    </div>
                    <div className='menuEachItem'>
                        <DashboardOutlinedIcon style={{ marginRight: 6, color: "#222124b3" }} />
                        <a href="" className="menuAnchor">

                            <p className='menuTextStyle'>Assignment Dashboard</p>
                        </a>
                    </div>
                    <div className='menuEachItem'>
                        <PlaylistAddCheckOutlinedIcon style={{ marginRight: 6, color: "#222124b3" }} />
                        <a href="" className="menuAnchor">

                            <p className='menuTextStyle'>My Timesheet</p>
                        </a>
                    </div>
                    <div className='menuEachItem'>
                        <TaskOutlinedIcon style={{ marginRight: 6, color: "#222124b3" }} />
                        <a href="" className="menuAnchor">

                            <p className='menuTextStyle'>Approve Timesheet</p>
                        </a>
                    </div>
                    <div className='menuEachItem'>
                        <LoginOutlinedIcon style={{ marginRight: 6, color: "#222124b3" }} />
                        <a href="" className="menuAnchor">

                            <p className='menuTextStyle'>Login to HRMS</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='signOut'>
                <div className='menuEachItem'>
                    <LogoutIcon style={{ marginRight: 6, color: "#222124b3" }} />
                    <a className="menuAnchor" href="">

                        <p className='menuTextStyle'>Sign Out</p>
                    </a>
                </div>
            </div>

        </div>
    );
}