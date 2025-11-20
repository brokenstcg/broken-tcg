import React, { useState, useEffect, useMemo } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged,
  signInWithCustomToken
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  onSnapshot, 
  orderBy, 
  serverTimestamp,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  writeBatch,
  getDocs
} from 'firebase/firestore';
import { 
  Upload, Download, Search, Plus, Trash2, CheckCircle, AlertCircle, 
  Menu, X, Settings, Database, DollarSign, Mail, Phone, User, 
  FileText, Image as ImageIcon, Sparkles, Loader2, Camera, Lightbulb, 
  Bug, BrainCircuit, Check, CheckSquare, Square, Clock, Send, Archive, 
  Lock, Key
} from 'lucide-react';

// --- FIREBASE INIT (Self-Contained for Preview) ---
// We initialize this inside the file to ensure it works in the preview environment
// without needing external file resolution.
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// --- CONFIGURATION ---
// DIRECTLY USING YOUR KEY FOR IMMEDIATE FUNCTIONALITY
const GEMINI_API_KEY = "AIzaSyCBC3zeSrVrc71xlejxez6mnymAjcANaQU"; 

const callGemini = async (prompt, systemInstruction = "", imageBase64 = null) => {
  try {
    const parts = [{ text: prompt }];
    
    if (imageBase64) {
      parts.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64
        }
      });
    }
    
    // Using standard stable model
    const model = "gemini-1.5-flash";

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: parts }],
          systemInstruction: { parts: [{ text: systemInstruction }] },
        }),
      }
    );

    if (!response.ok) {
        const errData = await response.json();
        console.error("Gemini API Error Details:", errData);
        throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  } catch (error) {
    console.error("Gemini Call Failed", error);
    throw error;
  }
};

// --- Helper: Improved CSV Parser ---
const parseCSV = (text) => {
  const cleanText = text.replace(/^\uFEFF/, '');
  const lines = cleanText.split(/\r\n|\n|\r/).filter(l => l.trim());
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/"/g, ''));
  
  return lines.slice(1).map(line => {
    const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.trim().replace(/^"|"$/g, ''));
    const obj = {};
    headers.forEach((h, i) => { obj[h] = values[i] || ''; });
    return obj;
  });
};

const exportToCSV = (data, filename) => {
  if (!data.length) return;
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(fieldName => `"${row[fieldName]}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/* --- ADMIN LOGIN MODAL --- */
function AdminLoginModal({ onClose, onSuccess, notify }) {
  const [view, setView] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    // Simulating async check - in real production you'd check auth against Firebase Auth user roles
    setTimeout(() => {
      if (email === 'deadlybroken25@gmail.com' && password === 'Deadbroke123!@#') {
        notify("Admin Access Granted");
        onSuccess();
      } else {
        setError("Invalid credentials. Access Denied.");
        setIsLoading(false);
      }
    }, 800);
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      notify(`Reset link sent to ${email || 'your email'}`);
      setView('login');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"><X size={20} /></button>
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center"><Lock size={32} /></div>
          </div>
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-1">{view === 'login' ? 'Admin Login' : 'Recover Password'}</h2>
          <p className="text-center text-gray-500 text-sm mb-6">{view === 'login' ? 'Secure access for authorized personnel only.' : 'Enter your email to receive a reset link.'}</p>
          {view === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative"><Mail className="absolute left-3 top-3 text-gray-400" size={18} /><input type="email" required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500" placeholder="admin@example.com" value={email} onChange={e => setEmail(e.target.value)}/></div>
              <div className="relative"><Key className="absolute left-3 top-3 text-gray-400" size={18} /><input type="password" required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}/></div>
              {error && <div className="text-red-500 text-sm font-medium text-center bg-red-50 p-2 rounded">{error}</div>}
              <button type="submit" disabled={isLoading} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition flex justify-center items-center disabled:opacity-70">{isLoading ? <Loader2 className="animate-spin" /> : 'Login to Dashboard'}</button>
              <div className="text-center mt-4"><button type="button" onClick={() => setView('forgot')} className="text-sm text-blue-600 hover:underline">Forgot your password?</button></div>
            </form>
          ) : (
            <form onSubmit={handleForgot} className="space-y-4">
               <div className="relative"><Mail className="absolute left-3 top-3 text-gray-400" size={18} /><input type="email" required className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-red-500" placeholder="admin@example.com" value={email} onChange={e => setEmail(e.target.value)}/></div>
              <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex justify-center items-center disabled:opacity-70">{isLoading ? <Loader2 className="animate-spin" /> : 'Send Reset Link'}</button>
              <div className="text-center mt-4"><button type="button" onClick={() => setView('login')} className="text-sm text-gray-500 hover:text-gray-800">&larr; Back to Login</button></div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* --- SUB-COMPONENTS --- */

function HomeView({ settings, setView }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (!settings.hotBuysImages || settings.hotBuysImages.length === 0) return;
    const timer = setInterval(() => { setCurrentSlide(prev => (prev + 1) % settings.hotBuysImages.length); }, 1500);
    return () => clearInterval(timer);
  }, [settings.hotBuysImages]);

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-900 text-white min-h-[500px] flex items-center">
        <img src={settings.bannerUrl} alt="Pokemon Cards" className="absolute inset-0 w-full h-full object-cover opacity-30" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=2069'} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Turn Your Collection <br/> Into Cash.</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light border-l-4 border-red-500 pl-4">{settings.promoText}</p>
            <button onClick={() => setView('sell')} className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 flex items-center mt-6">Start Selling Now <span className="ml-2"><DollarSign size={20}/></span></button>
          </div>
          {settings.hotBuysImages && settings.hotBuysImages.length > 0 && (
            <div className="hidden md:flex flex-col items-center justify-center">
               <div className="mb-4"><h2 className="text-3xl font-extrabold text-yellow-400 flex items-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"><Sparkles className="mr-2 animate-pulse" fill="currentColor" /> HOT BUYS</h2></div>
               <div className="relative w-64 h-[360px] bg-white/10 backdrop-blur-md rounded-xl border-4 border-yellow-400/70 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500 p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden relative bg-slate-800">
                      {settings.hotBuysImages.map((img, idx) => (
                          <img key={idx} src={img} className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`} alt={`Hot Buy ${idx + 1}`} />
                      ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none rounded-lg"></div>
               </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4"><Upload size={24} /></div>
          <h3 className="text-xl font-bold mb-2">1. Upload List</h3>
          <p className="text-gray-600">Manually enter cards, use <b>AI Smart Paste</b>, or <b>Scan with Camera!</b></p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4"><Search size={24} /></div>
          <h3 className="text-xl font-bold mb-2">2. We Compare</h3>
          <p className="text-gray-600">Our system automatically checks your list against our current Buying List.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4"><DollarSign size={24} /></div>
          <h3 className="text-xl font-bold mb-2">3. Get Paid</h3>
          <p className="text-gray-600">We notify you of accepted cards. Ship them to us and receive payment quickly.</p>
        </div>
      </div>
    </div>
  );
}

function SellView({ user, onSuccess, settings, notify }) {
  const [step, setStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({ firstName: '', email: '', phone: '' });
  const [cards, setCards] = useState([{ id: 'init-1', name: '', set: '', number: '', condition: 'NM', quantity: 1 }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showAIModal, setShowAIModal] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [scanningRowId, setScanningRowId] = useState(null);

  const handleAddRow = () => setCards([...cards, { id: `manual-${Date.now()}`, name: '', set: '', number: '', condition: 'NM', quantity: 1 }]);
  const handleRemoveRow = (id) => { if (cards.length > 1) setCards(cards.filter(c => c.id !== id)); };
  const updateCard = (id, field, value) => setCards(cards.map(c => c.id === id ? { ...c, [field]: value } : c));
  
  const handleAIImport = async () => {
    if (!aiInput.trim()) return;
    setIsAiLoading(true);
    try {
      const prompt = `You are a data parser. Extract Pokemon cards from this text. Return strictly a JSON array of objects with keys: "name", "set", "number", "condition", "quantity". If condition is missing, use "NM". If quantity is missing, use 1. If info is missing, use empty string. Text: "${aiInput}"`;
      
      const result = await callGemini(prompt, "Return only raw JSON. No markdown.");
      
      // Robust JSON extraction to handle potential AI chatter
      let jsonStr = result.trim();
      const firstBracket = jsonStr.indexOf('[');
      const lastBracket = jsonStr.lastIndexOf(']');
      
      if (firstBracket !== -1 && lastBracket !== -1) {
          jsonStr = jsonStr.substring(firstBracket, lastBracket + 1);
          const data = JSON.parse(jsonStr);
          
          if (Array.isArray(data)) {
            const newCards = data.map((item, idx) => ({ 
                id: `ai-${Date.now()}-${idx}`, 
                name: item.name || '', 
                set: item.set || '', 
                number: item.number || '', 
                condition: item.condition || 'NM', 
                quantity: item.quantity || 1 
            }));
            setCards(prev => [...prev, ...newCards]);
            notify(`✨ AI extracted ${newCards.length} cards!`, 'success');
            setShowAIModal(false);
            setAiInput('');
          } else { throw new Error("AI did not return an array"); }
      } else {
          throw new Error("No JSON found in AI response");
      }
    } catch (err) { 
        console.error("AI Paste Error:", err); 
        notify("Could not extract cards. Please try again.", "error"); 
    } finally { 
        setIsAiLoading(false); 
    }
  };

  const handleImageScan = (e, rowId) => {
     const file = e.target.files[0]; 
     if (!file) return; 
     setScanningRowId(rowId);
     
     const reader = new FileReader();
     reader.onloadend = async () => {
        try {
           const result = await callGemini(`Look at this Pokemon card. Identify the Name, Set Name, Card Number, and estimate Condition (NM, LP, MP, HP, DMG). Return strictly JSON object with keys: name, set, number, condition.`, "Return only raw JSON. No markdown.", reader.result.split(',')[1]);
           
           let jsonStr = result.trim();
           const firstBrace = jsonStr.indexOf('{');
           const lastBrace = jsonStr.lastIndexOf('}');
           if (firstBrace !== -1 && lastBrace !== -1) {
               jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
               const data = JSON.parse(jsonStr);
               setCards(prev => prev.map(c => c.id === rowId ? { ...c, name: data.name || c.name, set: data.set || c.set, number: data.number || c.number, condition: data.condition || 'NM', quantity: c.quantity || 1 } : c));
               notify("✨ Card Scanned Successfully!", 'success');
           } else { throw new Error("No JSON"); }
        } catch (err) { 
            console.error(err);
            notify("Could not identify card.", "error"); 
        } finally { 
            setScanningRowId(null); 
        }
     };
     reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!customerInfo.firstName || !customerInfo.email) {
      setError("Please provide at least your Name and Email.");
      return;
    }
    if (cards.length === 0 || (cards.length === 1 && !cards[0].name)) {
      setError("Please list at least one card.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'submissions'), {
        customer: customerInfo,
        cards: cards,
        status: 'pending',
        submittedAt: serverTimestamp()
      });
      onSuccess();
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in relative">
      {showAIModal && (
        <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-xl bg-white border-2 border-purple-100 shadow-2xl rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-purple-800 flex items-center">
                <Sparkles className="mr-2 text-purple-500" /> AI Smart Import
              </h3>
              <button onClick={() => setShowAIModal(false)}><X size={24} className="text-gray-400 hover:text-gray-600" /></button>
            </div>
            <p className="text-gray-600 mb-4 text-sm">Paste a messy list, an email, or a message. Our AI will clean it up and extract the card details for you.</p>
            <textarea 
              className="w-full h-40 p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              placeholder={"Example:\nI have 2 Charizard from Base Set (4/102) in Near Mint condition.\nAlso selling a Lugia Neo Genesis #9 played."}
              value={aiInput}
              onChange={e => setAiInput(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowAIModal(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">Cancel</button>
              <button 
                onClick={handleAIImport}
                disabled={isAiLoading || !aiInput.trim()}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium flex items-center disabled:opacity-50"
              >
                {isAiLoading ? <><Loader2 className="animate-spin mr-2" size={18}/> Processing...</> : '✨ Extract Cards'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-slate-800 p-6 text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Submit Your Buy List</h2>
          <p className="text-slate-300 text-sm">We are paying 70-90% Market Price!</p>
          <p className="text-yellow-400 text-xs font-bold mt-1 flex items-center">
            <Lightbulb size={12} className="mr-1"/> Use AI Paste for TCG Player lists!
          </p>
        </div>
        <div className="text-right text-sm text-slate-400">
          Step {step} of 2
        </div>
      </div>

      {step === 1 && (
        <div className="p-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center"><User className="mr-2" /> Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={customerInfo.firstName}
                onChange={e => setCustomerInfo({...customerInfo, firstName: e.target.value})}
                placeholder="Ash Ketchum"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={customerInfo.email}
                onChange={e => setCustomerInfo({...customerInfo, email: e.target.value})}
                placeholder="ash@pallet-town.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                value={customerInfo.phone}
                onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
          <div className="flex justify-end">
             <button 
              onClick={() => setStep(2)}
              className="bg-slate-800 text-white px-6 py-2 rounded-md hover:bg-slate-900 transition"
            >
              Next: Add Cards
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold flex items-center"><Database className="mr-2" /> Card List</h3>
            <div className="flex space-x-2">
               <button 
                 onClick={() => setShowAIModal(true)}
                 className="bg-purple-100 text-purple-700 border border-purple-200 px-4 py-2 rounded-md hover:bg-purple-200 text-sm font-bold transition flex items-center"
               >
                 <Sparkles size={16} className="mr-2"/> AI Paste List
               </button>
               <button 
                onClick={handleAddRow}
                className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 text-sm font-medium transition flex items-center"
              >
                <Plus size={16} className="mr-2"/> Add Row
              </button>
            </div>
          </div>

          <div className="max-h-[500px] overflow-y-auto border border-gray-200 rounded-lg mb-6 shadow-sm">
            <table className="w-full text-sm divide-y divide-gray-200">
               <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-left font-medium text-gray-500 w-12">Scan</th>
                  <th className="p-3 text-left font-medium text-gray-500">Card Name</th>
                  <th className="p-3 text-left font-medium text-gray-500">Set</th>
                  <th className="p-3 text-left font-medium text-gray-500 w-20">#</th>
                  <th className="p-3 text-left font-medium text-gray-500 w-16">Qty</th>
                  <th className="p-3 text-left font-medium text-gray-500 w-24">Cond</th>
                  <th className="p-3 w-10"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cards.map((c) => (
                  <tr key={c.id}>
                    <td className="px-4 py-2">
                      <label className={`flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition ${scanningRowId === card.id ? 'bg-purple-200 animate-pulse' : 'bg-gray-100 hover:bg-purple-100 text-gray-400 hover:text-purple-600'}`}>
                        {scanningRowId === card.id ? <Loader2 size={16} className="animate-spin text-purple-600"/> : <Camera size={16}/>}
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleImageScan(e, c.id)} 
                          disabled={scanningRowId !== null}
                        />
                      </label>
                    </td>
                    <td className="px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="Charizard"
                        className="w-full border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                        value={c.name}
                        onChange={(e) => updateCard(c.id, 'name', e.target.value)}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="Base Set"
                        className="w-full border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                        value={c.set}
                        onChange={(e) => updateCard(c.id, 'set', e.target.value)}
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input 
                        type="text" 
                        placeholder="4/102"
                        className="w-full border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                        value={c.number}
                        onChange={(e) => updateCard(c.id, 'number', e.target.value)}
                      />
                    </td>
                    <td className="px-4 py-2">
                       <input 
                        type="number" 
                        min="1"
                        className="w-full border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                        value={c.quantity}
                        onChange={(e) => updateCard(c.id, 'quantity', e.target.value)}
                      />
                    </td>
                    <td className="px-4 py-2">
                       <select
                        className="w-full border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                        value={c.condition}
                        onChange={(e) => updateCard(c.id, 'condition', e.target.value)}
                       >
                         <option value="NM">Near Mint</option>
                         <option value="LP">Light Play</option>
                         <option value="MP">Moderate Play</option>
                         <option value="HP">Heavy Play</option>
                         <option value="DMG">Damaged</option>
                       </select>
                    </td>
                    <td className="px-4 py-2 text-center">
                      {cards.length > 1 && (
                        <button onClick={() => handleRemoveRow(c.id)} className="text-red-400 hover:text-red-600">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center">
              <AlertCircle size={20} className="mr-2" /> {error}
            </div>
          )}

          <div className="flex justify-between items-center pt-2 border-t">
             <button 
              onClick={() => setStep(1)}
              className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium"
            >
              Back
            </button>
             <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 shadow-lg transform transition active:scale-95 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? <Loader2 className="animate-spin mr-2"/> : <CheckCircle className="mr-2"/>}
              {isSubmitting ? 'Submitting...' : 'Submit List'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SuccessView({ setView }) {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-12 text-center animate-fade-in">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={48} />
      </div>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Submission Received!</h2>
      <p className="text-gray-600 mb-8">
        Thanks for sending us your list. Our system is currently comparing your cards against our Buy List. We will email you shortly with our offer for the matching cards.
      </p>
      <button 
        onClick={() => setView('home')}
        className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900"
      >
        Return Home
      </button>
    </div>
  );
}

/* --- ADMIN DASHBOARD --- */
function AdminDashboard({ user, settings, setSettings, notify, onExport }) {
  const [tab, setTab] = useState('submissions'); 
  const [buyList, setBuyList] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isLoadingBuyList, setIsLoadingBuyList] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');
  const [debugMode, setDebugMode] = useState(false); // Debug toggle

  // Fetch Submissions
  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'submissions'), orderBy('submittedAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setSubmissions(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, [user]);

  // Fetch Buy List
  useEffect(() => {
    if (!user) return;
    const fetchBuyList = async () => {
       try {
          const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'buylist_chunks'));
          const snapshot = await getDocs(q);
          let allCards = [];
          snapshot.forEach(doc => {
            if(doc.data().data) {
              allCards = [...allCards, ...doc.data().data];
            }
          });
          setBuyList(allCards);
       } catch(err) {
         console.error("Failed to load master list chunks", err);
       }
    };
    fetchBuyList();
  }, [user]);


  // --- Handlers ---
  const handleBuyListUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsLoadingBuyList(true);
    setUploadProgress('Reading File...');

    const reader = new FileReader();
    reader.onload = async (evt) => {
      const text = evt.target.result;
      const parsed = parseCSV(text);
      
      if (parsed.length === 0) {
        notify("No valid data found in CSV.", "error");
        setIsLoadingBuyList(false);
        return;
      }

      try {
        const cleanData = parsed.map(p => {
          let name = p.name || p['card name'] || p['product name'] || p['title'] || '';
          let set = p.set || p['set name'] || p['expansion'] || p['edition'] || '';
          let number = p.number || p['number'] || p['card number'] || p['set number'] || p['#'] || p['code'] || '';
          
          // Parsing logic: Split Name and Set if combined
          if (!set && name) {
             const bracketMatch = name.match(/^(.*)\s\[(.*)\]$/);
             if (bracketMatch) {
               name = bracketMatch[1].trim();
               set = bracketMatch[2].trim();
             } else {
               const parenMatch = name.match(/^(.*)\s\((.*)\)$/);
               if (parenMatch) {
                 name = parenMatch[1].trim();
                 set = parenMatch[2].trim();
               } else {
                 const dashSplit = name.split(' - ');
                 if(dashSplit.length > 1) {
                    const possibleSet = dashSplit.pop();
                    name = dashSplit.join(' - ').trim();
                    set = possibleSet.trim();
                 }
               }
             }
          }

          // Calculate 75% of Price
          // Prioritize 'buy_price', then 'buy price', then 'market price', then 'price'
          let rawPrice = p['buy_price'] || p['buy price'] || p['market price'] || p['price'] || '0';
          
          // Clean string (remove $ and ,)
          rawPrice = String(rawPrice).replace(/[^0-9.]/g, '');
          
          const basePrice = parseFloat(rawPrice) || 0;
          const calculatedBuyPrice = (basePrice * 0.75).toFixed(2);

          return {
            name: name,
            set: set,
            number: number,
            condition: p.condition || 'NM', 
            price: calculatedBuyPrice
          };
        }).filter(x => x.name && x.name.trim() !== '');

        setUploadProgress(`Found ${cleanData.length} items. Clearing old data...`);

        const chunksRef = collection(db, 'artifacts', appId, 'public', 'data', 'buylist_chunks');
        const oldChunksSnap = await getDocs(chunksRef);
        
        const deleteBatch = writeBatch(db);
        oldChunksSnap.docs.forEach(d => deleteBatch.delete(d.ref));
        await deleteBatch.commit();

        const CHUNK_SIZE = 2000; 
        const chunks = [];
        for (let i = 0; i < cleanData.length; i += CHUNK_SIZE) {
          chunks.push(cleanData.slice(i, i + CHUNK_SIZE));
        }

        setUploadProgress(`Uploading ${chunks.length} chunks...`);

        await Promise.all(chunks.map(async (chunkData, index) => {
           const chunkDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'buylist_chunks', `chunk_${index}`);
           await setDoc(chunkDocRef, {
             index: index,
             count: chunkData.length,
             data: chunkData,
             updatedAt: serverTimestamp()
           });
        }));

        setBuyList(cleanData);
        notify(`Success! ${cleanData.length} cards indexed.`);
      } catch (err) {
        console.error(err);
        notify("Error uploading Buy List.", "error");
      } finally {
        setIsLoadingBuyList(false);
        setUploadProgress('');
      }
    };
    reader.readAsText(file);
  };

  const handleUpdateSettings = async (newSettings) => {
     const { hotBuysImages, ...textSettings } = newSettings;
     const batch = writeBatch(db);
     
     // 1. Update Text Settings
     const settingsRef = doc(db, 'artifacts', appId, 'public', 'data', 'site_settings', 'main');
     batch.set(settingsRef, textSettings, { merge: true });

     // 2. Update Images Collection
     const imagesCollection = collection(db, 'artifacts', appId, 'public', 'data', 'site_images');
     
     // Store Logo
     if (newSettings.logoUrl) {
         batch.set(doc(imagesCollection, 'logo'), { image: newSettings.logoUrl });
     }
     // Store Banner
     if (newSettings.bannerUrl) {
         batch.set(doc(imagesCollection, 'banner'), { image: newSettings.bannerUrl });
     }

     // 3. Update Slideshow Images
     const existingDocs = await getDocs(imagesCollection);
     existingDocs.forEach(d => {
         if (d.id.startsWith('slide_')) {
             batch.delete(d.ref);
         }
     });
     
     if (hotBuysImages && hotBuysImages.length > 0) {
         hotBuysImages.forEach((img, idx) => {
             if (img) {
                batch.set(doc(imagesCollection, `slide_${idx}`), { index: idx, image: img });
             }
         });
     }

     await batch.commit();
     notify("Settings Saved");
  };

  // Logo Upload Handler
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if(!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setSettings(prev => ({ ...prev, logoUrl: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  
  // Add Hot Buy Images Handler
  const handleAddHotBuyImages = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const promises = files.map(file => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(file);
        });
    });

    const newImages = await Promise.all(promises);
    setSettings(prev => ({
        ...prev,
        hotBuysImages: [...(prev.hotBuysImages || []), ...newImages]
    }));
  };

  const handleRemoveHotBuyImage = (index) => {
     setSettings(prev => ({
        ...prev,
        hotBuysImages: prev.hotBuysImages.filter((_, i) => i !== index)
     }));
  };

  // --- MATCHING LOGIC ---
  const normalizeForMatch = (val) => {
    if (!val) return '';
    return String(val)
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, ""); 
  };
  
  const normalizeNumber = (val) => {
      if (!val) return '';
      let s = String(val).toLowerCase().trim();
      s = s.split('/')[0];
      s = s.replace(/^0+/, ''); 
      return s.replace(/[^a-z0-9]/g, "");
  };

  // Updated to return actual matched ITEMS map instead of array of customer cards
  const findStrictMatches = (submissionCards) => {
    if (!buyList.length) return {};
    
    // Build robust lookup MAP: Key -> BuyListItem
    const buyListMap = new Map();
    buyList.forEach(b => {
        const n = normalizeForMatch(b.name);
        const s = normalizeForMatch(b.set);
        // Note: Using just name|set for key as requested, ignoring number
        const key = `${n}|${s}`;
        // Store the item if not exists (first match wins in case of dupes)
        if (!buyListMap.has(key)) buyListMap.set(key, b);
    });

    const results = {}; // index -> BuyListItem
    submissionCards.forEach((c, i) => {
        const n = normalizeForMatch(c.name);
        const s = normalizeForMatch(c.set);
        const key = `${n}|${s}`;
        
        if (buyListMap.has(key)) {
            results[i] = buyListMap.get(key);
        }
    });
    
    return results;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm min-h-[600px] flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-slate-50 border-r border-gray-200 p-4 flex flex-col">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Admin Console</div>
        <button 
          onClick={() => setTab('submissions')}
          className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 text-sm font-medium ${tab === 'submissions' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <FileText size={18} className="mr-3" /> Submissions
          {submissions.length > 0 && <span className="ml-auto bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{submissions.length}</span>}
        </button>
        <button 
          onClick={() => setTab('buylist')}
          className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 text-sm font-medium ${tab === 'buylist' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <Database size={18} className="mr-3" /> Buy List Data
        </button>
        <button 
          onClick={() => setTab('settings')}
          className={`flex items-center w-full px-4 py-3 rounded-lg mb-2 text-sm font-medium ${tab === 'settings' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          <Settings size={18} className="mr-3" /> Site Settings
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        {/* SUBMISSIONS TAB */}
        {tab === 'submissions' && (
          <div>
             {!selectedSubmission ? (
               <>
                 <h2 className="text-2xl font-bold mb-6">Incoming Lists</h2>
                 <div className="space-y-4">
                   {submissions.map(sub => {
                      // Helper for status color
                      const getStatusColor = (s) => {
                        switch(s) {
                          case 'contacted': return 'bg-blue-100 text-blue-700 border-blue-200';
                          case 'finalized': return 'bg-green-100 text-green-700 border-green-200';
                          default: return 'bg-yellow-100 text-yellow-700 border-yellow-200';
                        }
                      };
                      
                      return (
                     <div key={sub.id} onClick={() => setSelectedSubmission(sub)} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer transition shadow-sm flex justify-between items-center">
                        <div>
                          <h4 className="font-bold text-lg">{sub.customer.firstName}</h4>
                          <div className="text-sm text-gray-500 flex items-center space-x-4">
                             <span className="flex items-center"><Mail size={14} className="mr-1"/> {sub.customer.email}</span>
                             <span className="flex items-center"><FileText size={14} className="mr-1"/> {sub.cards.length} Cards Listed</span>
                          </div>
                        </div>
                        <div className="text-right">
                           <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase border ${getStatusColor(sub.status || 'pending')}`}>
                             {sub.status || 'Pending'}
                           </span>
                           <div className="text-xs text-gray-400 mt-1">{sub.submittedAt?.toDate().toLocaleDateString()}</div>
                        </div>
                     </div>
                   )})}
                   {submissions.length === 0 && <div className="text-gray-400 text-center py-12">No submissions yet.</div>}
                 </div>
               </>
             ) : (
               <SubmissionDetail 
                  submission={selectedSubmission} 
                  onBack={() => setSelectedSubmission(null)} 
                  strictMatches={findStrictMatches(selectedSubmission.cards)}
                  onExport={onExport}
                  debugMode={debugMode}
                  setDebugMode={setDebugMode}
                  normalizeForMatch={normalizeForMatch}
                  normalizeNumber={normalizeNumber}
                  buyList={buyList}
                  notify={notify}
               />
             )}
          </div>
        )}

        {/* BUY LIST TAB */}
        {tab === 'buylist' && (
          <div>
             <h2 className="text-2xl font-bold mb-6">Master Buy List</h2>
             <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-blue-800 mb-2">Update Database</h3>
                <p className="text-sm text-blue-600 mb-4">Upload the latest CSV from Box.gg. This will overwrite the current comparison database.</p>
                <label className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition">
                  {isLoadingBuyList ? <span className="flex items-center"><Loader2 className="animate-spin mr-2" size={18}/> {uploadProgress || 'Processing...'}</span> : <span className="flex items-center"><Upload size={18} className="mr-2" /> Upload CSV</span>}
                  <input type="file" accept=".csv" className="hidden" onChange={handleBuyListUpload} disabled={isLoadingBuyList} />
                </label>
             </div>

             <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 border-b font-medium text-sm text-gray-600 flex justify-between">
                   <span>Current Database Preview</span>
                   <span>{buyList.length} entries loaded</span>
                </div>
                <div className="max-h-[400px] overflow-y-auto p-4 text-sm">
                  {buyList.length > 0 ? (
                    <table className="min-w-full">
                       <thead>
                         <tr className="text-left text-gray-500">
                           <th>Name</th><th>Set</th><th>#</th><th>Cond.</th><th>Price</th>
                         </tr>
                       </thead>
                       <tbody>
                         {buyList.map((item, i) => (
                           <tr key={i} className="border-b border-gray-50">
                             <td className="py-1">{item.name}</td>
                             <td className="py-1">{item.set}</td>
                             <td className="py-1">{item.number}</td>
                             <td className="py-1">{item.condition}</td>
                             <td className="py-1 text-green-600 font-medium">${item.price}</td>
                           </tr>
                         ))}
                       </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-8 text-gray-400">No Buy List Data Found. Upload a CSV.</div>
                  )}
                </div>
             </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {tab === 'settings' && (
           <div>
              <h2 className="text-2xl font-bold mb-6">Site Configuration</h2>
              <div className="space-y-6 max-w-xl">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <input className="w-full border p-2 rounded" value={settings.businessName} onChange={(e) => setSettings({...settings, businessName: e.target.value})} />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Promotional Text</label>
                    <input className="w-full border p-2 rounded" value={settings.promoText} onChange={(e) => setSettings({...settings, promoText: e.target.value})} />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Logo Image</label>
                    <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg border flex items-center justify-center overflow-hidden">
                            {settings.logoUrl ? <img src={settings.logoUrl} className="w-full h-full object-contain"/> : <Database className="text-gray-400"/>}
                        </div>
                        <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm font-medium hover:bg-gray-50">
                            Upload Logo
                            <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload}/>
                        </label>
                    </div>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Banner Image URL</label>
                    <div className="flex gap-2">
                       <input className="w-full border p-2 rounded" value={settings.bannerUrl} onChange={(e) => setSettings({...settings, bannerUrl: e.target.value})} />
                       <div className="w-12 h-10 bg-gray-200 rounded overflow-hidden">
                          <img src={settings.bannerUrl} className="w-full h-full object-cover" />
                       </div>
                    </div>
                 </div>

                 {/* NEW SECTION: Hot Buys Slideshow */}
                 <div className="border-t pt-4 mt-4">
                    <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center">
                       <Sparkles size={16} className="mr-2 text-yellow-500"/> Hot Buys Slideshow
                    </label>
                    <p className="text-xs text-gray-500 mb-3">Upload card images to display in the rotating slideshow on the home page.</p>
                    
                    <div className="flex flex-wrap gap-4 mb-2">
                      {settings.hotBuysImages?.map((img, idx) => (
                        <div key={idx} className="relative w-24 h-32 border rounded-lg overflow-hidden bg-gray-100 shadow-sm group">
                          <img src={img} className="w-full h-full object-contain" />
                          <button 
                            onClick={() => handleRemoveHotBuyImage(idx)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                      <label className="w-24 h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 text-gray-400 hover:text-blue-500 transition-colors">
                        <Plus size={24} />
                        <span className="text-xs mt-1 font-medium">Add Cards</span>
                        <input type="file" accept="image/*" multiple className="hidden" onChange={handleAddHotBuyImages} />
                      </label>
                    </div>
                 </div>

                 <button onClick={() => handleUpdateSettings(settings)} className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900 w-full">Save All Changes</button>
              </div>
           </div>
        )}

      </div>
    </div>
  );
}
