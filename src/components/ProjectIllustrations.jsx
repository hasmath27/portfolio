import React from "react";

/* ── Shared defs reused across illustrations ── */
const SharedDefs = () => (
  <defs>
    <linearGradient id="g-blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#3B5BF5"/><stop offset="100%" stopColor="#6C47FF"/>
    </linearGradient>
    <linearGradient id="g-cyan" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#06B6D4"/><stop offset="100%" stopColor="#3B5BF5"/>
    </linearGradient>
    <linearGradient id="g-green" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#10B981"/><stop offset="100%" stopColor="#06B6D4"/>
    </linearGradient>
    <linearGradient id="g-red" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#EF4444"/><stop offset="100%" stopColor="#F59E0B"/>
    </linearGradient>
    <linearGradient id="g-purple" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#8B5CF6"/><stop offset="100%" stopColor="#EC4899"/>
    </linearGradient>
    <linearGradient id="g-orange" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#F59E0B"/><stop offset="100%" stopColor="#EF4444"/>
    </linearGradient>
    <filter id="blur-sm"><feGaussianBlur stdDeviation="8"/></filter>
    <filter id="blur-lg"><feGaussianBlur stdDeviation="20"/></filter>
  </defs>
);

/* ── Cargo Monitoring ── */
export function CargoIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      {/* Background */}
      <rect width="560" height="280" fill="#060B18"/>
      {/* Glow blobs */}
      <circle cx="100" cy="140" r="80" fill="#3B5BF5" opacity="0.07" filter="url(#blur-lg)"/>
      <circle cx="460" cy="140" r="80" fill="#06B6D4" opacity="0.07" filter="url(#blur-lg)"/>
      {/* Grid */}
      {[...Array(8)].map((_,i)=><line key={i} x1={70*i} y1="0" x2={70*i} y2="280" stroke="#ffffff" strokeWidth="0.4" opacity="0.04"/>)}
      {[...Array(5)].map((_,i)=><line key={i} x1="0" y1={70*i} x2="560" y2={70*i} stroke="#ffffff" strokeWidth="0.4" opacity="0.04"/>)}

      {/* ── ESP32 board ── */}
      <rect x="28" y="90" width="100" height="100" rx="8" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="36" y="98" width="84" height="84" rx="5" fill="#060B18"/>
      {/* chip */}
      <rect x="52" y="114" width="52" height="52" rx="4" fill="#0D2040" stroke="#3B5BF5" strokeWidth="1"/>
      <text x="78" y="143" textAnchor="middle" fill="#4F72FF" fontSize="9" fontFamily="monospace" fontWeight="bold">ESP32</text>
      {/* pins */}
      {[0,1,2,3,4,5].map(i=>(
        <React.Fragment key={i}>
          <rect x="36" y={102+i*13} width="8" height="5" rx="1" fill="#22D3EE" opacity="0.8"/>
          <rect x="112" y={102+i*13} width="8" height="5" rx="1" fill="#22D3EE" opacity="0.8"/>
        </React.Fragment>
      ))}
      {/* sensor labels */}
      <text x="78" y="158" textAnchor="middle" fill="#22D3EE" fontSize="7" fontFamily="monospace">TEMP · GPS · HUM</text>
      <text x="78" y="200" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">ESP32</text>

      {/* ── Data flow lines ── */}
      {/* ESP32 → Supabase */}
      <path d="M132 140 L205 140" stroke="#3B5BF5" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7"/>
      <circle cx="170" cy="140" r="3" fill="#3B5BF5"/>
      <text x="168" y="130" textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="monospace">MQTT</text>
      {/* Supabase → Flutter */}
      <path d="M335 120 L390 100" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7"/>
      {/* Supabase → React */}
      <path d="M335 160 L390 180" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7"/>
      <defs>
        <marker id="ar1" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#3B5BF5"/>
        </marker>
        <marker id="ar2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 Z" fill="#06B6D4"/>
        </marker>
      </defs>

      {/* ── Supabase cloud ── */}
      <rect x="205" y="90" width="130" height="100" rx="10" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      {/* pulse rings */}
      {[0,1,2].map(i=><circle key={i} cx="270" cy="135" r={18+i*14} fill="none" stroke="#3B5BF5" strokeWidth="0.8" opacity={0.5-i*0.14}/>)}
      <circle cx="270" cy="135" r="8" fill="url(#g-blue)"/>
      <text x="270" y="158" textAnchor="middle" fill="#22D3EE" fontSize="8" fontFamily="sans-serif" fontWeight="600">Supabase</text>
      <text x="270" y="170" textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="monospace">REALTIME</text>
      <text x="270" y="200" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">Cloud Backend</text>

      {/* ── Flutter phone ── */}
      <rect x="390" y="55" width="54" height="94" rx="10" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="396" y="64" width="42" height="72" rx="5" fill="#060B18"/>
      <rect x="400" y="68" width="34" height="12" rx="2" fill="#111E35"/>
      <rect x="400" y="84" width="34" height="5" rx="1" fill="#3B5BF5" opacity="0.7"/>
      <rect x="400" y="93" width="24" height="5" rx="1" fill="#3B5BF5" opacity="0.4"/>
      <rect x="400" y="102" width="30" height="5" rx="1" fill="#3B5BF5" opacity="0.4"/>
      <rect x="400" y="111" width="18" height="5" rx="1" fill="#22D3EE" opacity="0.5"/>
      <circle cx="417" cy="140" r="4" fill="#111E35"/>
      <text x="417" y="160" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">Flutter</text>

      {/* ── React dashboard ── */}
      <rect x="390" y="175" width="100" height="68" rx="8" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      {/* mini chart */}
      <polyline points="400,225 415,215 430,220 445,205 460,210 475,198" stroke="#22D3EE" strokeWidth="1.5" fill="none"/>
      <polyline points="400,225 415,215 430,220 445,205 460,210 475,198 475,238 400,238" fill="#22D3EE" opacity="0.06"/>
      <text x="440" y="192" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">React Dashboard</text>

      {/* ── Sensor readings bottom ── */}
      <rect x="28" y="210" width="330" height="50" rx="8" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1"/>
      {[
        {label:"TEMP", val:"24.3°C", col:"#EF4444", x:65},
        {label:"HUMID", val:"62%", col:"#06B6D4", x:165},
        {label:"GPS", val:"Active", col:"#10B981", x:258},
      ].map(({label,val,col,x})=>(
        <g key={label}>
          <text x={x} y="228" textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="monospace">{label}</text>
          <text x={x} y="248" textAnchor="middle" fill={col} fontSize="11" fontFamily="monospace" fontWeight="bold">{val}</text>
        </g>
      ))}
      <rect x="292" y="217" width="1" height="32" fill="#1E3A6E"/>
      <rect x="128" y="217" width="1" height="32" fill="#1E3A6E"/>
    </svg>
  );
}

/* ── Azure File Upload ── */
export function AzureIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      <circle cx="200" cy="140" r="100" fill="#0078D4" opacity="0.05" filter="url(#blur-lg)"/>
      <circle cx="420" cy="100" r="80" fill="#3B5BF5" opacity="0.05" filter="url(#blur-lg)"/>

      {/* Browser window */}
      <rect x="20" y="30" width="220" height="170" rx="10" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="20" y="30" width="220" height="32" rx="10" fill="#111E35"/>
      <rect x="20" y="52" width="220" height="10" fill="#111E35"/>
      <circle cx="36" cy="46" r="5" fill="#EF4444" opacity="0.7"/>
      <circle cx="50" cy="46" r="5" fill="#F59E0B" opacity="0.7"/>
      <circle cx="64" cy="46" r="5" fill="#10B981" opacity="0.7"/>
      <rect x="76" y="39" width="140" height="14" rx="3" fill="#060B18"/>
      <text x="146" y="50" textAnchor="middle" fill="#5B6FAA" fontSize="7.5" fontFamily="monospace">upload.azureapp.com</text>
      {/* Upload dropzone */}
      <rect x="32" y="68" width="196" height="118" rx="8" fill="#060B18" stroke="#1E3A6E" strokeWidth="1.2" strokeDasharray="6 4"/>
      {/* Upload icon */}
      <circle cx="130" cy="108" r="24" fill="#111E35"/>
      <path d="M122 112 L130 100 L138 112" stroke="#4F72FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <line x1="130" y1="100" x2="130" y2="120" stroke="#4F72FF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="122" y1="120" x2="138" y2="120" stroke="#4F72FF" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="130" y="148" textAnchor="middle" fill="#94A8E0" fontSize="9" fontFamily="sans-serif">Drag &amp; drop files</text>
      <rect x="55" y="157" width="150" height="22" rx="5" fill="url(#g-blue)"/>
      <text x="130" y="173" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="600">Browse Files</text>

      {/* Arrow + SAS token */}
      <path d="M248 140 L298 140" stroke="#3B5BF5" strokeWidth="2" markerEnd="url(#arB)"/>
      <defs>
        <marker id="arB" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#3B5BF5"/>
        </marker>
      </defs>
      {/* Lock icon middle */}
      <rect x="259" y="126" width="20" height="18" rx="4" fill="#111E35" stroke="#3B5BF5" strokeWidth="1.2"/>
      <path d="M263 126 Q263 118 269 118 Q275 118 275 126" fill="none" stroke="#3B5BF5" strokeWidth="1.5"/>
      <circle cx="269" cy="136" r="2.5" fill="#4F72FF"/>
      <text x="269" y="115" textAnchor="middle" fill="#4F72FF" fontSize="7" fontFamily="monospace">SAS</text>

      {/* Azure Blob panel */}
      <rect x="300" y="30" width="240" height="220" rx="12" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      {/* Azure logo area */}
      <rect x="300" y="30" width="240" height="48" rx="12" fill="#111E35"/>
      <rect x="300" y="62" width="240" height="16" fill="#111E35"/>
      <path d="M318 54 L330 34 L360 34 L372 54 L360 74 L330 74 Z" fill="none" stroke="#0078D4" strokeWidth="1.8"/>
      <text x="345" y="57" textAnchor="middle" fill="#0078D4" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Azure</text>
      <text x="395" y="52" fill="#94A8E0" fontSize="10" fontFamily="sans-serif">Blob Storage</text>
      <text x="395" y="66" fill="#5B6FAA" fontSize="8" fontFamily="monospace">Standard LRS</text>

      {/* File grid */}
      {[
        {name:"report.pdf",icon:"📄",col:"#EF4444",x:316,y:90},
        {name:"photo.jpg",icon:"🖼",col:"#10B981",x:390,y:90},
        {name:"data.csv",icon:"📊",col:"#3B5BF5",x:464,y:90},
        {name:"video.mp4",icon:"🎥",col:"#8B5CF6",x:316,y:158},
        {name:"app.zip",icon:"📦",col:"#F59E0B",x:390,y:158},
        {name:"doc.docx",icon:"📝",col:"#06B6D4",x:464,y:158},
      ].map(({name,icon,col,x,y})=>(
        <g key={name}>
          <rect x={x-28} y={y} width="56" height="58" rx="6" fill="#060B18" stroke="#1E3A6E" strokeWidth="1"/>
          <text x={x} y={y+28} textAnchor="middle" fontSize="20">{icon}</text>
          <text x={x} y={y+50} textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="monospace">{name}</text>
        </g>
      ))}

      {/* Tech badges */}
      {["Ubuntu VM","Apache2","CORS","HTTPS"].map((t,i)=>(
        <g key={t}>
          <rect x={310+i*56} y="228" width="50" height="18" rx="5" fill="#111E35" stroke="#1E3A6E" strokeWidth="1"/>
          <text x={335+i*56} y="241" textAnchor="middle" fill="#94A8E0" fontSize="7.5" fontFamily="monospace">{t}</text>
        </g>
      ))}
    </svg>
  );
}

/* ── Movie Recommender ── */
export function MovieIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      <circle cx="280" cy="140" r="120" fill="#8B5CF6" opacity="0.05" filter="url(#blur-lg)"/>

      {/* Film strip top */}
      {[...Array(10)].map((_,i)=>(
        <rect key={i} x={i*58-4} y="8" width="18" height="22" rx="3" fill="#111E35" stroke="#1E3A6E" strokeWidth="0.8"/>
      ))}
      {[...Array(10)].map((_,i)=>(
        <rect key={i} x={i*58-4} y="248" width="18" height="22" rx="3" fill="#111E35" stroke="#1E3A6E" strokeWidth="0.8"/>
      ))}

      {/* API input box */}
      <rect x="20" y="45" width="160" height="190" rx="10" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="20" y="45" width="160" height="32" rx="10" fill="#111E35"/>
      <rect x="20" y="67" width="160" height="10" fill="#111E35"/>
      <text x="100" y="66" textAnchor="middle" fill="#94A8E0" fontSize="9" fontFamily="monospace">FastAPI /recommend</text>
      <rect x="30" y="83" width="140" height="24" rx="5" fill="#060B18" stroke="#3B5BF5" strokeWidth="1"/>
      <text x="100" y="99" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="monospace">"Interstellar"</text>
      <rect x="30" y="113" width="140" height="28" rx="5" fill="url(#g-blue)"/>
      <text x="100" y="131" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="600">Get Recommendations</text>

      {/* TF-IDF pipeline */}
      <text x="100" y="158" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="monospace">── Pipeline ──</text>
      {["Tokenize","TF-IDF","Cosine Sim","Rank"].map((s,i)=>(
        <g key={s}>
          <rect x="30" y={166+i*18} width="140" height="14" rx="3" fill="#111E35"/>
          <rect x="30" y={166+i*18} width={140*[0.3,0.6,0.85,1][i]} height="14" rx="3" fill="#3B5BF5" opacity={0.3+i*0.1}/>
          <text x="38" y={177+i*18} fill="#94A8E0" fontSize="7.5" fontFamily="monospace">{i+1}. {s}</text>
        </g>
      ))}

      {/* Arrow */}
      <path d="M186 140 L215 140" stroke="#8B5CF6" strokeWidth="2" markerEnd="url(#arM)"/>
      <defs>
        <marker id="arM" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#8B5CF6"/>
        </marker>
      </defs>

      {/* Movie result cards */}
      {[
        {title:"The Dark Knight",score:0.94,year:"2008",col:"#8B5CF6",x:218},
        {title:"Inception",score:0.91,year:"2010",col:"#6C47FF",x:318},
        {title:"Tenet",score:0.87,year:"2020",col:"#3B5BF5",x:418},
      ].map(({title,score,year,col,x})=>(
        <g key={title}>
          <rect x={x} y="50" width="88" height="170" rx="8" fill="#0D1525" stroke={col} strokeWidth="1.5"/>
          {/* poster area */}
          <rect x={x} y="50" width="88" height="90" rx="8" fill={col} opacity="0.2"/>
          <rect x={x} y="126" width="88" height="14" fill={col} opacity="0.2"/>
          <text x={x+44} y="104" textAnchor="middle" fontSize="32">🎬</text>
          <text x={x+44} y="144" textAnchor="middle" fill="#E8EEFF" fontSize="9" fontFamily="sans-serif" fontWeight="600">{title}</text>
          <text x={x+44} y="158" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">{year}</text>
          {/* score bar */}
          <rect x={x+8} y="165" width="72" height="7" rx="3" fill="#111E35"/>
          <rect x={x+8} y="165" width={72*score} height="7" rx="3" fill={col}/>
          <text x={x+44} y="188" textAnchor="middle" fill={col} fontSize="11" fontFamily="monospace" fontWeight="bold">{(score*100).toFixed(0)}%</text>
          <text x={x+44} y="200" textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="sans-serif">similarity</text>
          {/* fuzzy label */}
          <text x={x+44} y="214" textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="monospace">match</text>
        </g>
      ))}

      {/* Swagger badge */}
      <rect x="218" y="228" width="290" height="28" rx="6" fill="#111E35" stroke="#1E3A6E" strokeWidth="1"/>
      <text x="363" y="246" textAnchor="middle" fill="#86EFAC" fontSize="9" fontFamily="monospace">Swagger UI  ·  Fuzzy Matching  ·  JSON API</text>
    </svg>
  );
}

/* ── Travel App ── */
export function TravelIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      {/* sky gradient feel */}
      <rect width="560" height="280" fill="url(#g-cyan)" opacity="0.04"/>

      {/* Map grid */}
      {[...Array(9)].map((_,i)=><line key={i} x1={i*70} y1="0" x2={i*70} y2="280" stroke="#ffffff" strokeWidth="0.4" opacity="0.03"/>)}
      {[...Array(5)].map((_,i)=><line key={i} x1="0" y1={i*70} x2="560" y2={i*70} stroke="#ffffff" strokeWidth="0.4" opacity="0.03"/>)}

      {/* Route path */}
      <path d="M90 220 Q160 100 240 150 Q320 200 400 90 Q450 50 490 70"
        stroke="#3B5BF5" strokeWidth="2.5" fill="none" strokeDasharray="8 4" opacity="0.6"/>
      <path d="M90 220 Q160 100 240 150 Q320 200 400 90 Q450 50 490 70"
        stroke="url(#g-cyan)" strokeWidth="1" fill="none" opacity="0.4"/>

      {/* Location pins */}
      {[
        {x:90,y:220,label:"Colombo",col:"#3B5BF5",r:14},
        {x:240,y:150,label:"Kandy",col:"#06B6D4",r:12},
        {x:400,y:90,label:"Sigiriya",col:"#8B5CF6",r:12},
        {x:490,y:70,label:"Jaffna",col:"#10B981",r:10},
      ].map(({x,y,label,col,r})=>(
        <g key={label}>
          <circle cx={x} cy={y} r={r*2} fill={col} opacity="0.08"/>
          <circle cx={x} cy={y} r={r} fill={col} opacity="0.25"/>
          <circle cx={x} cy={y} r={r*0.5} fill={col}/>
          <text x={x} y={y+r*2+10} textAnchor="middle" fill={col} fontSize="9" fontFamily="sans-serif" fontWeight="600">{label}</text>
        </g>
      ))}

      {/* Flutter phone */}
      <rect x="20" y="50" width="58" height="106" rx="10" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="26" y="60" width="46" height="82" rx="5" fill="#060B18"/>
      <rect x="30" y="64" width="38" height="16" rx="3" fill="#111E35"/>
      <text x="49" y="75" textAnchor="middle" fill="#4F72FF" fontSize="7" fontFamily="sans-serif">My Trips ✈</text>
      {["Sri Lanka Tour","Colombo Day","Kandy Hills","Coastal Drive"].map((t,i)=>(
        <rect key={t} x="30" y={84+i*18} width="38" height="14" rx="3" fill={i===0?"#162240":"#0D1525"} stroke={i===0?"#3B5BF5":"transparent"} strokeWidth="1"/>
      ))}
      {["Sri Lanka Tour","Colombo Day","Kandy Hills","Coastal Drive"].map((t,i)=>(
        <text key={t} x="49" y={94+i*18} textAnchor="middle" fill={i===0?"#4F72FF":"#5B6FAA"} fontSize="6.5" fontFamily="sans-serif">{t}</text>
      ))}
      <circle cx="49" cy="152" r="5" fill="#111E35"/>

      {/* Supabase card */}
      <rect x="20" y="175" width="140" height="80" rx="8" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1"/>
      <circle cx="40" cy="193" r="8" fill="#10B981" opacity="0.3"/>
      <circle cx="40" cy="193" r="4" fill="#10B981"/>
      <text x="56" y="190" fill="#94A8E0" fontSize="8" fontFamily="sans-serif">Supabase</text>
      <text x="56" y="202" fill="#5B6FAA" fontSize="7" fontFamily="monospace">PostgreSQL</text>
      <line x1="26" y1="210" x2="154" y2="210" stroke="#1E3A6E" strokeWidth="1"/>
      <text x="34" y="224" fill="#5B6FAA" fontSize="7.5" fontFamily="monospace">Auth · Storage · Realtime</text>
      <text x="34" y="238" fill="#5B6FAA" fontSize="7.5" fontFamily="monospace">Trip data · Itineraries</text>

      {/* Stars */}
      {[[160,30],[260,20],[350,35],[440,18],[520,40],[80,15]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.3"/>
      ))}
    </svg>
  );
}

/* ── GPA App ── */
export function GPAIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      <circle cx="420" cy="140" r="120" fill="#3B5BF5" opacity="0.05" filter="url(#blur-lg)"/>

      {/* Android phone */}
      <rect x="25" y="20" width="150" height="240" rx="18" fill="#0D1525" stroke="#1E3A6E" strokeWidth="2"/>
      <rect x="33" y="34" width="134" height="210" rx="10" fill="#060B18"/>
      {/* notch */}
      <rect x="75" y="34" width="50" height="12" rx="6" fill="#0D1525"/>
      {/* status bar */}
      <rect x="33" y="46" width="134" height="18" fill="#060B18"/>
      <text x="100" y="58" textAnchor="middle" fill="#5B6FAA" fontSize="7.5" fontFamily="sans-serif">GPA Tracker</text>
      {/* GPA ring */}
      <circle cx="100" cy="112" r="40" fill="none" stroke="#111E35" strokeWidth="8"/>
      <circle cx="100" cy="112" r="40" fill="none" stroke="url(#g-blue)" strokeWidth="8"
        strokeDasharray={`${0.93*251} 251`} strokeLinecap="round" transform="rotate(-90 100 112)"/>
      <text x="100" y="107" textAnchor="middle" fill="#E8EEFF" fontSize="18" fontFamily="sans-serif" fontWeight="800">3.72</text>
      <text x="100" y="122" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">CGPA</text>
      {/* Module rows */}
      {[
        {n:"Mobile Dev",g:"A+",col:"#10B981"},
        {n:"Databases",g:"A",col:"#3B5BF5"},
        {n:"Networks",g:"B+",col:"#F59E0B"},
        {n:"Software Eng",g:"A-",col:"#8B5CF6"},
      ].map(({n,g,col},i)=>(
        <g key={n}>
          <rect x="40" y={160+i*22} width="120" height="18" rx="4" fill="#111E35"/>
          <text x="48" y={173+i*22} fill="#94A8E0" fontSize="8" fontFamily="sans-serif">{n}</text>
          <text x="153" y={173+i*22} textAnchor="end" fill={col} fontSize="8" fontFamily="monospace" fontWeight="bold">{g}</text>
        </g>
      ))}
      {/* home button */}
      <circle cx="100" cy="258" r="8" fill="#111E35" stroke="#1E3A6E" strokeWidth="1"/>

      {/* Bar chart */}
      <text x="360" y="38" textAnchor="middle" fill="#94A8E0" fontSize="12" fontFamily="sans-serif" fontWeight="600">GPA Trend by Semester</text>
      {[
        {sem:"S1",gpa:3.1,col:"#3B5BF5"},
        {sem:"S2",gpa:3.4,col:"#3B5BF5"},
        {sem:"S3",gpa:3.6,col:"#4F72FF"},
        {sem:"S4",gpa:3.72,col:"#6C47FF"},
        {sem:"S5",gpa:3.9,col:"#8B5CF6"},
      ].map(({sem,gpa,col},i)=>{
        const h=(gpa/4.0)*160; const x=215+i*70; const y=230-h;
        return (
          <g key={sem}>
            <rect x={x-22} y={y} width="44" height={h} rx="6" fill={col} opacity="0.85"/>
            <text x={x} y={y-8} textAnchor="middle" fill="#E8EEFF" fontSize="9" fontFamily="monospace" fontWeight="bold">{gpa}</text>
            <text x={x} y="248" textAnchor="middle" fill="#5B6FAA" fontSize="9" fontFamily="sans-serif">{sem}</text>
          </g>
        );
      })}
      <line x1="198" y1="230" x2="520" y2="230" stroke="#1E3A6E" strokeWidth="1.5"/>

      {/* SQLite badge */}
      <rect x="215" y="258" width="290" height="18" rx="5" fill="#111E35" stroke="#1E3A6E" strokeWidth="1"/>
      <text x="360" y="271" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="monospace">SQLite · Offline First · Material Design · Android Studio</text>
    </svg>
  );
}

/* ── Flashcard App ── */
export function FlashcardIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      <circle cx="280" cy="140" r="100" fill="#8B5CF6" opacity="0.05" filter="url(#blur-lg)"/>

      {/* Deck list sidebar */}
      <rect x="20" y="30" width="120" height="220" rx="10" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="20" y="30" width="120" height="32" rx="10" fill="#111E35"/>
      <rect x="20" y="54" width="120" height="8" fill="#111E35"/>
      <text x="80" y="50" textAnchor="middle" fill="#94A8E0" fontSize="9" fontFamily="sans-serif" fontWeight="600">Decks</text>
      {["Flutter (24)","SQLite (18)","Dart (32)","Networks (15)","Algorithms (20)"].map((d,i)=>(
        <g key={d}>
          <rect x="28" y={66+i*32} width="104" height="26" rx="5" fill={i===0?"#162240":"#060B18"} stroke={i===0?"#3B5BF5":"transparent"} strokeWidth="1"/>
          <circle cx="40" cy={79+i*32} r="4" fill={["#3B5BF5","#8B5CF6","#06B6D4","#10B981","#F59E0B"][i]}/>
          <text x="50" y={82+i*32} fill={i===0?"#E8EEFF":"#5B6FAA"} fontSize="8.5" fontFamily="sans-serif">{d}</text>
        </g>
      ))}

      {/* Flashcard stack */}
      <rect x="170" y="60" width="230" height="150" rx="12" fill="#162240" stroke="#1E3A6E" strokeWidth="1" transform="rotate(-4 285 135)"/>
      <rect x="165" y="56" width="230" height="150" rx="12" fill="#0D1830" stroke="#1E3A6E" strokeWidth="1" transform="rotate(-2 280 131)"/>
      {/* front card */}
      <rect x="158" y="50" width="234" height="154" rx="12" fill="#0D1525" stroke="#3B5BF5" strokeWidth="2"/>
      <rect x="158" y="50" width="234" height="4" rx="2" fill="url(#g-blue)"/>
      <text x="275" y="90" textAnchor="middle" fill="#5B6FAA" fontSize="10" fontFamily="monospace">QUESTION</text>
      <line x1="175" y1="98" x2="375" y2="98" stroke="#1E3A6E" strokeWidth="1"/>
      <text x="275" y="130" textAnchor="middle" fill="#E8EEFF" fontSize="14" fontFamily="sans-serif" fontWeight="700">What is Flutter?</text>
      <text x="275" y="150" textAnchor="middle" fill="#5B6FAA" fontSize="9" fontFamily="sans-serif">Google's UI framework for</text>
      <text x="275" y="163" textAnchor="middle" fill="#5B6FAA" fontSize="9" fontFamily="sans-serif">cross-platform apps</text>
      <text x="275" y="192" textAnchor="middle" fill="#3B5BF5" fontSize="9" fontFamily="sans-serif" opacity="0.7">Tap to reveal full answer →</text>

      {/* Controls */}
      <g transform="translate(188 220)">
        <circle cx="0" cy="0" r="22" fill="#EF4444" opacity="0.15"/><circle cx="0" cy="0" r="22" stroke="#EF4444" strokeWidth="1.5" fill="none"/>
        <text x="0" y="5" textAnchor="middle" fill="#EF4444" fontSize="16">✕</text>
      </g>
      <g transform="translate(275 218)">
        <circle cx="0" cy="0" r="18" fill="#111E35"/><circle cx="0" cy="0" r="18" stroke="#5B6FAA" strokeWidth="1.2" fill="none"/>
        <text x="0" y="5" textAnchor="middle" fill="#94A8E0" fontSize="14">⟳</text>
      </g>
      <g transform="translate(362 220)">
        <circle cx="0" cy="0" r="22" fill="#10B981" opacity="0.15"/><circle cx="0" cy="0" r="22" stroke="#10B981" strokeWidth="1.5" fill="none"/>
        <text x="0" y="5" textAnchor="middle" fill="#10B981" fontSize="16">✓</text>
      </g>

      {/* Progress circle */}
      <circle cx="470" cy="130" r="50" fill="none" stroke="#111E35" strokeWidth="10"/>
      <circle cx="470" cy="130" r="50" fill="none" stroke="url(#g-purple)" strokeWidth="10"
        strokeDasharray={`${0.72*314} 314`} strokeLinecap="round" transform="rotate(-90 470 130)"/>
      <text x="470" y="125" textAnchor="middle" fill="#E8EEFF" fontSize="16" fontFamily="sans-serif" fontWeight="800">72%</text>
      <text x="470" y="141" textAnchor="middle" fill="#5B6FAA" fontSize="9" fontFamily="sans-serif">mastered</text>
      <text x="470" y="200" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="monospace">SQLite · Provider</text>
    </svg>
  );
}

/* ── BloodLink ── */
export function BloodlinkIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      <circle cx="280" cy="140" r="100" fill="#EF4444" opacity="0.05" filter="url(#blur-lg)"/>

      {/* Center hub */}
      <circle cx="280" cy="140" r="40" fill="#1A0505" stroke="#EF4444" strokeWidth="2"/>
      <text x="280" y="132" textAnchor="middle" fontSize="22">🩸</text>
      <text x="280" y="152" textAnchor="middle" fill="#FCA5A5" fontSize="8" fontFamily="sans-serif" fontWeight="600">BloodLink</text>

      {/* Connection nodes */}
      {[
        {x:100,y:60,type:"O+",col:"#DC2626"},
        {x:460,y:60,type:"A+",col:"#B91C1C"},
        {x:60,y:200,type:"B-",col:"#991B1B"},
        {x:500,y:200,type:"AB+",col:"#7F1D1D"},
        {x:280,y:30,type:"O-",col:"#EF4444"},
        {x:280,y:250,type:"A-",col:"#DC2626"},
      ].map(({x,y,type,col})=>(
        <g key={type}>
          <line x1={x} y1={y} x2="280" y2="140" stroke="#7F1D1D" strokeWidth="1.2" opacity="0.4" strokeDasharray="5 4"/>
          <circle cx={x} cy={y} r="28" fill={col} opacity="0.1"/>
          <circle cx={x} cy={y} r="20" fill={col} opacity="0.25"/>
          <circle cx={x} cy={y} r="14" fill={col} opacity="0.7"/>
          <text x={x} y={y+5} textAnchor="middle" fill="white" fontSize="9.5" fontFamily="monospace" fontWeight="bold">{type}</text>
        </g>
      ))}

      {/* Tech badges */}
      <rect x="20" y="20" width="66" height="32" rx="7" fill="#0D1525" stroke="#10B981" strokeWidth="1.2"/>
      <text x="53" y="33" textAnchor="middle" fill="#10B981" fontSize="9" fontFamily="sans-serif" fontWeight="600">MongoDB</text>
      <text x="53" y="45" textAnchor="middle" fill="#34D399" fontSize="7.5" fontFamily="monospace">NoSQL</text>

      <rect x="474" y="20" width="66" height="32" rx="7" fill="#0D1525" stroke="#38BDF8" strokeWidth="1.2"/>
      <text x="507" y="33" textAnchor="middle" fill="#38BDF8" fontSize="9" fontFamily="sans-serif" fontWeight="600">React</text>
      <text x="507" y="45" textAnchor="middle" fill="#7DD3FC" fontSize="7.5" fontFamily="monospace">Frontend</text>

      <rect x="474" y="225" width="66" height="32" rx="7" fill="#0D1525" stroke="#86EFAC" strokeWidth="1.2"/>
      <text x="507" y="238" textAnchor="middle" fill="#86EFAC" fontSize="9" fontFamily="sans-serif" fontWeight="600">Node.js</text>
      <text x="507" y="250" textAnchor="middle" fill="#86EFAC" fontSize="7.5" fontFamily="monospace">REST API</text>

      <rect x="20" y="225" width="66" height="32" rx="7" fill="#0D1525" stroke="#F87171" strokeWidth="1.2"/>
      <text x="53" y="238" textAnchor="middle" fill="#F87171" fontSize="9" fontFamily="sans-serif" fontWeight="600">Matching</text>
      <text x="53" y="250" textAnchor="middle" fill="#F87171" fontSize="7.5" fontFamily="monospace">Engine</text>

      {/* match banner */}
      <rect x="170" y="172" width="220" height="28" rx="7" fill="#1A0505" stroke="#EF4444" strokeWidth="1.2"/>
      <text x="280" y="190" textAnchor="middle" fill="#FCA5A5" fontSize="9" fontFamily="sans-serif">✓ 2 donors matched nearby</text>
    </svg>
  );
}

/* ── Todo Laravel ── */
export function TodoIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      <circle cx="280" cy="100" r="80" fill="#FF2D20" opacity="0.04" filter="url(#blur-lg)"/>

      {/* Browser chrome */}
      <rect x="20" y="20" width="520" height="240" rx="12" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="20" y="20" width="520" height="36" rx="12" fill="#111E35"/>
      <rect x="20" y="48" width="520" height="12" fill="#111E35"/>
      <circle cx="40" cy="38" r="6" fill="#EF4444" opacity="0.7"/>
      <circle cx="56" cy="38" r="6" fill="#F59E0B" opacity="0.7"/>
      <circle cx="72" cy="38" r="6" fill="#10B981" opacity="0.7"/>
      <rect x="86" y="30" width="300" height="16" rx="4" fill="#060B18"/>
      <text x="236" y="42" textAnchor="middle" fill="#5B6FAA" fontSize="8" fontFamily="monospace">localhost:8000/tasks</text>
      <rect x="462" y="30" width="66" height="16" rx="4" fill="#FF2D20" opacity="0.8"/>
      <text x="495" y="42" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Laravel</text>

      {/* Kanban columns */}
      {[
        {label:"To Do",col:"#3B5BF5",x:32,items:["Design schema","Write tests","Deploy to prod","Add pagination"]},
        {label:"In Progress",col:"#F59E0B",x:212,items:["Build REST API","User auth","Email notify"]},
        {label:"Done",col:"#10B981",x:392,items:["Setup Laravel","DB migrate","CRUD routes","Login/Register"]},
      ].map(({label,col,x,items})=>(
        <g key={label}>
          <rect x={x} y="66" width="164" height="182" rx="8" fill="#060B18" stroke="#1E3A6E" strokeWidth="1"/>
          <rect x={x} y="66" width="164" height="28" rx="8" fill={col} opacity="0.18"/>
          <rect x={x} y="86" width="164" height="8" fill={col} opacity="0.18"/>
          <circle cx={x+14} cy="80" r="6" fill={col}/>
          <text x={x+26} y="84" fill="#E8EEFF" fontSize="9.5" fontFamily="sans-serif" fontWeight="700">{label}</text>
          <text x={x+148} y="84" textAnchor="end" fill={col} fontSize="8" fontFamily="monospace">{items.length}</text>
          {items.map((item,i)=>(
            <g key={item}>
              <rect x={x+8} y={100+i*36} width="148" height="30" rx="5" fill="#111E35" stroke="#1E3A6E" strokeWidth="0.8"/>
              <circle cx={x+20} cy={115+i*36} r="6" fill="none" stroke={col} strokeWidth="1.5"/>
              {label==="Done" && <path d={`M${x+17} ${115+i*36} l3 3 l6-7`} fill="none" stroke={col} strokeWidth="1.5" strokeLinecap="round"/>}
              <text x={x+30} y={118+i*36} fill="#94A8E0" fontSize="8" fontFamily="sans-serif">{item}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ── GIF Maker ── */
export function GifMakerIllustration() {
  return (
    <svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <SharedDefs/>
      <rect width="560" height="280" fill="#060B18"/>
      <circle cx="280" cy="100" r="100" fill="#F59E0B" opacity="0.04" filter="url(#blur-lg)"/>

      {/* Desktop window */}
      <rect x="20" y="20" width="520" height="240" rx="12" fill="#0D1525" stroke="#1E3A6E" strokeWidth="1.5"/>
      <rect x="20" y="20" width="520" height="36" rx="12" fill="#111E35"/>
      <rect x="20" y="48" width="520" height="12" fill="#111E35"/>
      <circle cx="38" cy="38" r="6" fill="#EF4444" opacity="0.7"/>
      <circle cx="54" cy="38" r="6" fill="#F59E0B" opacity="0.7"/>
      <circle cx="70" cy="38" r="6" fill="#10B981" opacity="0.7"/>
      <text x="280" y="42" textAnchor="middle" fill="#5B6FAA" fontSize="9" fontFamily="sans-serif">GIF Maker — Python Desktop App</text>

      {/* Frame strip */}
      {[
        "#6366F1","#3B5BF5","#06B6D4","#10B981","#F59E0B","#EF4444","#8B5CF6"
      ].map((col,i)=>(
        <g key={i}>
          <rect x={30+i*60} y="66" width="52" height="70" rx="6" fill={col} opacity="0.15" stroke={col} strokeWidth={i===2?2:1} strokeOpacity={i===2?1:0.4}/>
          {i===2 && <rect x={30+i*60} y="66" width="52" height="70" rx="6" fill="none" stroke="#E8EEFF" strokeWidth="2" strokeDasharray="4 3"/>}
          <text x={30+i*60+26} y="110" textAnchor="middle" fill={col} fontSize="11" fontFamily="monospace">F{i+1}</text>
          <text x={30+i*60+26} y="124" textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="monospace">{`0${i}0`}ms</text>
        </g>
      ))}
      <text x="30" y="62" fill="#5B6FAA" fontSize="8" fontFamily="monospace">7 frames selected  ·  drag to reorder</text>

      {/* Controls panel */}
      <rect x="30" y="150" width="130" height="98" rx="8" fill="#060B18" stroke="#1E3A6E" strokeWidth="1"/>
      <text x="44" y="168" fill="#94A8E0" fontSize="9" fontFamily="sans-serif" fontWeight="600">Settings</text>
      <text x="44" y="185" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">Frame rate</text>
      <rect x="44" y="189" width="106" height="10" rx="3" fill="#111E35"/>
      <rect x="44" y="189" width="68" height="10" rx="3" fill="#3B5BF5" opacity="0.7"/>
      <text x="153" y="198" textAnchor="end" fill="#4F72FF" fontSize="7.5" fontFamily="monospace">24fps</text>
      <text x="44" y="215" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">Quality</text>
      <rect x="44" y="219" width="106" height="10" rx="3" fill="#111E35"/>
      <rect x="44" y="219" width="84" height="10" rx="3" fill="#8B5CF6" opacity="0.7"/>
      <text x="153" y="228" textAnchor="end" fill="#8B5CF6" fontSize="7.5" fontFamily="monospace">85%</text>
      <text x="44" y="242" fill="#5B6FAA" fontSize="8" fontFamily="sans-serif">Loop</text>
      <rect x="44" y="234" width="36" height="14" rx="7" fill="#3B5BF5" opacity="0.4"/>
      <circle cx="70" cy="241" r="6" fill="#3B5BF5"/>

      {/* GIF preview */}
      <rect x="178" y="150" width="210" height="98" rx="8" fill="#060B18" stroke="#3B5BF5" strokeWidth="1.5"/>
      <text x="283" y="168" textAnchor="middle" fill="#94A8E0" fontSize="9" fontFamily="sans-serif" fontWeight="600">Preview</text>
      <rect x="190" y="173" width="186" height="64" rx="5" fill="#111E35"/>
      {["#6366F1","#3B5BF5","#06B6D4","#10B981","#F59E0B","#EF4444","#8B5CF6"].map((col,i)=>(
        <rect key={i} x={190+i*27} y="174" width="24" height="62" rx="3" fill={col} opacity={i===2?0.8:0.2}/>
      ))}
      <text x="283" y="247" textAnchor="middle" fill="#5B6FAA" fontSize="7" fontFamily="monospace">7 frames · 24fps · loop ∞</text>

      {/* Export buttons */}
      <rect x="404" y="150" width="126" height="42" rx="8" fill="url(#g-blue)"/>
      <text x="467" y="175" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" fontWeight="700">Export GIF ↓</text>
      <rect x="404" y="198" width="126" height="36" rx="8" fill="#111E35" stroke="#1E3A6E" strokeWidth="1"/>
      <text x="467" y="220" textAnchor="middle" fill="#94A8E0" fontSize="9.5" fontFamily="sans-serif">Add Frames +</text>
      <text x="467" y="233" textAnchor="middle" fill="#5B6FAA" fontSize="7.5" fontFamily="monospace">PNG · JPG · WEBP</text>

      {/* Tech strip */}
      <rect x="30" y="254" width="500" height="16" rx="4" fill="#060B18"/>
      <text x="280" y="266" textAnchor="middle" fill="#374166" fontSize="8" fontFamily="monospace">Python · Tkinter · Pillow · Threading · Image Processing</text>
    </svg>
  );
}
