import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import TopCard from '../components/cards/home/TopCard'
import img1 from '../assets/home/img1.jpg'
import splash from '../assets/home/splash.png'
import icon1 from '../assets/home/resources/icon1.jpg'
import icon2 from '../assets/home/resources/icon2.png'
import icon3 from '../assets/home/resources/icon3.png'
import icon4 from '../assets/home/resources/icon4.png'

const Home = () => {
  // Data for the "Top categories"
  const categoriesData = [
    {
      icon: icon1,
      color: "#598bc8",
      title: 'Comprehensive Study Resources',
      description: `Enhance your learning with curated notes, worksheets, mind maps, and e-books for quick revisions and deeper understanding.`,
    },
    {
      icon: icon2,
      color: "#f59d07",
      title: 'Interactive Video Learning',
      description: `Access a rich library of recorded lectures and join live doubt-solving sessions with expert educators to clarify your questions in real time.`,
    },
    {
      icon: icon3,
      color: "rgb(112, 213, 252)",
      title: 'Smart Exam Preparation',
      description: `Enhance your learning with mock tests and detailed performance tracking to identify strengths and areas for improvement.`,
    },
    {
      icon: icon4,
      color: "#fece00",
      title: 'Recognitions & Rewards',
      description: `Earn badges and certifications for your achievements, showcasing your progress and expertise.`,
    },
  ]

  return (
    <>
      {/* Inline styles for heading animation, Swiper pagination spacing and bullet color */}
      <style>{`
        @keyframes slideInFromBottom {
          0% {
            transform: translateY(50%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .slide-in {
          animation: slideInFromBottom 0.5s ease-out forwards;
        }
        /* Override Swiper pagination bullet color and add spacing above dots */
        .swiper-pagination-bullet {
          background: rgb(25,40,65) !important;
        }
        .swiper-pagination {
          margin-top: 20px !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 via-pink-50 to-orange-100">
        <div className="bg-[rgb(30,48,80)] container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-4 h-screen">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight slide-in">
              Personalized <span className="text-[rgb(135,219,219)]"> Learning,<br /> Expert Educators, </span> Holistic Growth
            </h1>
            <p className="text-white py-4 text-sm md:text-base">
              At VScholars, we believe that education is not one-size-fits-all! Our mission is to provide <span className="text-[rgb(135,219,219)]">high-quality, personalized education for students across the USA, UK, Australia, Europe, and Asia, covering IB, IGCSE, GCSE,</span> American curriculum, National Curriculum of England, Waldorf Education, AP, CBSE, ICSE, and more.
            </p>

            {/* CTA Buttons */}
            <div className="space-x-4">
              <button className="bg-[rgb(25,40,65)] border-white cursor-pointer border text-white px-6 py-2 rounded-md font-medium hover:bg-[rgb(135,219,219)] hover:text-[rgb(25,40,65)] transition-colors">
                Book A Demo
              </button>
              <button className="bg-white border cursor-pointer border-blue-500 text-[rgb(25,40,65)] px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Teach Lessons
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
            {/* Main Image */}
            <img
              src={img1}
              alt="Main"
              className="w-80 h-80 object-cover shadow-lg clip-custom relative z-5"
            />
            {/* Splash Effect */}
            <img
              src={splash}
              alt="Splash Effect"
              className="absolute bottom-[-40px] w-100 z-10 opacity-50"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Exclusive Learning Resources
          </h2>
          
          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="w-full flex justify-center"
          >
            {categoriesData.map((item) => (
              <SwiperSlide key={item.title} className="flex justify-center px-2 py-4">
                <TopCard
                  icon={item.icon}
                  color={item.color}
                  title={item.title}
                  description={item.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Home
