import { useCounter } from "../hooks";

export const CounterWithHook = () => {

    // Esta es la forma de usar el hook con un initialValue
    /* const { count, increaseBy } = useCounter({
      initialValue: 10
    }); */

    // Esta es la forma de usar el hook con un initialValue vacío
    const { count, increaseBy } = useCounter({});

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
