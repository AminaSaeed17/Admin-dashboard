import { Box, Container, useTheme } from "@mui/material";

export default function Dashboard() {
  const theme = useTheme();
  return <>
    <Container>
      <Box sx={{color: theme.palette.info.main}}>Dashboard</Box>
    </Container>
  </>
}
