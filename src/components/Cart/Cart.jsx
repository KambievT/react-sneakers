import React from 'react'
import { CgClose } from 'react-icons/cg'
import './Cart.scss'
import { MdDelete } from 'react-icons/md'
import { BsFillBasket3Fill } from 'react-icons/bs';

export default function Cart({viewCart, handleViewCart, cart, removeFromCart}) {
  // Считаем общую сумму для всех товаров в корзине
  const total = cart.reduce((acc, item) => acc + (Number(item.price) || 0), 0);

  return (
    <>
        {viewCart && (
          cart.length > 0 ? (
            <div className="cart-modal">
              <div className='cart'>
              <CgClose size={30} onClick={handleViewCart} className='close-btn'/>
              {cart.map((item) => (
                <div className="cart__products" key={item.id}>
                  <li>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <b>{item.price}$</b>
                    <button onClick={() => removeFromCart(item.id)} className='delete'>
                      <MdDelete size={24}/>
                    </button>
                  </li>
                </div>
              ))}
            </div>
            <div className="total">
                <p>Total price: {total}$</p>
              </div>
            </div>
          ) : (
            <div className="cart-modal">
              <CgClose size={30} onClick={handleViewCart} className='close-btn'/>
              <div className="empty-cart">
                <BsFillBasket3Fill size={200}/>
                <h2>Buy Products!</h2>
                <h1>The Cart Is Empty</h1>
              </div>
            </div>
          )
        )}
    </>
  )
}
