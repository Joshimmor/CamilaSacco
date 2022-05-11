import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <motion.div initial={{y:-150}} animate={{y:0}} transition={{delay:1.5}}  className={styles.Profile}></motion.div>
        <motion.div initial={{x:100,borderRadius: 50, scale:1000}} animate={{x:0,borderRadius: 0,scale:1}} transition={{ duration: 1.5 }} className={styles.banner}>
          <h1 className={styles.title}>CAMILA SACCO</h1>
          <p className={styles.text}>Miss New Hampshire USA 2022</p>
        </motion.div>
      </div>
      <div style={{paddingTop: '20vh'}} className={styles.block}>
        <motion.p initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:2.5 ,duration:.5}} className={styles.type} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</motion.p>
        <motion.div initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:2.5,duration:.5}} className={styles.blockimg}>
        </motion.div>
      </div>
      <div className={styles.block}>
      <motion.div  initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:3.5,duration:.5}} className={styles.blockimg1}>  </motion.div>
        <motion.p initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:3.5,duration:.5}} className={styles.type} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</motion.p>
      </div>
      <div className={styles.block}>
        <motion.p  initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:4.5,duration:.5}} className={styles.type} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</motion.p>
        <motion.div  initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:4.5,duration:.5}} className={styles.blockimg2}>
        </motion.div>
      </div>
      <div className={styles.block}>
      <div  className={styles.blockimg3}>  </div>
        <p className={styles.type} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
      </div>
      <div className={styles.block}>
        <p className={styles.type} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
        <div  className={styles.blockimg4}>
        </div>
      </div>
      <div className={styles.block}>
      <div  className={styles.blockimg5}></div>
        <p className={styles.type} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
      </div>
      <div className={styles.block}>
        <p className={styles.type} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
        <div  className={styles.blockimg6}>
        </div>
      </div>
    </div>
  )
}

export default Home
