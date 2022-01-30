import React from "react";
import Grid from "@mui/material/Grid";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { TextProps } from "../types/interfaces";

export default function TextInput({
  control,
  name,
  defaultValue = "",
  label,
  style,
}: TextProps) {
  return (
    <Grid item sx={style}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            fullWidth
            {...field}
          />
        )}
      />
    </Grid>
  );
}
