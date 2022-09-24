import Image from "next/image";
export default function AuthorFooter({ width, height, src, name }) {
  return (
    <footer className="grid place-items-center justify-center h-fit mt-16 py-8 w-screen bg-slate-200  bottom-0">
      <div id="icon">
        <Image
          className="rounded-full"
          alt="label"
          src={
            src ||
            "https://avatars.dicebear.com/api/initials/er.png?background=red&radius=50"
          }
          height={height || 64}
          width={width || 64}
        />
      </div>
      <p className="font-bold text-xl">
        {name || "Error loading author's name."}
      </p>
    </footer>
  );
}
