export default function Testimonials() {
    const testimonials = [
        {
            name: "Grace Turner",
            role: "Director",
            image: "https://i.pravatar.cc/300?img=56", // Replace with your image path
            text: "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community.",
        },
        {
            name: "Linda Carter",
            role: "Analyst",
            image: "https://i.pravatar.cc/300?img=44", // Replace with your image path
            text: "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.",
        },
        {
            name: "Alex Walker",
            role: "Attorney",
            image: "https://i.pravatar.cc/300?img=12", // Replace with your image path
            text: "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing my family's future is secure.",
        },
    ];

    return (
      <div className="w-full relative">
        <div className="container mx-auto">
        <div className="relative flex mb-4 gap-5 items-center">
          <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
          <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
            Testimonials
          </p>
          <div className="border-t-2 border-primaryLight mt-1 w-16"></div>
        </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          <p className="text-primaryLight mt-2">
            Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
                  <div
                  key={index}
                  className="cursor-pointer bg-white p-6 rounded-tl-3xl rounded-br-3xl shadow-md transition duration-300 transform hover:scale-105"
                  >
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                  <h3 className="text-primary font-semibold">{testimonial.name}</h3>
                  <p className="text-textcolorDark">{testimonial.role}</p>
                  <p className="text-textcolor mt-4">{testimonial.text}</p>
                  </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
