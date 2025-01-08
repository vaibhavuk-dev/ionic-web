export default function BlogArticlesGrid() {
  const blogs = Array(4).fill({
    title: 'Why Municipal Wastewater Treatment Is Important?',
    description:
      'The desalination plant Fluence provided via a BOOT contract supplies fresh water for a resort complex.',
    image: '/blogs/blog2.png', // Replace with actual image
  });

  return (
    <div className="relative">
      <div className="container mx-auto px-4">
        <div className="relative flex mb-4 gap-5 items-center">
          <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
          <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
            Blogs
          </p>
          <div className="border-t-2 border-primaryLight mt-1 w-16"></div>
        </div>
        <h2 className="text-white text-3xl md:text-4xl font-bold">Latest Blogs</h2>
        <p className="text-primaryLight mt-2">
          Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            index < 3 && <div
              key={index}
              className="cursor-pointer bg-white rounded-tl-3xl rounded-br-3xl shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full rounded-tl-3xl"
              />
              <div className="p-4">
                <h3 className="text-textcolor font-semibold">{blog.title}</h3>
                <p className="text-textcolor mt-2">{blog.description}</p>
                <div className="flex justify-end">
                  <a
                  href="#"
                  className="text-secondary mt-4 inline-block font-semibold text-lg"
                  >
                  Read Blog →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
