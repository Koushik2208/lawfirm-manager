import React from "react";
import { Button } from "../ui/button";
import { GavelIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <GavelIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">LawFirm Manager</span>
        </div>
        <div className="space-x-4">
          <Button
            variant="outline"
            asChild
            className="hover:bg-gray-100 hover:text-primary"
          >
            <Link href="/login">Lawyer Login</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/admin/login">Admin Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
