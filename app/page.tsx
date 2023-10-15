import Image from "next/image";
import NavBar from "./navbar";
import Link from "next/link";
import ContactForm from "./contactform";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div>
        <NavBar />
        <div className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-cover bg-fixed bg-[url('/images/homepage1/home-page-1-background.png')] bg-no-repeat  md:bg-scroll">
            <div className="absolute bottom-10 left-20 w-1/3 flex">
              <div className="mr-4 mb-20">
                <Link href="/#about-me">
                  <Image
                    src="/images/homepage1/about-me.png"
                    alt="About Me Button"
                    width={400}
                    height={100}
                    z-index={10}
                  />
                </Link>
              </div>
              <div>
                <Link href="/#projects">
                  <Image
                    src="/images/homepage1/projects.png"
                    alt="Projects Button"
                    // layout="responsive"
                    width={400}
                    height={100}
                    z-index={10}
                  />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-40 right-5 w-1/2 flex">
              <div className="">
                <Image
                  src="/images/homepage1/computer.png"
                  alt="About Me Button"
                  width={800}
                  height={800}
                  z-index={10}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="about-me" className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-cover bg-fixed bg-[url('/images/about/about-me-image.png')] bg-no-repeat"></div>
        </div>

        <div id="about-me" className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-cover bg-[url('/images/about/experience-page.png')] bg-no-repeat"></div>
        </div>

        <div id="projects" className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-cover bg-fixed bg-[url('/images/homepage2/12.png')] bg-no-repeat">
            <div className="absolute bottom-0 left-0 w-1/1 flex">
              <div>
                <Image
                  src="/images/homepage2/15.png"
                  alt="react-logo"
                  layout="responsive"
                  width={400}
                  height={100}
                  z-index={10}
                />
              </div>
              <div>
                <Image
                  src="/images/homepage2/16.png"
                  alt="javascript-logo"
                  layout="responsive"
                  width={400}
                  height={100}
                  z-index={10}
                />
              </div>
              <div>
                <Image
                  src="/images/homepage2/17.png"
                  alt="css-logo"
                  layout="responsive"
                  width={400}
                  height={100}
                  z-index={10}
                />
              </div>
              <div>
                <Image
                  src="/images/homepage2/18.png"
                  alt="html-logo"
                  layout="responsive"
                  width={400}
                  height={100}
                  z-index={10}
                />
              </div>
              <div>
                <Image
                  src="/images/homepage2/19.png"
                  alt="tailwind-logo"
                  layout="responsive"
                  width={400}
                  height={100}
                  z-index={10}
                />
              </div>
            </div>
            <div className="absolute bottom-40 flex">
              <div>
                <Link href="https://www.loom.com/share/41e418e86c974b9385b94bf251bba392">
                  <Image
                    src="/images/homepage2/13.png"
                    alt="speech-trainer-project"
                    layout="responsive"
                    width={800}
                    height={800}
                    z-index={10}
                  />
                </Link>
              </div>
              <div className="">
                <Link href="https://www.loom.com/share/38c4a54a33fa4ffc826e04214d7fbd3d">
                  <Image
                    src="/images/homepage2/14.png"
                    alt="cocktail-creator-project"
                    layout="responsive"
                    width={800}
                    height={800}
                    z-index={10}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
          <div id="contact-me" className="relative h-screen aspect-auto bg-cover bg-fixed bg-[url('/images/contact/22.png')] bg-no-repeat">
            <div className="absolute bottom-40 right-5 w-1/2 flex">
              <div className=""><Link href="/#contact-me">
                <Image
                  src="/images/contact/26.png"
                  alt="About Me Button"
                  width={800}
                  height={800}
                  z-index={10}
                /></Link>
              </div>
            </div>
            <div className="absolute bottom-20 left-20 w-1/4 flex">
              <ContactForm />
            </div>
          </div>
        
        {/* <div className="absolute bottom-20 left-20 w-1/2 flex">
      <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 bottom-40 left-10">
      
      <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

      <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

      

      <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
          Send
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </form>
    </div> */}
      </div>
    </main>
  );
}
// {/* <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
//       <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" /> */}

{
  /* <div>
                <Link href="/#projects">
                  <Image
                    src="/images/homepage1/projects.png"
                    alt="Projects Button"
                    // layout="responsive"
                    width={400}
                    height={100}
                    z-index={10}
                  />
                </Link>
              </div> */
}
