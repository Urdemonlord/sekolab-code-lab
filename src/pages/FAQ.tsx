
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet";
import { ArrowDown } from "lucide-react";

const faqList = [
  {
    question: "Apa itu Sekolab?",
    answer: "Sekolab adalah platform belajar coding & AI berbasis eksperimen. Dengan pendekatan hands-on, Sekolab membantu Anda memahami teknologi modern melalui praktik langsung.",
  },
  {
    question: "Apakah gratis?",
    answer: "Modul dasar gratis, sementara kursus lanjutan Anda dapat akses melalui langganan atau pembelian satuan.",
  },
  {
    question: "Bagaimana cara mulai belajar?",
    answer: "Cukup daftar gratis di Sekolab, pilih kursus atau playground, lalu mulai bereksperimen sesuai minat Anda.",
  },
  {
    question: "Siapa saja yang bisa ikut Sekolab?",
    answer: "Sekolab terbuka untuk pelajar, mahasiswa, guru, profesional, maupun siapa saja yang ingin meningkatkan skill digital.",
  },
  {
    question: "Apakah ada dukungan komunitas?",
    answer: "Tentu, Anda bisa berdiskusi di forum komunitas atau mengikuti webinar untuk berjejaring dengan sesama member.",
  },
  {
    question: "Bagaimana dengan keamanan data saya?",
    answer: "Kami mengutamakan keamanan dan privasi setiap pengguna. Data Anda tidak akan dibagikan ke pihak ketiga tanpa izin.",
  },
  {
    question: "Apakah Sekolab menyediakan sertifikat?",
    answer: "Beberapa kursus berbayar menyediakan sertifikat setelah Anda menyelesaikan materi dan ujian akhir.",
  },
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Pertanyaan Umum (FAQ) | Sekolab</title>
        <meta name="description" content="Jawaban seputar Sekolab: Platform belajar coding & AI berbasis eksperimen, gratis sampai berbayar, keamanan & fitur." />
      </Helmet>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <Breadcrumbs
          items={[
            { label: "Help", href: "#" },
            { label: "FAQ", href: "/faq" },
          ]}
        />
        <h1 className="text-3xl font-bold mb-4">Pertanyaan Umum (FAQ)</h1>
        <Accordion type="single" collapsible className="rounded-md border divide-y">
          {faqList.map((item, i) => (
            <AccordionItem key={i} value={String(i)}>
              <AccordionTrigger>
                <span>{item.question}</span>
                <ArrowDown className="ml-2" />
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
