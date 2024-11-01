import Link from "next/link";
import styles from "../service/service.module.css";

const ServicePage = () => {
    return (
      <div className= {styles.container}>
        <h1 className= {styles.header}>Service</h1>
        <nav className={styles.nav}>

        <ul>
        
        <li><Link href="/">  Home </Link></li>
        <li><Link href="/about">  About </Link></li>
        <li><Link href="/service/web-development">  Web Development </Link></li>
        <li><Link href="/contact">  Contact Us </Link></li>
        </ul>
       </nav>
       
       <p>Service pages define what you offer, what makes you unique, and why your business is
         best suited for the job. Service pages are great sales collateral for your business since 
         they better explain each serviceA service page that clearly outlines what you offer and how
         it benefits your customers helps bring in genuinely interested visitors.Example of a page that's
         mobile responsive, user-centered, and service-specific.First, make sure that the information is easy
          to find for visitors. Make sure the text is concise and organised so that visitors can easily find 
         what they are looking for. Additionally, make sure that your service page content is interesting 
         and engaging.Most businesses should be able to split their different services into unique pages. 
         Service pages define what you offer, what makes you unique, and why your business is best suited 
         for the job.Service pages are great sales collateral for your business since they better explain
          each service. A service page should help you rank well for high-intent website traffic if created 
          and optimized for SEO correctly.Service pages have a very high commercial intent. When someone searches
         for a specific service, such as “teeth whitening” or “transmission repair,” they are further down the 
         sales funnel and already considering purchasing, as opposed to someone in the research phase searching,
         “Does teeth whitening last for a long time.” The difference between commercial vs. informational intent 
         is whether someone is researching (informational) vs. ready to purchase (commercial).  </p>

       
      </div>
    );
  };
     export default ServicePage;
  
  