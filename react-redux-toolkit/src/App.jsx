import { useState } from 'react'
import './App.css'

import CakeView from './features/cake/CakeView';
import IceCream from './features/icecream/IceCream';
import User from './features/user/User';

function App() {

  return (
    <div className="App">
      <CakeView />
      <IceCream />
      <User />
    </div>
  )
}

export default App
