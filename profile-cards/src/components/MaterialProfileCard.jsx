import React from 'react';
import { Card, CardContent, Avatar, Typography, Button } from '@mui/material';
import profileImage from '../assets/profile.png';

export default function MaterialProfileCard() {
  return (
    <Card sx={{ width: 300, backgroundColor: '#f5f5f5', borderRadius: 2, border: '1px solid #e0e0e0' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Avatar src={profileImage} sx={{ width: 100, height: 100, margin: '0 auto' }} />
        <Typography variant="h6"sx={{ fontWeight: 'bold', marginTop: 2 }}>Matti Meikäläinen</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Full-stack developer, passionate about coding and coffee
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#1976d2', marginTop: 2 }}>Contact Me</Button>
        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
          Created with Material UI
        </Typography>
        
      </CardContent>
    </Card>
  );
}
