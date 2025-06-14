
import Breadcrumbs from "@/components/Breadcrumbs";
import PrivacyMDX from "@/content/privacy.mdx";
import { Helmet } from "react-helmet";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Kebijakan Privasi Sekolab</title>
        <meta name="description" content="Kebijakan pengumpulan, penggunaan data, cookies, hak pengguna, dan kontak Sekolab." />
      </Helmet>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <Breadcrumbs
          items={[
            { label: "Help", href: "#" },
            { label: "Privasi", href: "/privacy" },
          ]}
        />
        <h1 className="text-3xl font-bold mb-4">Kebijakan Privasi Sekolab</h1>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <PrivacyMDX />
        </div>
      </div>
    </>
  );
}
