import Header from '../../Components/Header/Header';
import BarSection from './BarSection';

export default function BarChart() {
  return <>
    <Header title="Bar Chart" subTitle="The minimum wage in Germany, France and Spain (EUR/month)" isDashboard={false}  />
     <BarSection/>
  </>
}
