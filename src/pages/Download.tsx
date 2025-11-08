import reindeerLogo from '@/assets/image/reindeer-logo.png';
import DownloadForButton from '@/components/DownloadForButton';
import Layout from '@/components/Layout';
import { IconApple, IconLinux, IconWindows } from '@/components/ui/Icon';
import { Download as DownloadIcon } from 'lucide-react';
import { useState } from 'react';

const downloadOptions = [
  {
    os: 'macOS',
    icon: 'apple',
    versions: [
      { name: 'Mac (ARM64)', arch: 'ARM64', downloadUrl: null },
      { name: 'Mac (x64)', arch: 'x64', downloadUrl: null },
      { name: 'Mac Universal', arch: 'Universal', downloadUrl: null },
    ],
  },
  {
    os: 'Linux',
    icon: 'linux',
    versions: [
      { name: 'Linux .deb (ARM64)', arch: 'ARM64', downloadUrl: null },
      {
        name: 'Linux .deb (x64)',
        arch: 'x64',
        downloadUrl: 'https://reindeer.t3.storage.dev/reindeer.deb',
      },
      { name: 'Linux RPM (ARM64)', arch: 'ARM64', downloadUrl: null },
      { name: 'Linux RPM (x64)', arch: 'x64', downloadUrl: null },
      { name: 'Linux AppImage (ARM64)', arch: 'ARM64', downloadUrl: null },
      { name: 'Linux AppImage (x64)', arch: 'x64', downloadUrl: null },
    ],
  },
  {
    os: 'Windows',
    icon: 'windows',
    versions: [],
  },
];

const Download = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleDownload = (downloadUrl: string | null, fileName: string) => {
    if (!downloadUrl) {
      alert('This download is not available yet. Coming soon!');
      return;
    }

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout showFooter={false} showNavbar={false}>
      <div className="container px-4 sm:px-6">
        <section className="py-8 sm:py-12">
          {/* Hero Section with Logo */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 sm:mb-[5rem] text-center sm:text-left">
            <img
              src={reindeerLogo}
              alt="Reindeer Logo"
              className="h-28 w-28 sm:h-36 sm:w-36 mx-auto sm:mx-0"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Download Reindeer
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 -mt-1">
                Available for macOS and Linux.
              </p>
              <div className="flex justify-center sm:justify-start">
                <DownloadForButton />
              </div>
            </div>
          </div>

          {/* Version Section */}
          <div className="border-t border-border pt-8">
            {/* Download Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {downloadOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-card/50 border border-border rounded-xl p-4 sm:p-6"
                >
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {option.icon === 'apple' && (
                      <IconApple className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                    {option.icon === 'linux' && (
                      <IconLinux className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                    {option.icon === 'windows' && (
                      <IconWindows className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                    <h3 className="text-base sm:text-lg font-bold">
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
                                option.os === 'Linux' ? 'deb' : 'pkg'
                              }`
                            )
                          }
                          className={`w-full flex items-center justify-between py-3 sm:py-4 transition text-left group border-b last:border-b-0 border-[#edecec]/10 ${
                            version.downloadUrl
                              ? 'cursor-pointer'
                              : 'opacity-50 cursor-not-allowed'
                          }`}
                        >
                          <span className="text-sm sm:text-base hover:text-foreground/80">
                            {version.name}
                            {!version.downloadUrl && (
                              <span className="text-xs text-muted-foreground ml-2">
                                (Coming soon)
                              </span>
                            )}
                          </span>
                          <DownloadIcon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition" />
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
            <div className="flex justify-center sm:justify-start">
              <a
                href="#"
                className="text-sm sm:text-base text-orange-500 hover:text-orange-600 transition inline-flex items-center gap-1"
              >
                View release notes →
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Download;
