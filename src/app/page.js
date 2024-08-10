/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="max-w-4xl px-4 py-12 mx-auto">
      <h1 className="mb-8 text-4xl font-extrabold text-center text-slate-800">
        Welcome to Our Next Auth Application
      </h1>
      <div className="flex flex-col items-center p-6 bg-white rounded-lg">
        <img
          src="https://kivuto.com/wp-content/uploads/2021/06/User_Authentication_Best_Practices_Image.jpg"
          alt="Authentication Illustration"
          className="object-cover w-full mb-6 rounded-lg h-96"
        />
        <div>
          <p className="mb-4 text-gray-700">
            This application is built using Next.js, a powerful React framework
            for building server-side rendered and statically generated web
            applications.
          </p>
          <p className="mb-4 text-gray-700">
            We have integrated Clerk for seamless user authentication, providing
            a secure and user-friendly login experience.
          </p>
          <p className="mb-4 text-gray-700">
            Our backend is powered by MongoDB, a NoSQL database, and we use
            Mongoose for elegant MongoDB object modeling in Node.js.
          </p>
          <p className="mb-4 text-gray-700">
            This project serves as a comprehensive template for building
            full-stack web applications with authentication. Feel free to
            customize it to suit your needs!
          </p>
          <p className="mb-4 text-gray-700">
            For more information, please refer to the official documentation of
            the technologies used:
          </p>
          <ul className="mb-4 space-y-2 text-gray-700">
            <li>
              <a
                href="https://github.com/sahandghavidel/next-auth-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                </svg>
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://go.clerk.com/O9JPZR5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:underline"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                </svg>
                Clerk Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
