import NavigationBar from "../NavigationBar/NavigationBar";
import PageHero from "../common/PageHero";
export default function PublicLayout({ children, pageName, heroVariant }) {
  return (
    <>
      <NavigationBar />
      <div>
        <PageHero variant={heroVariant} text={pageName}></PageHero>
      </div>
      <main>{children}</main>
    </>
  );
}
