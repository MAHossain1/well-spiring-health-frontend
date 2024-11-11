import WSDatePicker from '@/components/Forms/WSDatePicker';
import WSForm from '@/components/Forms/WSForm';
import WSModal from '@/components/Shared/WSModal/WSModal';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {
    console.log(values, 'date pick');
    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WSModal open={open} setOpen={setOpen} title="Create Schedule">
      <WSForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <WSDatePicker name="startDate" />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </WSForm>
    </WSModal>
  );
};

export default ScheduleModal;
