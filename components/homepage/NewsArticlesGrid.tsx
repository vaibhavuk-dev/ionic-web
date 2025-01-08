export default function NewsArticlesGrid() {
  const articles = Array(5).fill({
    title: 'Private Space Companies Aim High: Mars as the Next Frontier for Expansion and Settlement',
    description: 'Discover the Success Stories and Satisfaction of Clients Who Have Benefited from Our Expertise and Personalized Financial Guidance',
    imgPath: '/blogs/blog1.png',
  });

  return (
    <div className="bg-white relative">
      <div className="container mx-auto px-4">
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
              className="flex items-center justify-between border-b pb-4 transition duration-300 transform hover:scale-105"
            >
              <div className="flex items-start">
                <div className="bg-primaryLight w-12 h-12 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="text-textcolor font-semibold">{article.title}</h3>
                  <p className="text-textcolor mt-1">{article.description}</p>
                </div>
              </div>
              <div className="text-primary">
                <span className="text-xl">➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
