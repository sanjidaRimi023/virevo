
import React from 'react'


export default function Testimonials() {

  const testimonialsData = [
    {
      name: "Khatab Wedaa",
      title: "Merakiol Creator",
      text: "Tailus is an elegant, clean, and responsive tailwind css components it's very helpful to start fast with your project.",
      image:
        "https://i.pinimg.com/736x/9f/46/74/9f4674ca9c17330ab419c1b2f5951d9a.jpg",
    },
    {
      name: "Oketa Fred",
      title: "Fullstack Developer",
      text: "I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.",
      image:
        "https://i.pinimg.com/736x/57/3c/80/573c80967c9429d0ed0ce32701f85b70.jpg",
    },
    {
      name: "Rodrigo Aguilar",
      title: "Creator, TailwindAwesome",
      text: "I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.",
      image:
        "https://i.pinimg.com/736x/b0/c4/21/b0c421e77cf563962026ade82c90dd5b.jpg",
    },
    {
      name: "Zeki",
      title: "Founder of ChatExtend",
      text: "Using Tailkit!! has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
      image:
        "https://i.pinimg.com/736x/ce/31/42/ce3142d7a968fff3aecd0100572a5e8b.jpg",
    },
    {
      name: "Eric Ampire",
      title: "Mobile Engineer at @RBPNews , @GoogleGDE/Expert for Android",
      text: "Tailus templates are the perfect solution for anyone who wants to create a beautiful, functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help. I highly recommend Tailus templates to anyone who is looking to create a website.",
      image:
        "https://i.pinimg.com/736x/79/63/a5/7963a5246188d408b8f28961a0cf2b90.jpg",
    },
    {
      name: "Joseph Kitheka",
      title: "Fullstack Developer",
      text: "Tailur has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development!",
      image:
        "https://i.pinimg.com/736x/8e/c1/f8/8ec1f80db272047cedf4c20263114387.jpg",
    },
    {
      name: "Roland Tubonge",
      title: "Software Engineer",
      text: "Tailus is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!",
      image:
        "https://i.pinimg.com/1200x/08/a2/41/08a2413b771b729a9f9df20fa97be52a.jpg",
    },
    {
      name: "Jane Doe",
      title: "UX Designer",
      text: "The intuitive interface and powerful features of this platform have revolutionized my design process. Highly recommend for any creative professional!",
      image:
        "https://i.pinimg.com/736x/b0/7b/cc/b07bcc19e5d06dfb888c3263724b8baa.jpg",
    },
    {
      name: "John Smith",
      title: "Frontend Developer",
      text: "Building responsive layouts has never been easier. This toolkit integrates seamlessly with my existing workflow, saving me countless hours.",
      image:
        "https://i.pinimg.com/736x/12/ec/d9/12ecd918607b1ccb9d46772435bb592f.jpg",
    },
    {
      name: "Alice Johnson",
      title: "Product Manager",
      text: "The speed at which our team can prototype and launch new features is incredible. This platform is a core part of our success.",
      image:
        "https://i.pinimg.com/1200x/e2/f5/bc/e2f5bc45bd9d07946c9453cfb48747ea.jpg",
    },
    {
      name: "Bob Williams",
      title: "Fullstack Engineer",
      text: "From backend APIs to stunning frontend components, this solution provides everything needed to build robust and beautiful applications.",
      image:
        "https://i.pinimg.com/1200x/50/47/d2/5047d259f0d8b3d652b7d3dfa3479139.jpg",
    },
    
  ];
  const anonymousFallbackImage =
    "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";
  return (
    <div className="font-sans flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl leading-tight mb-4">
        Loved by community
      </h1>

      {}
      <p className="text-base sm:text-lg text-center max-w-3xl mb-16">
        Harum quae dolore corrupti aut temporibus pariatur.
      </p>

      {}
      <div className="w-full max-w-7xl columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className=" p-6 rounded-xl shadow-md break-inside-avoid border"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
                onError={(e) => {
                  const target = e.target;
                  target.onerror = null;
                  target.src = anonymousFallbackImage;
                }}
              />
              <div>
                <p className="font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
            <p className="text-base leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

