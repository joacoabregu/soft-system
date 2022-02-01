import * as React from "react";
import { TableContextValue } from "../types/interfaces";

const TableContext = React.createContext<TableContextValue | undefined>(
  undefined
);
TableContext.displayName = "TableContext";

function useTableContext() {
  const context = React.useContext(TableContext);
  if (context === undefined) {
    throw new Error(`useTable must be used within a TableProvider`);
  }
  return context;
}

export { TableContext, useTableContext };
