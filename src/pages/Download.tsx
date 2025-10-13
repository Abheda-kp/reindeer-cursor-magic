import reindeerLogo from "@/assets/image/reindeer-logo.png";
import appleLogo from "@/assets/svg/apple-logo.svg";
import linuxLogo from "@/assets/svg/linux-logo.svg";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download as DownloadIcon } from "lucide-react";
import { useState } from "react";

const Download = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const downloadOptions = [
    {
      os: "macOS",
      icon: appleLogo,
      versions: [
        { name: "Mac (ARM64)", arch: "ARM64" },
        { name: "Mac (x64)", arch: "x64" },
        { name: "Mac Universal", arch: "Universal" },
      ],
    },
    {
      os: "Linux",
      icon: linuxLogo,
      versions: [
        { name: "Linux .deb (ARM64)", arch: "ARM64" },
        { name: "Linux .deb (x64)", arch: "x64" },
        { name: "Linux RPM (ARM64)", arch: "ARM64" },
        { name: "Linux RPM (x64)", arch: "x64" },
        { name: "Linux AppImage (ARM64)", arch: "ARM64" },
        { name: "Linux AppImage (x64)", arch: "x64" },
      ],
    },
  ];

  return (
    <Layout showFooter={false}>
      <div className="container pt-first-element">
        <section className="py-8">
          {/* Hero Section with Logo */}
          <div className="flex items-center gap-5 mb-[5rem]">
            <div className="flex-shrink-0">
              <img
                src={reindeerLogo}
                alt="Reindeer Logo"
                className="h-36 w-36"
              />
            </div>
            <div className="">
              <div>
                <h1 className="text-[22px] font-bold">Download Reindeer</h1>
                <p className="text-[22px]  -mt-1 text-muted-foreground mb-6">
                  Available for macOS, and Linux.
                </p>
              </div>
              <div className="-mt-3">
                <Button variant="hero" size="sm" className="rounded-full">
                  Download for Linux
                  <DownloadIcon className="text-lg" />
                </Button>
              </div>
            </div>
          </div>

          {/* Version Section */}
          <div className="border-t border-border pt-8">
            <div
              className="flex items-center gap-3 mb-8 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="">1.7</span>
              <span className="px-3 py-1 rounded-full border border-border text-sm font-medium">
                Latest
              </span>

              <ChevronDown className="h-6 w-6 ml-auto" />
            </div>

            {isExpanded && (
              <>
                {/* Download Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {downloadOptions.map((option, index) => (
                    <div
                      key={index}
                      className="bg-card/50 border border-border rounded-xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <img
                          src={option.icon}
                          alt={`${option.os} logo`}
                          className="h-5 w-5"
                        />
                        <h3 className="text-lg font-semibold">{option.os}</h3>
                      </div>

                      <div className="space-y-1">
                        {option.versions.map((version, vIndex) => (
                          <button
                            key={vIndex}
                            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-accent/10 transition text-left group"
                          >
                            <span className="text-sm">{version.name}</span>
                            <DownloadIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Release Notes Link */}
                <div className="flex justify-start">
                  <a
                    href="#"
                    className="text-sm text-orange-500 hover:text-orange-600 transition inline-flex items-center gap-1"
                  >
                    View release notes →
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Download;
