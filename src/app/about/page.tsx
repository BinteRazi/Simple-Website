import Link from "next/link";
import styles from "../about/about.module.css";


const AboutPage = () => {
  return (
    <div className={styles.container}>
     <nav className={styles.nav}>
      <h1 className= {styles.header} >About Us</h1>

      <ul>
        <li><Link href="/">  Home </Link></li>
        <li><Link href="/service"> Service </Link></li>
        <li><Link href="/contact"> Contact Us </Link></li>
        </ul>
        </nav>

     <p> This About Us page is an example of how to show front-and-center my website
        and pluck the heartstrings of your audience with just the right content.An About Us 
        page is a section on a website that provides information about a company, organization,
        or individual. It's an opportunity to tell your brand's story, share your vision or mission,
         introduce team members, and outline your history and achievements. This is where you build 
         trust and credibility with customers.we found shoppers navigate to an About Us page to learn 
         more about the brand and the people behind the products. According to one study, 59% of consumers
          surveyed said they would more likely purchase from a brand they trust. That number jumps to 79% 
          of younger Gen Z consumers. Your About Page should address those two curiosities shoppers have to
         help them with decision making. Every business has an origin story worth telling, and usually one
         that justifies why you do business and have clients.Some centennial enterprises have pages of content 
         that can fit in this section, while startups can tell the story of how the company was born, its challenges,
         and its vision for the future.Whatever it is, your story matters to your prospective buyers and team members.
         Make it entertaining and as immersive as you can. With these four components in mind, you will have a
         framework from which to build an engaging and unique About Us page that incorporates your business's 
         most important asset: your clients.It is where you showcase your history, the unique value of your work,
          your mission and vision, and the audiences you serve.Together, the design, written content, and visual 
          elements of an About Us page tell an important story about who you are and what matters to you.</p>

       
    </div>
  );
};
   export default AboutPage;

