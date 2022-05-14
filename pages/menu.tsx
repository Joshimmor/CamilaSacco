import React , {useState} from 'react'
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
                    <li>@NewHampshireUSA</li>
                    <li>@CamilaSacco</li>
                    <li>@RootToSelf</li>
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
                       <li>Donate</li>
                      <li>Contact</li>
          </motion.ul>)}
    </AnimatePresence>
    )
  }
export default function Menu({...props}) {
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
            <a href="" className={styles.links}>+Gallery</a>
            <a  onClick={()  => setSocial(!social)} className={styles.links}>+Instagram</a>
            <SocialLinks social={social}/>
            <a onClick={() => setDonate(!donate)} className={styles.links}>+Sponsorship</a>
            <DonateLinks donate={donate}/>
         </motion.div>
      </AnimatePresence>
    )
}
