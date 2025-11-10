import reindeerLogo from "@/assets/image/reindeer-logo.png";
import Layout from "@/components/Layout";
import { IconApple, IconLinux, IconWindows } from "@/components/ui/Icon";
import { ChevronDown, Download as DownloadIcon } from "lucide-react";
import { useState } from "react";

const downloadOptions = [
  {
    os: "macOS",
    icon: "apple",
    versions: [
      { name: "Mac (ARM64)", arch: "ARM64", downloadUrl: "https://reindeer.t3.storage.dev/Reindeer-1.0.0-arm64.dmg" },
      { name: "Mac (x64)", arch: "x64", downloadUrl: "https://reindeer.t3.storage.dev/Reindeer-1.0.0.dmg" },
    ],
  },
  {
    os: "Linux",
    icon: "linux",
    versions: [
      { name: "Linux .deb (ARM64)", arch: "ARM64", downloadUrl: null },
      {
        name: "Linux .deb (x64)",
        arch: "x64",
        downloadUrl: "https://reindeer.t3.storage.dev/reindeer.deb",
      }
      // { name: "Linux AppImage (ARM64)", arch: "ARM64", downloadUrl: null },
      // { name: "Linux AppImage (x64)", arch: "x64", downloadUrl: null },
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

  const handleDownload = (downloadUrl: string | null, fileName: string) => {
    if (!downloadUrl) {
      // Show coming soon message or handle unavailable downloads
      alert("This download is not available yet. Coming soon!");
      return;
    }

    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout showFooter={false}>
      <div
        className="container px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "calc(1rem * 1.4 * 2)" }}
      >
        <section className="py-6 sm:py-8 md:py-28">
          {/* Hero Section */}
          <div className="flex flex-col items-start gap-6 mb-8 sm:mb-12 md:mb-16 lg:mb-[5rem]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={reindeerLogo}
                  alt="Reindeer Logo"
                  className="h-36 w-36"
                />
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-tight">
                  Download Reindeer
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                  Available for macOS, and Linux.
                </p>
              </div>
            </div>
          </div>

          {/* Version Section */}
          <div className="border-t border-border pt-6 sm:pt-8">
            <div
              className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="text-base sm:text-lg">1.0.0</span>
              <span className="px-2 sm:px-3 py-1 rounded-full border border-border text-xs sm:text-sm font-medium">
                Latest
              </span>

              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 ml-auto" />
            </div>

            {isExpanded && (
              <>
                {/* Download Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                  {downloadOptions.map((option, index) => (
                    <div
                      key={index}
                      className="bg-card/50 border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        {option.icon === "apple" && (
                          <IconApple className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                        {option.icon === "linux" && (
                          <IconLinux className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                        {option.icon === "windows" && (
                          <IconWindows className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                        <h3 className="text-sm sm:text-base font-bold">
                          {option.os}
                        </h3>
                      </div>

                      {option.versions.length > 0 ? (
                        <div className="space-y-1">
                          {option.versions.map((version, vIndex) => (
                            <button
                              key={vIndex}
                              onClick={() =>
                                handleDownload(
                                  version.downloadUrl,
                                  `reindeer-${version.arch.toLowerCase()}.${
                                    option.os === "Linux" ? "deb" : "pkg"
                                  }`
                                )
                              }
                              className={`w-full flex items-center justify-between py-3 sm:py-4 transition text-left group border-b last:border-b-0 border-[#edecec]/10 ${
                                version.downloadUrl
                                  ? " cursor-pointer"
                                  : "opacity-50 cursor-not-allowed"
                              }`}
                            >
                              <span className="text-sm sm:text-base hover:text-foreground/80">
                                {version.name}
                                {!version.downloadUrl && (
                                  <span className="text-xs text-muted-foreground ml-2 block sm:inline">
                                    (Coming soon)
                                  </span>
                                )}
                              </span>
                              <DownloadIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition flex-shrink-0" />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-20 sm:h-24">
                          <span className="text-sm sm:text-base text-muted-foreground text-center">
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
                    className="text-xs sm:text-sm text-orange-500 hover:text-orange-600 transition inline-flex items-center gap-1"
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
