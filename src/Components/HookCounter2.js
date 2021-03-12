import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count,setCount] = useState(initialCount)
    return (
        <div>
            Count : {count}
            <br></br>
            <button onClick={() => setCount(initialCount)}>Initial Count</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1 )}>Decrement</button>
        </div>
    )
}

export default HookCounter2
