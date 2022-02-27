import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {   decrement1, decrement2 } from './redux/reducer/Slice'

function App() {
 
  const count = useSelector((state) => state.counter.value)


  const dispatch = useDispatch()

  const inc = () => {
    dispatch(decrement1())
  }
  const inc1 = () => {
    dispatch(decrement2())
  }
  return (
    <div className="App">

   
      
      <img className="App__userpic" src={"https://image.ibb.co/nC8vGp/girl.png"} alt="photographer" />
        <p className="App__username">Hello, Jenny !</p>
        <div className="App__amount">
          $ {count}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000"  onClick={inc}>WITHDRAW $10,000</button>
          <button data-amount="5000"  onClick={inc1}>WITHDRAW $5,000</button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>

    </div>
  )
}


export default App
