"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../blog/sanity/SanityConfig";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
