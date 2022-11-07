import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from "../api/Data.json"; 

export default function DenseTable() {
  const [data, setData] = React.useState(Data.Currency);    // Data değişkeni oluşturuyoruz ve Data.json'dan gelen verileri atıyoruz.      
  const [searchInputValue, setSearchInputValue] = React.useState([]);   // SearchInputValue değişkeni oluşturuyoruz ve bu değişkeni inputa yazılan değerleri atıyoruz.  
  const [sorted, setSorted] = React.useState({sorted:"ForexBuying",reversed:false});      // sorted değişkeni oluşturuyoruz ve bu değişkeni tablonun sıralanması için kullanacağız.

  const sortByForexBuying = () => {   // ForexBuying'e göre sıralama fonksiyonu
    const dataCopy = [...data];    // data değişkenini kopyalıyoruz.
    dataCopy.sort((A, B) => {   // dataCopy değişkenini sıralıyoruz.
  if (sorted.reversed) {   // reversed true ise
    return A.ForexBuying - B.ForexBuying;   // Sıralama işlemi
  }
  return B.ForexBuying - A.ForexBuying;       
});
setData(dataCopy);  // Data değişkenini güncelliyoruz.
setSorted({ sorted: "ForexBuying", reversed: !sorted.reversed });   // Sıralama işlemini yapıyoruz.
}  

  return (
    <>
    <TableContainer component={Paper}>

    <div className='Search-Filter-Container'>
    <input type="text" placeholder="Ara..." onChange={(e) => setSearchInputValue(e.target.value)} />
    </div>

      <Table sx={{ minWidth: 375 }} size="small" aria-label="a dense table">

        <TableHead>
          <TableRow size="medium" >
            <TableCell className='tableCell' >İSİM</TableCell>
            <TableCell className='tableCell' align="right">Currency Name</TableCell>
            <TableCell className='forexbuying' onClick={sortByForexBuying} align="right">Döviz Alış / Forex Buying&nbsp;</TableCell>
            <TableCell className='tableCell' align="right">Döviz Satış / Forex Selling&nbsp;</TableCell>
            <TableCell className='tableCell' align="right">Birim&nbsp;</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data
          .filter((item) => item.Isim.toLocaleLowerCase().includes(searchInputValue) || item.CurrencyName.toLocaleLowerCase().includes(searchInputValue))  //Searchbar arama filtresi  
          .map((item) => (  
            <TableRow
              key={item.CurrencyName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              hover={true}
            >
              <TableCell component="th" scope="row">
                {item.Isim}
              </TableCell>
              <TableCell align="right">{item.CurrencyName}</TableCell>
              <TableCell align="right">{item.ForexBuying}</TableCell>
              <TableCell align="right">{item.ForexSelling}</TableCell>
              <TableCell align="right">{item.Unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
