import React from "react";
import Link from "next/link";

type Props = {
  href: string;
};

export default function LinkComp({ href }: Props) {
  return <Link href={href}>Google</Link>;
}
