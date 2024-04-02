import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'
import Container from './Container'
import logo from '../../img/tree-60-64.png'


const Navbar = () => {
  return (
    <nav class={styles.navbar}>    
       <Container>
            <Link to='/'><img src={logo}/></Link>
            <ul class={styles.list}>
                <li class={styles.item}><Link to='/'>Home</Link></li>
                <li class={styles.item}><Link to='/sobre'>Sobre</Link></li>
                <li class={styles.item}><Link to='/contato'>Contato</Link></li>
            </ul>
       </Container>
    </nav>
  )
}

export default Navbar