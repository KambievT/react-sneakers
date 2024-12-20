import React, { useEffect, useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import axios from 'axios'
import Cards from './components/Cards/Cards'

export default function App() {
  const [loading,setLoading] = useState(true)
  const [products,setProducts] = useState([])

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
  

  return (
    <>
      <Header/>
      <Cards products={products}/>
    </>
  )
}
