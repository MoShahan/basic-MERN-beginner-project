"use client"

import { useEffect, useState } from "react"

const page = () => {
  const [users, setUsers] = useState([{ name: "" }])

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("http://localhost:3001/users")
      const data = await res.json()
      setUsers(data.users)
    }
    getUsers()
  }, [])

  return (
    <div className="main-body">
      <h1>USERS</h1>
      <ol>
        {users?.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default page
