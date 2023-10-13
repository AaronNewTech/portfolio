import Image from "next/image";
import NavBar from "./navbar";
import Link from "next/link";
// import BackgroundImage from "./backgroundimage";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div>
        <NavBar />
        <div className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-contain bg-fixed bg-[url('/images/homepage1/home-page-1-background.png')] bg-no-repeat">
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
          </div> 
        </div>

        <div id="about-me" className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-contain bg-fixed bg-[url('/images/about/about-me-image.png')] bg-no-repeat"></div>
        </div>

        <div id="projects" className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-contain bg-fixed bg-[url('/images/hompage2/12.png')] bg-no-repeat"></div>
        </div>

        <div id="contact-me" className="w-full h-full relative">
          <div className="relative h-screen aspect-auto bg-contain bg-fixed bg-[url('/images/contact/22.png')] bg-no-repeat"></div>
        </div>
      </div>
    </main>
  );
}
