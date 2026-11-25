import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-brand">
          <div className="brand-badge">E</div>
          <div>
            <h2>EduGame</h2>
            <span>Platform Kuis Interaktif</span>
          </div>
        </div>

        <p className="menu-label">Menu Utama</p>
        <nav className="sidebar-nav">
          <NavLink to="/" end>
            <span>📊</span> Dashboard
          </NavLink>
          <NavLink to="/tambah-soal">
            <span>➕</span> Tambah Soal
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="avatar">AD</div>
        <div>
          <strong>Admin Guru</strong>
          <small>Mode PWA Aktif</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
