import WSFileUploader from '@/components/Forms/WSFileUploader';
import WSForm from '@/components/Forms/WSForm';
import WSInput from '@/components/Forms/WSInput';
import WSModal from '@/components/Shared/WSModal/WSModal';
import { useCreateSpecialtyMutation } from '@/redux/api/specialtiesApi';
import { modifyPayload } from '@/utils/modifyPayload';
import { Button, Grid, Grid2 } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success('Specialty created successfully!!');
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

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

export default SpecialtyModal;
