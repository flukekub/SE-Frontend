import TopMenu from "@/components/topmenu/TopMenu";
import FooterAll from "@/components/footer/FooterAll";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function layout_name ({ children } : { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  
  return (
    <NextAuthProvider session={session}>
      <TopMenu />
      <div className="mt-[116px] space-y-20 md:space-y-32">
        {children}
        <FooterAll />
      </div>
    </NextAuthProvider>
  )
}