import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center gap-4 mb-10 text-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-10 h-10 text-white"
        >
          <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
        </svg>
        <a
          className=""
          href="mailto:aerial_snt@iitk.ac.in"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          aerial_snt@iitk.ac.in
        </a>
      </div>
      <div className="mt-10 mb-3 text-2xl">
        Reach out to our heads:
      </div>
      <div className="mb-10 text-lg">
        <a
          // className=""
          // href="mailto:sanskary22@iitk.ac.in"
          // target="_blank"
          // rel="noreferrer"
        >
          {" "}
          Ayush Goyal
        </a>
        <br />
        <a
          // className="underline"
          // href="mailto:dhillon22@iitk.ac.in"
          // target="_blank"
          // rel="noreferrer"
        >
          {" "}
          Prasun Shrivastav
        </a>
        <br />
        <a
          // className="underline"
          // href="mailto:amansg22@iitk.ac.in"
          // target="_blank"
          // rel="noreferrer"
        >
          {" "}
          Shivang Sonker
        </a>
        <br />
        <a
          // className="underline"
          // href="mailto:shrutird22@iitk.ac.in"
          // target="_blank"
          // rel="noreferrer"
        >
          {" "}
          Somya Garg
        </a>
        <br />
        <a
          // className="underline"
          // href="mailto:adityant22@iitk.ac.in"
          // target="_blank"
          // rel="noreferrer"
        >
          {" "}
          Sunraj Patel
        </a>
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
