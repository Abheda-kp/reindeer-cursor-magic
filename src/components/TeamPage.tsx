export const TeamPage = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center min-h-[50vh] sm:min-h-screen bg-background px-4 sm:px-0"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold-custom text-color-primary mb-2 font-semibold leading-tight sm:leading-tight">
          Meet our team
        </h2>
      </div>
      <div className="w-full relative">
        <img
          src={'https://reindeer.t3.storage.dev/DSC06501.JPG'}
          alt="Team"
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg sm:rounded-2xl"
        />
      </div>
    </div>
  );
};
