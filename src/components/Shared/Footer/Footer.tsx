import { Box, Container, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import facebookIcon from '@/assets/landing_page/facebook.png';
import instagramIcon from '@/assets/landing_page/instagram.png';
import twitterIcon from '@/assets/landing_page/twitter.png';
import linkedinIcon from '@/assets/landing_page/linkedin.png';

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff" component={Link} href="/heath-plans">
            Health Plans
          </Typography>
          <Typography color="#fff" component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color="#fff" component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color="#fff" component={Link} href="/ngos">
            NGOs
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="center" gap={4} py={3}>
          <Link href="www.facebook.com/arman-web-dev">
            {' '}
            <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          </Link>
          <Link href="/">
            <Image src={instagramIcon} width={30} height={30} alt="instagram" />
          </Link>
          <Link href="/">
            {' '}
            <Image src={twitterIcon} width={30} height={30} alt="twitter" />
          </Link>
          <Link href="/">
            {' '}
            <Image src={linkedinIcon} width={30} height={30} alt="linkedin" />
          </Link>
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}

        <Box
          sx={{
            border: '1px dashed lightgray',
          }}
        ></Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          py={3}
        >
          <Typography color="#fff" component="p">
            &copy; 2024 WellSpiring Health. All Rights Reserved.
          </Typography>

          <Typography color="#fff" variant="h4" fontWeight={600}>
            Well
            <Box component="span" color="primary.main">
              Spring
            </Box>{' '}
            Health
          </Typography>
          <Typography color="#fff" component="p">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
