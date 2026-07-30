import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function RenderComponent() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      // @ts-ignore
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "99px",
                borderRadius: "3px",
                p: "5px",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                bgcolor:
                  access === "Admin"
                    ? theme.palette.primary.main
                    : access === "Manager"
                      ? theme.palette.secondary.dark
                      : "#1b5e20",
              }}
            >
              {access === "Admin" ? (
                <AdminPanelSettingsOutlined sx={{ color: "#fff" }} />
              ) : access === "Manager" ? (
                <SecurityOutlined sx={{ color: "#fff" }} />
              ) : (
                <LockOpenOutlined sx={{ color: "#fff" }} />
              )}

              <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                {access}
              </Typography>
            </Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
