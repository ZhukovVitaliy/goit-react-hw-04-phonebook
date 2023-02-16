import { Item } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}{' '}
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};
// import { Component } from 'react';

// export class ContactsList extends Component {
//   render() {
//     return (
//       <ul>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <li key={id}>
//               {name}: {number} <button>Delete</button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
