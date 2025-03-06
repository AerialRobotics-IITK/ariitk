import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us | AR-IITK",
  description: "Recruitment page for AR-IITK",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Y24 Recruitments will begin soon!"
        // description="The recruitment test is scheduled for March 8th at Lecture Hall 7, beginning at 2:30 pm. Please ensure your laptops are fully charged. If you have any questions or suggestions, please don't hesitate to contact us."
        description="The introduction session will be held on March 18th. If you have any questions or suggestions, please don't hesitate to contact us."
      />

      {/* Embed Canva */}
      <div style={{ position: 'relative', width: '90%', margin: '0 auto', paddingTop: '56.2500%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
        <div dangerouslySetInnerHTML={{ __html: `<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAF-XIp_3_I/g9ql-YVGbhQzH2YpTNQQdQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>` }} />
      </div>
      <a href="https://www.canva.com/design/DAF-XIp_3_I/g9ql-YVGbhQzH2YpTNQQdQ/view?utm_content=DAF-XIp_3_I&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener"></a> 
            <div className="google-docs-embed" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQ49x4SfVEKTQTGjpqor7UFo5V6KhDHx1SVQvB6l8257Odn5NNTRoRU87UBhrs1uHDa1c3SLdz_If4n/pub?embedded=true"
          title="Google Docs Embed"
          style={{ width: '50%', height: '80%' }}
          frameBorder="0"
          allowFullScreen
        ></iframe>


      </div>
      <div style={{ textAlign: 'center', marginBottom: '1em' }}>
      {/* <p style={{ fontSize: '1.1em' }}>Get ready to tackle the challenges! Can't wait to see you awesome peeps joining our team for some serious fun and learning! Let's do this!<br/> Here's the <a href="https://drive.google.com/file/d/1HoSzhonLO_KQzDN9fJdJvYdMuOAVYx1c/view" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline'}}>link for the paper</a>, dive in and let the fun begin! 🚀🚁 All the best and have fun!</p> */}
      <p style={{ fontSize: '1.1em' }}>The recruitment test is over!</p>


      </div>
      {/* <Contact /> */}
    </>
  );
};

export default ContactPage;
