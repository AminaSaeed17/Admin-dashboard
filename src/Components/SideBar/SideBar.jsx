import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupIcon from '@mui/icons-material/Group';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// @ts-ignore
import userImage from '../../assets/images.jpg'
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;


// @ts-ignore
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// @ts-ignore
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      // @ts-ignore
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const Array1 = [
  {"text": "Dashboard", "icon": <HomeOutlinedIcon/>, "path": '/'},
  {"text": "Manage Team", "icon": <GroupIcon/>, "path": '/manageTeam'},
  {"text": "Contacts Information", "icon": <ContactsOutlinedIcon/>, "path": '/contacts'},
  {"text": "Imvoices Balances", "icon": <ReceiptOutlinedIcon/>, "path": '/imvoices'},
]
const Array2 = [
  {"text": "Profile Form", "icon": <PersonOutlinedIcon/>, "path": '/profileForm'},
  {"text": "Calender", "icon": <CalendarTodayOutlinedIcon/>, "path": '/calender'},
  {"text": "FAQ Page", "icon": <HelpOutlinedIcon/>, "path": '/FAQ'},
]
const Array3 = [
  {"text": "Bar Chart", "icon": <BarChartOutlinedIcon/>, "path": '/barChart'},
  {"text": "Pie Chart", "icon": <PieChartOutlineOutlinedIcon/>, "path": '/pieChart'},
  {"text": "Line Chart", "icon": <TimelineOutlinedIcon/>, "path": '/lineChart'},
  {"text": "Geography", "icon": <MapOutlinedIcon/>, "path": '/Geography'},
]



// @ts-ignore
export default function SideBar({ open, handleDrawerClose }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();
  return (
    <>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Avatar sx={{mx: "auto", width: open? 88 : 44, height: open? 88 : 44, my: 1, transition: "0.25s"}} alt="Remy Sharp" src={userImage} />
          <Typography sx={{textAlign: 'center', fontSize: open? 18 : 0, transition: "0.25s"}}>Amina Saeed</Typography>
          <Typography sx={{textAlign: 'center', fontSize: open? 16 : 0, transition: "0.25s"}}>Admin</Typography>
          <Divider />
          <List>
            {Array1.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                <Tooltip placement="left" title={open? null : item.text}>
                <ListItemButton
                onClick={()=> navigate(item.path)}
                  sx={[

                    {
                      minHeight: 48,
                      px: 2.5,
                      bgcolor: location.pathname === item.path? theme.palette.mode === 'dark'? grey[800] : grey[300] : null,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {Array2.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                <Tooltip placement="left" title={open? null : item.text}>
                <ListItemButton
                onClick={()=> navigate(item.path)}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      bgcolor: location.pathname === item.path? theme.palette.mode === 'dark'? grey[800] : grey[300] : null,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {Array3.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                <Tooltip placement="left" title={open? null : item.text}>
                <ListItemButton
                onClick={()=> {navigate(item.path)}}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      bgcolor: location.pathname === item.path? theme.palette.mode === 'dark'? grey[800] : grey[300] : null,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </Drawer>
    </>
  );
}
