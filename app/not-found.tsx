import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-soft-blush flex items-center justify-center px-4">
      <div className="glass-card p-8 max-w-md text-center space-y-6">
        <h2 className="clamp-text-4xl font-bold text-rich-cocoa">404</h2>
        <p className="text-soft-mauve-gray">The page you're looking for doesn't exist.</p>
        <Link href="/" className="magnetic-button inline-flex items-center gap-2">
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
