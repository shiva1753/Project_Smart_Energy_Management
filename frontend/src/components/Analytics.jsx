import React from 'react';
import '../styles/Analytics.css';

const Analytics = ({ activePage, setActivePage }) => {
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
              <div className="ai-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0z"/></svg>
                <span>AI INTELLIGENCE CORE</span>
              </div>
              <h1>Advanced Analytics</h1>
              <p>Real-time predictive modeling and anomaly detection powered by EnergyAI™ 4.0.</p>
            </div>
            <div className="action-buttons">
              <button className="btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                Filter View
              </button>
              <button className="btn-primary">Generate Report</button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>Forecasting Accuracy</h3>
              <div className="stat-value-row">
                <span className="stat-value">94.2%</span>
                <span className="stat-trend neutral">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                  +2.1%
                </span>
              </div>
            </div>
            <div className="stat-card">
              <h3>Anomalies Prevented</h3>
              <div className="stat-value-row">
                <span className="stat-value">12 Units</span>
                <span className="stat-trend neutral">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                  +4
                </span>
              </div>
            </div>
            <div className="stat-card">
              <h3>Avg. Optimization</h3>
              <div className="stat-value-row">
                <span className="stat-value">18.5%</span>
                <span className="stat-trend neutral">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
                  +1.2%
                </span>
              </div>
            </div>
            <div className="stat-card">
              <h3>Est. Savings (Monthly)</h3>
              <div className="stat-value-row">
                <span className="stat-value">$1,240</span>
                <span className="stat-trend negative">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  -$120
                </span>
              </div>
            </div>
          </div>

          <div className="main-layout-grid">
            <div className="left-column">
              <div className="card-container">
                <div className="section-header">
                  <div className="header-title-with-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <h2>Live Anomalies</h2>
                  </div>
                  <span className="badge urgent-badge">3 Urgent</span>
                </div>
                <div className="anomaly-list">
                  <div className="anomaly-card critical-border">
                    <div className="card-top-info">
                      <span className="status-tag">Critical</span>
                      <span className="timestamp">Detected 12m ago</span>
                    </div>
                    <h3 className="anomaly-title">Hostel Main AC Unit 4</h3>
                    <div className="issue-description">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                      <span>Compressor Short-Cycling</span>
                    </div>
                    <div className="impact-row">
                      <span className="impact-label">FINANCIAL IMPACT</span>
                      <span className="impact-value text-red">+24% Energy Waste</span>
                    </div>
                    <div className="action-row">
                      <button className="btn-action primary-action">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2.12 2.12 0 0 1-3-3l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path></svg>
                        Schedule
                      </button>
                      <button className="btn-action secondary-action">Dismiss</button>
                    </div>
                  </div>

                  <div className="anomaly-card high-border">
                    <div className="card-top-info">
                      <span className="status-tag">High</span>
                      <span className="timestamp">Detected 2h ago</span>
                    </div>
                    <h3 className="anomaly-title">Dining Hall Refrigerator</h3>
                    <div className="issue-description">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                      <span>Defrost Cycle Malfunction</span>
                    </div>
                    <div className="impact-row">
                      <span className="impact-label">FINANCIAL IMPACT</span>
                      <span className="impact-value text-orange">+15% Energy Waste</span>
                    </div>
                    <div className="action-row">
                      <button className="btn-action primary-action">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2.12 2.12 0 0 1-3-3l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path></svg>
                        Schedule
                      </button>
                      <button className="btn-action secondary-action">Dismiss</button>
                    </div>
                  </div>

                  <div className="anomaly-card moderate-border">
                    <div className="card-top-info">
                      <span className="status-tag">Moderate</span>
                      <span className="timestamp">Flagged 5h ago</span>
                    </div>
                    <h3 className="anomaly-title">Common Area Ventilation</h3>
                    <div className="issue-description">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                      <span>Filter Replacement Required</span>
                    </div>
                    <div className="impact-row">
                      <span className="impact-label">FINANCIAL IMPACT</span>
                      <span className="impact-value text-red">+8% Energy Waste</span>
                    </div>
                    <div className="action-row">
                      <button className="btn-action primary-action">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.19 7.19a2.12 2.12 0 0 1-3-3l7.19-7.19a6 6 0 0 1 9.36-7.94z"></path></svg>
                        Schedule
                      </button>
                      <button className="btn-action secondary-action">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-container">
                <div className="section-header minimal">
                  <div className="header-title-with-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                    <h2>Device Health Index</h2>
                  </div>
                </div>
                <div className="health-list">
                  <div className="health-row">
                    <div className="health-details">
                      <h4>Solar Inverter</h4>
                      <span className="health-percent">HEALTH: 98%</span>
                    </div>
                    <span className="health-time">2 days ago</span>
                  </div>
                  <div className="health-row">
                    <div className="health-details">
                      <h4>Gym Lighting</h4>
                      <span className="health-percent">HEALTH: 82%</span>
                    </div>
                    <span className="health-time">1 week ago</span>
                  </div>
                  <div className="health-row">
                    <div className="health-details">
                      <h4>Library HVAC</h4>
                      <span className="health-percent">HEALTH: 95%</span>
                    </div>
                    <span className="health-time">3 days ago</span>
                  </div>
                  <div className="health-row alert-row">
                    <div className="health-details">
                      <h4 className="needs-attention">Kitchen Freezer</h4>
                      <span className="health-percent">HEALTH: 45%</span>
                    </div>
                    <span className="health-time">Today</span>
                  </div>
                </div>
                <button className="text-button-full">View Maintenance Log</button>
              </div>
            </div>

            <div className="right-column">
              <div className="card-container">
                <div className="chart-header-area">
                  <div className="chart-titles">
                    <h2>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                      Usage Prediction Model
                    </h2>
                    <p>Historical baseline (Last 7 Days) vs. Predicted Consumption (AI Model v4.2)</p>
                  </div>
                  <div className="segmented-control">
                    <button className="segment active">Prediction</button>
                    <button className="segment">History</button>
                  </div>
                </div>
                <div className="chart-visuals">
                  <div className="chart-legend-top">
                    <span className="legend-item"><span className="swatch solid-orange"></span> Historical Avg</span>
                    <span className="legend-item"><span className="swatch solid-blue"></span> AI Predicted</span>
                  </div>
                  <div className="chart-graph-mock">
                    <svg width="100%" height="220" viewBox="0 0 800 220" preserveAspectRatio="none">
                      <path d="M0 200 L0 130 Q 150 150, 300 70 T 550 30 T 800 150 L 800 200 Z" fill="rgba(245,166,35,0.05)" />
                      <path d="M0 130 Q 150 150, 300 70 T 550 30 T 800 150" fill="none" stroke="#F5A623" strokeWidth="2.5" />
                      <path d="M0 125 Q 150 145, 300 80 T 550 20 T 800 160" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6,5" />
                    </svg>
                    <div className="chart-y-axis"><span>8</span><span>6</span><span>4</span><span>2</span><span>0</span></div>
                    <div className="chart-x-axis"><span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>23:59</span></div>
                  </div>
                </div>
                <div className="insight-banner">
                  <div className="insight-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                  </div>
                  <div className="insight-text">
                    <h4>Optimization Insight</h4>
                    <p>Shifting heavy load appliances to 04:00 could save an additional $45 this week.</p>
                  </div>
                  <button className="text-button-action">Apply Now</button>
                </div>
              </div>

              <div className="features-grid">
                <div className="card-container feature-box">
                  <div className="feature-header-row">
                    <div className="icon-circle bg-blue">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <span className="badge auto-badge">Automation Active</span>
                  </div>
                  <h3>Scheduling Optimization</h3>
                  <p>AI identified patterns in dining hall usage. Automating HVAC ramp-up 30m prior to meals will reduce peak load spikes.</p>
                  <button className="btn-outline-full">Configure Schedule</button>
                </div>
                <div className="card-container feature-box">
                  <div className="feature-header-row">
                    <div className="icon-circle bg-orange">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
                    <span className="badge maint-badge">Maintenance Flag</span>
                  </div>
                  <h3>Component Lifecycle</h3>
                  <p>Solar Inverter Phase B is showing slight harmonic distortion. Early maintenance suggested to prevent 5% efficiency drop.</p>
                  <button className="btn-outline-full">Request Technician</button>
                </div>
              </div>
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
      </main>
    </div>
  );
};

export default Analytics;
