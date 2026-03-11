/* =============================================================
   APP — "Warm Slate" design system
   Routes and layout wrapper for Justin Davis personal site.
   ============================================================= */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Talks from "./pages/Talks";
import NotFound from "./pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/publications" component={() => <Layout><Publications /></Layout>} />
      <Route path="/projects" component={() => <Layout><Projects /></Layout>} />
      <Route path="/blog" component={() => <Layout><Blog /></Layout>} />
      <Route path="/talks" component={() => <Layout><Talks /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
