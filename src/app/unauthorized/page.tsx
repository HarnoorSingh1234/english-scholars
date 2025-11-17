export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Access Denied
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You don't have permission to access this page.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-main-400 text-white font-semibold rounded hover:bg-main-500 transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
