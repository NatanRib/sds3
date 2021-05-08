import {Link} from 'react-router-dom'
import Footer from 'components/footer'
import Appbar from 'components/appbar'

const Home = () => {
    return (
        <>
            <Appbar></Appbar>
            <div className="container">
                <div className="jumbotron bg-white">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <Link to='/dashboard' className='btn btn-primary btn-lg'>Acessar dashboard</Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;