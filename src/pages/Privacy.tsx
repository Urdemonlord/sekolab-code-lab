
import Breadcrumbs from "@/components/Breadcrumbs";
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
          <h2>Data Yang Dikumpulkan</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et porttitor magna. Pellentesque habitant morbi tristique senectus et netus...
          </p>
          <h2>Cara Penggunaan Data</h2>
          <p>
            Suspendisse potenti. Proin suscipit, ipsum eget finibus consectetur, erat enim dictum nisl...
          </p>
          <h2>Cookies</h2>
          <p>
            Aliquam erat volutpat. Morbi elementum metus nec quam lacinia, ut accumsan urna sagittis. Donec sit amet massa...
          </p>
          <h2>Hak Pengguna</h2>
          <p>
            Cras tristique, augue vitae placerat dictum, massa nisi pretium eros, eu dapibus justo ipsum tempor ex...
          </p>
          <h2>Kontak</h2>
          <p>
            Jika Anda memiliki pertanyaan, harap hubungi <a href="mailto:support@sekolab.id" className="text-primary underline">support@sekolab.id</a>.
          </p>
        </div>
      </div>
    </>
  );
}
