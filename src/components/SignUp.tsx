'use client'

import { isLogin } from "@/utils/auth"
import { baseUrl } from "@/utils/constant"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa'
import { toast } from "react-toastify"
import SpinnerLoading from "./LoadingSpinner"

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const payload = {
            name,
            email,
            password
        }

        if (!email && !name && !password) {
            return
        }

        setVisible(true)
        axios.post(`${baseUrl}/signup`, payload)
            .then(() => {

                setVisible(false)
                toast.success(<div>
                    Account Created Successfully <br />
                    Please Login
                </div>)

                router.push('/login')

            }).catch((error) => {
                setVisible(false)
                console.log(error)
                toast.error(<div>
                    Account Creation Fails <br />
                    Please try again
                </div>)
            })
    }

    useEffect(() => {
        const authenticate = async () => {
            const loggedIn = await isLogin()

            if (loggedIn) {
                router.push('/')
            }
        }

        authenticate()
    }, [router])

    useEffect(() => {
        const myPromise = new Promise((resolve) =>
            fetch("https://intratec-dashboard-api.onrender.com/api")
            .then((response) => response.json())
            .then((json) => setTimeout(() => {
                resolve(json),
                500
            }))
        );

        toast.promise(myPromise, {
            pending: "Please wait while we are reactivating our server",
            success: "The server is running",
            error: "Server Error",
        });

    }, [])

    return (
        <div className="grid grid-cols-[30%,1fr]">
            <div className="bg-accent h-screen grid place-items-center">
                <div className="text-center w-full text-white space-y-8">
                    <h2 className="font-bold text-4xl">Welcome Back!</h2>
                    <div className="text-[#eee] w-fit mx-auto">
                        <p>To keep connected with us please</p>
                        <p>please login with your personal info</p>
                        <Link href="/login">
                            <button
                                disabled={visible}
                                className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8"
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-screen grid place-items-center">
                <div className="text-center">

                    <h1 className="text-accent text-center font-bold text-4xl">Create Account</h1>
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
                        Or use your email account for registration
                    </p>

                    <form
                        className="flex w-[300px] mx-auto flex-col pt-2 gap-2"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            className="input__style"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            disabled={visible}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input__style"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={visible}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input__style"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            disabled={visible}
                        />

                        <button
                            disabled={visible}
                            className={`uppercase bg-accent px-4 py-2 text-white mt-4 rounded-md ${visible ? 'hover:bg-accent' : 'hover:bg-accentDark'}`}
                        >
                            <div className='flex'>
                                <SpinnerLoading visible={visible} />
                                <h2 className={`${visible ? 'ml-[82px]' : 'ml-[104px]'}`}>Sign Up</h2>
                            </div>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SignUp