import Link from "next/link";
import styles from "../contact/contact.module.css";

const ContactPage = () => {
    return (
      <div className= {styles.container}>
      <nav className={styles.nav}>
      <h1 className= {styles.header} >Contact Us</h1>
      
        <ul>
        <li><Link href="/"> Home </Link></li>
        <li><Link href="/about">  About Us </Link></li>
        <li><Link href="/service">  Service </Link></li>
        </ul>
        </nav>
     
     
     <p>The contact page itself is friendly and inviting, reassuring visitors with text such as “Let's chat. 
       Tell me about your project” and “Let's create something together.” In addition to providing an email address,
       the page makes use of a contact form, enabling customers to connect directly from the site.A Contact Us page is 
       a vital component of a brand's website. It's one of the few ways available for potential customers to have a direct
       line of communication with a business all without leaving the site.Not only is a Contact Us page great for capturing
       leads, but it's also an efficient tool for customer service operations.Website visitors will typically also leave
       feedback or ask general questions through a contact page. These pieces of information are valuable to businesses
        because they learn more about consumer expectations and preferences.Ensure you include enough business details on
        your Contact Us page so customers know how to reach you. You'll want to add your: Hours of operation: This tells
        customers when they can contact your business. Phone number and email address: Customers can contact your business
        directly.A strong Contact Us page should contain several elements, such as a phone number and links to social media channels.
         It should also be easy to navigate, as this makes for a positive customer experience. Ensuring you incorporate these components
         into your Contact Us page can help you retain customers and improve your customer service.With the best Contact Us page design
          examples outlined in this article, learn how to craft a helpful and informative page that makes it easy for customers to connect 
          with your business and get the information they need.
          
     </p>
       
        
      </div>
    );
  };
     export default ContactPage;
  
  