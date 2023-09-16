"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import { useState } from "react"
import { useRouter } from "next/navigation"

function page() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const router = useRouter()

  const handleLogin = async () => {
    try {
      await fetch("http://localhost:3001/login", { method: "POST", body: JSON.stringify({ email, password }), headers: { "Content-type": "application/json; charset=UTF-8" } })
      router.push("/home")
    } catch (e) {}
  }

  return (
    <div className="main-body">
      <h1>LOGIN</h1>
      <Input id="email" label="Email" type="email" setValue={setEmail} value={email} />
      <Input id="password" label="Password" type="password" setValue={setPassword} value={password} />
      <Button name="Login" onClick={handleLogin} />
    </div>
  )
}

export default page
