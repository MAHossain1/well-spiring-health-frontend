'use client';

import { getUserInfo, isLoggedIn } from '@/services/auth.services';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const userInfo = getUserInfo();

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography component={Link} href="/" variant="h4" fontWeight={600}>
          Well
          <Box component="span" color="primary.main">
            Spring
          </Box>{' '}
          Health
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/heath-plans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>
        {!userInfo?.userId ? (
          <Button component={Link} href="/login">
            Login
          </Button>
        ) : (
          <Button color="error">Logout</Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
