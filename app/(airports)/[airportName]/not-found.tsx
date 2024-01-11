import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[800px] flex flex-col gap-4 items-center justify-center">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>

      <div className="w-[200px] h-[200px] relative">
        <Image fill alt="indicator" src={'/error-notfound.png'} className="object-contain"/>

</div>
      <Button variant={"link"} asChild >
     
 
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
