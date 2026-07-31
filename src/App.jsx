import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./Components/Layout/Layout";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageTeam from "./Pages/ManageTeam/ManageTeam";
import Contacts from "./Pages/Contacts/Contacts";
import Imvoices from "./Pages/Imvoices/Imvoices";
import Calender from "./Pages/Calender/Calender";
import ProfileForm from "./Pages/ProfileForm/ProfileForm";
import FAQ from "./Pages/FAQ/FAQ";
import LineChart from "./Pages/LineChart/LineChart";
import BarChart from "./Pages/BarChart/BarChart";
import PieChart from "./Pages/PieChart/PieChart";
import Geography from "./Pages/Geography/Geography";



const router = createHashRouter([
	{path: '/', element: <Layout/>, children: [
		{index: true, element: <Dashboard/>},
		{path: 'manageTeam', element: <ManageTeam/>},
		{path: 'contacts', element: <Contacts/>},
		{path: 'imvoices', element: <Imvoices/>},
		{path: 'calender', element: <Calender/>},
		{path: 'profileForm', element: <ProfileForm/>},
		{path: 'FAQ', element: <FAQ/>},
		{path: 'lineChart', element: <LineChart/>},
		{path: 'barChart', element: <BarChart/>},
		{path: 'pieChart', element: <PieChart/>},
		{path: 'geography', element: <Geography/>},
	]}
	
])

const App = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider 
		// @ts-ignore
			value={colorMode}>
				<ThemeProvider 
// @ts-ignore
				theme={theme}>
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
			</ColorModeContext.Provider>
		
	);
};

export default App;
