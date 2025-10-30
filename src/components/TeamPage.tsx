export const TeamPage = () => {
  return (
    <div className="flex flex-col items-start min-h-screen bg-background ">
      <div className="text-4xl flex items-center mb-5 font-semibold leading-snug">
        Meet Our Team
      </div>
      <img
        src={
          "https://reindeer.t3.storage.dev/DSC06501.JPG"
        }
        alt="Team"
        className="w-full object-cover rounded-2xl"
        style={{ height: "calc(100vh - var(--site-header-height) - 10rem)" }}
      />
    </div>
  );
};
