import Navbar from "@/components/Navbar";
import { Download as DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import reindeerLogo from "@/assets/image/reindeer-logo.png";

// ✅ Using one SVG for all (you can later replace them individually)
import appleLogo from "@/assets/svg/apple-logo.svg";
import linuxLogo from "@/assets/svg/linux-logo.svg";

const Download = () => {
  const downloadOptions = [
    {
      os: "macOS",
      icon: appleLogo,
      versions: ["Mac (ARM64)", "Mac (x64)", "Mac Universal"],
    },
    {
      os: "Linux",
      icon: linuxLogo,
      versions: [
        "Linux .deb (ARM64)",
        "Linux .deb (x64)",
        "Linux RPM (ARM64)",
        "Linux RPM (x64)",
        "Linux AppImage (ARM64)",
        "Linux AppImage (x64)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header Section */}
          <div className="flex items-start gap-8 mb-16">
            <img src={reindeerLogo} alt="Reindeer" className="h-32 w-32" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Download Reindeer</h1>
              <p className="text-xl text-muted-foreground">
                Available for macOS and Linux.
              </p>
            </div>
          </div>

          {/* Version Info */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm">
                Latest
              </span>
            </div>

            {/* Download Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloadOptions.map((option, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {/* ✅ Using same apple.svg for all */}
                    <img
                      src={option.icon}
                      alt={`${option.os} logo`}
                      className="h-6 w-6"
                    />
                    <h3 className="text-xl font-semibold">{option.os}</h3>
                  </div>

                  <div className="space-y-2">
                    {option.versions.map((version, vIndex) => (
                      <Button
                        key={vIndex}
                        variant="ghost"
                        className="w-full justify-between text-left h-auto py-3"
                      >
                        <span>{version}</span>
                        <DownloadIcon className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
