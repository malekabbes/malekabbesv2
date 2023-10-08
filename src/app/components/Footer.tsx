import Link from "next/link";
import Image from "next/image";
import React from "react";


export default function Footer() {
  return (
    <div className="relative">
        <div className="my-10 text-sm text-center text-gray-600 dark:text-white-400">
          Copyright © {new Date().getFullYear()}. Made with{" "}
          <span style={{ color: "red" }}>♥</span> by{" "}
          <a href="https://malekabbes.com/" target="_blank" rel="noopener">
            Malek Abbes
          </a>{" "}
        </div>
    </div>
  );
}
