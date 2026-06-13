import React from 'react';
import '../styles/Control.css';

const Control = ({ activePage, setActivePage }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#F5A623"/>
                <path d="M13 6L7 13H12L11 18L17 11H12L13 6Z" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">SmartEnergy</span>
          </div>
          <nav className="nav-menu">
            <a href="#" onClick={e => { e.preventDefault(); setActivePage('dashboard'); }}
              className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              Dashboard
            </a>
            <a href="#" onClick={e => { e.preventDefault(); setActivePage('appliances'); }}
              className={`nav-item ${activePage === 'appliances' ? 'active' : ''}`}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              Appliances
            </a>
            <a href="#" onClick={e => { e.preventDefault(); setActivePage('analytics'); }}
              className={`nav-item ${activePage === 'analytics' ? 'active' : ''}`}>
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Analytics
            </a>
          </nav>
        </div>
        <div className="sidebar-bottom">
          <a href="#" className="nav-item">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            Settings
          </a>
          <a href="#" className="nav-item text-red">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Sign Out
          </a>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search devices or reports..." />
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              <span className="notification-dot"></span>
            </button>
            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">Guest</span>
                <span className="user-role">Premium Resident</span>
              </div>
              <div className="avatar-container">
                <img src="" className="avatar" />
                <span className="status-dot"></span>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">
          <div className="page-header">
            <div className="title-section">
              <h1>Appliance Control</h1>
              <p>Manage your IoT devices and automation routines.</p>
            </div>
            <div className="view-toggle">
              <button className="toggle-btn active">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                Grid
              </button>
              <button className="toggle-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                List
              </button>
            </div>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Active Devices</h3>
              <div className="metric-value-row">
                <span className="metric-value v-black">4</span>
                <span className="metric-unit">of 6</span>
              </div>
            </div>
            <div className="metric-card">
              <h3>Live Draw</h3>
              <div className="metric-value-row">
                <span className="metric-value v-orange">4,945</span>
                <span className="metric-unit">Watts</span>
              </div>
            </div>
            <div className="metric-card highlight">
              <h3>Solar Efficiency</h3>
              <div className="metric-value-row">
                <span className="metric-value v-orange">84%</span>
                <span className="highlight-badge">OPTIMAL</span>
              </div>
              <p className="highlight-desc">60% of appliances currently powered by on-site solar storage.</p>
            </div>
          </div>

          <div className="section-header">
            <h2>
              <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              Personal Appliances
            </h2>
            <div className="header-actions">
              <button className="btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                Filter
              </button>
              <button className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                Add Device
              </button>
            </div>
          </div>

          <div className="appliances-grid">
            {/* Hostel AC */}
            <div className="appliance-card active-card">
              <div className="app-card-header">
                <div className="app-info">
                  <div className="app-icon active-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8m-4-4v4"></path></svg>
                  </div>
                  <div>
                    <h3 className="app-name">Hostel AC</h3>
                    <p className="app-location">Block A — Room 204</p>
                  </div>
                </div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="app-power">
                <span className="power-value">1,450</span>
                <span className="power-unit">Watts</span>
              </div>
              <div className="app-status text-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                AUTO-OFF ACTIVE: ROOM UNOCCUPIED
              </div>
            </div>

            {/* Ceiling Fan */}
            <div className="appliance-card">
              <div className="app-card-header">
                <div className="app-info">
                  <div className="app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 11c0 -3.333 1 -5 3 -5c2 0 2.5 1.667 1.5 5"></path><path d="M11 12c-3.333 0 -5 -1 -5 -3c0 -2 1.667 -2.5 5 -1.5"></path><path d="M12 13c0 3.333 -1 5 -3 5c-2 0 -2.5 -1.667 -1.5 -5"></path><path d="M13 12c3.333 0 5 1 5 3c0 2 -1.667 2.5 -5 1.5"></path></svg>
                  </div>
                  <div>
                    <h3 className="app-name">Ceiling Fan</h3>
                    <p className="app-location">Block A — Room 204</p>
                  </div>
                </div>
                <div className="toggle-switch"></div>
              </div>
              <div className="app-power">
                <span className="power-value">0</span>
                <span className="power-unit">Watts</span>
              </div>
              <div className="app-status text-grey">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                SCHEDULED FOR 22:00
              </div>
            </div>

            {/* Study Lights */}
            <div className="appliance-card active-card">
              <div className="app-card-header">
                <div className="app-info">
                  <div className="app-icon active-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>
                  </div>
                  <div>
                    <h3 className="app-name">Study Lights</h3>
                    <p className="app-location">Block A — Room 204</p>
                  </div>
                </div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="app-power">
                <span className="power-value">45</span>
                <span className="power-unit">Watts</span>
              </div>
              <div className="app-status text-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                LOW-LIGHT MODE ACTIVE
              </div>
            </div>

            {/* Gym AC */}
            <div className="appliance-card active-card">
              <div className="app-card-header">
                <div className="app-info">
                  <div className="app-icon active-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
                  </div>
                  <div>
                    <h3 className="app-name">Gym Central AC</h3>
                    <p className="app-location">Basement — Fitness Center</p>
                  </div>
                </div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="app-power">
                <span className="power-value">3,200</span>
                <span className="power-unit">Watts</span>
              </div>
              <div className="app-status text-grey">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                PEAK SAVINGS ACTIVE
              </div>
            </div>

            {/* Exhaust */}
            <div className="appliance-card active-card">
              <div className="app-card-header">
                <div className="app-info">
                  <div className="app-icon active-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>
                  </div>
                  <div>
                    <h3 className="app-name">Exhaust System</h3>
                    <p className="app-location">1F — Cafeteria</p>
                  </div>
                </div>
                <div className="toggle-switch active"></div>
              </div>
              <div className="app-power">
                <span className="power-value">250</span>
                <span className="power-unit">Watts</span>
              </div>
              <div className="app-status text-muted">
                Manual Mode Only
              </div>
            </div>

            {/* Reading Area */}
            <div className="appliance-card">
              <div className="app-card-header">
                <div className="app-info">
                  <div className="app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>
                  </div>
                  <div>
                    <h3 className="app-name">Reading Area B</h3>
                    <p className="app-location">2F — Library</p>
                  </div>
                </div>
                <div className="toggle-switch"></div>
              </div>
              <div className="app-power">
                <span className="power-value">0</span>
                <span className="power-unit">Watts</span>
              </div>
              <div className="app-status text-grey">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                AUTO-OFF ACTIVE: NO MOTION
              </div>
            </div>
          </div>

          <div className="insights-section">
            <div className="section-header">
              <h2>Room Insights</h2>
            </div>
            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-info">
                  <div className="insight-icon bg-blue-light">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
                  </div>
                  <div>
                    <p className="insight-label">Ambient Temperature</p>
                    <h3 className="insight-value">22.4°C</h3>
                  </div>
                </div>
                <span className="insight-badge badge-blue">STABLE</span>
              </div>
              <div className="insight-card">
                <div className="insight-info">
                  <div className="insight-icon bg-orange-light">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8m-4-4v4"></path></svg>
                  </div>
                  <div>
                    <p className="insight-label">Phantom Load</p>
                    <h3 className="insight-value">12W</h3>
                  </div>
                </div>
                <span className="insight-badge badge-orange">DETECTED</span>
              </div>
            </div>
          </div>

          <footer className="main-footer">
            <p>© 2024 Smart Energy Management Dashboard. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Support</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Control;
