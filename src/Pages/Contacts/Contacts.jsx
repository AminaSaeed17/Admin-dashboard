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


export default function Contacts() {
  return <>
    <Box>
       <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference" isDashboard={false}      />

      
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          showToolbar
        />
      </Box>
    </Box>
  </>
}