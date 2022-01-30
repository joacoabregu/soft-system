import { UseFormRegister, UseFormResetField } from "react-hook-form";

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
