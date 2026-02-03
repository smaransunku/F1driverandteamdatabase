import { Outlet, Link, useLocation } from "react-router";
import { Flag, Trophy, MapPin, Circle, Cloud } from "lucide-react";

export function Root() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Flag },
    { path: "/drivers", label: "Drivers", icon: Flag },
    { path: "/championships", label: "Championships", icon: Trophy },
    { path: "/tracks", label: "Tracks", icon: MapPin },
    { path: "/tyres", label: "Tyres", icon: Circle },
    { path: "/weather", label: "Weather", icon: Cloud },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <Flag className="size-8" />
              <span className="text-2xl">F1 Encyclopedia</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-zinc-900 border-b border-zinc-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path || 
                (link.path !== "/" && location.pathname.startsWith(link.path));
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-zinc-400">
            <p className="mb-2">F1 Encyclopedia - Complete Formula 1 Information Database</p>
            <p className="text-sm">Data compiled from F1 history 1950-2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
