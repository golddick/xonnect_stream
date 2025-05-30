import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className=" rounded-full p-1">
        <Image src="/assets/xb.png" alt="xonnect" height="100" width="150" />
      </div>
      {/* <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">XONNECT</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Stream</p>
      </div> */}
    </div>
  );
}
