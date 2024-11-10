'use client';

import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import SpecialtyModal from './components/SpecialtyModal';
import { useGetAllSpecialtiesQuery } from '@/redux/api/specialtiesApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro';
import Image from 'next/image';

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 260 },
    {
      field: 'icon',
      headerName: 'Icon',
      width: 160,
      renderCell: ({ row }) => {
        return (
          <Box mt={1}>
            <Image src={row.icon} alt="icon" width={25} height={25} />
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField placeholder="Search specialist" />
      </Stack>
      {!isLoading ? (
        <Box>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <div>Loading</div>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
