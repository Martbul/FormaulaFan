import "./layout.css"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <section>
      {/* <Navigation/> */}
    {children}
    </section>;
  ) 
 
}
