import reindeerLogo from "@/assets/image/reindeer-logo.png";
import DownloadForButton from "@/components/DownloadForButton";
import Layout from "@/components/Layout";
import { IconApple, IconLinux, IconWindows } from "@/components/ui/Icon";
import { ChevronDown, Download as DownloadIcon } from "lucide-react";
import { useState } from "react";

const downloadOptions = [
  {
    os: "macOS",
    icon: "apple",
    versions: [
      { name: "Mac (ARM64)", arch: "ARM64" },
      { name: "Mac (x64)", arch: "x64" },
      { name: "Mac Universal", arch: "Universal" },
    ],
  },
  {
    os: "Linux",
    icon: "linux",
    versions: [
      { name: "Linux .deb (ARM64)", arch: "ARM64" },
      { name: "Linux .deb (x64)", arch: "x64" },
      { name: "Linux RPM (ARM64)", arch: "ARM64" },
      { name: "Linux RPM (x64)", arch: "x64" },
      { name: "Linux AppImage (ARM64)", arch: "ARM64" },
      { name: "Linux AppImage (x64)", arch: "x64" },
    ],
  },
  {
    os: "Windows",
    icon: "windows",
    versions: [],
  },
];
const Download = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Layout showFooter={false}>
      <div
        className="container "
        style={{ paddingTop: "calc(1rem * 1.4 * 2)" }}
      >
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
                <DownloadForButton />
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
                        {option.icon === "apple" && (
                          <IconApple className="h-5 w-5" />
                        )}
                        {option.icon === "linux" && (
                          <IconLinux className="h-5 w-5" />
                        )}
                        {option.icon === "windows" && (
                          <IconWindows className="h-5 w-5" />
                        )}
                        <h3 className="text-base font-bold">{option.os}</h3>
                      </div>

                      {option.versions.length > 0 ? (
                        <div className="space-y-1">
                          {option.versions.map((version, vIndex) => (
                            <button
                              key={vIndex}
                              className="w-full flex items-center justify-between py-4  transition text-left group border-b last:border-b-0 border-[#edecec]/10"
                            >
                              <span className="text-base hover:text-foreground/80">
                                {version.name}
                              </span>
                              <DownloadIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-24">
                          <span className="text-base text-muted-foreground text-center">
                            Coming soon
                          </span>
                        </div>
                      )}
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
