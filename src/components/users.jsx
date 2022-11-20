import React, {useState} from 'react'
import api from "../api"
import "bootstrap/dist/css/bootstrap.css"

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  
  const handleDelete = (userId) => {
    console.log('delete', userId)
    setUsers(prevState => prevState.filter(user => user._id !== userId))
  }
  
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1))
    
    if (number > 4 && number < 15) return ' Человек тусанет'
    if ([2, 3, 4].indexOf(lastOne) >= 0) return ' Человека тусанут'
    if (lastOne === 1) return ' Человек тусанет'
  }
  
  const renderQualities = (qualities) => {
    return qualities
      .map(quality =>
        <span
          key={quality._id}
          className={"badge m-1 bg-" + quality.color}
        >
          {quality.name}
        </span>)
  }
  
  const renderDeleteButton = (userId) => {
    return <button
      type="button"
      className="btn btn-danger"
      onClick={() => handleDelete(userId)}
    >
      delete
    </button>
  }
  
  const renderUsers = () => {
    return (
      users.map(user => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{renderQualities(user.qualities)}</td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>{renderDeleteButton(user._id)}</td>
        </tr>
      ))
    )
  }
  return (
    <>
      <h2>
        <span className={
          "badge bg-" +
          (users.length > 0 ? "primary" : "danger")}
        >
          {users.length + renderPhrase(users.length) +  ' с тобой сегодня'}
        </span>
      </h2>
      {users.length > 0 &&
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {renderUsers()}
          </tbody>
        </table>
      }
    </>
  )
}

export default Users