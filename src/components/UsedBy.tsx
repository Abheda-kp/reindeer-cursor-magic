

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
    <section className="text-white">
      <div className="flex flex-col justify-self-center">

        <div>
          <div>Trusted everyday by professional developers</div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-6">
          {useByCompanies.map((company) => (
            <div className="bg-card-theme p-4 rounded-md">{company.name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
