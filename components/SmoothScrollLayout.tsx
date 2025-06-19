"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const SmoothScrollLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
};

export default SmoothScrollLayout;
