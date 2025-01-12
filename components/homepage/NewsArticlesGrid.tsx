export default function NewsArticlesGrid() {
  const articles = Array(5).fill({
    title: 'Private Space Companies Aim High: Mars as the Next Frontier for Expansion and Settlement',
    description: 'Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance',
    imgPath: '/blogs/blog1.png',
  });

  return (
    <div className="bg-white relative">
      <div className="container mx-auto ">
        <div className="relative flex mb-4 gap-5 items-center">
          <span className="absolute inset-y-0 left-0 w-full h-full bg-primaryLight -z-10 rounded-md"></span>
          <p className="inline-block text-primary font-semibold uppercase px-2 bg-primaryLight rounded-md">
            News
          </p>
          <div className="border-t-2 border-primary mt-1 w-16"></div>
        </div>
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-primary text-3xl md:text-4xl font-bold">Latest News</h2>
          <p className="text-textcolor mt-2">
            Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance
          </p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex rounded-lg hover:px-4 hover:py-2 items-center justify-between border-b pb-4 duration-300 transform transition-transform hover:scale-105 hover:shadow-lg group hover:bg-blueb-gradient cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <img
                  className="w-16 h-16 bg-primaryLight rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src={"/blogs/blog1.png"}
                  alt="Article"
                />
                <div className="flex-1">
                  <h3 className="text-textcolor font-semibold text-md lg:text-lg leading-tight group-hover:text-white">
                    {article.title}
                  </h3>
                  <p className="text-textcolor mt-2 text-sm group-hover:text-white">
                    {article.description}
                  </p>
                </div>
              </div>

            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
