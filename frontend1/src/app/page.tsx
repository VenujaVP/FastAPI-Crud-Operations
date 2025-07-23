import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Welcome to{" "}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="m203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946l67.3 9.382s-24.211-2.452-67.3-9.382c-28.672-4.618-57.342-9.155-76.686-9.946-19.344-.791-19.344 14.526 0 13.735 19.344-.791 47.965-6.327 76.686-9.946 28.672-3.618 52.445-4.382 67.3-9.382l-67.3 9.382z" />
              </svg>
              <span className="relative">YourApp</span>
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Experience the future of web applications. Fast, secure, and beautifully designed.
            Join thousands of users who trust our platform.
          </p>
          
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-700 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100 transition-all duration-200"
            >
              Get Started Free
            </Link>
            <Link
              href="/login"
              className="group inline-flex ring-1 items-center justify-center rounded-full px-8 py-4 text-sm text-slate-700 ring-slate-200 hover:ring-slate-300 focus:outline-none focus-visible:outline-blue-600 focus-visible:ring-slate-300 active:bg-slate-100 active:text-slate-600 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to get started
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our platform provides all the tools and features you need to build amazing applications.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    Lightning Fast
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Built with modern technologies for optimal performance and speed.
                  </dd>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    Secure by Default
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Enterprise-grade security features to keep your data safe and protected.
                  </dd>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    Easy to Use
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Intuitive interface designed for both beginners and advanced users.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl py-16 px-6 text-center lg:px-8 mb-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of satisfied users and start building amazing applications today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/register"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
              >
                Start Free Trial
              </Link>
              <Link
                href="/login"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                Already have an account? <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
