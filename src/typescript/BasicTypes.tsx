
export const BasicTypes = () => {

    const name:string = "Andres";
    const age:number = 32;
    const isActive:boolean = true;

    const powers: string[] = ['React', 'TypeScript', 'JavaScript'];

    powers.push('Node.js');

  return (
    <>
        <h3>Tipos Basicos</h3>

        { name } { age } { isActive ? 'true' : 'false' }
        <br/>
        
        { powers.join(', ') }
    </>
  )
}
