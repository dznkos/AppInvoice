
import { useEffect, useState } from 'react';
import { getInvoice, calculateTotal } from './services/getInvoice';
import { ClientView } from './components/ClientView';
import { CompanyView } from './components/CompanyView';
import { InvoiceView } from './components/InvoiceView';
import { ListItemsView } from './components/ListItemsView';
import { TotalView } from './components/TotalView';
import { FormItemView } from './components/FormItemView';

const invoiceInitial = {
  id: 0,
  name: '',
  client: {
    name: '',
    lastName: '',
    address: {
      country: '',
      city: '',
      street: '',
      number: 0
    }
  },
  company: {
    name: '',
    fiscalNumber: 0
  },
  items: []
}

export const InvoiceApp = () => {

  const [activeForm, setActiveForm] = useState(false)

  const [totalCost, setTotalCost] = useState(0)

  const [invoice, setInvoice] = useState(invoiceInitial)

  const [counter, setCounter] = useState(4)

  const [items, setItems] = useState([])

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data)
    setInvoice(data);
    setItems(data.items)
  }, [])

  useEffect(() => {
    // console.log('cambio en counter')
  }, [counter])

  useEffect(() => {
    // console.log('cambio en counter')
    setTotalCost(calculateTotal(items))
  }, [items])

  const handlerAddItem = ({ product, price, quantity }) => {

    setItems([...items,
    {
      id: counter,
      product: product.trim(),
      price: +price.trim(),
      quantity: parseInt(quantity.trim(), 10)
    }
    ]);

    setCounter(counter + 1)
  }

  const handlerDeleteItem = (id) => {
    setItems(items.filter( item => item.id !== id))
  }

  return (
    <>
      <div className='container'>
        <div className='card mt-5'>
          <div className='card-header'>
            Ejemplo Factura
          </div>
          <div className='card-body'>
            <InvoiceView id={id} name={name} />
            <div className='row'>
              <div className='col-6'>
                <ClientView title='Datos del cliente' client={client} />
              </div>

              <div className='col-6'>
                <CompanyView title='Datos de la empresa' company={company} />
              </div>
            </div>
            <ListItemsView title="Productos de la factura" items={items} handlerDeleteItem={handlerDeleteItem} />
            <TotalView total={totalCost} />
            <button className='btn btn-success' onClick={()=> setActiveForm(!activeForm)}>{
              !activeForm ? 'Agregar Item' : 'Ocultar'
            }</button>
            {
              !activeForm || <FormItemView handler={handlerAddItem} />
            }            
          </div>
        </div>
      </div>
    </>
  )
}
