"use client";

import { useRouter } from "next/navigation";
import gsap from "gsap";
import React from "react";
import Link from "next/link";

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function TransitionLink({ href, children, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Only intercept if we are on the same origin (internal links)
    if (href.startsWith("/") || href.startsWith(window.location.origin)) {
      e.preventDefault();

      // Exit animation: columns scale up from bottom to cover screen
      await gsap.to(".page-transition-layer", {
        scaleY: 1,
        transformOrigin: "bottom",
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.inOut",
      });

      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleTransition} {...props}>
      {children}
    </Link>
  );
}
