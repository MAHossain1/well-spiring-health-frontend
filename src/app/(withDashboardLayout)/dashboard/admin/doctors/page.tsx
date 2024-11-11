'use client';

import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import DoctorModal from './components/DoctorModal';
import { useGetAllDoctorsQuery } from '@/redux/api/doctorApi';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';

import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data, isLoading } = useGetAllDoctorsQuery({});
  // console.log(data);

  const doctors = data?.doctors;
  const meta = data?.meta;

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'contactNumber', headerName: 'Contact Number', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'apointmentFee', headerName: 'Appointment Fee', flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              // onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <GridDeleteIcon sx={{ color: 'red' }} />
            </IconButton>
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Doctors" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default DoctorsPage;
