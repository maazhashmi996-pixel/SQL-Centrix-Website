import Navbar from "@/src/data/Components/Navbar";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
}