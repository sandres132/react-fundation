import { User } from "../interfaces";

interface Props {
    user: User;
}

export const UserRow = ( { user }: Props ) => {

    const { avatar, first_name, last_name, email, id } = user;

  return (
    <tr key={id}>
        <td><img style={{ width: '50px' }} src={ avatar } alt="User avatar" /></td>
        <td>{ first_name } { last_name }</td>
        <td>{ email }</td>
    </tr>
  )
}