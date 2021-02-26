import Container from './container'
import Header from "./header"
import Sumario from './sumario'
import Post from './posts'
import styles from '../styles.module.css'
import Link from 'next/link'
import Head from 'next/head'


function Home(){
    return (       
        <>   
       
    <Head>
        
    <title>LetrasDoÓcio</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="shortcut icon" href="/favicon.png" />
    
    </Head>
    
  
             
            <Header/>
             <Container/>
               <Sumario/>
                
                <a className={styles.link}><Post titulo="<----- Filho Malcriado
  ----->"/></a>
                <Link href="/minhaqueridafe">
                <a className={styles.link}><Post titulo="<----- Minha Querida Fé ----->"/></a>
                </Link>
                <a className={styles.link}><Post titulo="<----- ? ----->"/></a>
                <a className={styles.link}><Post titulo="<----- ? ----->"/></a>
              
        </>
       
    )

}
export default Home