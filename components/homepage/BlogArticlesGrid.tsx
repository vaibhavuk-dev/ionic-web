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
          <h2 className="text-primary text-3xl md:text-4xl font-bold">Latest Blogs</h2>
          <p className="text-textcolor mt-2">
            Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <div 
                key={index} 
                className="bg-white rounded-br-3xl shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-tl-3xl"
                />
                <div className="p-4">
                  <h3 className="text-textcolor font-semibold">{blog.title}</h3>
                  <p className="text-textcolor mt-2">{blog.description}</p>
                  <a
                    href="#"
                    className="text-secondary mt-4 inline-block font-semibold"
                  >
                    Read Blog →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
