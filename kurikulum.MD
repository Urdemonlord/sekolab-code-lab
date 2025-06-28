# == SEKOLAB CODE LAB – COPILOT CONTEXT ==
# Bahasa utama: TypeScript + React 18 (Vite bundler)
# Styling: Tailwind 3.x + shadcn-ui; semua class mengikuti design token Sekolab.
# HTML & CSS Curriculum: 8-modul (dasar HTML → proyek dunia nyata).
# -----------------------------------------------------------------------------
# Pedoman umum:
# 1. Tuliskan komentar, variabel, dan teks UI **dalam Bahasa Indonesia**.
# 2. Gunakan fungsi React berbasis hook; hindari class component.
# 3. Semua komponen UI berada di `src/components/` dan pakai ekstensi .tsx.
# 4. Terapkan BEM atau CSS Modules bila menulis CSS mentah; default-nya Tailwind.
# 5. Tipe data wajib eksplisit (no `any`) & prefer `zod` untuk validasi.
# 6. Fetch data via React Query + Supabase client; siapkan state loading/error.
# 7. Layout responsif: mobile-first, gunakan Flexbox/Grid, dan `clamp()` utk font.
# 8. Aksesibilitas penting: tambahkan aria-label, alt, role sesuai kebutuhan.
# 9. Setiap modul kurikulum butuh:
#    • contoh kode lengkap + penjelasan
#    • latihan praktikum bertahap
#    • kuis (array soal multiple-choice)
# 10. Ikuti struktur folder berikut bila membuat materi baru:
#     ├─ curriculum/
#     │  ├─ modul-01-html-dasar/
#     │  │   ├─ lesson.md
#     │  │   └─ contoh/
#     │  └─ modul-xx-...
# -----------------------------------------------------------------------------
# Contoh pola kode yang disukai:

import { Card } from \"@/components/ui/card\";
import { useQuery } from \"@tanstack/react-query\";

export default function ContohProfil() {
  const { data: profil, isLoading } = useQuery({
    queryKey: [\"profil\"],
    queryFn: async () => supabase.from(\"users\").select(\"*\").single(),
  });

  if (isLoading) return <p>Memuat…</p>;

  return (
    <Card className=\"max-w-md mx-auto p-6 space-y-4\">
      <img src={profil.avatar_url} alt=\"Foto Profil\" className=\"rounded-full w-24 h-24 mx-auto\" />
      <h1 className=\"text-xl font-semibold text-center\">{profil.nama}</h1>
      <p className=\"text-center text-sm text-gray-500\">{profil.bio}</p>
    </Card>
  );
}

# -----------------------------------------------------------------------------
# Harap Copilot:
# • Saran kode tetap singkat & idiomatik.
# • Menghindari dependensi di luar stack kecuali diminta.
# • Memprioritaskan latihan & contoh sesuai silabus HTML/CSS di atas.
# == END CONTEXT ==