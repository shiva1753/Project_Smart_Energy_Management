import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ activePage, setActivePage }) => {
  return (
    <div className="dashboard-container">
      {/* UNIFIED SIDEBAR (Matches Control & Analytics) */}
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

      {/* UNIFIED MAIN CONTENT AREA */}
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
              <h1>Energy Overview</h1>
              <p>Real-time monitoring and predictive analytics for your facility.</p>
            </div>
            <div className="view-toggle">
              <button className="toggle-btn active">24H</button>
              <button className="toggle-btn">7D</button>
              <button className="toggle-btn">30D</button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="card-header">
                <div className="card-icon yellow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <span className="badge live">LIVE</span>
              </div>
              <h4 className="card-title">Real-Time Consumption</h4>
              <div className="card-value"><span className="number">4.28</span><span className="unit">kWh</span></div>
              <div className="card-trend up"><span className="trend-pill">↗ 12%</span><span className="trend-text">vs last period</span></div>
            </div>
            
            <div className="stat-card">
              <div className="card-header">
                <div className="card-icon orange">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="badge accuracy">92% Accuracy</span>
              </div>
              <h4 className="card-title">AI Bill Forecast</h4>
              <div className="card-value"><span className="number">$124.50</span></div>
              <div className="card-trend down"><span className="trend-value">↘ 4.2%</span><span className="trend-text">vs last period</span></div>
            </div>

            <div className="stat-card">
              <div className="card-header">
                <div className="card-icon orange-light">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="card-title">Solar Generation</h4>
              <div className="card-value"><span className="number">3.12</span><span className="unit">kW</span></div>
              <div className="card-trend down"><span className="trend-value">↘ 0.8%</span><span className="trend-text">vs last period</span></div>
            </div>
          </div>

          <div className="dashboard-charts-row">
            <div className="dashboard-chart-card line-chart-card">
              <div className="chart-header">
                <div className="header-info">
                  <h3 className="card-title-lg">24-Hour Load Pattern</h3>
                  <p className="card-subtitle-sm">Comparison between grid consumption and solar generation.</p>
                </div>
              </div>
              <div className="line-chart-canvas">
                <div className="chart-data-mimic">
                  <svg viewBox="0 0 600 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gridGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FFF2CC" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#FFF2CC" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                    <path d="M0,160 C50,150 80,140 120,130 C160,120 180,90 220,70 C260,50 300,55 340,65 C380,75 420,50 460,35 C500,20 550,60 600,100 L600,200 L0,200 Z" fill="url(#gridGradient)" />
                    <path d="M0,160 C50,150 80,140 120,130 C160,120 180,90 220,70 C260,50 300,55 340,65 C380,75 420,50 460,35 C500,20 550,60 600,100" stroke="#FFD966" strokeWidth="2" fill="none" />
                    <path d="M0,180 C50,178 100,175 150,170 C200,165 250,155 300,140 C350,125 400,130 450,145 C500,160 550,165 600,170" stroke="#FABE5A" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div className="y-axis"><span>8</span><span>6</span><span>4</span><span>2</span><span>0</span></div>
                <div className="x-axis">
                  <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>23:59</span>
                </div>
                <div className="grid-lines"><div></div><div></div><div></div><div></div><div></div></div>
              </div>
            </div>

            <div className="dashboard-chart-card donut-chart-card">
              <div className="chart-header">
                <div className="header-info">
                  <h3 className="card-title-lg">Consumption Breakdown</h3>
                  <p className="card-subtitle-sm">Usage distribution by primary areas.</p>
                </div>
              </div>
              <div className="donut-visualization">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#FABE5A" strokeWidth="20" fill="none" strokeDasharray="113.1 251.3" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" stroke="#46C7F1" strokeWidth="20" fill="none" strokeDasharray="75.4 251.3" transform="rotate(73 50 50)" />
                  <circle cx="50" cy="50" r="40" stroke="#2E6BEF" strokeWidth="20" fill="none" strokeDasharray="62.8 251.3" transform="rotate(181 50 50)" />
                  <circle cx="50" cy="50" r="30" fill="white" />
                </svg>
              </div>
              <div className="chart-legend">
                <div className="legend-item"><span className="legend-dot dot-yellow"></span><span className="legend-text">Hostel Room</span><span className="legend-value">45%</span></div>
                <div className="legend-item"><span className="legend-dot dot-cyan"></span><span className="legend-text">Gym</span><span className="legend-value">30%</span></div>
                <div className="legend-item"><span className="legend-dot dot-blue"></span><span className="legend-text">Common Area</span><span className="legend-value">25%</span></div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="small-stat-card peak-periods-card">
              <h3 className="card-title-md">Peak Usage Periods</h3>
              <div className="card-list">
                <div className="list-item">
                  <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div className="item-details"><span className="time-range">19:00 - 21:00</span><span className="consumption-value">5.2 kWh</span><span className="status-badge high">HIGH</span></div>
                </div>
                <div className="list-item">
                  <svg className="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div className="item-details"><span className="time-range">12:00 - 14:00</span><span className="consumption-value">4.1 kWh</span><span className="status-badge normal">NORMAL</span></div>
                </div>
              </div>
            </div>
            
            <div className="small-stat-card efficiency-card">
              <h3 className="card-title-md">Solar Efficiency</h3>
              <div className="efficiency-viz">
                <svg viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" stroke="#F1F3F5" strokeWidth="10" fill="none" />
                  <circle cx="40" cy="40" r="35" stroke="#FABE5A" strokeWidth="10" fill="none" strokeDasharray="171.5 219.9" transform="rotate(-90 40 40)" strokeLinecap="round"/>
                </svg>
                <div className="value-display"><span className="percent-number">78%</span></div>
              </div>
              <p className="card-subtitle-xs">System optimized. Expected bill reduction:</p>
              <p className="reduction-amount">$42.00</p>
            </div>

            <div className="small-stat-card quick-controls-card">
              <h3 className="card-title-md">Quick Controls</h3>
              <div className="controls-box">
                <div className="dark-inner-card">
                  <div className="control-header">
                    <svg className="home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <span className="control-label">Smart Away Mode</span>
                    <div className="toggle-switch active"><span className="toggle-thumb"></span></div>
                  </div>
                  <p className="control-description">Auto-shutdown all non-essential appliances when leaving home.</p>
                </div>
                <button className="grid-control-btn" onClick={() => setActivePage('appliances')}>All Devices Grid</button>
              </div>
            </div>
          </div>
        </div>

        {/* UNIFIED FOOTER */}
        <footer className="main-footer">
          <p>© 2024 Smart Energy Management Dashboard. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;