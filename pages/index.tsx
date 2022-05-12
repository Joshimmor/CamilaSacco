import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
const { motion } = require("framer-motion");
const Home: NextPage = () => {
  return (
    <motion.div initial={{backgroundColor:'#ebb2a1'}} animate={{backgroundColor:'#ffffff'}} transition={{delay:.2, duration:1.5}} style={{paddingTop: '21vh'}}>
      <Head>
        <title>Camila Sacco</title>
        <meta name="description" content="Miss New Hampshire" />
      </Head>
      <div>
        <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:.75}}  className={styles.Profile}></motion.div>
        <motion.div initial={{x:100}} animate={{x:0}} transition={{ duration: .75 }} className={styles.banner}>
          <h3 className={styles.title}>CAMILA SACCO</h3>
          <p className={styles.text}>Miss New Hampshire USA 2022</p>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.social}>
        <a href="">
          <img src="/insta.png" alt="" />
        </a>
        <br />
        <a href="">
          <img src="/vimeo.png" alt="" />
        </a>
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} style={{marginBottom:'5vh',justifyContent:'center', paddingBottom:0}} className={styles.block}>
        <motion.p   initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type} style={{color:'#808080',fontSize:'Medium'}} >
        &nbsp;&nbsp;&nbsp;&nbsp; &quot;I started this journey six years ago as a young girl with no confidence, living life to the expectations of others, and physically and mentally unwell. That changed when I started competing in pageants. Many times on the road to pursuing this dream, I was told to give up. Had I listened and stopped watering those dreams at any point, I wouldn&apos;t have sprouted into my fullest potential.
        <br /><br />
         &nbsp;&nbsp;&nbsp;&nbsp;Today, I couldn&apos;t be more in love with the woman I have become. I am confident, empowered, and secure in myself. 
        To me, success is defined by pursuing the dreams you can&apos;t stop thinking about, despite what those around you might say about it. I am doing just that, and I hope to inspire others to do the same. All limitations are self-imposed&quot;
        </motion.p>
      </motion.div>
      <div  className={styles.block}>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        On May 1, 2022 Camila Sacco was crowned Miss New Hampshire USA 2022.
        </motion.p>
        <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg} src={"/camila2.jpg"} />
      </div>
      <div className={styles.block}>
      <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg1} src={"/camila3.jpg"} />
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        After moving from Asuncion, Paraguay in 1999, she was naturalized and became a citizen on September 23rd, 2016.
          </motion.p>
      </div>
      <div className={styles.block}>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        Camila currently works at Portsmouth Regional Hospital as a Health Information Management Specialist in the medical records department. She also works as an integrative nutritionist through her own practice, From Roots to Self.
          </motion.p>
          <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg} src={"/camila4.jpg"} />
      </div>
      <div className={styles.block}>
      <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg1} src={"/camila5.jpg"} />
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        In 2018 she graduated from Wichita State University with her B.A. in Psychology. Currently she is remotely finishing her Masters of Science in Integrative Health in Nutrition with a focus in Herbal Medicine from Maryland University of Integrative Health. She will then pursue her Doctorate in Clinical Nutrition.
          </motion.p>
      </div>
      <div className={styles.block}>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        Camila enjoys gardening, herbalism, cooking, and spending time outdoors. 
        </motion.p>
        <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg} src={"/camila6.jpg"} />
      </div>
      <div className={styles.block}>
      <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg1} src={"/camila7.jpg"} />
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        She plans to help revolutionize the standards of ingredients allowed in food products and create more sustainable practices in agriculture and food production.
          </motion.p>
      </div>
      <div className={styles.block}>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:.5}} className={styles.type}>
        New Hampshire has yet to bring win the title of Miss USA. Camila hopes to make history by being the first.
        </motion.p>
        <motion.img  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5, duration:1}} className={styles.blockimg} src={"/camila8.jpg"} />
      </div>
    </motion.div>
  )
}

export default Home
