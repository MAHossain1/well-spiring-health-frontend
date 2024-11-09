import WSFileUploader from '@/components/Forms/WSFileUploader';
import WSForm from '@/components/Forms/WSForm';
import WSInput from '@/components/Forms/WSInput';
import WSModal from '@/components/Shared/WSModal/WSModal';
import { Button, Grid, Grid2, TextField } from '@mui/material';
import { FieldValues } from 'react-hook-form';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = (values: FieldValues) => {};

  return (
    <WSModal open={open} setOpen={setOpen} title="Create A New Specialty">
      <WSForm onSubmit={handleFormSubmit}>
        <Grid2 container spacing={2}>
          <Grid item md={6}>
            <WSInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <WSFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid2>
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

export default SpecialistModal;
