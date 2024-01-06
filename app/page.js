import Image from "next/image";

// https://www.youtube.com/watch?v=vCOSTG10Y4o

export default function Home() {
  return (
    <main className="container flex justify-between gap-6">
      <section className="flex flex-col justify-between gap-6 flex-1">
        <h1 className="capitalize text-[70px]">creative thoughts agency.</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
          sapiente illo sequi vitae ducimus. Reprehenderit, quaerat aut?
          Explicabo facilis nemo laudantium reiciendis.
        </p>
        <div className="flex gap-4">
          <button className="capilatize px-6 py-2 rounded-xl bg-blue-500 rounded-2xl px-4 py-2">
            learn more
          </button>
          <button className="capilatize px-6 py-2 rounded-xl bg-white text-[var(--bg)] rounded-2xl px-4 py-2">
            contact
          </button>
        </div>
        <figure className="relative h-[50px] w-[100%]">
          <Image src="/brands.png" fill alt="brands" />
        </figure>
      </section>

      <section className="relative flex-1">
        <Image src="/hero.gif" fill alt="hero" />
      </section>
    </main>
  );
}
