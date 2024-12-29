import ButtonGradient from "../components/common/ButtonGradient";
import GridContainer from "../components/defaults/GridContainer";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid min-h-screen h-full background">
      <ButtonGradient/>
      <GridContainer cols={12}>
        <Sidebar />
        <MaxWidthWrapper className="col-span-full lg:col-span-10">
          <Header />
          {children}
        </MaxWidthWrapper>
      </GridContainer>
    </main>
  );
}
