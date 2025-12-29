import React from "react";
import { Outlet, Link } from "react-router";

import authImg from "../assets/authImage.png";
import ProFastLogo from "../pages/Shared/proFastLogo/ProFastLogo";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="mx-auto min-h-screen w-full">
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          {/* Logo */}
              <Link to="/" className="inline-flex items-center gap-2 fixed top-14 left-14">
                <ProFastLogo></ProFastLogo>
              </Link>
          <div className="flex items-center justify-center px-6 py-10 md:px-12">
            <Outlet />
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center justify-center bg-[#F3F8E8]">
            <img
              src={authImg}
              alt="Auth illustration"
              className="w-[420px] max-w-[85%] object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
