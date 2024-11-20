'use client';

import { useGetMYProfileQuery } from '@/redux/api/myProfile';
import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import DoctorInformation from './components/DoctorInformation';

const DoctorProfilePage = () => {
  const { data, isLoading } = useGetMYProfileQuery(undefined);

  if (isLoading) {
    <p>Loading</p>;
  }

  //   console.log(data);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Box
            sx={{
              height: 300,
              width: '100%',
              overflow: 'hidden',
              borderRadius: 1,
            }}
          >
            <Image
              height={300}
              width={400}
              src={data?.profilePhoto}
              alt="User Photo"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <DoctorInformation data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorProfilePage;
