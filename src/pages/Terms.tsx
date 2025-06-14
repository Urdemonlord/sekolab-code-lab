
import Breadcrumbs from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet";

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
          <h2>Definisi</h2>
          <p>
            Sekolab adalah platform belajar daring untuk coding dan AI berbasis eksperimen. Pengguna adalah setiap pihak yang mendaftar di Sekolab.
          </p>
          <h2>Hak & Kewajiban Pengguna</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis, sem nec cursus porta, urna urna dictum elit, et malesuada enim purus sed orci. ...
          </p>
          <h2>Pembayaran</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus facilisis tincidunt...
          </p>
          <h2>Pengakhiran Akun</h2>
          <p>
            Donec accumsan, dolor quis mattis pretium, velit mi aliquet enim, eu tempus mi lectus nec magna. ...
          </p>
          <h2>Perubahan Ketentuan</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in urna in quam consectetur commodo...
          </p>
        </div>
      </div>
    </>
  );
}
