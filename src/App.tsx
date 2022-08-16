import React, { useState } from 'react';
import { Container } from '@mui/system';
import { Button, Card, Stack, TextField } from '@mui/material';

const BASE_URL =
  'https://jp.packcity.com/modules/wsr/WSR_viewBarcode.php?DPN=&PSN=';

export default function App() {
  const [number, setNumber] = useState('');

  return (
    <Container maxWidth="sm" sx={{ paddingX: '0px' }}>
      <Card
        sx={{
          p: 2,
        }}
      >
        <Stack spacing={2}>
          <TextField
            onChange={(e) => setNumber(e.target.value)}
            label="Number"
            type="number"
          />

          <Button href={BASE_URL + number} variant="contained">
            display barcode
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
