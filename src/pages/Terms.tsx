
import Breadcrumbs from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet";
import TermsMDX from "@/content/terms.mdx";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Syarat & Ketentuan Sekolab</title>
        <meta name="description" content="Syarat layanan, hak & kewajiban pengguna, pembayaran, pengakhiran akun, & perubahan ketentuan Sekolab." />
      </Helmet>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <Breadcrumbs
          items={[
            { label: "Help", href: "#" },
            { label: "Syarat", href: "/terms" },
          ]}
        />
        <h1 className="text-3xl font-bold mb-4">Syarat & Ketentuan Sekolab</h1>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <TermsMDX />
        </div>
      </div>
    </>
  );
}
