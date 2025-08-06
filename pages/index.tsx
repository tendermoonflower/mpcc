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
    { name: "why i'm different", href: "#why" },
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
              <h1 className="max-w-2xl text-sm tracking-tight  sm:text-lg text-blue-950 font-light">
                COLLEGE CONSULTING & ESSAY WRITING
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

function Headshot() {
  return (
    <div className="relative isolate -z-10 bg-rose-50" id="about">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-rose-100 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <Image
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="/AI_headshot.png"
            height={400}
            width={400}
            alt=""
          />
          <div className="w-full flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
             About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-950">
              Megan is a graduate from UC Berkeley and has been working as a
              College Counselor and Essay Editor since 2018. In 2021, she
              completed her Certificate in College Admissions and Career
              Planning through UC Berkeley Extension. She has worked with a
              handful of prep companies around the Bay Area and Silicon Valley,
              and is able to share that breadth of experience with her students
              without the corporate fluff (and exorbitant fees).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyImDifferent() {
  return (
    <div className="bg-white py-24 sm:py-32" id="why">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-rose-600">
            Authentic Expression
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            Why I&apos;m Different
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-blue-950 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>

                In a sea of students with similar stats and scores, an exceptional SAT score or perfect GPA is not enough to make a
                student stand out, so what will? Unlike standardized test scores or academic achievements, a genuine
                essay offers a glimpse into the applicant&apos;s unique personality, life experiences, and intellectual vitality.
                It&apos;s this type of authenticity that will allow an admissions officer to connect to a story, 
                and advocate for a student&apos;s acceptance.
              
              </p>
              <p className="mt-8">

                For most prep companies, profit is the bottom line. They run with the first
                idea a student comes up with, provide superficial edits for organization or word-choice, and then rinse and
                repeat. This is great for churning out a high volume of adequate essays quickly, but it fails to prompt
                the type of reflection and creative execution that will spark something real in a reader. 
                
              </p>
            </div>
            <div>
              <p>

                My experiences with these companies have shaped my counseling philosophy. I believe in taking a
                slower, more thoughtful approach, one that focuses on building a
                real connection with each student. This approach goes beyond
                just writing an essay; it involves understanding the
                student&apos;s unique story and helping them express it
                authentically. And with students accepted to Oxford, Johns Hopkins, and Stanford, the results
                speak for themselves.
              </p>
              <p className="mt-8">
                Together, we will
                delve deep into your student&apos;s experiences, thoughts, and
                aspirations. By doing so, we will craft essays that are not only
                well-written but also resonate with the readers on a personal
                level, making the application stand out in the competitive
                admissions process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TheProcess() {
  const steps = [
    {
      id: 1,
      question: "july - august",
      answer:
        "Part of what makes the personal statement writing process so challenging is that students have been taught to hide themselves behind academic analysis and formal writing. Through brainstorming and active listening in a low-stress environment, I invite students to recall authentic stories that we will develop into engaging essays.",
    },
    {
      id: 2,
      question: "august - september",
      answer:
        "By now, each student will have a wealth of material to write their personal statement if they don’t already have a rough draft. Generally, by mid-September, students will have a strong working draft that we will spend the rest of the month revising for clarity, organization, and powerful diction.",
    },
    {
      id: 3,
      question: "october",
      answer:
        "Most students will have hit their stride and are ready to hit the ground running on their school-specific supplemental essays. We focus on any early-application schools the student may be applying to. Most students are able to complete not only their early schools, but start on their regular deadline schools as well.",
    },
    {
      id: 4,
      question: "november - december",
      answer:
        "These tend to be tricky months for most students - school assignments are piling on, senioritis is creeping in, and the glow of the holidays is imminent. Luckily, because we front-loaded our brainstorming in the summer, many students find that they are able to complete the rest of their supplements with very little stress, and even have time to actually enjoy their holiday breaks.",
    },
    {
      id: 5,
      question: "january",
      answer:
        "After applications are submitted, some students may be asked to submit additional essays, a Letter of Continued interest in the case they are waitlisted, or be asked to participate in an interview. I am available by appointment to provide support.",
    },
  ];

  return (
    <div className="bg-amber-50" id="process">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-rose-600">
          The Process
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {step.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {step.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function Services() {
  const features = [
    {
      name: "early high school advising",
      description:
        "By-appointment guidance on class selection, extra curricular time management, and summer program applications.",
      price: "$200/hour",
      icon: hand-raised,
    },
    {
      name: "university package",
      description:
        "Full-service application advising and essay editing for high school seniors planning to apply to college. ",
      price: "$10,000",
      icon: academic-cap,
    },
    {
      name: "graduate school advising",
      description:
        "High level personal statement advising for students planning to apply to gradute school and medical school ",
      price: "case by case",
      icon: rocket-launch,
    },
  ];
  return (
    <div className="bg-white py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-rose-600">
            Services
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            How I Help My Students
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-rose-700">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <span className="text-sm font-semibold leading-6 text-rose-600">
                      {feature.price}
                    </span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const TestimonialComponent = () => {
  const [testimonialActive, setTestimonialActive] = useState(2);

  const handlePrevClick = () => {
    setTestimonialActive(testimonialActive === 1 ? 10 : testimonialActive - 1);
  };

  const handleNextClick = () => {
    setTestimonialActive(testimonialActive >= 10 ? 1 : testimonialActive + 1);
  };

  return (
    <div
      className="antialiased sans-serif bg-amber-50 text-blue-950"
      id="testimonials"
    >
      <div className="py-10 xl:py-24 container mx-auto flex flex-col xl:flex-row shadow-sm overflow-hidden ">
        <div className="relative w-full py-2 xl:py-24 bg-rose-600 xl:w-1/2 flex flex-col item-center justify-center xl:min-h-[640px]">
          <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 xl:w-40 xl:h-40 xl:ml-20 xl:mt-24 flex"></div>
          <div className="relative text-2xl xl:text-5xl py-2 px-6 xl:py-6 xl:px-1 xl:w-64 xl:mx-auto text-white font-semibold leading-tight tracking-tight mb-0 z-20">
            <span className="xl:block sm:ml-12 xl:ml-0">
              What My Customers Are Saying!
            </span>
          </div>
          <div className="absolute right-0 bottom-0 mr-4 xl:mb-4 mb-3 z-30 flex">
            <button
              className="rounded-l-full border-r bg-gray-100 text-blue-950 focus:outline-none hover:text-rose-500 font-bold w-12 h-10"
              onClick={handlePrevClick}
            >
              &#8592;
            </button>
            <button
              className="rounded-r-full bg-gray-100 text-blue-950 focus:outline-none hover:text-rose-500 font-bold w-12 h-10"
              onClick={handleNextClick}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="bg-white xl:w-1/2 p-8">
          {/* Testimonial 1 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 1 ? "" : "hidden"
            }`}
          >
            <p>
              Do not underestimate the importance and difficulty of the written
              portions that go into the undergraduate or graduate school
              application process. The writing process is important because it
              is the narrative that serves to persuade an institution why you
              should be admitted. It is also extremely difficult, because you
              must use your past experiences to justify why you think you&apos;d
              be a great fit and why you think you can succeed at an institution
              into one cohesive narrative. Megan has been instrumental in
              helping with the process outlined above. I have many disparate
              past experiences and finding a common thread between them was not
              an easy task. You want to be able to use your strongest past
              experiences but it&apos;s also important for them to build a story
              together. Megan helped me brainstorm many possible variations, and
              tailoring different combinations of stories to align with the
              criteria that different schools and programs are looking for. The
              actual writing process even after having an outline requires many
              iterations and sometimes complete revamps. Megan&apos;s
              expectations were high, and her feedback was conceptual, often
              requiring entire sections to be re-written. This is the kind of
              editor that you want to work with if you are aiming high. Applying
              for top schools, everybody is going to have incredible experiences
              to talk about, so the narrative can become a distinguishing factor
              between applicants.
            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
                Sebastian C
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
                Stanford 26, MS in Data Science
              </small>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 2 ? "" : "hidden"
            }`}
          >
            <p>
              After only one meeting with Megan, I knew she would connect with
              my daughter as a mentor, advisor and peer. Over the course of the
              engagement, Megan struck the right balance of encouragement and
              push to motivate my daughter to make steady progress on her
              essays. She communicated with me throughout with status updates
              and proactively asked for my help when needed or when my daughter
              was not immediately responsive to her outreach. Megan&apos;s
              guidance on my daughter&apos;s writing was of course most
              important and reflected her ability to raise the quality and
              creativity of my daughter&apos;s essays while working with her
              inherent style. I&apos;d certainly recommend Megan for any parents
              looking for a counselor with the skill to get the most out of
              their child in what can be a stressful but important process.
            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
                Sujal S
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
                parent
              </small>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 3 ? "" : "hidden"
            }`}
          >
            <p>
            When I first began working with Megan, I had pigeonholed myself as an Economics major.
            Because I lacked a deeper passion for the subject, I struggled to come up with anything 
            authentic in my essays. Rather than allowing me to write these shallow essays, Megan noticed 
            my internal turmoil and chose to spend hours talking with me about my interests, challenging
            me to discover myself past my surface. Quickly, I found my writing to come more seamlessly as 
            I began to unearth my real passions. Not only did Megan help me write my essays, she left me
            with a greater understanding of myself, and the pathway towards uncovering more during my 
            next four years in college.
            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
                Rio K
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
                UC Santa Barbara 26, BS in Media Studies
              </small>
            </div>
          </div>

               {/* Testimonial 4 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 4 ? "" : "hidden"
            }`}
          >
            <p>
            Megan is an incredibly professional and efficient counselor, and throughout the application process, 
            her time management and expertise shone through. I was able to finish essays early and fine-tune them
            without pressure from an upcoming deadline. Her unique ability to cultivate creative and compelling 
            essays was what made writing with her throughout the college application process so enjoyable. I was 
            able to write distinctive essays that got me into schools like Johns Hopkins and Stanford. I truly 
            could not have done it with her help and I highly recommend working with her. 
            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
              Sarah Y
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
                Stanford 25, Pre-Medicine
              </small>
            </div>
          </div>

             {/* Testimonial 5 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 5 ? "" : "hidden"
            }`}
          >
            <p>
            Megan was a pleasure to work with throughout my college application process. 
              I came in with a rather stale writing style: straightforward, unamusing, and 
              writing like a 30-year-old. But with Megan&apos;s guidance through weekly meetings 
              and exemplar pieces, I came to develop a more personable and vibrant writing 
              style that captured my authentic voice. Not to mention, the weekly 1-on-1&apos;s were 
              super helpful for brainstorming essay ideas and making revisions, and Megan&apos;s 
              relatable personality made this stressful process feel more enjoyable. Overall, 
              Megan&apos;s expertise enabled me to showcase my best self and ultimately earn admission 
              to one of my top-choice schools!
            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
              William Z
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
               UC Berkeley 25, Economics & Pre-Business
              </small>
            </div>
          </div>

            {/* Testimonial 6 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 6 ? "" : "hidden"
            }`}
          >
            <p>
           As a first generation student who lacked help with the college application process,
              Megan provided me with clear directions from the start. She pushed me to see past
              my simplistic thoughts for essays, guiding me through my tangled thought-process and
              helping me create a well-written essay. Her mindset was not just to help with essays,
              but rather to build advanced writers, allowing me to carry the skills I&apos;ve learned into
              the rest of my life. Throughout the stressful process, Megan proved to be not only a successful
              college counselor but also a life counselor. As a result of her work, I have finally established
              guiding values that I follow in my life and more thoroughly understand who I am. Megan is a
              relatable and genuine person, but also is not scared to push students to continuously strive for their best. 

            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
              Monisha S
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
               DVHS 2025
              </small>
            </div>
          </div>

             {/* Testimonial 7 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 7 ? "" : "hidden"
            }`}
          >
            <p>
          For any families on the fence about hiring Megan - she truly is the best. I learned so much
          about myself through working with her, and those insights were what made my essays strong.
          If you are interested in getting into the best schools possible, learning how to write,
          and learning about yourself in the process, Megan will bring that potential out of you.
          She is fun and sweet and super smart and has a special way of connecting with students,
          AND at the same time, she has frustratingly high expectations, which I&apos;m sure parents will
          appreciate. Just based on what I heard from my sister and some of my friends, there are
          counselors out there who are just interested in preying on families who want the best for
          their kids and will OK any essay that looks and sounds like an essay but Megan will push
          you beyond your expectations.

            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
              Bernice L
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
              Columbia 26, Dual BA, Sciences Po
              </small>
            </div>
          </div>

              {/* Testimonial 8 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 8 ? "" : "hidden"
            }`}
          >
            <p>
          I used Megan&apos;s services as a senior in high school, hoping to get a second opinion 
          after my main college counselor had vetted my work. After discussing it with her,
          she saw a large room for improvement and pushed me to create deeper, more polished
          essays. While my other counselor charged an arm and a leg to help me prepare the
          bare minimum, Megan helped me excel in my writing. Fast forward two years; personal
          matters prompted me to transfer universities, and I was able to use her services once
          more. Despite reaching out at the last minute, Megan made time and didn&apos;t take shortcuts
          when it came to putting my best foot forward. I am super grateful for her guidance
          throughout my college application process!

            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
              Faizan A
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
              UC Santa Barbara 26, Engineering
              </small>
            </div>
          </div>

           {/* Testimonial 9 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 9 ? "" : "hidden"
            }`}
          >
            <p>
          After trying out a standard prep company, working with you was like night and day. 
          You looked at my profile as a whole, and you helped me come up with essay topics that 
          I could use to tie in all of my activities, all of my aspirations, etc. and that&apos;s really important,
          because how are you supposed to build a strong profile if all of your essays are about different things 
          and don&apos;t even tie in together. It&apos;s actually crazy how you think and were able to make connections 
          between things that I didn&apos;t even see at first. I don&apos;t think I understood what it meant to reflect on 
          myself until I met you. No way would someone at C2 have spent that much time thinking with me, and you didn&apos;t 
          let me get away with lazy thinking. I think you really saw the best in me and you really really pushed me to 
          be that person, and I&apos;m glad you did because I don&apos;t think I would have made it to UChicago otherwise.

            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
              Sarthak K
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
              University of Chicago 27, Computer Science
              </small>
            </div>
          </div>

         {/* Testimonial 10 */}
          <div
            className={`h-full relative z-10 flex flex-col justify-between  ${
              testimonialActive === 10 ? "" : "hidden"
            }`}
          >
            <p>
          My favorite thing about Megan&apos;s approach to essay-writing is that she makes the essays
          very reflective and personal of our lives. A lot of other essay-writing companies I&apos;ve heard about 
          from friends have said that their essays felt sort of shallow and didn&apos;t sound like who they truly were.
         Megan advised me to do free-writing all through summer on many different prompts that forced me to dig down 
        into what my values are, and after figuring that out, she had me find where my values were reflected in my 
        extracurriculars and write from that point of view. Through doing this, my essays came out with much more
        depth and personality while also displaying my extracurriculars in a way that didn&apos;t seem shallow.
          Megan also took the time to really get to know me so she could best gauge which direction to point me
          in when I had multiple ideas and figured out the best way to explain fixes in my essays.
          Her edits also helped my ideas flow much better without changing my style of writing,
          something I think is more unique to her style of essay-writing. I wouldn&apos;t think twice
          about choosing Megan for counseling, she is incredible!


            </p>
            <div className="text-center my-8" x-show="testimonialActive == 1">
              <h2 className="text-sm xl:text-base font-bold text-rose-600 leading-tight">
              Saanvi T
              </h2>
              <small className="text-rose-400 text-xs xl:text-sm truncate">
              UC San Diego 28, Cognitive Science
              </small>
            </div>
          </div>


          {/* Other elements like buttons, names, etc. */}
        </div>
      </div>
    </div>
  );
};

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
