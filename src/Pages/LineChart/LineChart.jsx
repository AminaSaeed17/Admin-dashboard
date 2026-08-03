import Header from "../../Components/Header/Header";
import LineChartSection from "./LineChartSection";

export default function LineChart() {
  return <>
    <Header title="Line Chart" subTitle="Simple Line Chart" isDashboard={false} />
    <LineChartSection/>
  </>
}
