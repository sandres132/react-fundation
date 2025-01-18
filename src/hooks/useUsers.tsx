import { useState, useRef, useEffect } from "react";
import type { User } from "../interfaces";
import { loadUsers } from "../api";

export const useUsers = () => {

  const [ users, setUsers] = useState<User[]>([]);
      const currentPageRef = useRef(1)
  
      useEffect(() => {
          loadUsers()
              // .then( users => setUsers(users) );
              // Esta es la forma mas simple de crear una funcion de flecha cuando envia los mismo
              // parametros a la funcion que carga los datos ejemplo:
              // .then( ( a, b, ,c , d, ...etc ) => funcion_a_ejecutar( a, b, ,c , d, ...etc ) )
              // siempre y cuando se envien los mismos parametros se puede simplificar a lo siguiente
              // .then( funcion_a_ejecutar );
              .then( setUsers );
      }, []);
  
      const nextPage = async() => {
          currentPageRef.current ++;
          const users = await loadUsers(currentPageRef.current);
  
          if ( users.length > 0 ) {
              setUsers( users );
          } else {
              currentPageRef.current --;
          }
      }
  
      const prevPage = async() => {
          if (currentPageRef.current < 1) return;
  
          currentPageRef.current --;
          const users = await loadUsers(currentPageRef.current);
          setUsers( users );
      }

  return {
    // properties
    users,

    // methods
    nextPage,
    prevPage,
  }
}
