import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  CheckSquare, 
  Bell, 
  LogOut, 
  Headset, 
  Upload, 
  CloudUpload, 
  RefreshCw, 
  Download, 
  CheckCircle2,
  HelpCircle,
  Plus,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  BarChart3,
  History,
  ChevronRight,
  Keyboard,
  FileSpreadsheet,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Page = 'dashboard' | 'transcription';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-6 py-3 transition-all group text-left ${
      active 
        ? 'bg-primary-fixed text-on-primary-fixed rounded-r-full font-bold' 
        : 'text-on-surface-variant hover:bg-surface-container-highest'
    }`}
  >
    <Icon size={20} className={active ? 'text-primary' : ''} />
    <span className="font-medium">{label}</span>
  </button>
);

const StatCard = ({ title, value, subtitle, trend, icon: Icon, colorClass }: { title: string, value: string, subtitle: string, trend?: string, icon?: any, colorClass?: string }) => (
  <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20 shadow-sm flex flex-col justify-between">
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">{title}</p>
      <h3 className={`text-3xl font-extrabold tracking-tight mb-2 ${colorClass || 'text-on-surface'}`}>{value}</h3>
    </div>
    <div className="flex items-center gap-2">
      {trend && (
        <span className="flex items-center gap-1 text-[10px] font-bold text-primary">
          <TrendingUp size={12} />
          {trend}
        </span>
      )}
      <p className="text-[10px] font-medium text-outline">{subtitle}</p>
    </div>
  </div>
);

const TranscriptionView = ({ onProcess, isProcessing, isReady }: { onProcess: () => void, isProcessing: boolean, isReady: boolean }) => (
  <div className="px-8 py-12 max-w-5xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 text-center"
    >
      <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tighter mb-4">Transcription Hub</h1>
      <p className="text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
        Synchronize dual ledgers for high-precision audit validation in seconds.
      </p>
    </motion.div>

    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div whileHover={{ scale: 1.01 }} className="bg-surface-container-low rounded-2xl p-6 transition-all border border-outline-variant/30 shadow-sm">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/50 rounded-xl p-12 bg-surface-container-lowest transition-all hover:border-primary group">
            <div className="bg-primary/5 p-4 rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
              <Upload className="text-primary" size={32} />
            </div>
            <h3 className="font-headline text-xl font-bold mb-1">Source Ledger</h3>
            <p className="text-xs text-outline mb-6">Drop your first spreadsheet here</p>
            <button className="px-6 py-2 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
              Select File
            </button>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="bg-surface-container-low rounded-2xl p-6 transition-all border border-outline-variant/30 shadow-sm">
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/50 rounded-xl p-12 bg-surface-container-lowest transition-all hover:border-primary group">
            <div className="bg-primary/5 p-4 rounded-full mb-4 group-hover:bg-primary/10 transition-colors">
              <CloudUpload className="text-primary" size={32} />
            </div>
            <h3 className="font-headline text-xl font-bold mb-1">Target Ledger</h3>
            <p className="text-xs text-outline mb-6">Drop the comparison file here</p>
            <button className="px-6 py-2 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
              Select File
            </button>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center gap-8 py-4">
        <button 
          onClick={onProcess}
          disabled={isProcessing}
          className="group flex items-center gap-4 bg-primary text-white px-16 py-5 rounded-full font-headline text-2xl font-extrabold shadow-2xl hover:scale-[1.02] transition-all hover:bg-primary-container active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isProcessing ? 'Processing...' : 'Reconcile & Process'}</span>
          <RefreshCw className={`transition-transform ${isProcessing ? 'animate-spin' : 'group-hover:rotate-180'}`} size={24} />
        </button>
        <div className="h-px w-full max-w-md bg-outline-variant/30"></div>
      </div>

      <AnimatePresence>
        {isReady && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-12 border-4 border-primary shadow-2xl relative overflow-hidden text-center">
            <div className="absolute -top-10 -right-10 opacity-5">
              <CheckCircle2 size={240} className="text-primary" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="font-headline text-4xl font-extrabold mb-4">Transcription Ready</h2>
              <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Reconciliation successful. <span className="font-bold text-on-surface">2,492 entries</span> processed with <span className="text-primary font-bold">94.2% confidence</span>. Your corrected ledger is ready for download.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-12 py-6 rounded-2xl font-headline text-xl font-bold hover:opacity-90 transition-all shadow-xl group active:scale-95">
                  <Download className="group-hover:translate-y-1 transition-transform" size={28} />
                  <span>Download Corrected Spreadsheet</span>
                </button>
                <div className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-xl text-sm font-bold text-outline uppercase tracking-wider">
                  <FileText size={18} />
                  XLSX Optimized
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const DashboardView = () => (
  <div className="px-8 py-12 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-10"
    >
      <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tighter mb-2">Financial Status</h1>
      <p className="text-on-surface-variant font-medium">Monitoring the oceanic ledger of Atlantis Divers — Updated 03 Feb 2026</p>
    </motion.div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard 
        title="Total Balance (Saldo)" 
        value="R$ 14.582,34" 
        subtitle="+4.2% from last upload" 
        trend="+4.2%"
      />
      <StatCard 
        title="Total Credits (PIX/Recebidos)" 
        value="R$ 5.210,00" 
        subtitle="12 transactions detected" 
      />
      <StatCard 
        title="Total Debits (Pagamentos)" 
        value="R$ 3.845,22" 
        subtitle="8 active payables" 
        colorClass="text-secondary"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Chart Section */}
      <div className="lg:col-span-2 bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-headline text-xl font-bold">Transaction Flow</h3>
            <p className="text-xs text-outline">Feb 02 - Feb 03, 2026</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-[10px] font-bold text-outline uppercase">Credits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-[10px] font-bold text-outline uppercase">Debits</span>
            </div>
          </div>
        </div>
        
        {/* Mock Chart */}
        <div className="h-64 flex items-end justify-between gap-4 px-4">
          {[
            { label: '02/02 - AM', credits: 60, debits: 0 },
            { label: '02/02 - PM', credits: 0, debits: 40 },
            { label: '02/02 - PM', credits: 10, debits: 0 },
            { label: '03/02 - AM', credits: 80, debits: 0 },
            { label: '03/02 - AM', credits: 0, debits: 50 },
            { label: '03/02 - PM', credits: 40, debits: 0 },
            { label: '03/02 - PM', credits: 0, debits: 30 },
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4">
              <div className="w-full flex flex-col-reverse gap-1 h-48">
                {bar.credits > 0 && <motion.div initial={{ height: 0 }} animate={{ height: `${bar.credits}%` }} className="bg-primary rounded-t-sm w-full"></motion.div>}
                {bar.debits > 0 && <motion.div initial={{ height: 0 }} animate={{ height: `${bar.debits}%` }} className="bg-secondary rounded-t-sm w-full"></motion.div>}
                {bar.credits === 0 && bar.debits === 0 && <div className="bg-surface-container-highest rounded-t-sm w-full h-[10%]"></div>}
              </div>
              <span className="text-[10px] font-bold text-outline whitespace-nowrap">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col gap-6">
        <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/20 shadow-sm flex-1">
          <h3 className="font-headline text-xl font-bold mb-6">Ledger Actions</h3>
          <div className="space-y-4">
            {[
              { icon: FileSpreadsheet, label: 'Upload Spreadsheet' },
              { icon: Keyboard, label: 'Manual Entry' },
              { icon: BarChart3, label: 'Export Report' },
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-outline-variant/10 hover:border-primary transition-all group">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/5 p-2 rounded-lg group-hover:bg-primary/10">
                    <action.icon size={20} className="text-primary" />
                  </div>
                  <span className="font-bold text-sm">{action.label}</span>
                </div>
                <ChevronRight size={16} className="text-outline group-hover:text-primary" />
              </button>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">System Health</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              OCR Transcription engine is running at <span className="font-bold text-primary">99.4% accuracy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Recent Transcriptions Table */}
    <div className="bg-surface-container-low rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
      <div className="p-8 flex justify-between items-center border-b border-outline-variant/10">
        <h3 className="font-headline text-xl font-bold">Recent Transcriptions</h3>
        <button className="text-primary font-bold text-sm hover:underline">View All Entries</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container text-[10px] font-bold uppercase tracking-widest text-outline">
              <th className="px-8 py-4">Date</th>
              <th className="px-8 py-4">Description (Histórico)</th>
              <th className="px-8 py-4 text-right">Value (R$)</th>
              <th className="px-8 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {[
              { date: '02/02/2026', desc: 'PIX RECEBIDO - JOÃO SILVA', val: '1.250,00', status: 'VERIFIED', statusColor: 'bg-green-100 text-green-700' },
              { date: '02/02/2026', desc: 'PAGAMENTO FORNECEDOR EQUIP.', val: '- 450,20', status: 'VERIFIED', statusColor: 'bg-green-100 text-green-700' },
              { date: '02/02/2026', desc: 'TARIFA BANCÁRIA MENSAL', val: '- 25,00', status: 'CRITICAL', statusColor: 'bg-red-100 text-red-700' },
              { date: '03/02/2026', desc: 'PIX RECEBIDO - MARIA SOUZA', val: '3.500,00', status: 'VERIFIED', statusColor: 'bg-green-100 text-green-700' },
              { date: '03/02/2026', desc: 'PAGAMENTO LUZ / ENERGIA', val: '- 820,15', status: 'PENDING', statusColor: 'bg-gray-100 text-gray-700' },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-surface-container-highest/50 transition-colors">
                <td className="px-8 py-5 text-sm font-medium text-outline">{row.date}</td>
                <td className="px-8 py-5 text-sm font-bold">{row.desc}</td>
                <td className={`px-8 py-5 text-sm font-bold text-right ${row.val.startsWith('-') ? 'text-secondary' : 'text-primary'}`}>{row.val}</td>
                <td className="px-8 py-5 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${row.statusColor}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Footer Stats */}
    <div className="mt-12 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-outline/50">
      <p>PRECISION LEDGER v2.4.0 — ATLANTIS DIVERS DATA MGMT</p>
      <div className="flex gap-8">
        <div className="flex flex-col items-end">
          <span className="text-outline">LATENCY</span>
          <span className="text-on-surface">24ms</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-outline">RECORDS</span>
          <span className="text-on-surface">12,402</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-outline">UPTIME</span>
          <span className="text-on-surface">99.98%</span>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleProcess = () => {
    setIsProcessing(true);
    setIsReady(false);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsReady(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-8 py-4 bg-surface border-b border-outline-variant/10">
        <div className="flex items-center gap-6">
          <img 
            alt="Atlantis Divers Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhksDnHwk5mTkZFRiji7iDndMabqNeEq-4ZTWJ_pQmnsNDYpUsfLB-WUPJHd0cLc9GZbJKIs29d5R2WAhsfg1SluUjtu-NAf5YBYgdM6WFsaH05LA4VufC2sXKLvA4i81U9uP-8R0IoV_kU5eCCpyx7nXxs2sCer86IPnJ8EyjOLMlJ4YtcBneW1kdsy8IpA5mtO9pVVN--rbc3Q_93egQ8xcyOWw8OVSQyaTnf9oiUD11uSRynhSRG3VYYYx41Uptcp9a3CIdIZA"
            referrerPolicy="no-referrer"
          />
          <span className="text-2xl font-extrabold text-on-surface font-headline tracking-tight">Precision Ledger</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className={`font-headline font-bold tracking-tight transition-all pb-1 ${currentPage === 'dashboard' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setCurrentPage('transcription')}
            className={`font-headline font-bold tracking-tight transition-all pb-1 ${currentPage === 'transcription' ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Transcription
          </button>
          <button className="font-headline font-bold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="#">Settings</button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-surface"></span>
          </button>
          <div className="h-8 w-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
            <img 
              alt="User Profile Avatar" 
              className="h-full w-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-WjjZ36nNvpycD7FrRCXBTsI-Hkpvk38SslFmb-mn_X05UtFZXkAJUvNi0NFYPBSqepynyniP0T4X3mU1ipxJA204qGdDTtilk1FklFvz51f1zoqMJwdiaDuZtGCjPshlh7jIZ-Mm0zuBNbogkY87fpOPgnfsB3fla0-q2LWBFTvr8__Yzobfq8z5wcEfZsQd5Pq3YyJBeMxDrYeXTC1MtPSylVsc6HMG2JyGR7SZ5XCDrHPfSdazGPMkCVMhGNJaUGTC2TDTvnkf"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-18">
        {/* SideNavBar */}
        <aside className="fixed left-0 top-18 h-[calc(100vh-4.5rem)] w-64 bg-surface-container-low pt-8 pb-4 hidden lg:flex flex-col z-40 border-r border-outline-variant/10">
          <div className="px-6 mb-8">
            <h2 className="font-headline text-[10px] font-bold uppercase tracking-widest text-outline">Atlantis Divers</h2>
            <p className="text-[10px] text-outline font-medium uppercase tracking-tighter">Data Cartographer</p>
          </div>
          
          <nav className="flex-1 space-y-1 pr-4">
            <SidebarItem icon={LayoutDashboard} label="Overview" active={currentPage === 'dashboard'} onClick={() => setCurrentPage('dashboard')} />
            <SidebarItem icon={FileText} label="Files" active={currentPage === 'transcription'} onClick={() => setCurrentPage('transcription')} />
            <SidebarItem icon={History} label="Audit Trail" />
            <SidebarItem icon={Users} label="Team" />
            <SidebarItem icon={BarChart3} label="Analytics" />
          </nav>

          <div className="px-6 mb-6">
            <button 
              onClick={() => setCurrentPage('transcription')}
              className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold text-sm shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              New Transcription
            </button>
          </div>

          <div className="mt-auto space-y-1 pr-4">
            <SidebarItem icon={HelpCircle} label="Help" />
            <SidebarItem icon={LogOut} label="Logout" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:pl-64 flex-1 min-h-screen bg-surface">
          <AnimatePresence mode="wait">
            {currentPage === 'dashboard' ? (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DashboardView />
              </motion.div>
            ) : (
              <motion.div key="transcription" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <TranscriptionView 
                  onProcess={handleProcess} 
                  isProcessing={isProcessing} 
                  isReady={isReady} 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Floating Support Action */}
      <button className="fixed bottom-8 right-8 h-16 w-16 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform lg:mr-4 border border-outline-variant/30 z-50">
        <HelpCircle size={32} />
      </button>
    </div>
  );
}
