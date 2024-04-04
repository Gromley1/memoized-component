import { useState } from 'react'
import './App.css'
import { MemoizedComponent, RegularComponent } from './components'

function App() {
    const [count, setCount] = useState(0);
    const [props, setProps] = useState({
        propOne: true,
        propTwo: 'hello',
        propThree: 10
    });

    return (
        <>
        <div className="card">

            <p style={{ maxWidth: '400px'}}>
            Press the button below to change the memoized component props from the parent component.
            Since the props changed, the memoized component will rerender.
            </p>
            
            <button type="button" onClick={() => setProps((prev) => ({...prev, propOne: !prev.propOne}))}> 
                Update memoized component props 
            </ button>

            <p style={{ maxWidth: '400px '}}> 
                Press the count button below to change the parent component state. The child component which is not wrapped in memo wil rerender, 
                while the child component which is wrapped in memo will not
            </p>
            <button onClick={() => setCount((count) => count + 1)}>
                count is { count }
            </button>
            <MemoizedComponent {...props}/>
        </div>

        <div className="card">
            <RegularComponent {...props}/>
        </div>
        </>
    )
}

export default App
