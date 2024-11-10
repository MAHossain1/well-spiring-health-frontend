'use client';

import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from '@/redux/api/specialtiesApi';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import { useState } from 'react';
import SpecialtyModal from './components/SpecialtyModal';
import { toast } from 'sonner';

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllSpecialtiesQuery({});

  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteSpecialty(id);
      console.log(res);
      toast.success('Specialty deleted done.');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', flex: 1 },
    {
      field: 'icon',
      headerName: 'Icon',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box mt={1}>
            <Image src={row.icon} alt="icon" width={25} height={25} />
          </Box>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <IconButton
            onClick={() => handleDelete(row.id)}
            aria-label="delete"
            size="large"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
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
