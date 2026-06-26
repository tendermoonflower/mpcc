import Head from "next/head";

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-amber-50 px-6 py-20">
      <Head>
        <title>tips for students</title>
      </Head>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">
         tips for students
        </h1>

        {/* VIDEO */}
        <div className="aspect-video w-full mb-10">
  <iframe
    className="w-full h-full rounded-xl"
    src={`https://drive.google.com/file/d/1G_TxBAZadSxMNNGkjo-XT_4IYHJx9w2F/view?usp=sharing`}
    allow="autoplay"
    allowFullScreen
  />
</div>
     {/* TEXT SECTION */}
<article
  className="
    mx-auto max-w-3xl
    space-y-12
    text-blue-950
  "
>
  {/* SECTION 1 */}
  <section className="space-y-4">
    <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
      Opening Notes
    </h2>

    <p className="text-lg leading-8 text-blue-950/90">
      This is where your written companion text goes. You can reflect,
      expand, annotate the video, or treat it like a Substack-style essay.
    </p>
  </section>

  {/* SECTION 2 */}
  <section className="space-y-4">
    <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
      Key Insight
    </h2>

    <p className="text-lg leading-8 text-blue-950/90">
      You can break this into multiple sections, add headers, or even
      embed quotes from yourself or students. Each section now behaves like
      a clean editorial block.
    </p>
  </section>

  {/* SECTION 3 (optional quote style) */}
  <section className="space-y-4">
    <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
      A Reflection
    </h2>

    <blockquote className="border-l-4 border-rose-600 pl-6 text-blue-950/80 italic leading-8">
      “You don’t write essays to sound impressive. You write them to sound
      true enough that someone else recognizes you.”
    </blockquote>
  </section>
</article>
