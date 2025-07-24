import NewsLatterBox from "./NewsLatterBox";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-1 pt-5 pb-16">
        <p className="text-2xl px-5">
          Get in touch with us:
        </p>
        <a
          className="text-4xl hover:text-primary transition-colors duration-200"
          href="mailto:aerial_snt@iitk.ac.in"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope/> aerial_snt@iitk.ac.in
          </div>
        </a>
      </div>
      
      <div className="flex flex-wrap items-center justify-center mb-24 gap-16 pt-8 text-2xl">
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        <div className="text-center">
          Ayush Goyal <br />
          <a
            className="text-xl hover:text-primary transition-colors duration-200"
            href="mailto:gayush23@iitk.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            gayush23@iitk.ac.in
          </a>
        </div>

        <div className="text-center">
          Prasun Shrivastav <br />
          <a
            className="text-xl hover:text-primary transition-colors duration-200"
            href="mailto:prasuns23@iitk.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            prasuns23@iitk.ac.in
          </a>
        </div>

        <div className="text-center">
          Shivang Sonker <br />
          <a
            className="text-xl hover:text-primary transition-colors duration-200"
            href="mailto:shivangso23@iitk.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            shivangso23@iitk.ac.in
          </a>
        </div>

        <div className="text-center">
          Somya Garg <br />
          <a
            className="text-xl hover:text-primary transition-colors duration-200"
            href="mailto:somyagarg23@iitk.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            somyagarg23@iitk.ac.in
          </a>
        </div>

        <div className="text-center">
          Sunraj Patel <br />
          <a
            className="text-xl hover:text-primary transition-colors duration-200"
            href="mailto:sunrajp23@iitk.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            sunrajp23@iitk.ac.in
          </a>
        </div>
        <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
      </div>
    </div>

    // <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
    //   <div className="container">
    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
    //         <div
    //           className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
    //           data-wow-delay=".15s
    //           "
    //         >
    //           <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
    //             Need to know more? We are happy to help.
    //           </h2>
    //           <p className="mb-12 text-base font-medium text-body-color">
    //             Just ask.
    //           </p>
    //           <form>
    //             <div className="-mx-4 flex flex-wrap">
    //               <div className="w-full px-4 md:w-1/2">
    //                 <div className="mb-8">
    //                   <label
    //                     htmlFor="name"
    //                     className="mb-3 block text-sm font-medium text-dark dark:text-white"
    //                   >
    //                     Your Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     placeholder="Enter your name"
    //                     className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="w-full px-4 md:w-1/2">
    //                 <div className="mb-8">
    //                   <label
    //                     htmlFor="email"
    //                     className="mb-3 block text-sm font-medium text-dark dark:text-white"
    //                   >
    //                     Your Email
    //                   </label>
    //                   <input
    //                     type="email"
    //                     placeholder="Enter your email"
    //                     className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="w-full px-4">
    //                 <div className="mb-8">
    //                   <label
    //                     htmlFor="message"
    //                     className="mb-3 block text-sm font-medium text-dark dark:text-white"
    //                   >
    //                     Your Message
    //                   </label>
    //                   <textarea
    //                     name="message"
    //                     rows={5}
    //                     placeholder="Enter your Message"
    //                     className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
    //                   ></textarea>
    //                 </div>
    //               </div>
    //               <div className="w-full px-4">
    //                 <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
    //                   Submit
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //       <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
    //         <NewsLatterBox />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
