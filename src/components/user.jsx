import React from 'react'
import Quality from './quality'
import BookMark from './bookmark'

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookMark
}) => {
  return (
      <tr key={_id}>
        <td>{name}</td>
        <td>{qualities.map(qual => (
          <Quality key={qual._id} {...qual} />
        ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate} /5</td>
        <td>
          <BookMark
            status={bookmark}
            onClick={() => onToggleBookMark(_id)}
          />
        </td>
        <td>
          <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(_id)}
        >
          delete
          </button>
        </td>
      </tr>
  )
}

export default User