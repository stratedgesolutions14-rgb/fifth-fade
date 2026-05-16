"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: "Aarav Kumar",
    role: "Guitar Student",
    image: "/images/about.png",
  },
  {
    quote:
      "The studio sessions helped me understand rhythm, voice control, and confidence in a way that felt natural and creative.",
    name: "Meera Joseph",
    role: "Vocal Artist",
    image: "/images/about2.jpg",
  },
  {
    quote:
      "Every lesson felt focused and inspiring. The mentors made complex music ideas simple, practical, and fun to learn.",
    name: "Rohan Mathew",
    role: "Music Producer",
    image: "/images/stu_wall/stu_10.jpeg",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoSlideKey, setAutoSlideKey] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const resetAutoSlide = () => {
    setAutoSlideKey((currentKey) => currentKey + 1);
  };

  const goToPrevious = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  }, []);

  const handlePrevious = () => {
    goToPrevious();
    resetAutoSlide();
  };

  const handleNext = () => {
    goToNext();
    resetAutoSlide();
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    resetAutoSlide();
  };

  useEffect(() => {
    const timer = window.setInterval(goToNext, 5000);

    return () => window.clearInterval(timer);
  }, [autoSlideKey, goToNext]);

  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-secondary sm:text-4xl lg:text-5xl">
            What our students say
          </h2>

          <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>

        <div className="relative mt-10 pb-10">

          {/* IMAGE DIV COMMENTED */}
          
          {/*
          <div className="mx-auto w-full max-w-[320px] overflow-hidden">
            <Image
              key={activeTestimonial.image}
              src={activeTestimonial.image}
              alt={`${activeTestimonial.name} testimonial`}
              width={320}
              height={260}
              className="aspect-[4/3] w-full object-cover transition-opacity duration-500 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:duration-700"
              sizes="(max-width: 1024px) 320px, 30vw"
            />
          </div>
          */}

          <div className="relative">
            <div className="relative flex min-h-64 rounded-xl items-center justify-center bg-primary px-12 py-10 text-center text-secondary sm:px-16 lg:min-h-[270px]">
              
              <button
                type="button"
                className="absolute left-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-secondary transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Previous testimonial"
                onClick={handlePrevious}
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>

              <div
                key={activeIndex}
                className="max-w-4xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4 motion-safe:duration-700"
              >
                <div className="text-7xl font-black leading-none text-secondary/90">
                  ”
                </div>

                <p className="mt-5 text-base font-black uppercase leading-7 text-secondary sm:text-lg">
                  {activeTestimonial.quote}
                </p>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                  {activeTestimonial.name}
                </p>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary/70">
                  {activeTestimonial.role}
                </p>
              </div>

              <button
                type="button"
                className="absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-secondary transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Next testimonial"
                onClick={handleNext}
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="absolute left-0 right-0 top-full mt-6 flex justify-center gap-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  className={`size-3 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-secondary"
                      : "bg-secondary/30 hover:bg-secondary/60"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useCallback, useEffect, useState } from "react";

// const testimonials = [
//   {
//     quote:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     name: "Aarav Kumar",
//     role: "Guitar Student",
//     image: "/images/about.png",
//   },
//   {
//     quote:
//       "The studio sessions helped me understand rhythm, voice control, and confidence in a way that felt natural and creative.",
//     name: "Meera Joseph",
//     role: "Vocal Artist",
//     image: "/images/about2.jpg",
//   },
//   {
//     quote:
//       "Every lesson felt focused and inspiring. The mentors made complex music ideas simple, practical, and fun to learn.",
//     name: "Rohan Mathew",
//     role: "Music Producer",
//     image: "/images/stu_wall/stu_10.jpeg",
//   },
// ];

// export default function Testimonial() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [autoSlideKey, setAutoSlideKey] = useState(0);
//   const activeTestimonial = testimonials[activeIndex];

//   const resetAutoSlide = () => {
//     setAutoSlideKey((currentKey) => currentKey + 1);
//   };

//   const goToPrevious = useCallback(() => {
//     setActiveIndex((currentIndex) =>
//       currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
//     );
//   }, []);

//   const goToNext = useCallback(() => {
//     setActiveIndex((currentIndex) =>
//       currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
//     );
//   }, []);

//   const handlePrevious = () => {
//     goToPrevious();
//     resetAutoSlide();
//   };

//   const handleNext = () => {
//     goToNext();
//     resetAutoSlide();
//   };

//   const handleDotClick = (index: number) => {
//     setActiveIndex(index);
//     resetAutoSlide();
//   };

//   useEffect(() => {
//     const timer = window.setInterval(goToNext, 5000);

//     return () => window.clearInterval(timer);
//   }, [autoSlideKey, goToNext]);

//   return (
//     <section className="w-full bg-background py-10">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
//             Testimonials
//           </p>
//           <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-secondary sm:text-4xl lg:text-5xl">
//             What our students say
//           </h2>
//           <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">
//             It is a long established fact that a reader will be distracted by
//             the readable content.
//           </p>
//         </div>

//         <div className="relative mt-10 grid items-center gap-8 pb-10 lg:grid-cols-[minmax(240px,320px)_1fr]">
//           <div className="mx-auto w-full max-w-[320px] overflow-hidden">
//             <Image
//               key={activeTestimonial.image}
//               src={activeTestimonial.image}
//               alt={`${activeTestimonial.name} testimonial`}
//               width={320}
//               height={260}
//               className="aspect-[4/3] w-full object-cover transition-opacity duration-500 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4 motion-safe:duration-700"
//               sizes="(max-width: 1024px) 320px, 30vw"
//             />
//           </div>

//           <div className="relative">
//             <div className="relative flex min-h-64 items-center justify-center bg-primary px-12 py-10 text-center text-secondary sm:px-16 lg:min-h-[270px]">
//               <button
//                 type="button"
//                 className="absolute left-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-secondary transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//                 aria-label="Previous testimonial"
//                 onClick={handlePrevious}
//               >
//                 <ChevronLeft className="size-5" aria-hidden="true" />
//               </button>

//               <div
//                 key={activeIndex}
//                 className="max-w-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4 motion-safe:duration-700"
//               >
//                 <div className="text-7xl font-black leading-none text-secondary/90">
//                   ”
//                 </div>
//                 <p className="mt-5 text-base font-black uppercase leading-7 text-secondary sm:text-lg">
//                   {activeTestimonial.quote}
//                 </p>
//                 <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
//                   {activeTestimonial.name}
//                 </p>
//                 <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-secondary/70">
//                   {activeTestimonial.role}
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-secondary transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//                 aria-label="Next testimonial"
//                 onClick={handleNext}
//               >
//                 <ChevronRight className="size-5" aria-hidden="true" />
//               </button>
//             </div>

//             <div className="absolute left-0 right-0 top-full mt-6 flex justify-center gap-3">
//               {testimonials.map((testimonial, index) => (
//                 <button
//                   key={testimonial.name}
//                   type="button"
//                   className={`size-3 rounded-full transition-all ${
//                     index === activeIndex
//                       ? "w-8 bg-secondary"
//                       : "bg-secondary/30 hover:bg-secondary/60"
//                   }`}
//                   aria-label={`Show testimonial ${index + 1}`}
//                   aria-pressed={index === activeIndex}
//                   onClick={() => handleDotClick(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
