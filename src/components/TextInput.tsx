import React from "react";
import Grid from "@mui/material/Grid";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { TextInputProps } from "../types/interfaces";
import { useFormContext } from "../context/FormContext";

export default function TextInput({
  name,
  defaultValue = "",
  label,
  style = {},
  xs,
  md,
}: TextInputProps) {
  const { control } = useFormContext();

  return (
    <Grid item xs={xs} md={md} sx={{ ...style }}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            fullWidth
            sx={{ backgroundColor:" #f3f3f37d", borderRadius: 4 }}
            {...field}
          />
        )}
      />
    </Grid>
  );
}
