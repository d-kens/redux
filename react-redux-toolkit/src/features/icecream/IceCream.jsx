import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCream = () => {
    // The value of the input element does not have to be part of the redux store
    const [ value, setValue ] = useState(1);
    const numberOfIcecream = useSelector((state) => state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of icecream - { numberOfIcecream }</h2>
            <button
                onClick={() => dispatch(ordered())}
            >
                Order icecream
            </button>
            <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))} />
            <button
                onClick={() => dispatch(restocked(value))}
            >
                Restock icecream
            </button>
        </div>
    )
}

export default IceCream