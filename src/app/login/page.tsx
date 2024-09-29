import assets from '@/assets';
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
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
            <form>
              <Grid2 container spacing={2} my={1}>
                <Grid2 size={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
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
              <Button sx={{ margin: '10px 0px' }} fullWidth={true}>
                Login
              </Button>
              <Typography mt={1} component="p" fontWeight={300}>
                New to WellSpiring Health?{' '}
                <Link href="/register">Please Register</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
