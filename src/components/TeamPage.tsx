export const TeamPage = () => {
  return (
    <div className="flex flex-col items-start min-h-[50vh] sm:min-h-screen bg-background px-4 sm:px-0">
      <div className="text-2xl sm:text-4xl flex items-center mb-3 sm:mb-5 font-semibold leading-snug">
        Meet Our Team
      </div>
      <div className="w-full relative">
        <img
          src={
            "https://reindeer.t3.storage.dev/DSC06501.JPG"
          }
          alt="Team"
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg sm:rounded-2xl"
        />
      </div>
    </div>
  );
};
