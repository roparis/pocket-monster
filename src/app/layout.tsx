import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  creator: "Romain Paris",
  keywords: ["Pokedex", "Pokemon", "App", "React", "UI"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <main className="flex h-screen w-full items-center justify-center">
            <div className="pokedex-ratio flex w-full max-w-screen-md items-end justify-center">
              {/* Pokedex main */}
              <div className="relative h-full flex-1 rounded border-8 border-red-800 bg-red-700 py-4 shadow-[-10px_-10px_12px_-10px_rgba(0,0,0,1)]">
                <div className="left-shape absolute bottom-0 left-0 right-0 top-14 z-0 bg-red-500" />

                {/* Pokedex header */}
                <div className="flex items-start justify-start px-4">
                  <div className="h-16 w-16 rounded-full border-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl" />
                  <div className="flex items-start justify-start gap-1 pl-2">
                    <span className="h-4 w-4 rounded-full border bg-red-700" />
                    <span className="h-4 w-4 rounded-full border bg-amber-300" />
                    <span className="h-4 w-4 rounded-full border bg-green-700" />
                  </div>
                </div>
                {/* Pokedex content */}
                <div className="h-full p-4 pr-12 pt-12">
                  <div className="h-3/6 drop-shadow-2xl">
                    <div className="screen-shape inset-2 flex h-full w-full flex-col items-center justify-between border bg-gray-300">
                      <div className="flex items-center justify-center gap-6 py-2">
                        <div className="h-2 w-2 rounded-full border bg-red-700" />
                        <div className="h-2 w-2 rounded-full border bg-red-700" />
                      </div>
                      <div className="h-full w-full px-6">
                        <div className="h-full w-full bg-gray-600">
                          {children}
                        </div>
                      </div>

                      <div className="flex w-full items-center justify-between py-2 pl-6 pr-6">
                        <div className="h-5 w-5 rounded-full border border-black bg-red-600" />
                        <div className="stripes h-6 w-12" />
                      </div>
                    </div>
                  </div>
                  {/* Pokedex Ctas */}
                  <div className="relative z-10 flex h-1/3 w-full py-8">
                    <div>
                      <div className="h-10 w-10 rounded-full border border-black bg-gray-600" />
                    </div>
                    <div>
                      <div className="flex gap-4 px-4">
                        <span className="block h-3 w-14 rounded-lg border border-black bg-red-700" />
                        <span className="block h-3 w-14 rounded-lg border border-black bg-gray-600" />
                      </div>
                      <div className="m-4 ml-6 aspect-video w-28 bg-green-500 shadow-inner" />
                    </div>
                    <div className="grid aspect-square w-1/3 grid-cols-3 grid-rows-3 drop-shadow-2xl">
                      <span className="invisible" />
                      <span className="bg-gray-700" />
                      <span className="invisible" />
                      <span className="bg-gray-700" />
                      <span className="bg-gray-700" />
                      <span className="bg-gray-700" />
                      <span className="invisible" />
                      <span className="bg-gray-700" />
                      <span className="invisible" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-full flex-1 pt-16 drop-shadow">
                <div className="relative h-full flex-1 rounded">
                  <div className="absolute bottom-0 left-[-2rem] top-0 z-40 flex w-8 flex-col justify-between bg-gradient-to-r from-red-700 via-red-500 to-red-700 py-8">
                    <span className="w-full border border-red-700" />
                    <span className="w-full border border-red-700" />
                  </div>
                  <div className="right-shape h-full w-full border-4 border-red-700 bg-red-500 p-4 pt-9">
                    <div className="grid h-full grid-cols-2 grid-rows-4 gap-4 pt-8">
                      <div className="col-span-2 bg-gray-800 shadow-inner" />
                      <div className="col-span-2 grid w-full grid-cols-5">
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                        <span className="border bg-blue-400" />
                      </div>
                      <div className="flex py-4">
                        <span className="flex-1 border bg-white shadow" />
                        <span className="flex-1 border bg-white shadow" />
                      </div>

                      <div className="flex flex-col items-end justify-between">
                        <div className="flex items-start justify-end gap-2">
                          <span className="block h-3 w-12 rounded-lg border border-black bg-red-700" />
                          <span className="block h-3 w-12 rounded-lg border border-black bg-gray-600" />
                        </div>
                        <div className="h-8 w-8 rounded-full border bg-gradient-to-r from-yellow-100 to-yellow-400" />
                      </div>

                      <div className="my-4 bg-gray-700" />
                      <div className="my-4 bg-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
