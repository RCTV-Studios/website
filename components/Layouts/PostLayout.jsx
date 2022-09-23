import NavigationBar from "../NavigationBar/NavigationBar";
export default function PostLayout({ children, pageName, heroVariant }) {
  return (
    <>
      <NavigationBar />
      <main className="mx-3 sm:mx-16">{children}</main>
    </>
  );
}
