import Users from './app/components/users'
import React, {useEffect, useState} from 'react'
import api from './app/api'
import "bootstrap/dist/css/bootstrap.css"

const App = () => {
  const [users, setUsers] = useState()
  useEffect(() => {
    api.users.default.fetchAll().then((data) => setUsers(data))
  }, []);
  const handleDelete = (userId) => {
    setUsers(users.filter(user => user._id !== userId))
  }
  
  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return {...user, bookmark: !user.bookmark}
        }
        return user
      })
    )
    console.log(id)
  }
  
  return (
    <div>
      {users && (
        <Users
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
          users={users}
        />
      )}
    </div>
  )
}

export default App
