import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GavelIcon, ScaleIcon, BookOpenIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GavelIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">LawFirm Manager</span>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Lawyer Login</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="/admin/login">Admin Login</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Streamline Your Law Practice
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive case management solution designed specifically for law firms.
            Manage cases, track hearings, and collaborate efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ScaleIcon className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Case Management</h3>
            <p className="text-muted-foreground">
              Efficiently manage and track all your cases in one place. Assign cases, update statuses, and monitor progress.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BookOpenIcon className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Document Organization</h3>
            <p className="text-muted-foreground">
              Keep all case-related documents organized and easily accessible. Never lose track of important files.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <GavelIcon className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hearing Tracking</h3>
            <p className="text-muted-foreground">
              Stay on top of all court dates and deadlines. Get reminders and manage your calendar effectively.
            </p>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" asChild>
            <Link href="/register">Get Started Today</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-muted mt-32 py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 LawFirm Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}