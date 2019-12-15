import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './component/AddUserForm';
import UserTable from './component/UserTable';
import EditUserForm from './component/EditUserForm';

function App() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]
  const initialFormState = { id: null, name: '', username: '' }
  const [editing, setEditing] = useState(false)
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  return (
    <div className="container">
    <h1>CRUD App with Hooks</h1>
    <div className="flex-row">
    <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
      <div className="flex-large">
        <h2>View users</h2>
         <UserTable users={users} editRow={editRow} updateUser={updateUser} deleteUser={deleteUser} />
      </div>
    </div>
  </div>
  );
}

export default App;
