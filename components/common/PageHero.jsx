export default function PageHero({ text, variant }) {
  switch (variant) {
    default:
    case "light":
      return (
        <div className="grid h-[15vh] place-items-center">
          <p className="font-bold text-5xl">
            {text ? text : "Missing page name"}
          </p>
        </div>
      );
    case "dark":
      return (
        <div className="grid h-[15vh] place-items-center bg-[#111111]">
          <p className="font-bold text-5xl text-white">
            {text ? text : "Missing page name"}
          </p>
        </div>
      );
  }
}
