import WSDatePicker from '@/components/Forms/WSDatePicker';
import WSForm from '@/components/Forms/WSForm';
import WSTimePicker from '@/components/Forms/WSTimePicker';
import WSModal from '@/components/Shared/WSModal/WSModal';
import { useCreateScheduleMutation } from '@/redux/api/scheduleApi';
import { dateFormatter } from '@/utils/dateFormatter';
import { timeFormatter } from '@/utils/timeFormatter';
import { Button, Grid, Grid2 } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);

    // console.log(values, 'date pick');
    try {
      const res = await createSchedule(values).unwrap();
      if (res?.length) {
        toast.success('Schedules created successfully!');
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WSModal open={open} setOpen={setOpen} title="Create Schedule">
      <WSForm onSubmit={handleFormSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            width: '400px',
          }}
        >
          <Grid item md={12}>
            <WSDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <WSDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <WSTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <WSTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: 1,
          }}
          type="submit"
        >
          Create
        </Button>
      </WSForm>
    </WSModal>
  );
};

export default ScheduleModal;
