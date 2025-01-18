
interface Person {
    firstName: string,
    lastName: string,
    isAlive?: boolean,
    age: number,
    address: Address,
}

interface Address {
    country: string,
    houseNo: number
}

export const ObjectLiterals = () => {

    const person: Person = {
        firstName: 'Andres',
        lastName: 'Zuniga',
        isAlive: true,
        age: 32,
        address: {
            country: 'Honduras',
            houseNo: 123
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>

        <p>
            Nombres: {person.firstName} <br/>
            Apellidos: {person.lastName} <br/> Apellido:
            Edad: {person.age} años <br/>
            Vivo: {`${ person.isAlive ? 'Si' : 'No' }`}<br/>
            Dirección: {person.address.country}, {person.address.houseNo}
        </p>

    </>
  )
}
