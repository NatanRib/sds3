import AppBar from 'components/appbar';
import DataTable from 'components/datatable';
import Footer from 'components/footer';
import React from 'react';

function App() {
  return (
    <>
    <AppBar></AppBar>
    <div className="App container">
      <h1 className='text-primary'>Olá Mundo!</h1>
      <DataTable></DataTable>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
