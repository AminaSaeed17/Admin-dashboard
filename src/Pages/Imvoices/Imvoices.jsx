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
import Header from '../../Components/Header/Header';


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
       <Header title="INVOICES" subTitle="List of Invoice Balances" isDashboard={false} />
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
