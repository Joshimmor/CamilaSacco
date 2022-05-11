import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
const { motion } = require("framer-motion");
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
      </Head>
      <div>
        <motion.div initial={{y:-200}} animate={{y:0}} transition={{delay:1.5}}  className={styles.Profile}></motion.div>
        <motion.div initial={{x:100,borderRadius: 50, scale:1000}} animate={{x:0,borderRadius: 0,scale:1}} transition={{ duration: 1.5 }} className={styles.banner}>
          <h3 className={styles.title}>CAMILA SACCO</h3>
          <p className={styles.text}>Miss New Hampshire USA 2022</p>
        </motion.div>
      </div>
      <div style={{paddingTop: '25vh'}} className={styles.block}>
        <motion.p initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        <motion.img  initial={{x:200,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg} src={"/camila2.jpg"} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! 
          Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.
          </motion.p>
      </div>
      {/* <div className={styles.block}>
        <p  className={styles.type} >
        <div   className={styles.blockimg1}>  </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! 
          Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.
          </p>
      </div>
      <div className={styles.block}>
        <p  className={styles.type} >
        <div className={styles.blockimg2}>  </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! 
          Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.
          </p>
      </div>
      <div className={styles.block}>
        <p  className={styles.type} >
        <div className={styles.blockimg3}>  </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! 
          Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.
          </p>
      </div>
      <div className={styles.block}>
        <p  className={styles.type} >
        <div className={styles.blockimg4}>  </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! 
          Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.
          </p>
      </div>
      <div className={styles.block}>
        <p  className={styles.type} >
        <div className={styles.blockimg5}>  </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! 
          Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.
          </p>
      </div>
      <div className={styles.block}>
        <p  className={styles.type} >
        <div className={styles.blockimg6}>  </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! 
          Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.
          </p>
      </div> */}
    </div>
  )
}

export default Home
