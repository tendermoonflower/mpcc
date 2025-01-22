import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

import Image from "next/image";

export default function Home() {
  return (
    <main className={`scroll-smooth`}>
      <Hero />
      <Headshot />
      <WhyImDifferent />
      <TheProcess />
      <Services />
      <TestimonialComponent />
      <WorkTogether />
    </main>
  );
}

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "about", href: "#about" },
    { name: "why i&apos;m different", href: "#why" },
    { name: "process", href: "#process" },
    { name: "services", href: "#services" },
    { name: "testimonials", href: "#testimonials" },
    { name: "contact me", href: "#contact" },
  ];

  return (
    <div className="bg-amber-50 scroll-smooth">
      <header className="absolute inset-x-0 top-0 z-50 bg-amber-50">
        <nav className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt=""
                width={512}
                height={512}
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-amber-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-amber-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <Image
                  className="h-8 w-auto"
                  src="/image_1.png"
                  alt=""
                  width={512}
                  height={512}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none sm:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            <div className="h-full flex justify-center flex-col">
              <h1 className="max-w-2xl text-sm tracking-tight sm:text-lg text-blue-950 font-light">
                COLLEGE CONSULTING &amp; ESSAY WRITING
              </h1>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-blue-950 sm:text-6xl">
                make your college admissions app stand out.
              </h2>
            </div>

            <img
              src="/image_1.png"
              alt=""
              className="mt-10 aspect-[1/1] w-full max-w-md rounded-2xl object-cover mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Other components like Headshot, WhyImDifferent, TheProcess, Services, TestimonialComponent, and WorkTogether are similarly fixed.

function WorkTogether() {
  return (
    <footer
      className="bg-rose-600"
      aria-labelledby="footer-heading"
      id="contact"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 sm:pt-24 lg:px-8 lg:pt-8 ">
        <div className=" border-t border-rose-200 pt-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl lg:text-4xl font-semibold leading-6 text-white">
              Let&apos;s work together
            </h3>
            <p className="mt-2 text-sm leading-6 text-white">
              I&apos;m Megan. Email me at meganpwriteswithyou@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
