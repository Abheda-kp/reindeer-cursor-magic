import reindeerLogo from "@/assets/image/reindeer-logo.png";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const scrollToElement = (elementId: string) => {
  const el = document.getElementById(elementId);
  if (el) {
    const headerOffset = 80; // slightly more than --site-header-height for padding
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const headerItemsText: React.HTMLAttributes<HTMLAnchorElement>["className"] =
    "text-sm font-medium text-foreground transition-colors hover:text-foreground/80";

  return (
    <header className="fixed top-0 left-0 z-50 w-full  bg-background/95 backdrop-blur-md">
      <div className="container">
        <div className="grid h-[var(--site-header-height)] grid-cols-[1fr_auto_auto] items-center lg:grid-cols-[auto_1fr_auto]">
          {/* Logo */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 gap-0">
            <Link
              to="/"
              className="relative inline-flex items-center transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Homepage"
            >
              <img src={reindeerLogo} alt="" className="h-16 w-16" />
              <span className="text-2xl font-semibold tracking-tight">
                Reindeer
              </span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                          navigate("/", { state: { scrollTo: "features" } });
                        } else {
                          scrollToElement("features");
                        }
                      }}
                      className={`${headerItemsText} block w-full text-left py-3 px-4 rounded-md hover:bg-muted/20`}
                    >
                      Features
                    </button>
                      <a href="/docs" className={`${headerItemsText} block w-full text-left py-3 px-4 rounded-md hover:bg-muted/20`}>
                      Docs
                    </a>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                          navigate("/", { state: { scrollTo: "about" } });
                        } else {
                          scrollToElement("about");
                        }
                      }}
                      className={`${headerItemsText} block w-full text-left py-3 px-4 rounded-md hover:bg-muted/20`}
                    >
                      About
                    </button>
                 </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
              <nav
                className="absolute left-Z/4 top-1/2 translate-x-1/2 -translate-y-1/2"
                role="navigation"
              >
                <ul className="flex items-center justify-center gap-6">
                  <li>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                          navigate("/", { state: { scrollTo: "features" } });
                        } else {
                          scrollToElement("features");
                        }
                      }}
                      className={headerItemsText}
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <a href="/docs" className={headerItemsText}>
                      Docs
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== "/") {
                          navigate("/", { state: { scrollTo: "about" } });
                        } else {
                          scrollToElement("about");
                        }
                      }}
                      className={headerItemsText}
                    >
                      About
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
              className="text-sm font-normal rounded-full"
              onClick={() => navigate("/download")}
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
