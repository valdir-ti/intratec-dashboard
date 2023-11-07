'use client'

import { isLogin, logout } from "@/utils/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function Home() {

  const [user, setUser] = useState({ name: "", email: "" })

  const router = useRouter()

  const handleLogout = () => {
    logout()
    toast.success("Logout successfully")
    router.push('/login')      
  }

  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin()

      if(loggedIn.auth) {
        setUser(loggedIn.data)
      } else {
        router.push('/login')
      }
    }

    authenticate()
  }, [router])

  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="p-4 bg-accentDark text-white w-[400px] h-[250px] text-center space-y-4">
        <p>Hi {user.name}, welcome!</p>
        <p>{user.email}</p>
        <button 
          className="bg-accent px-4 py-2 text-white rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </main>
  )
}
