import ClientsSection from "@/components/homepage/ClientsSection";
import ContactForm from "@/components/homepage/ContactForm";
import SolutionsSection from "@/components/homepage/SolutionsSection";
import VisionMissionSection from "@/components/homepage/VisionMissionSection";
import Link from "next/link"; 
import * as motion from "motion/react-client"

export default async function Home() {
  return (
    <div>
      <div className="relative w-full max-h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient Overlay */}
        <div className="fixed inset-0 flex flex-col gap-8 items-center justify-center bg-blueb-gradient-opacity-50"></div>

        {/* Main Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="relative w-full h-full flex flex-col justify-between"
        >
          {/* Centered Text Content */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 pt-20">
            <div className="max-w-4xl w-full space-y-8">
              {/* Headlines */}
              <div className="space-y-4 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  “Clear & Clean Solution For Troubled Water”
                </h1>
              </div>

              {/* Highlight Box */}
              <div className="w-full bg-[#77B82A] py-3">
                <p className="text-center text-white text-base md:text-lg lg:text-xl">
                  We Remove Everything from Water{" "}
                  <span className="font-bold">
                    Except - &quot;Hydrogen & Oxygen&quot;
                  </span>
                </p>
              </div>

              {/* Poem */}
              <div className="space-y-3">
                <p className="font-sofia font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                  IONIC is our name, Clean water is our flame.
                </p>
                {/* <p className="font-sofia font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                                    We remove everything from water, Except - Hydrogen and oxygen,
                                </p> */}
                <p className="font-sofia font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                  With every drop we treat, We make it even more pure
                </p>
                <p className="font-sofia font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                  As we build a sustainable future, We help create a liveable
                  Earth!
                </p>
                <p className="font-sofia font-light text-white text-base md:text-lg lg:text-xl text-center italic">
                  So here&apos;s to IONIC A beacon of hope, Helping humanity to
                  cope.
                </p>
              </div>

              {/* Headlines */}
              <div className="space-y-4 text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  We Treat Water - Differently
                </h2>
              </div>
            </div>
          </div>

          {/* Bottom Pipeline Section */}
          <div className="relative w-full mt-4 max-w-7xl mx-auto items-center justify-center">
            {/* Mobile Pipeline */}
            <img
              src="/waterflow/flow.png"
              alt="Water Treatment Process"
              className="w-full block lg:hidden"
            />

            {/* Desktop Pipeline */}
            <div className="hidden lg:block w-full">
              <img
                src="/waterflow/flow.png"
                alt="Water Treatment Process"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex w-full gap-10 mx-auto bg-white responsive-padding rounded shadow-md relative justify-center">
        <section className="bg-white my-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Right Column */}
            <img
              className="w-full rounded-lg object-contain"
              src="/homepage/ionicglobe.jpg"
              alt="Descriptive Alt Text"
            />

            {/* Left Column */}
            <div>
              {/* Section Label with Background */}
              <div className="relative flex mb-4 gap-5 items-center">
                <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
                <h2 className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                  Secure Water, Secure Tomorrow
                </h2>
                <div className="border-t-2 border-primary mt-1 w-16"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-headlineColor leading-tight mb-4">
                Securing Tomorrow by Saving Water Today
              </h2>

              {/* Supporting Text */}
              <p className="text-textcolor mb-6">
                Water is the most precious resource, essential for life, yet
                often taken for granted. Despite its critical importance, water
                scarcity has led to conflicts, exploitation, and
                commercialization, transforming what was once free into an
                expensive necessity. If we don&apos;t act responsibly now, we
                risk leaving future generations with a world with insufficient
                water, threatening livelihoods and society itself. While nature
                offers abundant seawater, its conversion remains costly, and no
                alternative to water exists. As individuals with the ability to
                think and act, let us commit to conserving water and addressing
                the crisis as part of our responsibility toward a sustainable
                future. At Ionic, we invite you to explore our innovative water
                and wastewater solutions, designed to highlight the true value
                of water and secure a better tomorrow.
              </p>

              {/* Button */}
              <Link
                href="/products"
                className="px-6 py-3 text-white bg-blueb-gradient rounded shadow hover:bg-blueb-700"
              >
                Explore Products
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="flex w-full gap-10 mx-auto bg-blueb-gradient responsive-padding rounded shadow-md relative border-t justify-center">
        {/* <img
          className="absolute inset-0 w-full h-full object-cover img-gradient-opacity "
          src="/homepage/awards/award1.jpg"
          alt="Background"
        /> */}

        <section className="relative z-10 my-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Left Colum</section>n */}
            <div>
              {/* Section Label with Background */}
              <div className="relative flex mb-4 gap-5 items-center justify-start w-full">
                <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
                  Our Achievements
                </p>
                <div className="border-t-2 border-primaryLight mt-1 w-16"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Awards & Recognitions
              </h2>

              {/* Supporting Text */}
              <ul>
                <li>
                  <p className="text-white mb-3 font-bold text-lg md:text-xl">
                    • G.S.Parkhe Industrial Innovation Award 2022
                  </p>
                  <p className="text-white mb-6">
                    We are proud to announce that Ionic Engineering Technology
                    Pvt. Ltd. has been honored with the G.S. Parkhe Award for
                    Innovation in Entrepreneurship by MCCIA, a renowned
                    90-year-old chamber of commerce. Selected from 160 entries
                    by a panel of eminent industrialists, our &quot;Water
                    Harvester&quot; Zero Liquid Discharge Project for Toyota
                    Industries India, Bangalore, was recognized for its
                    groundbreaking impact. Our one-of-a-kind Water Harvester
                    technology transforms industrial wastewater into reusable
                    water using innovative processes like Low-Temperature HDH
                    Evaporation, Condensation with Integrated Heat Pump Energy
                    Recovery, and an advanced polishing system for trace
                    impurity removal. This technology enables industries to
                    achieve sustainable, eco-friendly operations, aligning with
                    Corporate Social & Environmental Responsibility (CSER) and
                    government regulations.
                  </p>
                </li>
                <li>
                  <p className="text-white mb-3 font-bold text-lg md:text-xl">
                    • Global Water Industry Leadership 2016
                  </p>
                  <p className="text-white mb-6">
                    Our Managing Director K.V.Raman named among World Water
                    Congress Top 50 Leaders. Led many installations across
                    various industrial segments including Automative, pharma,
                    semi conductor, Cosmetics, FMCG, Food & Beverages, Chemical,
                    Oil & Gas, Aero space, Defense etc.
                  </p>
                </li>
                <li>
                  <p className="text-white mb-3 font-bold text-lg md:text-xl">
                    • Innovation in Water Technology 2023
                  </p>
                  <p className="text-white mb-6">
                    International Center for Clean Water ( IIT Chennai
                    Initiative) recognition for contributing to advancement of
                    advanced drinking water purification technologies.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-3">
              <img
                className="bg-secondaryLight h-64 w-full rounded-lg object-cover"
                src="/homepage/awards/award1.jpg"
                alt="Descriptive Alt Text"
              />
              <img
                className="bg-secondaryLight h-64 w-full rounded-lg object-cover"
                src="/homepage/awards/award2.png"
                alt="Descriptive Alt Text"
              />
              <img
                className="bg-secondaryLight h-64 w-full rounded-lg object-cover"
                src="/homepage/awards/award3.png"
                alt="Descriptive Alt Text"
              />
              <img
                className="bg-secondaryLight h-64 w-full rounded-lg object-cover"
                src="/homepage/awards/award4.png"
                alt="Descriptive Alt Text"
              />
            </div>
          </motion.div>
        </section>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="flex flex-col w-full py-12 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative"
      >
        <SolutionsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative"
      >
        <ClientsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative"
      >
        <VisionMissionSection />
      </motion.div>

      {/* <div className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative">
                <Testimonials />
            </div> */}

      {/* <div className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative">
                <NewsArticlesGrid />
            </div> */}

      {/* <div className="flex flex-col w-full py-16 gap-16 mx-auto  bg-blueb-gradient  responsive-padding rounded shadow-md relative">
                <BlogArticlesGrid />
            </div> */}

      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="flex flex-col w-full py-16 gap-16 mx-auto bg-white responsive-padding rounded shadow-md relative"
      >
        <hr></hr>
        <ContactForm />
      </motion.div>
    </div>
  );
}
