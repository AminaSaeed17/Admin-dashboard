import { Box, Paper, Typography, useTheme } from "@mui/material";
import PieChartSection from "../../Pages/PieChart/PieChartSection";
import BarSection from "../../Pages/BarChart/BarSection";
import Geography from "../../Pages/Geography/Geography";

export default function Row3() {
  const theme = useTheme();
  return <>
    <Box sx={{display: 'flex', gap:1 ,flexWrap: "wrap" ,mt:3}}>
      <Paper sx={{width: "28%", flexGraw: 1, minWidth: "400px"}}>
      <Typography
          sx={{ padding: "30px 30px 0 30px", fontweight: "600", color: theme.palette.secondary.main }}
          variant="h6"
        >
          Campaign
        </Typography>
      <PieChartSection isDashboard={true}/>
      <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" sx={{ px: 0.7, pb: 3 }} align="center">
          Includes extra misc expenditures and costs
        </Typography>
   </Paper>
   <Paper sx={{width: "28%", flexGraw: 1, minWidth: "400px"}}>
     <Typography
          variant="h6"
          sx={{ padding: "30px 30px 0 30px", fontweight: "600", color: theme.palette.secondary.main }}
        >
          Sales Quantity
        </Typography>
      <BarSection isDashboard={true}/>
   </Paper>
   <Paper sx={{width: "28%", flexGraw: 1, minWidth: "400px"}}>
    <Typography
          variant="h6"
          sx={{ padding: "30px 30px 0 30px", fontweight: "600", color: theme.palette.secondary.main }}
        >
          Geography Based Traffic
        </Typography>
      <Geography isDashboard={true}/>
   </Paper>
    </Box>
  </>
}