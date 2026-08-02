import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import LineChartSection from "../../Pages/LineChart/LineChartSection";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

export default function Row2() {
  const theme = useTheme();
  return <>
    <Stack sx={{flexDirection: "row", mt:3, gap: 1, flexWrap: "wrap"}}>
      <Paper sx={{maxWidth: 900, flexGrow: 1}}>
        <Stack sx={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box>
            <Typography variant="h6" sx={{mb:1, mt:2, ml:4, color: theme.palette.secondary.main}}>Revenue Generated</Typography>
          <Typography variant="body2" sx={{ml:4}}>
              $59,342.32
            </Typography>
          </Box>
            <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>

        </Stack>
        <LineChartSection isDashboard={true} />
      </Paper>
      <Box sx={{overflow: 'auto', height: 333, flexGrow: 1, minWidth: '250px'}}>
        <Paper sx={{p:1, color: theme.palette.secondary.main}}>Recent Transactions</Paper>
        {Transactions.map((item) => (
          <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{p: 1.2}}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
              sx={{borderRadius: 1.4, p: 1, backgroundColor: theme.palette.error.main, color: theme.palette.getContrastText(theme.palette.error.main) }}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
        ))}
         
      </Box>

    </Stack>
  </>
}