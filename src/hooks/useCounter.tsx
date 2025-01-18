import { useState } from "react";

interface Options {
    initialValue?: number;
}

export const useCounter = ( { initialValue = 5 }: Options ) => {

    const [ count, setCount ] = useState<number>(initialValue);

    const increaseBy = (value: number) => {
        const newValue = count + value;
        if (newValue >= 0) {
            setCount(newValue);
        }
    }

    return {
        //properties
        count,
    
        //methonds
        increaseBy
    }
}
