import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 function Sidebar() {
  const [openDerma, setOpenDerma] = React.useState(true);
  const [openDentist, setOpenDentist] = React.useState(true);
  const [openLaser, setOpenLaser] = React.useState(true);
  const [openNutr, setOpenNutr] = React.useState(true);
  const [openPed, setOpenPed] = React.useState(true);


  const navigate = useNavigate();

  const handleClickDerma = () => {
    setOpenDerma(!openDerma);
  };
  const handleClickDentist = () => {
    setOpenDentist(!openDentist);
  };
  const handleClickLaser = () => {
    setOpenLaser(!openLaser);
  };
  const handleClickNutr = () => {
    setOpenNutr(!openNutr);
  };
  const handleClickPed = () => {
    setOpenPed(!openPed);
  };

  const handleDoctorButtonClick = (doctorName) => {

    axios
      .post('http://localhost:8800/getDoctorId', { doctorName }) // Adjust the API endpoint
      .then((response) => {
        const doctorId = response.data.doctorId;
        navigate(`/modify/calendar?doctorId=${doctorId}`);
      })
      .catch((error) => {
        console.error('Error sending request:', error);
      });
  };




  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'pink' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         Doctors List
        </ListSubheader>
      }
    >
       <ListItemButton onClick={handleClickDerma}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Dermatology" />
        {openDerma ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openDerma} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }} onClick={() => handleDoctorButtonClick('Amr Lotfy Monib')}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Amr Lotfy Monib" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Youssef Selimah" />
          </ListItemButton>

        </List>
      </Collapse>

      <ListItemButton onClick={handleClickLaser}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Laser" />
        {openLaser ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openLaser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            
            </ListItemIcon>
            <ListItemText primary="Emad Nawar" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Ali Gaber" />
          </ListItemButton>

        </List>
      </Collapse>

      <ListItemButton onClick={handleClickDentist}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Dentist" />
        {openDentist ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

     
      <Collapse in={openDentist} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Salsabil Lotfy" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Youssef Mazen" />
          </ListItemButton>

        </List>
      </Collapse>

      <ListItemButton onClick={handleClickNutr}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Nutrition" />
        {openNutr ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

     
      <Collapse in={openNutr} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Yassin Fayed" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Janna Tarek" />
          </ListItemButton>

        </List>
      </Collapse>


      <ListItemButton onClick={handleClickPed}>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Pediatrics" />
        {openPed ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

     
      <Collapse in={openPed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
             
            </ListItemIcon>
            <ListItemText primary="Dr Ped" />
          </ListItemButton>

        </List>
      </Collapse>


    </List>
  );
}; 
export default Sidebar ; 