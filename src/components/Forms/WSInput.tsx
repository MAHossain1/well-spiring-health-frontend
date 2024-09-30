import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type TInputProps = {
  name: string;
  label?: string;
  size?: 'small' | 'medium';
  type?: string;
  variant?: string;
  fullWidth?: boolean;
};

const WSInput = ({
  name,
  label,
  size = 'small',
  type = 'text',
  fullWidth,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default WSInput;
