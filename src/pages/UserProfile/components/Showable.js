import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import SwipeableEdgeDrawer from './Roadmap';
import { Container } from 'react-bootstrap';
import UserProfile from './UserProfile';

export default function SimpleGrow({ checked, setChecked, roadmapNames }) {
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  // JSX element to display when the switch is on
  const contentWhenChecked = (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100%', flexDirection: 'column' }}>
      {roadmapNames?.map(name =>
        <SwipeableEdgeDrawer key={name?.id} progress={name?.progress} id={name?.id} count={roadmapNames?.length} name={name?.name} />
      )}
    </Container>
  );

  // JSX element to display when the switch is off
  const contentWhenUnchecked = (
    <UserProfile/>
  );

  // Conditionally render content based on the value of the `checked` state
  const content = !checked ? contentWhenChecked : contentWhenUnchecked;

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={checked ? "Profile" : "Roadmaps"}
      />
      <Grow in={true}>{content}</Grow>
    </Box>
  );
}
