"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { useState } from "react"
import { useRouter } from "next/navigation"

const page = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const router = useRouter()

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      alert("Enter all fields")
      return
    }
    if (password !== confirmPassword) {
      alert("Password doesn't match")
      return
    }
    try {
      await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password, confirmPassword }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      router.push("/home")
    } catch (e) {}
  }

  return (
    <div className="main-body">
      <h1>REGISTER</h1>
      <Input id="name" label="Name" type="text" setValue={setName} value={name} />
      <Input id="email" label="Email" type="email" setValue={setEmail} value={email} />
      <Input id="password" label="Password" type="password" setValue={setPassword} value={password} />
      <Input id="confirmPassword" label="Confirm Password" type="password" setValue={setConfirmPassword} value={confirmPassword} />
      <Button name="Register" onClick={handleRegister} />
    </div>
  )
}

export default page
