import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useState,useEffect} from 'react';
import styles from '../styles/Home.module.css'
import Menu from "./menu"
const { motion } = require("framer-motion");
const Home: NextPage = () => {
  let [menuVis,setMenu] = useState(false);
  let [windowSize,setWindow] = useState(700);

  useEffect(() => {
    setWindow(window.innerWidth)
})
  return (
    <motion.div initial={{backgroundColor:'#ebb2a1'}} animate={{backgroundColor:'#ffffff'}} transition={{delay:.2, duration:1.5}} >
      <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container} onClick={() => setMenu(true)}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
       </div>
     {
       menuVis?<Menu  setMenu={setMenu}/>:null
     } 
     <div className={styles.row} >
        <div className={styles.titlePageLeft}>
            <motion.h1 initial={{color: 'rgb(255,255,255)'}} animate={{color:'rgb(212, 162, 145)'}} transition={{delay:.2, duration:1.5}}>CAMILLA</motion.h1>
            <br/>
            <motion.h1 initial={{color: 'rgb(255,255,255)'}} animate={{color:'rgb(212, 162, 145)'}} transition={{delay:.2, duration:1.5}}>SACCO</motion.h1>
          </div>
          <div className={styles.col} >
          <motion.img  initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.5, duration:.5}} className={styles.titleimg} src={"/camila2.jpg"} />
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2, duration:.5}} style={{width:'90%',paddingRight:'10%', fontWeight:'bold'}} className={styles.type}>
            On May 1, 2022 Camila Sacco was crowned Miss New Hampshire USA 2022.
          </motion.p>
          </div>
     </div >
     <div className={styles.row} >
          <div className={styles.col}>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2, duration:.5}} style={{width:'90%',paddingRight:'10%', fontWeight:'bold'}} className={styles.type}>
            On May 1, 2022 Camila Sacco was crowned Miss New Hampshire USA 2022.
          </motion.p>
          <motion.img  initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{type: 'spring',ease:"easeInOut",delay:1.5, duration:.5}} className={styles.titleimg1} src={"/camila3.jpg"} />
          </div>
          <div className={styles.titlePageRight}>
            <motion.h1 initial={{color: 'rgb(255,255,255)'}} animate={{color:'rgb(212, 162, 145)'}} transition={{delay:.2, duration:1.5}}>MISS NEW HAMPSHIRE 2022</motion.h1>
          </div>
     </div >
    </motion.div>
    
  )
}

export default Home
