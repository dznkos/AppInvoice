import PropTypes from 'prop-types';

import { RowItemView } from "./RowItemView"


export const ListItemsView = ({ title, items, handlerDeleteItem }) => {
  return (
    <>
      <h3>{ title }</h3>
      <table className='table table-striped table-hover '>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
          items.length > 0 
          ? items.map(({ id, product, price, quantity }) => (
              <RowItemView key={id} id={id} product={product} price={price} quantity={quantity} handlerDeleteItem={ id => handlerDeleteItem(id)}/>
            )
          )
          : (<tr><td colSpan={4}><i>Debe agregar productos, la cesta esta vacía...</i></td></tr>)
          }
        </tbody>
      </table>
      
    </>
  )
}

ListItemsView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}
