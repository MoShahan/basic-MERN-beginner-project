"use client"

import Button from "@/components/Button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const handleLoginBtn = () => {
    router.push("/login")
  }
  const handleRegisterBtn = () => {
    router.push("/register")
  }

  return (
    <div className="main-body">
      <h1>
        Welcome to a basic <span>Login Form</span> project
      </h1>
      <h2>- Mohammed Shahan</h2>
      <h3>What do you want to do?</h3>
      <div className="btn-container">
        <Button name="Login" onClick={handleLoginBtn} />
        <Button name="Register" onClick={handleRegisterBtn} />
      </div>
    </div>
  )
}
