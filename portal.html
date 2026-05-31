<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Portal - Schuyler Realty</title>
<style>
  :root {
    --kw-red: #CC0000;
    --kw-red-dark: #A30000;
    --kw-dark: #1a1a1a;
    --kw-gray: #4a4a4a;
    --kw-light: #f7f7f7;
    --kw-border: #e0e0e0;
    color-scheme: light;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; background: var(--kw-light); min-height: 100vh; display: flex; flex-direction: column; }
  .site-header { background: var(--kw-dark); padding: 0 20px; display: flex; align-items: center; justify-content: space-between; height: 60px; flex-shrink: 0; }
  .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
  .logo-mark { width: 32px; height: 32px; background: var(--kw-red); border-radius: 5px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 16px; }
  .logo-text .brand { color: white; font-size: 15px; font-weight: 700; display: block; }
  .logo-text .sub { color: #888; font-size: 11px; }
  .header-right { display: flex; align-items: center; gap: 16px; }
  .client-badge { background: rgba(255,255,255,0.1); border-radius: 20px; padding: 4px 12px; color: white; font-size: 12px; }
  .logout-btn { background: none; border: 1px solid #555; border-radius: 6px; color: #aaa; padding: 5px 12px; font-size: 12px; cursor: pointer; }
  .logout-btn:hover { border-color: #999; color: white; }
  .property-bar { background: white; border-bottom: 3px solid var(--kw-red); padding: 12px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
  .property-info h2 { font-size: 16px; color: var(--kw-dark); font-weight: 700; }
  .property-info p { font-size: 12px; color: var(--kw-gray); margin-top: 1px; }
  .action-badge { background: #FFF3CD; border: 1px solid #FBBF24; border-radius: 6px; padding: 6px 12px; font-size: 12px; color: #92400E; font-weight: 600; max-width: 400px; }
  .tabs { background: white; border-bottom: 1px solid var(--kw-border); display: flex; padding: 0 12px; flex-shrink: 0; overflow-x: auto; }
  .tab-btn { background: none; border: none; border-bottom: 3px solid transparent; padding: 14px 14px; font-size: 13px; font-weight: 600; color: var(--kw-gray); cursor: pointer; margin-bottom: -1px; white-space: nowrap; }
  .tab-btn:hover { color: var(--kw-dark); }
  .tab-btn.active { color: var(--kw-red); border-bottom-color: var(--kw-red); }
  .tab-panel { display: none; flex: 1; flex-direction: column; min-height: 0; }
  .tab-panel.active { display: flex; }
  .chat-container { display: flex; flex-direction: column; flex: 1; min-height: 0; }
  .chat-header { background: white; border-bottom: 1px solid var(--kw-border); padding: 10px 20px; display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
  .chat-header-icon { font-size: 20px; }
  .chat-header h3 { font-size: 14px; color: var(--kw-dark); font-weight: 700; }
  .chat-header p { font-size: 12px; color: var(--kw-gray); }
  .quick-bar { background: #fafafa; border-bottom: 1px solid var(--kw-border); padding: 8px 16px; display: flex; gap: 6px; flex-wrap: wrap; align-items: center; flex-shrink: 0; }
  .quick-label { font-size: 11px; color: #999; font-weight: 600; white-space: nowrap; }
  .quick-btn { background: white; border: 1px solid var(--kw-border); border-radius: 16px; padding: 4px 11px; font-size: 12px; color: var(--kw-gray); cursor: pointer; }
  .quick-btn:hover { border-color: var(--kw-red); color: var(--kw-red); background: #fff5f5; }
  .chat-messages { flex: 1; overflow-y: auto; padding: 16px 20px; display: flex; flex-direction: column; gap: 12px; }
  .welcome-msg { background: #fff5f5; border: 1px solid #FFCDD2; border-radius: 12px; padding: 16px 18px; max-width: 560px; }
  .welcome-msg .wm-title { font-weight: 700; color: var(--kw-red); margin-bottom: 6px; font-size: 14px; }
  .welcome-msg p { font-size: 13px; color: var(--kw-gray); line-height: 1.6; }
  .msg { display: flex; gap: 8px; max-width: 640px; }
  .msg.user { align-self: flex-end; flex-direction: row-reverse; }
  .msg-av { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; margin-top: 2px; }
  .msg.bot .msg-av { background: var(--kw-red); color: white; }
  .msg.user .msg-av { background: var(--kw-dark); color: white; }
  .msg-bubble { background: white; border: 1px solid var(--kw-border); border-radius: 12px; padding: 10px 14px; font-size: 13.5px; line-height: 1.6; color: var(--kw-dark); max-width: calc(100% - 42px); }
  .msg.user .msg-bubble { background: var(--kw-dark); color: white; border-color: var(--kw-dark); }
  .msg-bubble strong { color: var(--kw-red); }
  .msg.user .msg-bubble strong { color: #FF9999; }
  .typing { display: flex; align-items: center; gap: 4px; padding: 4px 0; }
  .typing span { width: 6px; height: 6px; background: #ccc; border-radius: 50%; animation: bounce 1.2s infinite; }
  .typing span:nth-child(2) { animation-delay: 0.2s; }
  .typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }
  .chat-input-bar { background: white; border-top: 1px solid var(--kw-border); padding: 12px 16px; display: flex; gap: 8px; align-items: flex-end; flex-shrink: 0; }
  .chat-input-bar textarea { flex: 1; border: 1.5px solid var(--kw-border); border-radius: 8px; padding: 9px 13px; font-size: 14px; font-family: inherit; resize: none; min-height: 40px; max-height: 100px; outline: none; color: var(--kw-dark); }
  .chat-input-bar textarea:focus { border-color: var(--kw-red); }
  .send-btn { background: var(--kw-red); color: white; border: none; border-radius: 8px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
  .send-btn:hover { background: var(--kw-red-dark); }
  .send-btn:disabled { background: #ccc; cursor: not-allowed; }
  .send-btn svg { width: 17px; height: 17px; }
  .chat-disclaimer { font-size: 11px; color: #bbb; text-align: center; padding: 4px 16px 8px; flex-shrink: 0; }
  .summary-panel { flex: 1; overflow-y: auto; padding: 20px; }
  .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; max-width: 900px; }
  .summary-card { background: white; border: 1px solid var(--kw-border); border-radius: 12px; padding: 18px; }
  .summary-card h3 { font-size: 13px; font-weight: 700; color: var(--kw-red); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
  .summary-row { display: flex; justify-content: space-between; align-items: flex-start; padding: 6px 0; border-bottom: 1px solid #f0f0f0; gap: 10px; }
  .summary-row:last-child { border-bottom: none; }
  .summary-label { font-size: 12px; color: var(--kw-gray); font-weight: 600; flex-shrink: 0; min-width: 100px; }
  .summary-value { font-size: 12px; color: var(--kw-dark); text-align: right; }
  .status-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 700; }
  .status-done { background: #D1FAE5; color: #065F46; }
  .status-pending { background: #FEF3C7; color: #92400E; }
  .status-upcoming { background: #E0E7FF; color: #3730A3; }
  .contact-panel { flex: 1; overflow-y: auto; padding: 20px; }
  .contact-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 14px; max-width: 900px; }
  .contact-card { background: white; border: 1px solid var(--kw-border); border-radius: 10px; padding: 16px; display: flex; gap: 12px; }
  .contact-av { width: 38px; height: 38px; border-radius: 50%; background: var(--kw-red); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex-shrink: 0; }
  .contact-info .role { font-size: 11px; color: var(--kw-gray); text-transform: uppercase; font-weight: 700; }
  .contact-info .cname { font-size: 14px; font-weight: 700; color: var(--kw-dark); margin: 2px 0; }
  .contact-info a { font-size: 12px; color: var(--kw-red); text-decoration: none; display: block; }

  /* ── Design Gallery ── */
  .design-panel { flex: 1; overflow-y: auto; padding: 20px; }
  .design-section { max-width: 900px; margin-bottom: 28px; }
  .design-section-title { font-size: 13px; font-weight: 700; color: var(--kw-red); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid var(--kw-red); }
  .design-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
  .design-card { background: white; border: 1px solid var(--kw-border); border-radius: 10px; overflow: hidden; }
  .design-swatch { height: 80px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; }
  .design-card-body { padding: 12px; }
  .design-card-name { font-size: 13px; font-weight: 700; color: var(--kw-dark); margin-bottom: 3px; }
  .design-card-desc { font-size: 11px; color: var(--kw-gray); margin-bottom: 8px; line-height: 1.4; }
  .design-card-room { font-size: 11px; color: var(--kw-red); font-weight: 600; margin-bottom: 8px; }
  .view-btn { display: inline-block; background: var(--kw-red); color: white; border-radius: 5px; padding: 5px 10px; font-size: 11px; font-weight: 700; text-decoration: none; }
  .view-btn:hover { background: var(--kw-red-dark); }
  .design-icon { height: 80px; display: flex; align-items: center; justify-content: center; background: #f8f8f8; font-size: 32px; }

  .site-footer { background: var(--kw-dark); color: #777; font-size: 12px; text-align: center; padding: 14px; flex-shrink: 0; }
  .site-footer span { color: var(--kw-red); }
</style>
</head>
<body>
<header class="site-header">
  <a class="logo" href="index.html">
    <div class="logo-mark">SR</div>
    <div class="logo-text"><span class="brand">Schuyler Realty</span><span class="sub">Client Portal</span></div>
  </a>
  <div class="header-right">
    <div class="client-badge" id="clientBadge">Loading...</div>
    <button class="logout-btn" onclick="logout()">Sign Out</button>
  </div>
</header>
<div class="property-bar">
  <div class="property-info"><h2 id="propAddress">Loading...</h2><p id="propDetails">...</p></div>
  <div class="action-badge" id="actionBadge" style="display:none"></div>
</div>
<div class="tabs">
  <button class="tab-btn active" onclick="switchTab('hoa', this)">HOA Questions</button>
  <button class="tab-btn" onclick="switchTab('contract', this)">Contract and Build</button>
  <button class="tab-btn" onclick="switchTab('design', this)">My Design Selections</button>
  <button class="tab-btn" onclick="switchTab('summary', this)">My Summary</button>
  <button class="tab-btn" onclick="switchTab('contacts', this)">My Contacts</button>
</div>

<div class="tab-panel active" id="tab-hoa">
  <div class="chat-container">
    <div class="chat-header"><div class="chat-header-icon">H</div><div><h3>HOA Questions</h3><p>Ask anything about your community rules</p></div></div>
    <div class="quick-bar">
      <span class="quick-label">Try:</span>
      <button class="quick-btn" onclick="askHOA('Can I have a bird feeder outside?')">Bird feeders?</button>
      <button class="quick-btn" onclick="askHOA('What are the pet rules?')">Pet rules?</button>
      <button class="quick-btn" onclick="askHOA('Can I put up a Ring doorbell camera?')">Doorbell camera?</button>
      <button class="quick-btn" onclick="askHOA('Can I install a hot tub?')">Hot tub?</button>
      <button class="quick-btn" onclick="askHOA('What color do my window blinds need to be?')">Window coverings?</button>
      <button class="quick-btn" onclick="askHOA('When do I put my trash out?')">Trash rules?</button>
      <button class="quick-btn" onclick="askHOA('Can I park my boat overnight?')">Parking?</button>
      <button class="quick-btn" onclick="askHOA('How do I rent the clubhouse?')">Clubhouse?</button>
    </div>
    <div class="chat-messages" id="hoa-messages">
      <div class="welcome-msg"><div class="wm-title">Hi there! I know your HOA rules.</div><p>Ask me anything about your community. I will give you a plain-English answer based on your actual HOA document.</p></div>
    </div>
    <div class="chat-input-bar">
      <textarea id="hoa-input" placeholder="Ask about your HOA rules..." rows="1" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendChat('hoa')}" oninput="autoResize(this)"></textarea>
      <button class="send-btn" id="hoa-send" onclick="sendChat('hoa')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
    </div>
    <div class="chat-disclaimer">Answers based on your HOA document. Always verify official rulings with your HOA board.</div>
  </div>
</div>

<div class="tab-panel" id="tab-contract">
  <div class="chat-container">
    <div class="chat-header"><div class="chat-header-icon">C</div><div><h3>Contract and Build Questions</h3><p>Ask about your contract, design selections, timeline, and next steps</p></div></div>
    <div class="quick-bar">
      <span class="quick-label">Try:</span>
      <button class="quick-btn" onclick="askContract('When is my closing date?')">Closing date?</button>
      <button class="quick-btn" onclick="askContract('What warranties do I have?')">Warranties?</button>
      <button class="quick-btn" onclick="askContract('What flooring did I choose?')">My flooring?</button>
      <button class="quick-btn" onclick="askContract('What appliances am I getting?')">My appliances?</button>
      <button class="quick-btn" onclick="askContract('What color is my exterior?')">Exterior colors?</button>
      <button class="quick-btn" onclick="askContract('What are my next steps?')">Next steps?</button>
    </div>
    <div class="chat-messages" id="contract-messages">
      <div class="welcome-msg"><div class="wm-title">Your contract and build details</div><p>Ask me about your design selections, timeline, warranties, or anything from your purchase contract.</p></div>
    </div>
    <div class="chat-input-bar">
      <textarea id="contract-input" placeholder="Ask about your contract or build..." rows="1" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendChat('contract')}" oninput="autoResize(this)"></textarea>
      <button class="send-btn" id="contract-send" onclick="sendChat('contract')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
    </div>
    <div class="chat-disclaimer">Based on your contract summary. Verify specifics with Epcon or your agent.</div>
  </div>
</div>

<!-- Design Gallery Tab -->
<div class="tab-panel" id="tab-design">
  <div class="design-panel">

    <div class="design-section">
      <div class="design-section-title">Paint Colors</div>
      <div class="design-grid">
        <div class="design-card">
          <div class="design-swatch" style="background:#D1CBC1;color:#5a5046;">SW7029 Agreeable Gray</div>
          <div class="design-card-body">
            <div class="design-card-name">Agreeable Gray SW7029</div>
            <div class="design-card-room">Interior Walls - Entire Home</div>
            <div class="design-card-desc">Sherwin-Williams. Warm greige with soft undertones. One of the most popular neutral interior colors.</div>
            <a class="view-btn" href="https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors/sw7029-agreeable-gray" target="_blank">View Color</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-swatch" style="background:#64696C;color:#ffffff;">SW7075 Web Gray</div>
          <div class="design-card-body">
            <div class="design-card-name">Web Gray SW7075</div>
            <div class="design-card-room">Front Door</div>
            <div class="design-card-desc">Sherwin-Williams. Deep, sophisticated gray with cool blue undertones. Bold front door statement.</div>
            <a class="view-btn" href="https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors/sw7075-web-gray" target="_blank">View Color</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-swatch" style="background:#6B7075;color:#ffffff;">SW7072 Online</div>
          <div class="design-card-body">
            <div class="design-card-name">Online SW7072</div>
            <div class="design-card-room">Exterior Primary Siding</div>
            <div class="design-card-desc">Sherwin-Williams LP SmartSide. Primary siding body color - CFN-7 Hillsborough palette.</div>
            <a class="view-btn" href="https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors/sw7072-online" target="_blank">View Color</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-swatch" style="background:#787E7A;color:#ffffff;">SW7074 Software</div>
          <div class="design-card-body">
            <div class="design-card-name">Software SW7074</div>
            <div class="design-card-room">Exterior Secondary Siding</div>
            <div class="design-card-desc">Sherwin-Williams LP SmartSide. Secondary siding accent color - CFN-7 Hillsborough palette.</div>
            <a class="view-btn" href="https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors/sw7074-software" target="_blank">View Color</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-swatch" style="background:#F4EEE8;color:#888;">SW7005 Pure White</div>
          <div class="design-card-body">
            <div class="design-card-name">Pure White SW7005</div>
            <div class="design-card-room">Exterior Trim and Louvers</div>
            <div class="design-card-desc">Sherwin-Williams. Clean crisp white for all exterior trim, brackets, and louvers.</div>
            <a class="view-btn" href="https://www.sherwin-williams.com/en-us/color/color-family/white-paint-colors/sw7005-pure-white" target="_blank">View Color</a>
          </div>
        </div>
      </div>
    </div>

    <div class="design-section">
      <div class="design-section-title">Flooring</div>
      <div class="design-grid">
        <div class="design-card">
          <div class="design-icon">🪵</div>
          <div class="design-card-body">
            <div class="design-card-name">Knotted Chestnut Laminate</div>
            <div class="design-card-room">Living, Dining, Kitchen, Foyer, Den, Mudroom</div>
            <div class="design-card-desc">Mohawk Rustic Moor - 7.5 inch wide plank. Level 1 Laminate with a warm, natural wood look.</div>
            <a class="view-btn" href="https://www.mohawkflooring.com/shop/Laminated_Wood/detail/CAD74/Rustic_Legacy/03W/Knotted_Chestnut" target="_blank">View Product</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-icon">🛏️</div>
          <div class="design-card-body">
            <div class="design-card-name">Country Walk Aurora Carpet</div>
            <div class="design-card-room">Master Bedroom and Guest Bedroom</div>
            <div class="design-card-desc">Mohawk Country Walk - Aurora colorway. Level 4 carpet with upgraded 8lb pad for extra comfort.</div>
            <a class="view-btn" href="https://www.mohawkflooring.com" target="_blank">View Brand</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-icon">🚿</div>
          <div class="design-card-body">
            <div class="design-card-name">Tuscan Villa - Arezzo Ivory</div>
            <div class="design-card-room">Master Shower Floor and Walls</div>
            <div class="design-card-desc">Florida Tile Tuscan Villa - 12x12. Arezzo Ivory with Bleached Wood grout, installed square. Tile extends to ceiling.</div>
            <a class="view-btn" href="https://www.floridatile.com" target="_blank">View Brand</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-icon">🛁</div>
          <div class="design-card-body">
            <div class="design-card-name">CF Prime BA3 Balans</div>
            <div class="design-card-room">Guest Bathroom Floor and Tub Wall</div>
            <div class="design-card-desc">Daltile - White with Ash grout. 12x12 floor installed square. 10x14 wall tile to ceiling.</div>
            <a class="view-btn" href="https://www.daltile.com" target="_blank">View Brand</a>
          </div>
        </div>
      </div>
    </div>

    <div class="design-section">
      <div class="design-section-title">Countertops</div>
      <div class="design-grid">
        <div class="design-card">
          <div class="design-icon">🍳</div>
          <div class="design-card-body">
            <div class="design-card-name">Calacatta Prado Quartz</div>
            <div class="design-card-room">Kitchen Countertops</div>
            <div class="design-card-desc">Level 2 Quartz. White marble look with dramatic gray and gold veining. Polished finish.</div>
            <a class="view-btn" href="https://www.msisurfaces.com/quartz-countertops/calacatta-prado-quartz/" target="_blank">View Product</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-icon">🛁</div>
          <div class="design-card-body">
            <div class="design-card-name">Carrara Breve Quartz</div>
            <div class="design-card-room">Master and Guest Bathroom Countertops</div>
            <div class="design-card-desc">Level 1 Quartz. Classic Carrara marble look with soft gray veining on white background.</div>
            <a class="view-btn" href="https://www.msisurfaces.com/quartz-countertops/" target="_blank">View Brand</a>
          </div>
        </div>
      </div>
    </div>

    <div class="design-section">
      <div class="design-section-title">Kitchen Backsplash</div>
      <div class="design-grid">
        <div class="design-card">
          <div class="design-swatch" style="background:#5B7A61;color:#fff;">Envy Green</div>
          <div class="design-card-body">
            <div class="design-card-name">Emotive - Envy Green</div>
            <div class="design-card-room">Kitchen Backsplash</div>
            <div class="design-card-desc">Florida Tile Emotive 3x12. Envy Green color with Snow White grout, installed 1/2 offset. Bold kitchen accent.</div>
            <a class="view-btn" href="https://www.floridatile.com/products/emotive/" target="_blank">View Product</a>
          </div>
        </div>
      </div>
    </div>

    <div class="design-section">
      <div class="design-section-title">Cabinets and Hardware</div>
      <div class="design-grid">
        <div class="design-card">
          <div class="design-swatch" style="background:#6B6560;color:#fff;">Cannon Grey Stain</div>
          <div class="design-card-body">
            <div class="design-card-name">Grant - Cannon Grey Stain</div>
            <div class="design-card-room">Kitchen Cabinets</div>
            <div class="design-card-desc">Deluxe Layout - 42 inch upper cabinets. Quality Signature line - Maple Half Overlay in Cannon Grey Stain.</div>
            <a class="view-btn" href="https://www.aristokraft.com" target="_blank">View Brand</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-swatch" style="background:#E8E0D5;color:#888;">Cottage Paint</div>
          <div class="design-card-body">
            <div class="design-card-name">Grant - Cottage Paint</div>
            <div class="design-card-room">Master Bathroom Cabinets</div>
            <div class="design-card-desc">Level 2 Quality - Grant Evercore Half Overlay in Cottage Paint. Light, clean finish for the master bath.</div>
            <a class="view-btn" href="https://www.aristokraft.com" target="_blank">View Brand</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-swatch" style="background:#C0B9AE;color:#555;">Brushed Satin Nickel</div>
          <div class="design-card-body">
            <div class="design-card-name">TK1013BSN Hardware</div>
            <div class="design-card-room">All Cabinets - Kitchen and Bathrooms</div>
            <div class="design-card-desc">Brushed Satin Nickel pulls and handles throughout kitchen, master bath, and guest bath drawers and doors.</div>
            <a class="view-btn" href="https://www.aristokraft.com" target="_blank">View Brand</a>
          </div>
        </div>
      </div>
    </div>

    <div class="design-section">
      <div class="design-section-title">Fireplace</div>
      <div class="design-grid">
        <div class="design-card">
          <div class="design-swatch" style="background:#9E9186;color:#fff;">Cherished Greige</div>
          <div class="design-card-body">
            <div class="design-card-name">Scrapbook Cherished Greige Tile</div>
            <div class="design-card-room">Fireplace Surround</div>
            <div class="design-card-desc">Level 2 - 36 inch gas fireplace. Ceramic tile surround in Cherished Greige, installed offset. Includes hearth and mantel.</div>
            <a class="view-btn" href="https://www.daltile.com" target="_blank">View Brand</a>
          </div>
        </div>
      </div>
    </div>

    <div class="design-section">
      <div class="design-section-title">Appliances - GE Stainless Suite</div>
      <div class="design-grid">
        <div class="design-card">
          <div class="design-icon">🧊</div>
          <div class="design-card-body">
            <div class="design-card-name">Refrigerator - GFE26JYMFS</div>
            <div class="design-card-room">Kitchen</div>
            <div class="design-card-desc">GE French Door Refrigerator. Stainless steel finish.</div>
            <a class="view-btn" href="https://www.geappliances.com/appliance/GE-ENERGY-STAR-27-0-Cu-Ft-French-Door-Refrigerator-GFE26JYMFS" target="_blank">View Product</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-icon">🍽️</div>
          <div class="design-card-body">
            <div class="design-card-name">Dishwasher - GDT670SYVFS</div>
            <div class="design-card-room">Kitchen</div>
            <div class="design-card-desc">GE Built-In Dishwasher. Stainless steel finish with fingerprint resistance.</div>
            <a class="view-btn" href="https://www.geappliances.com" target="_blank">View Brand</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-icon">🔥</div>
          <div class="design-card-body">
            <div class="design-card-name">Gas Cooktop - CGP70302NS1</div>
            <div class="design-card-room">Kitchen</div>
            <div class="design-card-desc">GE 30 inch Gas Cooktop. Stainless steel with sealed burners.</div>
            <a class="view-btn" href="https://www.geappliances.com" target="_blank">View Brand</a>
          </div>
        </div>
        <div class="design-card">
          <div class="design-icon">⬛</div>
          <div class="design-card-body">
            <div class="design-card-name">Double Wall Oven - PT7800SHSS</div>
            <div class="design-card-room">Kitchen</div>
            <div class="design-card-desc">GE Combination Convection Microwave and Convection Wall Oven. Stainless steel.</div>
            <a class="view-btn" href="https://www.geappliances.com/appliance/GE-Profile-30-Smart-Built-In-Convection-Double-Wall-Oven-PT7800SHSS" target="_blank">View Product</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="tab-panel" id="tab-summary">
  <div class="summary-panel"><div class="summary-grid" id="summaryGrid"></div></div>
</div>
<div class="tab-panel" id="tab-contacts">
  <div class="contact-panel"><div class="contact-grid" id="contactGrid"></div></div>
</div>

<footer class="site-footer">2026 Schuyler Realty - <span>Keller Williams</span> Consultants Realty - Grove City, OH</footer>

<script src="clients-config.js"></script>
<script>
var code = sessionStorage.getItem('sr_client');
var client = CLIENTS[code];
if (!client) { window.location.href = 'index.html'; }
document.getElementById('clientBadge').textContent = 'Hi ' + client.name;
document.getElementById('propAddress').textContent = client.property + ' - ' + client.community;
document.getElementById('propDetails').textContent = client.city + ' - Builder: ' + client.builder + ' - Closing: ' + client.closing_window;
document.title = client.name + "'s Portal - Schuyler Realty";
if (client.action_item) {
  var ab = document.getElementById('actionBadge');
  ab.textContent = client.action_item;
  ab.style.display = 'block';
}
var milestonesHTML = '';
var milestones = client.milestones || [];
for (var i = 0; i < milestones.length; i++) {
  var m = milestones[i];
  var cls = m.status === 'done' ? 'status-done' : m.status === 'pending' ? 'status-pending' : 'status-upcoming';
  var icon = m.status === 'done' ? 'Complete' : m.status === 'pending' ? 'Action Needed' : m.date;
  milestonesHTML += '<div class="summary-row"><span class="summary-label">' + m.name + '</span><span class="summary-value"><span class="status-badge ' + cls + '">' + icon + '</span></span></div>';
}
document.getElementById('summaryGrid').innerHTML =
  '<div class="summary-card"><h3>Your Property</h3>' +
  '<div class="summary-row"><span class="summary-label">Address</span><span class="summary-value">' + client.property + '</span></div>' +
  '<div class="summary-row"><span class="summary-label">Community</span><span class="summary-value">' + client.community + '</span></div>' +
  '<div class="summary-row"><span class="summary-label">City</span><span class="summary-value">' + client.city + '</span></div>' +
  '<div class="summary-row"><span class="summary-label">Builder</span><span class="summary-value">' + client.builder + '</span></div>' +
  '<div class="summary-row"><span class="summary-label">Closing</span><span class="summary-value">' + client.closing_window + '</span></div>' +
  '</div>' +
  '<div class="summary-card"><h3>Build Milestones</h3>' + milestonesHTML + '</div>' +
  '<div class="summary-card"><h3>Quick HOA Rules</h3>' +
  '<div class="summary-row"><span class="summary-label">Window Coverings</span><span class="summary-value">White, off-white, beige, or light gray on exterior</span></div>' +
  '<div class="summary-row"><span class="summary-label">Pets</span><span class="summary-value">Max 2 dogs or cats - Leash max 8 ft</span></div>' +
  '<div class="summary-row"><span class="summary-label">Trash Out</span><span class="summary-value">After 5 PM prior day - In by 9 PM collection day</span></div>' +
  '<div class="summary-row"><span class="summary-label">Pool Guests</span><span class="summary-value">Max 3 - Must be with a resident</span></div>' +
  '<div class="summary-row"><span class="summary-label">Exterior Changes</span><span class="summary-value">Any change needs Board approval first</span></div>' +
  '<div class="summary-row"><span class="summary-label">Parking Overnight</span><span class="summary-value">No boats, trailers, motorhomes, or commercial vehicles</span></div>' +
  '</div>' +
  '<div class="summary-card"><h3>Your Agent</h3>' +
  '<div class="summary-row"><span class="summary-label">Agent</span><span class="summary-value">Mark Schuyler</span></div>' +
  '<div class="summary-row"><span class="summary-label">Brokerage</span><span class="summary-value">Keller Williams Consultants Realty</span></div>' +
  '<div class="summary-row"><span class="summary-label">Phone</span><span class="summary-value">(740) 953-1769</span></div>' +
  '<div class="summary-row"><span class="summary-label">Email</span><span class="summary-value">markschuyler@kw.com</span></div>' +
  '</div>';
var contacts = [
  { role: "Your Agent", name: "Mark Schuyler", phone: "(740) 953-1769", email: "markschuyler@kw.com", initials: "MS" },
  { role: "Sales Consultant", name: "Jennifer Scheel-Patton", phone: "(614) 601-0191", email: "jscheel@epconcommunities.com", initials: "JS" },
  { role: "Superintendent", name: "Eric Gordon", phone: "", email: "egordon@epconcommunities.com", initials: "EG" },
  { role: "Contracts Coord.", name: "Donna Kobella", phone: "(614) 652-3570", email: "dkobella@epconcommunities.com", initials: "DK" },
  { role: "Design Consultant", name: "Kelli Joyce", phone: "(614) 784-3259", email: "kjoyce@epconcommunities.com", initials: "KJ" },
  { role: "Title Company", name: "Unity Title", phone: "", email: "bmorgan@unitytitle.net", initials: "UT" }
];
var contactHTML = '';
for (var j = 0; j < contacts.length; j++) {
  var c = contacts[j];
  contactHTML += '<div class="contact-card"><div class="contact-av">' + c.initials + '</div><div class="contact-info"><div class="role">' + c.role + '</div><div class="cname">' + c.name + '</div>';
  if (c.phone) { contactHTML += '<a href="tel:' + c.phone + '">' + c.phone + '</a>'; }
  contactHTML += '<a href="mailto:' + c.email + '">' + c.email + '</a></div></div>';
}
document.getElementById('contactGrid').innerHTML = contactHTML;
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}
var loading = { hoa: false, contract: false };
function autoResize(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 100) + 'px'; }
function askHOA(q) { document.getElementById('hoa-input').value = q; sendChat('hoa'); }
function askContract(q) { document.getElementById('contract-input').value = q; sendChat('contract'); }
function addMsg(area, text, type) {
  var box = document.getElementById(area + '-messages');
  var msg = document.createElement('div');
  msg.className = 'msg ' + type;
  var av = document.createElement('div');
  av.className = 'msg-av';
  av.textContent = type === 'bot' ? 'SR' : client.name.charAt(0);
  var bub = document.createElement('div');
  bub.className = 'msg-bubble';
  if (type === 'bot') {
    bub.innerHTML = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n- /g, '<br>- ').replace(/\n/g, '<br>');
  } else { bub.textContent = text; }
  msg.appendChild(av); msg.appendChild(bub); box.appendChild(msg); box.scrollTop = box.scrollHeight;
  return msg;
}
function addTyping(area) {
  var box = document.getElementById(area + '-messages');
  var t = document.createElement('div');
  t.className = 'msg bot'; t.id = area + '-typing';
  t.innerHTML = '<div class="msg-av">SR</div><div class="msg-bubble"><div class="typing"><span></span><span></span><span></span></div></div>';
  box.appendChild(t); box.scrollTop = box.scrollHeight;
}
function sendChat(area) {
  if (loading[area]) return;
  var inp = document.getElementById(area + '-input');
  var q = inp.value.trim();
  if (!q) return;
  loading[area] = true;
  document.getElementById(area + '-send').disabled = true;
  inp.value = ''; inp.style.height = 'auto';
  var wm = document.querySelector('#' + area + '-messages .welcome-msg');
  if (wm) wm.remove();
  addMsg(area, q, 'user');
  addTyping(area);
  var systemPrompt = area === 'hoa'
    ? 'You are an HOA assistant for ' + client.community + ' in ' + client.city + '. You are helping ' + client.name + ' understand their community rules. Here are the complete HOA policies:\n\n' + client.hoa_rules + '\n\nAnswer questions clearly in plain English. Cite the specific section. If Board approval is needed, say so. Keep answers concise.'
    : 'You are a real estate assistant helping ' + client.name + ' with their new home at ' + client.property + ', ' + client.city + '. Here are their contract details:\n\n' + client.contract_notes + '\n\nAnswer clearly and helpfully. Be specific about their selections. Keep answers concise.';
  fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ system: systemPrompt, messages: [{ role: 'user', content: q }] })
  }).then(function(res) { return res.json(); }).then(function(data) {
    var t = document.getElementById(area + '-typing'); if (t) t.remove();
    addMsg(area, data.content || 'Sorry, I could not get an answer. Please try again.', 'bot');
    loading[area] = false; document.getElementById(area + '-send').disabled = false;
  }).catch(function() {
    var t = document.getElementById(area + '-typing'); if (t) t.remove();
    addMsg(area, 'Something went wrong. Please try again.', 'bot');
    loading[area] = false; document.getElementById(area + '-send').disabled = false;
  });
}
function logout() { sessionStorage.removeItem('sr_client'); window.location.href = 'index.html'; }
</script>
</body>
</html>
