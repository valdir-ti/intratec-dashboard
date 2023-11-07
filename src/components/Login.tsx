'use client'

import Link from "next/link"
import { useState } from "react"
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <div className="grid grid-cols-[1fr,30%]">

        <div className="h-screen grid place-items-center">
            <div className="text-center">
                <h1 className="text-accent text-center font-bold text-4xl">Login to your Account</h1>
                <div className="flex items-center gap-4 pt-8 w-fit mx-auto">
                    <div className="icon__wrapper">
                        <FaFacebookF />
                    </div>
                    <div className="icon__wrapper">
                        <FaGoogle />
                    </div>
                    <div className="icon__wrapper">
                        <FaInstagram />
                    </div>
                </div>

                <p className="pt-8 text-[13px] text-gray-400">
                    Or use your email account for Login
                </p>

                <form className="flex w-[300px] mx-auto flex-col pt-2 gap-2">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="input__style" 
                        value={email} 
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="input__style" 
                        value={password} 
                        onChange={ e => setPassword(e.target.value)}
                    />

                    <p>Forgot your password?</p>

                    <button 
                      className="uppercase bg-accent hover:bg-accentDark px-4 py-2 text-white mt-4"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                </form>

            </div>
        </div>

        <div className="bg-accent h-screen grid place-items-center">
            <div className="text-center w-full text-white space-y-8">
                <h2 className="font-bold text-4xl">Hello Friend!</h2>
                <div className="text-[#eee] w-fit mx-auto">
                    <p>To keep connected with us please</p>
                    <p>please login with your personal info</p>
                    <Link href="/signup">
                        <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">
                            SignUp
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default Login