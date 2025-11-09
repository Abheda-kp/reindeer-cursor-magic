
export default function About() {
  return (
    <section id="about" className="flex flex-col gap-14 w-full text-center">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-3xl sm:text-5xl md:text-5xl leading-snug-custom font-semibold-custom text-color-primary px-2">
          Reindeer was born at KeyCode 2025
        </h2>
        <p className="text-md sm:text-xl md:text-2xl text-color-secondary leading-normal-custom max-w-[90%] sm:max-w-[560px]">
          Annual hackathon at KeyValue Software Systems
        </p>
      </div>
      <img
        src={"https://reindeer.t3.storage.dev/DSC06501.JPG"}
        alt="Team"
        className="w-full object-cover rounded-2xl"
        style={{
          height: "calc(100vh - var(--site-header-height) - 10rem)",
        }}
      />
    </section>
  );
}
