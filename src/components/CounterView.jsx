import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, reset } from '../redux/counter/counterSlice';

const CounterView = () => {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className='text-center'>
            <h1 className='bg-blue-400 rounded text-white w-24 my-10 mx-auto p-10 text-4xl'>{count}</h1>

            <button className='bg-yellow-600 text-white p-4 mx-4 rounded' onClick={() => dispatch(increment())}> increment</button>
            <button className='bg-green-600 text-white p-4 mx-4 rounded' onClick={() => dispatch(decrement())}> decrement</button>
            <button className='bg-red-600 text-white p-4 mx-4 rounded' onClick={() => dispatch(reset())}> reset</button>
            <button className='bg-gray-600 text-white p-4 mx-4 rounded' onClick={() => dispatch(incrementByValue(5))}> increment By 5</button>
        </div>
    );
};

export default CounterView;