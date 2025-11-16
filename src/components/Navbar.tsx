import reindeerLogo from "@/assets/image/reindeer-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerItemsText: React.HTMLAttributes<HTMLAnchorElement>["className"] =
    "text-sm font-medium text-foreground transition-colors hover:text-foreground/80";

  const handleNavClick = (sectionId: string) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // If already on home page, scroll directly
    if (location.pathname === "/") {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // Navigate to home with scroll state
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/95 backdrop-blur-md">
      <div className="container">
        <div className="grid h-[var(--site-header-height)] grid-cols-[1fr_auto_auto] items-center lg:grid-cols-[auto_1fr_auto]">
          {/* Logo */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 gap-0">
            <Link
              to="/"
              className="relative inline-flex items-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Homepage"
            >
              <img src={reindeerLogo} alt="" className="h-10 w-10" />
              <span className="text-xl sm:text-2xl font-semibold tracking-tight">
                Reindeer
              </span>
            </Link>
          </div>

          {/* Navigation - Hidden on mobile */}
          <div className="hidden lg:block">
            <nav
              className="absolute left-Z/4 top-1/2 translate-x-1/2 -translate-y-1/2"
              role="navigation"
            >
              <ul className="flex items-center justify-center gap-6">
                <li>
                  <button
                    onClick={() => handleNavClick("features")}
                    className={headerItemsText}
                    type="button"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("about")}
                    className={headerItemsText}
                    type="button"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.open("https://youtube.com/watch?feature=shared&v=jAdXQA8D3L4", "_blank")}
                    className={headerItemsText}
                    type="button"
                  >
                    How to setup
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Actions */}
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex justify-end gap-2 lg:col-start-3 lg:col-end-[-1]">
            <Button
              variant="hero"
              size="xs"
              className="text-xs sm:text-sm font-normal rounded-full px-3 sm:px-4"
              onClick={() => navigate("/download")}
            >
              Download
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-foreground/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav
            className="lg:hidden border-t border-border py-4"
            role="navigation"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => handleNavClick("features")}
                  className={`${headerItemsText} block py-2 text-left w-full`}
                  type="button"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className={`${headerItemsText} block py-2 text-left w-full`}
                  type="button"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open("https://youtube.com/watch?feature=shared&v=jAdXQA8D3L4", "_blank")}
                  className={`${headerItemsText} block py-2 text-left w-full`}
                  type="button"
                >
                  How to setup
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
