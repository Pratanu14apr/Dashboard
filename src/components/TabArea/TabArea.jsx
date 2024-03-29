import React from 'react'
import "./TabArea.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningIcon from '@mui/icons-material/Warning';

function TabArea() {
    return (
        <div className='tabBlock'>
            <div className="itemContainer">
                <p className='text1'>Total</p>
                <div className='count'>
                    <p className='text2'>64</p>
                    <p className='hatch'>#</p>
                </div>
            </div>
            <div className="itemContainer">
                <p className='text1'>Pending</p>
                <div className='count'>
                    <p className='text2'>64</p>
                    <AccessTimeIcon style={{ color: "#ffb96e", fontSize: 28 }} />

                </div>
            </div>
            <div className="itemContainer">
                <p className='text1'>Approved</p>
                <div className='count'>
                    <p className='text2'>64</p>
                    <CheckCircleOutlineIcon style={{ color: "#4af0b3", fontSize: 28 }} />

                </div>
            </div>
            <div className="itemContainer">
                <p className='text1'>Clarification Pending</p>
                <div className='count'>
                    <p className='text2'>64</p>
                    <WarningIcon style={{ color: "#4884F0", fontSize: 28 }} />
                </div>
            </div>
        </div>
    )
}

export default TabArea