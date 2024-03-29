import React from 'react'
import "./Dashboard.css"
import SideBar from '../SideBar/SideBar'
import Navbar from './../NavBar/Navbar';
import TabArea from '../TabArea/TabArea';
import TableData from '../TableDataArea/TableData';
function Dashboard() {



    return (
        <div className='container'>
            <div className='leftBlock'>
            <SideBar />
            </div>
            <div className='rightBlock'>
                <Navbar />
                <TabArea />
                <TableData />
            </div>
        </div>
    )
}

export default Dashboard