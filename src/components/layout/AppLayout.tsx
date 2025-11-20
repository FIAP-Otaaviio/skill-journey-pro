import { Link, useLocation, Outlet } from "react-router-dom";
import { User, Briefcase, Map, Menu, Users, BriefcaseIcon, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ChatAssistant from "../ChatAssistant";

const AppLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/profile", label: "Perfil", icon: User },
    { path: "/careers", label: "Carreiras", icon: Briefcase },
    { path: "/roadmap", label: "Jornada", icon: Map },
    { path: "/assessment", label: "Diagnóstico", icon: ClipboardCheck },
    { path: "/community", label: "Comunidade", icon: Users },
    { path: "/jobs", label: "Vagas", icon: BriefcaseIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <Link key={item.path} to={item.path}>
          <Button
            variant={isActive(item.path) ? "default" : "ghost"}
            className="w-full justify-start gap-3"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Button>
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="mt-8">
                  <NavContent />
                </div>
              </SheetContent>
            </Sheet>

            <Link to="/profile" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary" />
              <h1 className="text-xl font-bold text-foreground">Skill Swap</h1>
            </Link>
          </div>

        </div>
      </header>

      <div className="flex w-full">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r border-border bg-card">
          <div className="p-6">
            <NavContent />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <ChatAssistant />
    </div>
  );
};

export default AppLayout;
