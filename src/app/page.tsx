'use client'

import { useEffect } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from '@/store/store'
import { getUserState, setEmail, setName } from '@/store/slices/userSlice'

export default function Home() {

   const dispatch = useDispatch()
   const { name, email } = useSelector(getUserState)

   const onClick = () => {
      setTimeout(() => {
         dispatch(setName('Ahsan Hanif'))
         dispatch(setEmail('ahsanhanif99@gmail.com'))
      }, 2000)
   }

   useEffect(() => {
      localStorage.setItem('userState', JSON.stringify({ name, email }))
   }, [name, email])
   
   return (
      <>
         Hi <>{name}</><br />
         <button onClick={onClick}>Change it!</button><br />
         <Link href="/account">Go to account</Link>
      </>
   )
}
