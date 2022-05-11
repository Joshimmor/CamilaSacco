import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <img className={styles.Profile} src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        <div className={styles.banner}>
          <h1 className={styles.title}>CAMILA SACCO</h1>
          <p className={styles.text}>Miss New Hampshire USA 2022</p>
        </div>
      </div>
      <div style={{paddingTop: '20vh'}} className={styles.block}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
        <div className={styles.blockimg2}></div>
      </div>
      <div  className={styles.block}>
        <div className={styles.blockimg}></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
      </div>
      <div  className={styles.block}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
        <div className={styles.blockimg}></div>
      </div>
      <div  className={styles.block}>
        <div className={styles.blockimg2}></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique provident iure quod? Voluptate, placeat sed! Aperiam officia nostrum nulla, iste ratione sapiente totam iusto, nihil illo iure sint in suscipit.</p>
      </div>
    </div>
  )
}

export default Home
