import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TambahSoal({ tambahSoal }) {
  const navigate = useNavigate();
  const [pertanyaan, setPertanyaan] = useState("");
  const [kategori, setKategori] = useState("Umum");
  const [jawabanBenar, setJawabanBenar] = useState("");
  const [pesanError, setPesanError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const pertanyaanBersih = pertanyaan.trim();
    const jawabanBersih = jawabanBenar.trim();

    if (!pertanyaanBersih || !jawabanBersih) {
      setPesanError("Pertanyaan dan jawaban benar wajib diisi.");
      return;
    }

    if (typeof tambahSoal === "function") {
      tambahSoal({
        id: Date.now(),
        pertanyaan: pertanyaanBersih,
        kategori,
        jawabanBenar: jawabanBersih,
      });
    }

    navigate("/");
  };

  return (
    <section className="page-content">
      <div className="form-card">
        <div className="table-heading">
          <div>
            <h3>Tambah Soal Baru</h3>
            <p>Isi detail pertanyaan, kategori, dan kunci jawaban.</p>
          </div>
        </div>

        {pesanError && <p className="error-text">{pesanError}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="pertanyaan">Pertanyaan</label>
            <textarea
              id="pertanyaan"
              rows="3"
              value={pertanyaan}
              onChange={(e) => setPertanyaan(e.target.value)}
              placeholder="Tuliskan pertanyaan kuis di sini..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="kategori">Kategori Mata Pelajaran</label>
            <select
              id="kategori"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="Umum">Pengetahuan Umum</option>
              <option value="Matematika">Matematika</option>
              <option value="IPA">Ilmu Pengetahuan Alam (IPA)</option>
              <option value="Informatika">Informatika</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jawabanBenar">Jawaban Benar</label>
            <input
              id="jawabanBenar"
              type="text"
              value={jawabanBenar}
              onChange={(e) => setJawabanBenar(e.target.value)}
              placeholder="Masukkan jawaban yang benar..."
            />
          </div>

          <div className="form-actions">
            <Link to="/" className="btn-secondary">
              Batal
            </Link>
            <button type="submit" className="btn-primary">
              Simpan Soal
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TambahSoal;
