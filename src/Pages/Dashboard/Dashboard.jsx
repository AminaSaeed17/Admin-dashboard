import { Box, Button, Stack, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import Header from "../../Components/Header/Header";

export default function Dashboard() {
  const theme = useTheme();
  return <>
    <Stack>

      <Stack sx={{justifyContent: "space-between", alignItems: "center"}} direction="row">
        <Header title="Dashboard" subTitle="Welcome to your dashboard" isDashboard={true} />
        
        <Box sx={{textAlign: "right"}}>
          <Button sx={{margin: '10px', width: 'fit-content', textTransform: "capitalize"}} variant="contained" color="primary">
          <DownloadOutlined />
          download reports
        </Button>
        </Box>
      </Stack>

      <Row1/>
      <Row2/>
      <Row3/>
    </Stack>
  </>
}
