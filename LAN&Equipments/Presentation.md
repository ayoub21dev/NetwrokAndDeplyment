---
marp: true
theme: default
paginate: true
backgroundColor: #020617
style: |
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=Inter:wght@300;400;600&display=swap');

  section {
    font-family: 'Inter', sans-serif;
    color: #f8fafc;
    background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, #020617 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  h1, h2, h3 {
    font-family: 'Space Grotesk', sans-serif;
    text-transform: uppercase;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 80px;
    background: linear-gradient(to bottom, #fff, #94a3b8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0;
  }

  h2 {
    color: #3b82f6;
    font-size: 50px;
    border-bottom: none;
  }

  .subtitle {
    font-size: 24px;
    color: #94a3b8;
    font-weight: 300;
  }

  .glass-card {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 32px;
    padding: 40px;
    width: 100%;
    max-width: 900px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
  }

  .item {
    background: rgba(255, 255, 255, 0.03);
    padding: 20px;
    border-radius: 16px;
  }

  .header-label {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .lan { color: #10b981; }
  .wan { color: #6366f1; }
  .accent { color: #10b981; }

  footer {
    color: #475569;
    font-size: 12px;
  }

---

# NETWORKING
<p class="subtitle">Deep Dive into LAN, WAN & Architecture</p>

---

<!-- _class: glass-card -->
## Network Scales

<div class="grid">
  <div class="item">
    <div class="header-label lan">LAN</div>
    <p>A private network for a small area like a <strong>Home or Office</strong>. It's incredibly fast and secure.</p>
  </div>
  <div class="item">
    <div class="header-label wan">WAN</div>
    <p>Connects networks across <strong>Cities or Countries</strong>. The Internet is the ultimate WAN.</p>
  </div>
</div>

---

<!-- _class: glass-card -->
## The Network Switch

The "Smart Hub" of your local network. It connects all your devices (PC, Console, Printer) and sends data directly to the right destination.

<br>

<div class="item" style="border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.05);">
  🚀 <strong>Fast:</strong> No traffic jams. Data only goes where it's needed.
</div>

---

<!-- _class: glass-card -->
## Routing & The Gateway

<div class="grid">
  <div class="item">
    <h3 style="color: #3b82f6; font-size: 24px;">Router</h3>
    <p style="font-size: 18px; color: #94a3b8;">The brain that connects different networks together. It finds the best path for your data.</p>
  </div>
  <div class="item">
    <h3 style="color: #6366f1; font-size: 24px;">Gateway</h3>
    <p style="font-size: 18px; color: #94a3b8;">The "Exit Door" of your network. It's how you leave your house and enter the Internet.</p>
  </div>
</div>

---

<!-- _class: glass-card -->
## The Modem

Your gateway to the world. It converts the **Analog signals** from your ISP into the **Digital signals** your devices understand.

<br>

<p style="font-size: 18px; color: #94a3b8; text-align: center;">Modulation (Digital ➔ Analog) & Demodulation (Analog ➔ Digital)</p>

---

<!-- _class: glass-card -->
## Subnetting Mastery

Subnetting partitions a large network into smaller segments.

<div class="grid">
  <div class="item">
    <div class="header-label">Subnet Mask</div>
    <p style="font-size: 24px; font-family: monospace;">255.255.255.0</p>
  </div>
  <div class="item">
    <div class="header-label">Usable Hosts</div>
    <p style="font-size: 24px; font-family: monospace; color: #10b981;">254</p>
  </div>
</div>

<p style="margin-top: 20px; font-size: 16px; color: #94a3b8;">Example CIDR: <strong>/24</strong> (Typical for Home/Office)</p>

---

## Architecture Complete
<p class="subtitle">From Local Cables to Global Clouds</p>

<div class="grid" style="max-width: 800px;">
  <div class="item" style="text-align: center;">
    <div class="header-label accent">CONNECT</div>
    <p style="font-size: 20px;">Modem & Gateway</p>
  </div>
  <div class="item" style="text-align: center;">
    <div class="header-label" style="color: #3b82f6;">ORGANIZE</div>
    <p style="font-size: 20px;">Switch & Subnets</p>
  </div>
</div>

<br>
<p style="font-family: 'Space Grotesk'; font-weight: 300; opacity: 0.6; font-size: 14px;">NETWORKING_ESSENTIALS // END_SESSION</p>