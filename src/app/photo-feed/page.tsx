
// When we click on a photo, a modal appears with an enlarged version of that image. So the enlarged version of the photo is actually a parallel route that has been intercepted.

// The back and forward browser buttons smoothly open and close the modal. 

// If we share the URL with someone or just refresh the page, it loads the photo details on a fresh page. It makes the parallel intercepting route perfect for modals.


import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}