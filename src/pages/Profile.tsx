import { useState, useRef, useEffect } from "react";
import { SERVICE_TABS } from "../data";
import { IconClock, IconSparkle, IconX } from "../components/icons";

const INITIAL_BOOKINGS = [
  { id: "BK-10029", date: "Oct 12, 2026", time: "2:00 PM", service: "Balayage & Custom Highlights", stylist: "Marcus Hayes", status: "Upcoming" },
  { id: "BK-09881", date: "Aug 31, 2026", time: "10:00 AM", service: "Signature OPI Gel Manicure", stylist: "Chloe Bennett", status: "Completed" },
];

const DEFAULT_PROFILE = {
  firstName: "Victoria",
  lastName: "Sterling",
  email: "victoria.sterling@example.com",
  phone: "+1 (310) 555-0199",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
};

export const LUXE_APPT_KEY = "luxe_master_appointments_v2";

const UPGRADE_PLANS = [
  { name: "Gold VIP", price: "$199/yr", benefits: ["10% off all standard salon services", "Priority same-day booking access"] },
  { name: "Platinum Elite", price: "$399/yr", benefits: ["20% off all hair, skin, and spa services", "Free scalp therapy"] },
  { name: "Diamond Black", price: "$699/yr", benefits: ["30% off all therapies", "Unlimited priority access & guest passes"] },
];

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  // Login Form State
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [membershipTier, setMembershipTier] = useState(() => {
    return localStorage.getItem("luxe_user_membership") || "Elite Member";
  });

  const [activeTab, setActiveTab] = useState<"bookings" | "favorites" | "settings">("bookings");
  
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem(LUXE_APPT_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const uniqueBookings = [];
        const seenIds = new Set();
        for (const bk of parsed) {
          if (!seenIds.has(bk.id)) {
            uniqueBookings.push(bk);
            seenIds.add(bk.id);
          }
        }
        return uniqueBookings.length > 0 ? uniqueBookings : INITIAL_BOOKINGS;
      } catch (e) {
        return INITIAL_BOOKINGS;
      }
    }
    return INITIAL_BOOKINGS;
  });

  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem("luxe_user_permanent_avatar") || DEFAULT_PROFILE.avatar;
  });
  
  // Settings Form State
  const [formData, setFormData] = useState({
    firstName: DEFAULT_PROFILE.firstName,
    lastName: DEFAULT_PROFILE.lastName,
    email: DEFAULT_PROFILE.email,
    phone: DEFAULT_PROFILE.phone
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Upgrade Modal State
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [checkoutTier, setCheckoutTier] = useState<any>(null);
  const [mockCard, setMockCard] = useState("");

  // Reschedule Modal State
  const [rescheduleBookingId, setRescheduleBookingId] = useState<string | null>(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("luxe_isLoggedIn");
    if (authStatus === "false") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      localStorage.setItem("luxe_isLoggedIn", "true");
    }

    const handleStorage = (e: StorageEvent | Event) => {
      const isCustomEvent = e.type === "luxe_booking_sync";
      const isStorageEvent = e.type === "storage" && (e as StorageEvent).key === LUXE_APPT_KEY;
      
      if (isCustomEvent || isStorageEvent) {
        const data = localStorage.getItem(LUXE_APPT_KEY);
        if (data) {
          try {
            const parsed = JSON.parse(data);
            const uniqueBookings = [];
            const seenIds = new Set();
            for (const bk of parsed) {
              if (!seenIds.has(bk.id)) {
                uniqueBookings.push(bk);
                seenIds.add(bk.id);
              }
            }
            if (uniqueBookings.length > 0) {
               setAppointments(uniqueBookings);
            }
          } catch (e) {}
        }
      }
    };
    
    window.addEventListener("storage", handleStorage);
    window.addEventListener("luxe_booking_sync", handleStorage);

    const savedProfile = localStorage.getItem("luxe_profile");
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setFormData({
          firstName: parsed.firstName || DEFAULT_PROFILE.firstName,
          lastName: parsed.lastName || DEFAULT_PROFILE.lastName,
          email: parsed.email || DEFAULT_PROFILE.email,
          phone: parsed.phone || DEFAULT_PROFILE.phone
        });
      } catch (e) {}
    }

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("luxe_booking_sync", handleStorage);
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      if (loginName && loginEmail && loginPassword) {
        const [first, ...rest] = loginName.split(" ");
        const newProfile = {
          ...DEFAULT_PROFILE,
          firstName: first,
          lastName: rest.join(" "),
          email: loginEmail
        };
        localStorage.setItem("luxe_profile", JSON.stringify(newProfile));
        setFormData({ ...formData, ...newProfile });
        setIsLoggedIn(true);
        localStorage.setItem("luxe_isLoggedIn", "true");
        showToast("Account created successfully. Welcome to Luxe Haven.");
      }
    } else {
      if (loginEmail && loginPassword) {
        setIsLoggedIn(true);
        localStorage.setItem("luxe_isLoggedIn", "true");
        showToast("Welcome back to Luxe Haven.");
      }
    }
  };

  const handleSignOut = () => {
    setFormData({
      firstName: DEFAULT_PROFILE.firstName,
      lastName: DEFAULT_PROFILE.lastName,
      email: DEFAULT_PROFILE.email,
      phone: DEFAULT_PROFILE.phone
    });
      setAvatar(DEFAULT_PROFILE.avatar);
      setMembershipTier("Elite Member");
      localStorage.removeItem("luxe_user_membership");
      localStorage.removeItem("luxe_user_permanent_avatar");
      localStorage.removeItem("luxe_profile");
      localStorage.removeItem("luxe_isLoggedIn");
    showToast("Signed out successfully.");
    setTimeout(() => {
      setIsLoggedIn(false);
      window.location.hash = "#/";
    }, 1200);
  };

  const handleMembershipChange = (newTier: string) => {
    setMembershipTier(newTier);
    localStorage.setItem("luxe_user_membership", newTier);
    showToast(`Membership upgraded successfully!`);
  };

  const handlePurchase = (planName: string) => {
    handleMembershipChange(planName);
    setShowUpgradeModal(false);
    setCheckoutTier(null);
    setMockCard("");
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setAvatar(objectUrl);
      localStorage.setItem("luxe_user_permanent_avatar", objectUrl);
      showToast("Profile picture updated!");
    }
  };

  const updateAppointments = (newAppointments: typeof INITIAL_BOOKINGS) => {
    setAppointments(newAppointments);
    localStorage.setItem(LUXE_APPT_KEY, JSON.stringify(newAppointments));
  };

  const handleCancelBooking = (id: string) => {
    console.log("Cancel clicked for ID:", id);
    const updatedBookings = appointments.map(item => item.id === id ? { ...item, status: "Cancelled" } : item);
    setAppointments(updatedBookings);
    localStorage.setItem(LUXE_APPT_KEY, JSON.stringify(updatedBookings));
    showToast("Appointment cancelled.");
  };

  const handleRemoveAppointment = (id: string) => {
    const updated = appointments.filter((item: any) => item.id !== id);
    setAppointments(updated);
    localStorage.setItem(LUXE_APPT_KEY, JSON.stringify(updated));
    showToast("Appointment removed from history.");
  };

  const openRescheduleModal = (id: string) => {
    setRescheduleBookingId(id);
    setNewDate("");
    setNewTime("");
  };

  const confirmReschedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rescheduleBookingId || !newDate || !newTime) return;

    // Convert input date/time to a nicer format for display if desired, or just use raw.
    // Assuming simple string input like "Oct 15, 2026"
    const updated = appointments.map(bk => 
      bk.id === rescheduleBookingId ? { ...bk, date: newDate, time: newTime } : bk
    );
    updateAppointments(updated);
    setRescheduleBookingId(null);
    showToast("Appointment rescheduled successfully!");
  };

  const handleRebook = (item: any) => {
    localStorage.setItem("luxe_rebook_service", item.service);
    window.location.hash = "#/booking";
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      const profileToSave = { ...formData, avatar };
      localStorage.setItem("luxe_profile", JSON.stringify(profileToSave));
      showToast("Profile updated successfully!");
    }, 1200);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-5 pt-28">
        {toastMsg && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-300 rounded-full bg-coal px-6 py-3 text-sm font-medium text-gold shadow-2xl">
            {toastMsg}
          </div>
        )}
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl text-center border border-line/10">
          <h2 className="font-serif text-3xl font-bold text-ink">
            {isSignUp ? "Join Luxe Haven" : "Welcome Back"}
          </h2>
          <p className="mt-2 text-sm text-body">
            {isSignUp 
              ? "Create an account to manage your appointments." 
              : "Sign in to manage your appointments and settings."}
          </p>
          <form className="mt-8 space-y-5 text-left" onSubmit={handleLogin}>
            {isSignUp && (
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Full Name</label>
                <input type="text" required value={loginName} onChange={e => setLoginName(e.target.value)} className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-3 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Enter your full name" />
              </div>
            )}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Email Address</label>
              <input type="email" required value={loginEmail} onChange={e => setLoginEmail(e.target.value)} className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-3 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Password</label>
              <input type="password" required value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-3 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn-gold !w-full justify-center !py-3 !mt-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>
          <p className="mt-6 text-[12px] text-body">
            {isSignUp ? (
              <>Already have an account? <button type="button" onClick={() => setIsSignUp(false)} className="text-gold hover:underline">Sign In</button></>
            ) : (
              <>Don't have an account? <button type="button" onClick={() => setIsSignUp(true)} className="text-gold hover:underline">Sign Up</button></>
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-28 pb-20 md:pt-36 md:pb-24">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-300 rounded-full bg-coal px-6 py-3 text-sm font-medium text-gold shadow-2xl">
          {toastMsg}
        </div>
      )}

      {/* Reschedule Modal */}
      {rescheduleBookingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm">
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setRescheduleBookingId(null)} />
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setRescheduleBookingId(null)}
              className="absolute right-4 top-4 text-line hover:text-gold transition-colors"
            >
              <IconX className="h-5 w-5" />
            </button>
            <h3 className="font-serif text-2xl text-ink">Reschedule</h3>
            <p className="mt-1 text-[13px] text-body">Select a new date and time for your appointment.</p>
            
            <form onSubmit={confirmReschedule} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">New Date</label>
                <input 
                  type="text" 
                  required 
                  value={newDate} 
                  onChange={(e) => setNewDate(e.target.value)} 
                  placeholder="e.g. Oct 15, 2026"
                  className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">New Time</label>
                <input 
                  type="text" 
                  required 
                  value={newTime} 
                  onChange={(e) => setNewTime(e.target.value)} 
                  placeholder="e.g. 3:00 PM"
                  className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <button type="submit" className="btn-gold mt-2 w-full justify-center">
                Confirm Reschedule
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Upgrade Membership Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setShowUpgradeModal(false)}
              className="absolute right-4 top-4 text-body hover:text-ink transition-colors"
            >
              <IconX className="h-6 w-6" />
            </button>
            {!checkoutTier ? (
              // Plan Selection Step
              <div>
                 <h3 className="font-serif text-2xl font-bold text-ink mb-2">Upgrade Your Membership</h3>
                 <p className="text-body text-[14px] mb-6">Select a luxury tier to unlock exclusive benefits.</p>
                 <div className="grid sm:grid-cols-3 gap-4">
                    {UPGRADE_PLANS.map(plan => (
                      <div key={plan.name} className="border border-line/40 rounded-xl p-5 flex flex-col items-start bg-cream/30 hover:border-gold/50 transition">
                         <h4 className="font-bold text-ink">{plan.name}</h4>
                         <p className="font-serif text-xl text-gold mt-1 mb-4">{plan.price}</p>
                         <ul className="text-[12px] text-body space-y-2 mb-6 flex-1">
                           {plan.benefits.map((b, i) => <li key={i} className="flex gap-2"><IconSparkle className="h-3 w-3 text-gold shrink-0 mt-0.5"/>{b}</li>)}
                         </ul>
                         <button onClick={() => setCheckoutTier(plan)} className="btn-line w-full !py-2 text-[12px]">Select</button>
                      </div>
                    ))}
                 </div>
              </div>
            ) : (
              // Checkout Step
              <div className="max-w-md mx-auto py-4">
                 <button onClick={() => setCheckoutTier(null)} className="text-[11px] font-bold uppercase tracking-widest text-body hover:text-ink mb-6 flex items-center gap-1">
                   &larr; Back to Plans
                 </button>
                 <h3 className="font-serif text-2xl font-bold text-ink mb-1">Secure Checkout</h3>
                 <p className="text-body text-[14px] mb-6">You are upgrading to <span className="font-bold text-ink">{checkoutTier.name}</span> for {checkoutTier.price}.</p>
                 <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Card Number</label>
                      <input type="text" placeholder="**** **** **** 4242" value={mockCard} onChange={e => setMockCard(e.target.value)} className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                         <label className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">Expiry</label>
                         <input type="text" placeholder="MM/YY" className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                       </div>
                       <div>
                         <label className="block text-[11px] font-bold uppercase tracking-widest text-ink mb-2">CVC</label>
                         <input type="text" placeholder="123" className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                       </div>
                    </div>
                 </div>
                 <button onClick={() => handlePurchase(checkoutTier.name)} className="btn-gold w-full py-3">Confirm Purchase</button>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        
        {/* Header Profile Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-xl md:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="group relative h-24 w-24 shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-amber-600/30 md:h-32 md:w-32 mx-auto md:mx-0"
            >
              <img 
                src={avatar} 
                alt={`${formData.firstName} ${formData.lastName}`} 
                className="h-full w-full object-cover transition duration-300 group-hover:opacity-40" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-ink bg-cream/90 px-2 py-1 rounded">Edit</span>
              </div>
              <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleAvatarChange} />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold text-ink md:text-4xl">{formData.firstName} {formData.lastName}</h1>
              <p className="mt-1 text-[14px] text-body">{formData.email}</p>
              <div className="mt-3">
                <span className="inline-block bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                  {membershipTier}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-row items-center gap-3 shrink-0">
            <button 
              onClick={() => { setShowUpgradeModal(true); setCheckoutTier(null); }}
              className="btn-line !py-2.5 !px-5 text-[12px] border-gold text-golddark hover:bg-gold/10 transition-colors"
            >
              Upgrade Plan
            </button>
            <button onClick={handleSignOut} className="btn-line !py-2.5 !px-5 text-[12px]">
              Sign Out
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex border-b border-line/20">
          {(["bookings", "favorites", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-[12px] font-bold uppercase tracking-widest transition-colors ${
                activeTab === tab ? "border-b-2 border-gold text-gold" : "text-body hover:text-gold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 animate-in fade-in duration-300">
          {/* BOOKINGS */}
          {activeTab === "bookings" && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-ink mb-6">Your Appointments</h2>
              {appointments.map((bk) => (
                <div key={bk.id} className="flex flex-col sm:flex-row justify-between gap-4 rounded-xl bg-white p-5 shadow-[0_4px_20px_-10px_rgba(43,33,40,0.1)] border border-line/10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                        bk.status === 'Upcoming' ? 'bg-emerald-100 text-emerald-800' : 
                        bk.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {bk.status}
                      </span>
                      <span className="text-[12px] text-body font-mono">{bk.id}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ink">{bk.service}</h3>
                    <p className="text-[13px] text-body mt-1">With {bk.stylist}</p>
                    <div className="flex items-center gap-4 mt-3 text-[12px] font-medium text-golddark">
                      <span className="flex items-center gap-1"><IconClock className="h-3.5 w-3.5" /> {bk.date} {bk.time ? `at ${bk.time}` : ""}</span>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-end gap-2 shrink-0">
                    {bk.status === "Upcoming" || bk.status === "UPCOMING" ? (
                      <>
                        <button onClick={() => openRescheduleModal(bk.id)} className="btn-gold !py-2 !px-4 text-[11px]">Reschedule</button>
                        <button onClick={() => handleCancelBooking(bk.id)} className="btn-line !py-2 !px-4 text-[11px]">Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleRemoveAppointment(bk.id)} className="text-red-500 hover:text-red-700 border border-red-200 hover:border-red-400 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-widest transition-colors">
                          Remove
                        </button>
                        <button onClick={() => handleRebook(bk)} className="btn-line !py-2 !px-4 text-[11px]">Rebook</button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAVORITES */}
          {activeTab === "favorites" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-6">Saved Treatments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {SERVICE_TABS[0].items.slice(0, 2).map((svc, i) => (
                  <div key={i} className="flex gap-4 rounded-xl bg-white p-4 shadow-[0_4px_20px_-10px_rgba(43,33,40,0.1)] border border-line/10 transition hover:border-gold/30">
                    <img src={svc.img} alt={svc.title} className="h-24 w-24 shrink-0 rounded-lg object-cover" />
                    <div className="flex flex-col justify-center">
                      <h3 className="font-serif text-md font-bold text-ink leading-tight">{svc.title}</h3>
                      <p className="text-[12px] text-golddark font-medium mt-1">{svc.price} • {svc.time}</p>
                      <a href="#/booking" className="mt-3 text-left text-[11px] font-bold uppercase tracking-widest text-gold hover:underline">
                        Book Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SETTINGS */}
          {activeTab === "settings" && (
            <div className="max-w-2xl rounded-xl bg-white p-6 md:p-8 shadow-[0_4px_20px_-10px_rgba(43,33,40,0.1)] border border-line/10">
              <h2 className="font-serif text-2xl font-bold text-ink mb-6">Account Settings</h2>
              <form className="space-y-5" onSubmit={handleSaveSettings}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">First Name</label>
                    <input name="firstName" type="text" value={formData.firstName} onChange={handleInputChange} required className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Last Name</label>
                    <input name="lastName" type="text" value={formData.lastName} onChange={handleInputChange} required className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Email Address</label>
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-golddark mb-2">Phone Number</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required className="w-full rounded-md border border-line/20 bg-cream/30 px-4 py-2.5 text-[14px] text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
                </div>
                <div className="pt-4 border-t border-line/10">
                  <button type="submit" disabled={isSaving} className="btn-gold !w-full sm:!w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
