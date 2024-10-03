'use client'

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "@/store/store"
import { getUserState, setName, setEmail } from "@/store/slices/userSlice"
import Link from "next/link"

const AccountPage = () => {
  const dispatch = useDispatch()
  const { name, email } = useSelector(getUserState)

  const handleChangeUserInfo = () => {
      
      setTimeout(() => {
         dispatch(setName("John Doe"))
         dispatch(setEmail("johndoe@example.com"))
      }, 2000)
  }

   useEffect(() => {
      localStorage.setItem('userState', JSON.stringify({ name, email }))
   }, [name, email])

   return (
      <>
         Hi <>{name}</><br />
         <button onClick={handleChangeUserInfo}>Change User Info</button><br />
         <Link href="/">Go to home</Link>
      </>
   )
}

export default AccountPage
