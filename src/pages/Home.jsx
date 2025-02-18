import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import TopCard from '../components/cards/home/TopCard'
import CourseCard from '../components/cards/home/CourseCard'
import img1 from '../assets/home/img1.jpg'
import img2 from '../assets/home/img2.jpg'
import img3 from '../assets/home/img3.jpg'
import splash from '../assets/home/splash.png'
import icon1 from '../assets/home/resources/icon1.jpg'
import icon2 from '../assets/home/resources/icon2.png'
import icon3 from '../assets/home/resources/icon3.png'
import icon4 from '../assets/home/resources/icon4.png'

const Home = () => {
  // Data for the "Exclusive Learning Resources" carousel
  const categoriesData = [
    {
      icon: icon1,
      color: "rgba(89, 183, 200,0.40)",
      title: 'Comprehensive Study Resources',
      description: `Enhance your learning with curated notes, worksheets, mind maps, and e-books for quick revisions and deeper understanding.`,
    },
    {
      icon: icon2,
      color: "rgba(245, 158, 7, 0.40)",
      title: 'Interactive Video Learning',
      description: `Access a rich library of recorded lectures and join live doubt-solving sessions with expert educators to clarify your questions in real time.`,
    },
    {
      icon: icon3,
      color: "rgba(112, 212, 252, 0.40)",
      title: 'Smart Exam Preparation',
      description: `Enhance your learning with mock tests and detailed performance tracking to identify strengths and areas for improvement.`,
    },
    {
      icon: icon4,
      color: "rgba(254, 206, 0,0.40)",
      title: 'Recognitions & Rewards',
      description: `Earn badges and certifications for your achievements, showcasing your progress and expertise.`,
    },
  ]

  // Data for the "Courses We Offer" section
  const courses = [
    {
      image: img1,
      rating: 4.2,
      title: 'Academic Subjects',
      description: 'Master core subjects with our expert educators through interactive lessons, comprehensive curriculum, and real-world applications. Our courses in Mathematics, Science, Social Studies, English, and Computer Science are designed to build a strong academic foundation and foster critical thinking, ensuring you excel in every area.',
      subjects: ['Mathematics', 'Science', 'Social Studies', 'English', 'Computer Science'],
    },
    {
      image: img1,
      rating: 4.0,
      title: 'Languages',
      description: 'Expand your horizons with our immersive language courses. Learn to speak Spanish, French, German, Chinese, and Japanese through engaging lessons that not only build your conversational skills but also deepen your understanding of diverse cultures. Enjoy interactive practice sessions and real-world applications to gain confidence and fluency.',
      subjects: ['Spanish', 'French', 'German', 'Chinese', 'Japanese'],
    },
    {
      image: img3,
      rating: 4.5,
      title: 'Extracurriculars',
      description: "Unlock your creativity and explore new passions with our exciting extracurricular courses. Whether you're interested in music, art, dance, yoga, or coding, we provide engaging lessons designed to nurture your skills and help you grow beyond academics. Enhance your personal development while having fun!",
      subjects: ['Music', 'Art', 'Dance', 'Yoga', 'Coding'],
    },
    // {
    //   image: img3,
    //   rating: 4.5,
    //   title: 'Exam Preparation',
    //   description: 'Prepare for standardized tests with our comprehensive courses.',
    //   subjects: ['SAT', 'ACT', 'IELTS', 'TOEFL', 'GRE'],
    // }
  ]

  return (
    <>
      {/* Inline styles for animations and Swiper customizations */}
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
        /* Swiper pagination custom styles */
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
            <img
              src={img1}
              alt="Main"
              className="w-80 h-80 object-cover shadow-lg clip-custom relative z-5"
            />
            <img
              src={splash}
              alt="Splash Effect"
              className="absolute bottom-[-40px] w-100 z-10 opacity-50"
            />
          </div>
        </div>
      </section>

      {/* Exclusive Learning Resources Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Exclusive Learning Resources
          </h2>
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

      {/* Courses We Offer Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Courses We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course.title}
                image={course.image}
                rating={course.rating}
                title={course.title}
                description={course.description}
                subjects={course.subjects}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
