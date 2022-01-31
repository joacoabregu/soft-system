import * as React from "react";
import { FormContextValue } from "../types/interfaces";

const FormContext = React.createContext<FormContextValue | undefined>(
  undefined
);
FormContext.displayName = "FormContext";

function useFormContext() {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error(`useForm must be used within a FormProvider`);
  }
  return context;
}

export { FormContext, useFormContext };
