import React, { useState } from 'react'
import TokensPage from './TokensPage'



const TokenCard = ({tokens,prize}) => {
  const [modal,setModal]=useState(false)
  
  const toggleButton=()=>{
    setModal(!modal)
  }
 
    
  return (
    <> 
    <div className='token' >
      <h1 className='token__header'>{tokens}</h1>
      <h2 className='token__prize'>{prize}</h2>
      <button className='token__button' onClick={toggleButton} > Buy </button>
    </div>
      {modal&&
        <div className='modal' onClick={toggleButton} >
          
          <div className='modal__content' onClick={e=>e.stopPropagation()} >         
            <h3 className='modal__header' >Congratulations!</h3>
       
            <h4 className='modal__tokens' >+ {tokens}</h4>
            <p className='modal__text'>Your account has been replenished <br/> by {tokens}</p>
            <button className='modal__button' onClick={toggleButton}>Excellent</button>
        </div>
          
       
    </div>}
        

  </>
  )
  }

export default TokenCard
