'use client';

import AutoFileUploader from '@/components/Forms/AutoFileUploader';
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from '@/redux/api/myProfile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import DoctorInformation from './components/DoctorInformation';

const DoctorProfilePage = () => {
  const { data, isLoading } = useGetMYProfileQuery(undefined);
  const [updateMYProfile, { isLoading: loading }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify({}));

    updateMYProfile(formData);
  };

  if (isLoading) {
    <p>Loading</p>;
  }

  //   console.log(data);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
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
          <Box my={3}>
            {loading ? (
              <p>Uploading...</p>
            ) : (
              <AutoFileUploader
                name="file"
                label="Choose Your Profile Photo"
                icon={<CloudUploadIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            )}
          </Box>
          <Grid size={{ xs: 12, md: 8 }}>
            <DoctorInformation data={data} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DoctorProfilePage;
