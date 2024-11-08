'use client';

import assets from '@/assets';
import WSForm from '@/components/Forms/WSForm';
import WSInput from '@/components/Forms/WSInput';
import { registerPatient } from '@/services/actions/registerPatient';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import { modifyPayload } from '@/utils/modifyPayload';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const patientValidationSchema = z.object({
  name: z.string().min(1, 'Please enter your name!'),
  email: z.string().email('Please enter a valid email address!'),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, 'Please provide a valid phone number!'),
  address: z.string().min(1, 'Please enter your address!'),
});

export const validationSchema = z.object({
  password: z.string().min(6, 'Must be at least 6 characters'),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: '',
  patient: {
    name: '',
    email: '',
    contactNumber: '',
    address: '',
  },
};

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          email: values.patient.email,
          password: values.password,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push('/dashboard');
        }
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '600px',
            width: '100%',
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Stack
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <WSForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={12}>
                  <WSInput
                    name="patient.name"
                    label="Name"
                    type="text"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <WSInput
                    name="patient.email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <WSInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <WSInput
                    name="patient.contactNumber"
                    label="Contact Number"
                    type="tel"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <WSInput
                    name="patient.address"
                    label="Address"
                    type="text"
                    fullWidth={true}
                  />
                </Grid2>
              </Grid2>
              <Button
                sx={{ margin: '10px 0px' }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </WSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
