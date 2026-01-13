import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  MessageCircle, 
  Wallet, 
  ShieldAlert, 
  Lock, 
  Users, 
  Activity, 
  ArrowRight, 
  X, 
  Menu,
  Crown,
  Gamepad2,
  Coins
} from 'lucide-react';

const EXCHANGE_LINKS = [
  {
    name: "Bybit",
    url: "#", 
    benefits: ["Up to $30,000 Deposit Bonus", "0 Fees on Spot", "Deepest Liquidity"]
  },
  {
    name: "Blofin",
    url: "#",
    benefits: ["No KYC Required", "High Leverage available", "Smooth Mobile App"]
  },
  {
    name: "Bitget",
    url: "#",
    benefits: ["Copy Trading enabled", "Best for Altcoins", "Low Maker Fees"]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-red-900/30 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <span className="text-xl font-black italic">P</span>
              </div>
              <span className="font-black text-2xl tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                The Penthouse
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#intel" className="hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide">Intel</a>
                <a href="#armory" className="hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide">The Armory</a>
                <a href="#crew" className="hover:text-red-500 transition-colors px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide">The Crew</a>
                <button 
                  onClick={() => setShowApplyModal(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transform hover:-translate-y-0.5"
                >
                  Join Syndicate
                </button>
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-900/20 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/30 via-slate-950/80 to-slate-950"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-5/12 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-400 font-bold tracking-wider text-xs uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Live Signals Active
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 italic uppercase leading-none" style={{ fontFamily: 'Impact, sans-serif' }}>
              High Risk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-yellow-500">High Reward</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 max-w-lg mx-auto md:mx-0 font-light border-l-4 border-red-600 pl-6">
              The only lounge for elite degenerates. Perps, Memecoins, and heavy bags. 
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => setShowApplyModal(true)} className="px-8 py-4 bg-red-600 rounded-lg font-black uppercase tracking-widest text-white hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={20}/> Enter The Chat
              </button>
            </div>
          </div>
          <div className="w-full md:w-7/12 relative group">
             <div className="relative rounded-xl overflow-hidden border-4 border-slate-900 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000" alt="Crypto" className="w-full h-auto object-cover"/>
             </div>
          </div>
        </div>
      </div>

      {/* --- Rest of the component follows the same logic --- */}
      <section id="intel" className="py-24 bg-slate-900 text-center">
          <h2 className="text-4xl font-black italic uppercase mb-12">The Intel</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
              <div className="bg-slate-950 p-8 rounded-xl border border-slate-800"><Coins className="mx-auto mb-4 text-yellow-500" size={48}/> <h3 className="font-bold">100x Calls</h3></div>
              <div className="bg-slate-950 p-8 rounded-xl border border-slate-800"><Activity className="mx-auto mb-4 text-red-500" size={48}/> <h3 className="font-bold">Perp Signals</h3></div>
              <div className="bg-slate-950 p-8 rounded-xl border border-slate-800"><Users className="mx-auto mb-4 text-purple-500" size={48}/> <h3 className="font-bold">Whale Chat</h3></div>
          </div>
      </section>

      {/* Modal logic */}
      {showApplyModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 p-8 rounded-2xl border border-red-900 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-xl font-bold uppercase italic">Join Syndicate</h3>
               <X className="cursor-pointer" onClick={() => setShowApplyModal(false)}/>
            </div>
            <input className="w-full bg-slate-950 border border-slate-700 p-3 rounded mb-4" placeholder="Telegram Handle"/>
            <button className="w-full bg-red-600 p-3 rounded font-bold uppercase">Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
