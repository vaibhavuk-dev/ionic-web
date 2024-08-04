const items = [
  { name: "", slug: "water-start" },
  { name: "OIL & GASES", slug: "oil-and-gases" },
  { name: "gaseous impurities", slug: "gaseous-impurities" },
  { name: "biological impurities", slug: "biological-impurities" },
  { name: "toxic chemicals", slug: "toxic-chemicals" },
  { name: "physical impurities", slug: "physical-impurities" },
  { name: "Silica", slug: "silica" },
  { name: "Heavy Metals", slug: "heavy-metals" },
  { name: "Organic Impurities", slug: "organic-impurities" },
  { name: "inorganic Impurities", slug: "inorganic-impurities" },
  { name: "", slug: "water-end" },
];

const WaterflowComponent = () => {
  // Function to convert string to sentence case
  const toSentenceCase = (str: any) => {
    return str
      .toLowerCase()
      .replace(/(^\w|\s\w)/g, (m: any) => m.toUpperCase());
  };

  return (
    <div className="justify-center">
      <div className="fixed bottom-0 grid grid-cols-11 flex-wrap pt-20 px-32 w-full h-100 items-start">

        {items.map((item, index) => (
          <div key={index} className={`flex flex-col p-4 w-full items-center ${index === 0 ? 'transform -translate-y-[72px]' : index === items.length - 1 ? 'transform translate-y-8' : ''}`}>
            <img
              src={`/waterflow/${item.slug}.png`}
              alt={item.name}
              className="object-contain w-full h-full"
            />
            <p className="text-[0.9rem] text-center mt-2 text-white">{toSentenceCase(item.name)}</p>
          </div>
        ))}
        <div className="absolute h-3 pl-48 pr-52 -z-10 bg-opacity-45 mt-32 w-screen"><div className="bg-[#cccdcf]   h-3"></div></div>
      </div>

      <img className="my-3 h-7 relative" src="/down-chevron.svg" alt="" /></div>
  );
};

export default WaterflowComponent;
