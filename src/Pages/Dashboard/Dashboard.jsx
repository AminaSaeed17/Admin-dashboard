import { Box, Button, Stack, useTheme } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";

export default function Dashboard() {
  const theme = useTheme();
  return <>
    <Stack>

      <Box sx={{textAlign: "right"}}>
        <Button sx={{margin: '10px', width: 'fit-content', textTransform: "capitalize"}} variant="contained" color="primary">
        <DownloadOutlined />
        download reports
      </Button>
      </Box>

      <Row1/>
      <Row2/>
      <Row3/>
    </Stack>
  </>
}
