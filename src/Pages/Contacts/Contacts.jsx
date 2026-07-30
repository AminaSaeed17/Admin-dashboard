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


export default function Contacts() {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        showToolbar
      />
    </Box>
  );
}