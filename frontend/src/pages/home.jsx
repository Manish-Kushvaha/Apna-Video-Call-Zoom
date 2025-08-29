// import React, { useState, useContext } from 'react'
// import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { IconButton, Button, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore'
// import { AuthContext } from '../contexts/AuthContext';

// export default function HomeComponent() {
//     let navigate = useNavigate();

//     const {addToUserHistory} = useContext(AuthContext);
//     const [meetingCode, setMeetingCode] = useState("")
//     let handleJoinVideoCall = async () => {
//         await addToUserHistory(meetingCode);
//         navigate(`/${meetingCode}`)
//     }
//     return (
//         <>
//             <div className="navBar">
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <h2>Apna Video Call</h2>
//                 </div>
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () =>{
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>
//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
//                     }}>
//                         Logout
//                     </Button>


//                 </div>
//             </div>
//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call</h2>
//                         <div style={{ display: "flex", gap: "10px" }}>
//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Button, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import "../App.css";

export default function HomeComponent() {
    const navigate = useNavigate();
    const { addToUserHistory } = useContext(AuthContext);
    const [meetingCode, setMeetingCode] = useState("");

    const handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3">
                <div className="container-fluid">
                    <h2 className="navbar-brand">Apna Video Call</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-3">
                            <li className="nav-item d-flex align-items-center">
                                <IconButton onClick={() => navigate("/history")} className="text-white">
                                    <RestoreIcon />
                                </IconButton>
                                <span className="text-white">History</span>
                            </li>
                            <li className="nav-item">
                                <Button variant="contained" color="warning" onClick={() => {
                                    localStorage.removeItem("token");
                                    navigate("/auth");
                                }}>
                                    Logout
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid py-5">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
                        <h2>Providing Quality Video Call</h2>
                        <div className="d-flex flex-column flex-sm-row gap-2 mt-3 justify-content-center justify-content-md-start">
                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Meeting Code"
                                variant="outlined"
                            />
                            <Button variant='contained' onClick={handleJoinVideoCall}>Join</Button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-center">
                        <img srcSet='/logo3.png' alt="Logo" className="img-fluid" style={{ maxHeight: "50vh" }} />
                    </div>
                </div>
            </div>
        </>
    );
}