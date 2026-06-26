import Head from "next/head";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-20">
      <Head>
        <title>Video Newsletter</title>
      </Head>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">
          Video Newsletter
        </h1>

        {/* VIDEO */}
        <div className="aspect-video w-full mb-10">
  <iframe
    className="w-full h-full rounded-xl"
    src={`https://drive.google.com/file/d/1KLShv4_MJ5pKVPNHZH_0xPWCJCIslGGg/view?usp=sharing`}
    allow="autoplay"
    allowFullScreen
  />
</div>
        {/* TEXT SECTION */}
        <article className="prose prose-lg text-blue-950">
          <p>
            This is where your written companion text goes. You can reflect,
            expand, annotate the video, or treat it like a Substack-style essay.
          </p>

          <p>
            You can break this into multiple sections, add headers, or even
            embed quotes from yourself or students.
          </p>
        </article>
      </div>
    </main>
  );
}
