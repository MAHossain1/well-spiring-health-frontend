import assets from '@/assets';
import { UserRole } from '@/types';
import { drawerItems } from '@/utils/drawerItems';
import { Box, List, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SidebarItems from './SidebarItem';

const SideBar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
        component={Link}
        href="/"
        sx={{
          py: 1,
          mt: 1,
        }}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6">WellSpiring Health</Typography>
      </Stack>
      <List>
        {drawerItems('admin' as UserRole).map((item, index) => (
          <SidebarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
