import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-4xl font-bold text-center">App Ads & Policies Service</h1>
        
        <div className="bg-black/[.05] dark:bg-white/[.06] rounded-lg p-6 max-w-2xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Available Routes</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold mb-1">
                <a href="/app-ads.txt" className="text-blue-600 hover:underline dark:text-blue-400">
                  /app-ads.txt
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Returns app-ads.txt content fetched from the configured URL
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold mb-1">
                <a href="/policies" className="text-green-600 hover:underline dark:text-green-400">
                  /policies
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Returns privacy policy content fetched from the configured URL
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Configuration</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Data is fetched from URLs configured in environment variables and cached for 1 hour.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy to Vercel
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <p>App Ads & Policies Template</p>
      </footer>
    </div>
  );
}
