import Header from "../../Components/Header/Header";
import PieChartSection from "./PieChartSection";

export default function PieChart() {
  return <>
    <Header title="Pie Chart" subTitle="Simple Pie Chart" isDashboard={false} />
    <PieChartSection/>
  </>
}
