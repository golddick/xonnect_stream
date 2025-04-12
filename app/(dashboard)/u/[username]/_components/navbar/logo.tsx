import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export function Logo() {
  return (
    <div className=" flex-col items-center gap-y-4 hidden md:block ">
      <div className=" rounded-full p-1">
        <Image src="/assets/xb.png" alt="xonnect" height="100" width="150" />
      </div>
    </div>
  );
}
