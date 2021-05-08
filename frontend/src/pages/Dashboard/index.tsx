import AppBar from "components/appbar";
import BarChart from "components/barchart";
import DataTable from "components/datatable";
import DonutChart from "components/donutchart";
import Footer from "components/footer";

const Dashboard = () => {
    return (
        <>
            <AppBar></AppBar>
            <div className="App container">
                <h1 className='text-primary'>Dashboard de vendas</h1>
                <div className='row px-3'>
                    <div className='col-sm-6'>
                        <h5 className='text-secondary py-3 text-center'>Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className='col-sm-6'>
                        <h5 className='text-secondary py-3 text-center'>Total de vendas</h5>
                        <DonutChart />
                    </div>
                </div >
                <div className='py-3'>
                    <h2 className='text-primary'>Todas as Vendas</h2>
                    <DataTable></DataTable>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Dashboard;
