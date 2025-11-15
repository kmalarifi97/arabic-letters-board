import LetterBoard from '@/components/LetterBoard';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Arabic Letter Board</h1>
        <LetterBoard />
      </main>
    </div>
  );
}
