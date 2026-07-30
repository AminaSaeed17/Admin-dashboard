import {
  DataGrid,
  Toolbar,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
} from '@mui/x-data-grid';

import { columns, rows } from './data';
import { Box } from '@mui/material';


function CustomToolbar() {
  return (
    <Toolbar>
      <ColumnsPanelTrigger />
      <FilterPanelTrigger />
      <ExportCsv />
      <ExportPrint />
    </Toolbar>
  );
}



export default function Imvoices() {
  return <>
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
      checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
        showToolbar
      />
    </Box>
  </>
}
