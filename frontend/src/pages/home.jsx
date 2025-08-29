import React, { useState, useContext } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { IconButton, Button, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore'
import { AuthContext } from '../contexts/AuthContext';

export default function HomeComponent() {
    let navigate = useNavigate();

    const {addToUserHistory} = useContext(AuthContext);
    const [meetingCode, setMeetingCode] = useState("")
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`)
    }
    return (
        <>
            <div className="navBar">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>Apna Video Call</h2>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={
                        () =>{
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon />
                    </IconButton>
                    <p>History</p>
                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>


                </div>
            </div>
            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call</h2>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </>
    )
}