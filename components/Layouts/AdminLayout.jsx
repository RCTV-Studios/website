import NavigationBar from "../Admin/NavigationBar";
export default function AdminLayout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}
