import axios from "axios";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { SalesPage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

    const [indexPage, setIndexPage] = useState(0);

    const [page, setPage] = useState<SalesPage>({
        content: [],
        last: true,
        number: 0,
        first: true,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${indexPage}&limit=20&order=date,desc`).then
            (result => {
                setPage(result.data);
            })
    }, [indexPage])

    const changePage = (index: number) =>{
        setIndexPage(index);
    }

    return (
        <div className="table-responsive">
            <Pagination page={page} changePage={changePage}></Pagination>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        page.content?.map((item) => 
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
