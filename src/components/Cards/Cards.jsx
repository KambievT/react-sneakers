import React, { useState } from 'react'
import Card from '../ui/Card'
import './Cards.scss'
import { BsBagPlusFill } from 'react-icons/bs'

export default function Cards({products}) {
    const [input,setInput] = useState('')
    const filterInput = products.filter((p) => p.name.toLowerCase().includes(input.toLocaleLowerCase()))
    return (
    <>
       <main className="main">
        <input type="text" placeholder='Search' className='search' value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="cards">
                {filterInput.map((product)=>(
                    <Card key={product.id} className='cards__card'>
                        <img src={product.img} alt="" />
                        <div className="cards__card-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <b>{product.price}$</b>
                            <button>
                                <BsBagPlusFill size={25}/>
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
       </main>
       <footer>
            <h6>footer</h6>
       </footer>
    </>
  )
}
