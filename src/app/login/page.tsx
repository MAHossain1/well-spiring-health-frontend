'use client';

import assets from '@/assets';
import WSForm from '@/components/Forms/WSForm';
import WSInput from '@/components/Forms/WSInput';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
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

export const validationSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password should be at least 6 characters.'),
});

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);

      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push('/');
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
              <Typography mb={2} variant="h6" fontWeight={600}>
                Login WellSpring Health
              </Typography>
            </Box>
          </Stack>
          <Box>
            <WSForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: '',
                password: '',
              }}
            >
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={6}>
                  <WSInput
                    name="email"
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
              </Grid2>
              <Typography
                mb={1}
                textAlign={'end'}
                component="p"
                fontWeight={300}
              >
                <Link href="/register">Forget Password?</Link>
              </Typography>
              <Button
                sx={{ margin: '10px 0px' }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography mt={1} component="p" fontWeight={300}>
                New to WellSpiring Health?{' '}
                <Link href="/register">Please Register</Link>
              </Typography>
            </WSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
