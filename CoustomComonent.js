import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { CustomComponent } from './CustomComponent';

export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        backgroundColor: '#f5f5f5',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <h1>My Store</h1>
      <CustomComponent />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
        sx={{ mt: 2 }}
      >
        Click Me {count}
      </Button>
    </Box>
  );
}
