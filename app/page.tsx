import Image from "next/image";

import {lusitana} from "@/app/ui/fonts";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white  sm:items-start">
        <div className="flex flex-1 flex-col justify-center items-center">
          <a href="/dashboard">dashboard page</a>
        </div>
      </main>
    </div>
  );
}
