import { AnimatePresence } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { db } from "../Firebase/clientApp"
import { collection, setDoc ,doc} from "firebase/firestore"; 
const { motion } = require("framer-motion");

const addContactDocument = async (name:string,phone:string,email:string) => {
  try{
    const users = doc(collection(db, "users"));
     await setDoc(users, {
      name: name,
      email: email,
      phone: phone
    })
    .then(()=>alert('Data was successfully sent to cloud firestore!'))
  }catch(error){
    console.log(error)
    alert(error)
  }
};
export default function Contact() {
    
  const Router = useRouter();
  return (
    <div>
        <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <form 
      className={styles.contact} 
      onSubmit={(e: React.SyntheticEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        name: { value: string };
       email: { value: string };
       phone: {value:string}
      };
      const email = target.email.value; 
      const name = target.name.value; 
      const phone = target.phone.value;
      addContactDocument(name,email,phone)
      .then(() => Router.push('/'))
      .catch((e) => console.log(e))
        }}
      >
            <motion.input initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.5, duration:.5}} id='name' name="name" type="text" placeholder="Name" />
            <motion.input initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.51, duration:.5}} type="email" name="email" placeholder="Email Address" />
            <motion.input initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.52, duration:.5}} type="tel" name="phone" placeholder="Telphone" />
            <motion.button initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.54, duration:.5}} type='submit'>Submit</motion.button>
      </form>
    </div>
  )
}
