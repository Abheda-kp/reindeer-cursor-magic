const companies = ["Cofee", "Scanpay", "Siren", "Netra", "Mesta"];

const TrustedBy = () => {
  return (
    <section className="text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col items-center space-y-6 sm:space-y-8">
        <h2 className="text-base sm:text-lg md:text-xl text-center text-color-primary font-normal-custom leading-snug-custom">
          Trusted every day by professional developers.
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-6xl">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-card-theme px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-lg sm:rounded-xl flex items-center justify-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
            >
              <span className="text-sm sm:text-base md:text-lg text-color-primary font-medium whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
