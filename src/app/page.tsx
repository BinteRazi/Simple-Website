import Link from "next/link";
import styles from "../app/module/home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      
      <div style={{backgroundImage: "url('/images/image.png')", backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',height: '100vh'}}>

      <h1 className={styles.header}>Welcome to My Website</h1>
      <nav className={styles.nav}>
        
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/service">Service</Link></li>
        <li><Link href="/service/web-development">Web Development</Link></li>
      </ul>
      </nav>
      

      </div>
    </div>
  );
};
   export default HomePage;

