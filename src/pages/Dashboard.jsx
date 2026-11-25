import { Link } from "react-router-dom";

function Dashboard({ soal = [] }) {
  const daftarSoal = Array.isArray(soal) ? soal : [];

  return (
    <section className="page-content">
      <div className="welcome-banner">
        <div>
          <h1>Selamat Datang di EduGame! 👋</h1>
          <p>Kelola soal dan permainan pembelajaranmu dalam satu tempat.</p>
        </div>
        <Link to="/tambah-soal" className="btn-primary">
          + Tambah Soal Baru
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon icon-pink">📝</div>
          <p>Total Soal</p>
          <h2>{daftarSoal.length}</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon icon-purple">📚</div>
          <p>Kategori</p>
          <h2>4</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon icon-amber">🎮</div>
          <p>Total Permainan</p>
          <h2>0</h2>
        </div>

        <div className="stat-card">
          <div className="stat-icon icon-emerald">🎓</div>
          <p>Total Peserta</p>
          <h2>0</h2>
        </div>
      </div>

      <div className="table-card">
        <div className="table-heading">
          <div>
            <h3>Daftar Soal Terbaru</h3>
            <p>Pertanyaan yang telah tersimpan di bank soal.</p>
          </div>
          <Link to="/tambah-soal" className="btn-secondary">
            Lihat / Tambah Soal
          </Link>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Pertanyaan</th>
                <th>Kategori</th>
                <th>Jawaban Benar</th>
              </tr>
            </thead>
            <tbody>
              {daftarSoal.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty-state">
                    Belum ada soal. Klik tombol "+ Tambah Soal Baru" untuk
                    memulai.
                  </td>
                </tr>
              ) : (
                daftarSoal.map((item, index) => (
                  <tr key={item.id ?? index}>
                    <td>{index + 1}</td>
                    <td>{item.pertanyaan}</td>
                    <td>
                      <span className="badge-kategori">
                        {item.kategori || "Umum"}
                      </span>
                    </td>
                    <td>
                      <strong>{item.jawabanBenar}</strong>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
