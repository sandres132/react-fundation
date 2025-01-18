import { useState } from "react"

export const Counter = () => {

    // Esta es la forma tradicional de usar useState
    // const [ count, setCount ] = useState(10);

    // Esta es la forma moderna de usar useState con hooks y typescript
    const [ count, setCount ] = useState<number>(10);

    const increaseBy = (value: number) => {
        setCount(count + value);
    }

  return (
    <>
        <h3>Contador: <small>{ count }</small></h3>

        <div>
            <button onClick={ () => increaseBy(+1) }>+1</button>

            &nbsp;

            <button onClick={ () => increaseBy(-1) }>-1</button>

        </div>
    </>
  )
}
