

const useByCompanies = [
  {
    name: "Company 1",
  },
  {
    name: "Company 2",
  
  },
];

export default function UsedBy() {
  return (
    <section className="text-white px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-self-center">
        <div>
          <div className="text-base sm:text-lg md:text-xl text-center">
            Trusted everyday by professional developers
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-4 sm:py-6">
          {useByCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-card-theme p-3 sm:p-4 rounded-md text-sm sm:text-base"
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
