"use client";
import Link from "next/link";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div
      style={{
        background: "teal",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <b>ShubhamRaut</b>
      </div>
      <div style={{ display: "flex" }}>
        {links.map((links) => (
          <Link
            className="Links"
            href={links.url}
            key={links.id}
            style={{ marginRight: 10, background: "teal" }}
          >
            {links.title}
          </Link>
        ))}
        <button
          style={{ marginRight: 10 }}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
