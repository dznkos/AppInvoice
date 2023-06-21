import { useEffect, useState } from "react";

export const FormItemView = ( { handler } ) => {
   
  const [formItemState, setFormItemState] = useState({
    product: '',
    price: '',
    quantity: '',
  })

  const { product, price, quantity} = formItemState;

  useEffect(() => {
    // console.log('cambio en el form')
  }, [price])

  useEffect(() => {
    // console.log('cambio en el form')
  }, [formItemState])
  
  const onInputChange = ({ target: {name, value}} ) => {
    setFormItemState({
      ...formItemState,
      [name]: value
    })
  }

  const onInvoiceItemsSubmit = (event) => {
    {
      event.preventDefault();

      if (product.trim().length <= 1) return;
      if (price.trim().length <= 1) return;
      if (isNaN(price.trim())) {
        alert('Error el precio no es un numero.')
        return;
      }

      if (quantity.trim().length < 1) {
        alert('Error la cantidad tiene que ser mayor a 0')
        return;
      }
      if (isNaN(quantity.trim())) {
        alert('Error la cantidad no es un numero')
        return;
      }

      handler(formItemState);

      setFormItemState({
        product: '',
        price: '',
        quantity: ''
      })  
  }
}

  return (
    <>
      <form className='w-50' onSubmit={onInvoiceItemsSubmit}>
        <input type="text" value={product}
          name='product' placeholder='Producto' className='form-control m-3' onChange={onInputChange} />
        <input type="text" value={price}
          name='price' placeholder='Precio' className='form-control m-3' onChange={onInputChange} />
        <input type="text" value={quantity}
          name='quantity' placeholder='Cantidad' className='form-control m-3' onChange={onInputChange} />

        <button type='submit' className='btn btn-primary m-3'>Nuevo Item</button>
      </form>
    </>
  )
}
