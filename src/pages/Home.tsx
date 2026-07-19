export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-144px)] items-center justify-center">
      <div className="text-center">
        <p className="mb-3 text-lg text-blue-400">
          Hello, I'm
        </p>

        <h1 className="mb-4 text-6xl font-bold">
          Balaram Pai
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Backend Developer • Python • FastAPI • React • Distributed Systems
        </p>
      </div>
    </section>
  );
}