import React , {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion, AnimatePresence } from "framer-motion"
function SocialLinks({...props}){
return(
  <AnimatePresence>
      {props.social &&
        (<motion.ul 
                key="slinks"
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                exit={{x:100,opacity:0}}
                transition={{duration:.5}}
                className={styles.subButtons}>
                    <li><a href="https://www.instagram.com/missnhusa/" target='_blank' rel="noreferrer">@missnhusa</a></li>
                    <li><a href="https://www.instagram.com/camilasacco7/" target='_blank' rel="noreferrer">@camilasacco7</a></li>
                    <li><a href="https://www.instagram.com/fromrootstoself/" target='_blank' rel="noreferrer">@fromrootstoself</a></li>
        </motion.ul>)}
  </AnimatePresence>
  )
}
function DonateLinks({...props}){
  return(
    <AnimatePresence>
        {props.donate &&
          (<motion.ul 
                  key="dlinks"
                  initial={{x:100,opacity:0}}
                  animate={{x:0,opacity:1}}
                  exit={{x:100,opacity:0}}
                  transition={{duration:.5}}
                  className={styles.subButtons}>
                       <li><a href='https://account.venmo.com/u/camilasacco7' target='_blank' rel="noreferrer" >Donate</a></li>
                       <li><Link href="./contact">Contact</Link></li>
          </motion.ul>)}
    </AnimatePresence>
    )
  }
export default function Menu(props: { setMenu: (arg0: boolean) => void; }) {
    const [social, setSocial] = useState(false)
    const [donate, setDonate] = useState(false)
    return (
      <AnimatePresence>
          <motion.div  
          initial={{y:500,opacity:0}}
          animate={{y:0,opacity:1}}
          exit={{y:500,opacity:0}}
          transition={{duration:.5}}
           className={styles.Buttons}
           >
            <Link href="/" >
              <a className={styles.links}>+Gallery</a>
            </Link>
            <Link href="/profile" >
              <a className={styles.links}>+Profile</a>
            </Link>
            <a onClick={()  => setSocial(!social)} className={styles.links}>
              +Instagram
            </a>
            <SocialLinks social={social}/>
            <a onClick={() => setDonate(!donate)} className={styles.links}>
              +Sponsorship
            </a>
            <DonateLinks donate={donate}/>
            <a onClick={() => props.setMenu(false) } className={styles.links}>
              +Close
            </a>
         </motion.div>
      </AnimatePresence>
    )
}
