import { AnimatePresence } from 'framer-motion';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useState,useEffect} from 'react';
import styles from '../styles/Home.module.css'
import Menu from "./menu"
const { motion } = require("framer-motion");
const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeBxH_P_jKnoIWROtZwbBYRdsmP3YZ50aywQPOKX-f3xjDW1Q/viewform?usp=sf_link'
const NAME = 'entry.1838037704'

const EMAIL ='entry.69973401'
const PHONE ='entry.1902507329'
function SendPost(){
    let form = new FormData();
    form.append(NAME,name)
}
export default function contact() {
  return (
    <div>
        <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.contact}>
            <motion.input id='name' type="text" placeholder="Name" />
            <motion.input type="email" placeholder="Email Address" />
            <motion.input type="tel" placeholder="Telphone" />
            <motion.button>Submit</motion.button>
      </div>
    </div>
  )
}
