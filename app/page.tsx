"use client";
import Image from "next/image";
import NavBar from "./navbar";
import Link from "next/link";
import ContactForm from "./contactform";
import "./styles.css";

export default function Home() {
  return (
    <main id="main">
     <div id="navbar-container" >
        <NavBar />
    </div>
      <div className="homepage-1">
        <img
          id="homepage-image"
          src="/images/homepage1/home-page-1-background.png"
          alt="background "
        />

        <div>
          <Link href="#about-me">
            <img
              id="about-me-button"
              src="/images/homepage1/about-me.png"
              alt="about me button"
            />
          </Link>
        </div>

        <div>
          <Link href="#projects">
            <img
              id="projects-button"
              src="/images/homepage1/projects.png"
              alt="projects button"
            />
          </Link>
        </div>

        <div>
          <img
            id="computer"
            src="/images/homepage1/computer.png"
            alt="computer image"
          />
        </div>
      </div>
      <div>
        <div className="homepage-2">
          <img id="about-me" src="/images/about/about-me-image.png" />
        </div>
      </div>
      <div>
        <div className="homepage-3">
          <img id="experience" src="/images/about/experience-page.png" />
        </div>
      </div>
      <div className="homepage-4">
        <img id="projects" src="/images/homepage2/12.png" />

        <div className="project-links">
          <div>
            <Link
              target="_blank"
              href="https://www.loom.com/share/41e418e86c974b9385b94bf251bba392"
            >
              <img
                id="speech-trainer-icon"
                src="/images/homepage2/13.png"
                alt="speech-trainer-project"
              />
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href="https://www.loom.com/share/38c4a54a33fa4ffc826e04214d7fbd3d"
            >
              <img
                id="cocktail-creator-icon"
                src="/images/homepage2/14.png"
                alt="cocktail-creator-project"
              />
            </Link>
          </div>
        </div>

        <div className="technologies">
          <div>
            <img
              id="python-logo"
              src="/images/skills/16.png"
              alt="python-logo"
            />
          </div>
          <div>
            <img id="flask-logo" src="/images/skills/17.png" alt="flask-logo" />
          </div>
          <div>
            <img id="react-logo" src="/images/skills/18.png" alt="react-logo" />
          </div>
          <div>
            <img
              id="javascript-logo"
              src="/images/skills/19.png"
              alt="javascript-logo"
            />
          </div>
          <div>
            <img id="css-logo" src="/images/skills/20.png" alt="css-logo" />
          </div>
          <div>
            <img
              id="html-logo"
              src="/images/skills/21.png"
              alt="tailwind-logo"
            />
          </div>
        </div>
      </div>

      <div className="homepage-5">
       
          <div>
            <ContactForm />
          
          <img id="contact-me" src="/images/contact/22.png" />
          <div>
            <img
              id="contact-computer"
              src="/images/contact/26.png"
              alt="computer image"
            />
          </div>
        </div>
      </div>

      {/* src="/images/contact/26.png */}
      {/* <div>
        <NavBar />
        <div className="w-full h-full relative">
          <div
            style={{
              ...sectionStyle,
              backgroundImage: `url('/images/homepage1/home-page-1-background.png')`,
            }}
          >
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
                    width={400}
                    height={100}
                    z-index={10}
                  />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-40 right-5 w-1/2 flex">
              <div>
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
          <div
            style={{
              ...sectionStyle,
              backgroundImage: `url('/images/about/about-me-image.png')`,
            }}
          ></div>
        </div>

        <div id="experience" className="w-full h-full relative">
          <div
            style={{
              ...sectionStyle,
              backgroundImage: `url('/images/about/experience-page.png')`,
            }}
          ></div>
        </div>

        <div id="projects" className="w-full h-full relative">
          <div
            style={{
              ...sectionStyle,
              backgroundImage: `url('/images/homepage2/12.png')`,
            }}
          >
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
            <div className="">
              <Link href="/#contact-me">
                <Image
                  src="/images/contact/26.png"
                  alt="About Me Button"
                  width={800}
                  height={800}
                  z-index={10}
                />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-20 left-20 w-1/4 flex">
            <ContactForm />
          </div>
        </div>
      </div> */}
    </main>
  );
}
