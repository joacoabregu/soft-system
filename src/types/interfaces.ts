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
  voters: {
    id: string;
    name: string;
    email: string;
    wallet: string;
  }[];
}


export interface TextInputProps {
  name: "title" | "description" | "date" | "duration" | "endDuration" | "type";
  defaultValue?: string;
  label: string;
  style?: SxProps<Theme> | undefined;
  xs?: number;
  md?: number;
}

export interface FormContextValue {
  control: Control<FormInput, object>;
  register: UseFormRegister<FormInput>;
  resetField: UseFormResetField<FormInput>;
}

export interface TableContextValue {
  tableName: "candidates" | "voters";
  title: string;
  rows: ["name", "description", "image"] | ["id", "name", "email", "wallet"];
  columns: string[];
  rowsNumber: number;
  setRowsNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface TableCellImageProps {
  table: "candidates";
  column: "image";
  index: number;
}
