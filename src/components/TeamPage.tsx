export const TeamPage = () => {
  return (
    <div className="flex flex-col items-start min-h-screen bg-background ">
      <div className="text-4xl flex items-center mb-5 font-semibold leading-snug">
        Meet Our Team
      </div>
      <img
        src={
          "https://t4.ftcdn.net/jpg/03/26/08/53/360_F_326085309_CFH8PpadfnL2OQ7Gi411XW0B21YumxKo.jpg"
        }
        alt="Team"
        className="w-full object-cover rounded-2xl"
        style={{ height: "calc(100vh - var(--site-header-height) - 10rem)" }}
      />
    </div>
  );
};
