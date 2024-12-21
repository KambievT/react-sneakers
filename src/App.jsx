import React, { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import axios from 'axios'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'

export default function App() {
  const [loading,setLoading] = useState(true)
  const [products,setProducts] = useState([])
  const [cart,setCart] = useState([])
  const [viewCart,setViewCart] = useState(false)

  const handleViewCart = () => {
    setViewCart(!viewCart)
  }

  const removeFromCart = (id) =>{
    setCart((prevCart)=> prevCart.filter((item) => item.id !== id))
  }

  if(viewCart === true) {
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
  const fetchApi =  async () => {
    const response = await axios.get('https://674b65c171933a4e88553b38.mockapi.io/products/products')
    .then(response => {
      setProducts(response.data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  }
  fetchApi()
  }, [])
  

  const postProduct = (product) => {
    axios.post('https://674b65c171933a4e88553b38.mockapi.io/products/cart',{
      name:product.name,
      id:product.id,
      description:product.description,
      price:product.price,
      img:product.img
    })
    .then(response =>{
      setCart((prevCart) => [...prevCart, response.data]);
    })
    .catch(err => {
      console.log(err)
    }) 
  }

  return (
    <>
      <Header handleViewCart={handleViewCart}/>
      {loading ? (<h1>Loading...</h1>) : (<Cards products={products} postProduct = {postProduct}/>)}
      <Cart viewCart = {viewCart} cart = {cart} handleViewCart = {handleViewCart} removeFromCart={removeFromCart}/>      
    </>
  )
}
