import { AnimatePresence } from 'framer-motion';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useState,useEffect} from 'react';
import styles from '../styles/Home.module.css'
import Menu from "./menu"
import { useRouter } from 'next/router'
const { motion } = require("framer-motion");
const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBxH_P_jKnoIWROtZwbBYRdsmP3YZ50aywQPOKX-f3xjDW1Q/formResponse?'
const NAME = 'entry.1838037704'
const EMAIL ='entry.69973401'
const PHONE ='entry.1902507329'
const cors = 'https://cors-anywhere.herokuapp.com/'
async function submitContact(e){
    e.preventDefault()
    let form = new FormData();
    form.append(NAME,e.target.name.value)
    form.append(EMAIL,e.target.email.value)
    form.append(PHONE,e.target.phone.value)
    console.log(form)
    const res = await fetch(url,
        {
            body: form,
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          }
        ).then((res) => console.log(res.json))
        .catch((e) => console.log(e))
      
}
export default function contact() {
    //const router = useRouter()
  return (
    <div>
        <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <form className={styles.contact} onSubmit={submitContact}>
            <motion.input initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.5, duration:.5}} id='name' name="name" type="text" placeholder="Name" />
            <motion.input initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.51, duration:.5}} type="email" name="email" placeholder="Email Address" />
            <motion.input initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.52, duration:.5}} type="tel" name="phone" placeholder="Telphone" />
            <motion.button initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.54, duration:.5}} type='submit'>Submit</motion.button>
      </form>
    </div>
  )
}
