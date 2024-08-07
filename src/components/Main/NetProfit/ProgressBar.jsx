import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressChildren() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const increment = 0.7; 
    const interval = 20; 
    const targetProgress = 70;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= targetProgress) {
        currentProgress = targetProgress;
        clearInterval(timer);
      }
      setProgress(currentProgress);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
      <CircularProgress
        determinate
        value={progress}
        sx={{
          '--CircularProgress-size': '90px',
          '--CircularProgress-thickness': '10px',
          '--CircularProgress-progressColor': 'var(--c-primary)',
          '--CircularProgress-trackColor': 'var(--c-blue3)',
          color: 'var(--c-light)',
        }}
      >
        <Box
          sx={{
            color: 'var(--c-light)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2em',
            fontWeight: '700',
          }}
        >
          {Math.round(progress)}%
          <Box sx={{ fontSize: '0.37em', fontWeight: 'normal', textAlign: 'center' }}>
            <div>Goal</div>
            <div>Completed</div>
          </Box>
        </Box>
      </CircularProgress>
    </Box>
  );
}
