import { Box, Typography, useTheme } from "@mui/material";

// @ts-ignore
export default function Header({ title, subTitle, isDashboard }) {
    const theme = useTheme();
  return <>
        <Box sx={{ mb: isDashboard ? 2 : 4 }}>
    <Typography
      sx={{
        color: theme.palette.info.light,
        fontWeight: "bold",
      }}
      variant="h5"
    >
      {title}
    </Typography>
    <Typography variant="body1">{subTitle}</Typography>
  </Box>
  </>
}
