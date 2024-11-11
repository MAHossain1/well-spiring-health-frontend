import WSFileUploader from '@/components/Forms/WSFileUploader';
import WSForm from '@/components/Forms/WSForm';
import WSInput from '@/components/Forms/WSInput';
import WSSelectField from '@/components/Forms/WSSelectField';
import WSFullScreenModal from '@/components/Shared/WSModal/WSFullScreenModal';
import WSModal from '@/components/Shared/WSModal/WSModal';
import { useCreateSpecialtyMutation } from '@/redux/api/specialtiesApi';
import { Gender } from '@/types';
import { modifyPayload } from '@/utils/modifyPayload';
import { Button, Grid, Grid2 } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = modifyPayload(values);

    try {
      //   const res = await createSpecialty(data).unwrap();
      //   if (res?.id) {
      //     toast.success('Specialty created successfully!!');
      //     setOpen(false);
      //   }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  //   const defaultValues = {
  //     doctor: {
  //       email: 'arman@doctor.com',
  //       name: 'Arman',
  //       contactNumber: 'dke03343423',
  //       address: 'Thakkurgaon',
  //       registrationNumber: '23',
  //       gender: 'MALE',
  //       experience: 2,
  //       apointmentFee: 20,
  //       qualification: 'mb',
  //       currentWorkingPlace: 'DK',
  //       designation: 'ER',
  //       profilePhoto: '',
  //     },
  //     password: 'ami123',
  //   };

  const defaultValues = {
    doctor: {
      email: '',
      name: '',
      contactNumber: '',
      address: '',
      registrationNumber: '',
      gender: '',
      experience: 2,
      apointmentFee: 20,
      qualification: '',
      currentWorkingPlace: '',
      designation: '',
      profilePhoto: '',
    },
    password: '',
  };

  return (
    <WSFullScreenModal
      open={open}
      setOpen={setOpen}
      title="Create A New Doctor"
    >
      <WSForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSSelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.apointmentFee"
              type="number"
              label="ApointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WSInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Create</Button>
      </WSForm>
    </WSFullScreenModal>
  );
};

export default DoctorModal;
