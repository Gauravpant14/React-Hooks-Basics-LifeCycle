import React, { useState } from 'react'

const HookCounter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>

            {/* reset the counter to it's initial value */}
            <button onClick={() => setCount(0)}> Reset </button>
        </div>
    )
}

export default HookCounter
