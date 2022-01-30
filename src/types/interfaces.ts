import { UseFormRegister, UseFormResetField } from "react-hook-form";
import { Control } from "react-hook-form";
import { SxProps, Theme } from "@mui/material/styles";

export interface FormInput {
  title: string;
  description: string;
  date: string;
  duration: string;
  endDuration: string;
  type: string;
  candidates: {
    name?: string;
    description?: string;
    image?: File;
  }[];
}
export interface FormTableProps {
  columns: string[];
  rows: number;
  register: UseFormRegister<FormInput>;
  resetField: UseFormResetField<FormInput>;
}

export interface FormTableBodyProps {
  rows: number;
  register: UseFormRegister<FormInput>;
  resetField: UseFormResetField<FormInput>;
}

export interface TextInputProps {
  control: Control<FormInput, object>;
  name: "title" | "description" | "date" | "duration" | "endDuration" | "type";
  defaultValue?: string;
  label: string;
  style?: SxProps<Theme> | undefined;
  xs?: number
  md?: number
}
