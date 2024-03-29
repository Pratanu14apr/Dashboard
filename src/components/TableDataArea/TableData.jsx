import React, { useState } from 'react'
import "./TableData.css"
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';

import { Paper, Box } from '@mui/material';
import TimeSheet from './TimeSheet/TimeSheet';


function TableData() {

    const dummyData = [
        { id: 1, name: 'Srikanta Kumar', subject: 'Python', color: '#f09b96', initials: 'S' },
        { id: 2, name: 'Radhika Bose', subject: 'Web Developer', color: '#91e1b0', initials: 'R' },
        { id: 3, name: 'Chandrima Saha', subject: 'Python', color: '#f5c97d', initials: 'C' },
        { id: 4, name: 'Tufan Gupta', subject: 'Test', color: '#87d7c8', initials: 'T' },
        { id: 5, name: 'Raja Santra', subject: 'Web Developer', color: '#c8a5d2', initials: 'R' },
        { id: 6, name: 'Rubina Khatun', subject: 'Web Developer', color: '#919ba5', initials: 'R' },
    ];

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },

        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
        border: '0.8px solid #ccc',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        fontSize: 14,
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },

        },
    }));


    return (
        <div className='outerContainer'>
            <div className="searchAndListArea">
                <div className='searchArea'>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon style={{ fontSize: 16, color: "gray" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search candidate"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
                <div className="listBlock">
                    {dummyData.map(candidate => (
                        <div key={candidate.id} className='itemList'>
                            <Avatar sx={{ bgcolor: candidate.color, color: "#946a6a", width: 33, height: 33 }} style={{ marginRight: 10 }}>
                                {candidate.initials}
                            </Avatar>
                            <div className='nameSubjectTextBlock'>
                                <p style={{ fontSize: 14 }}>{candidate.name}</p>
                                <p className='subName'>{candidate.subject}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tableArea">
                <TimeSheet />
            </div>
        </div >
    )
}

export default TableData