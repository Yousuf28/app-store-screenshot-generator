import Navbar from "@/components/Navbar";


import AppScreenshotGenerator from "@/components/AppScreenshotGenerator";

export default function Home() {
  return (
    <div className="min-h-screen font-primary bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        <AppScreenshotGenerator />
      </div>



    </div>
  );
}
