import React, { useEffect } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/scalewithhuzaif';
const EMAIL = 'scalewithhuzaif@gmail.com';

const HOW_STEPS = [
  {
    title: 'Founder to Founder Execution Call',
    items: [
      'We hop on a Strategy call.',
      'Map out your current situation.',
      'Rebuild the OFFER which sells.',
      'Executional action plan for your Brand.',
    ],
  },
  {
    title: 'Content Planning & Viral Scripting',
    items: [
      "We map your entire month's content calendar.",
      'We break down your ideas and rebuild them using proven psychology, strong storytelling, and content strategies that keep people watching.',
      'You get ready to use Viral Scripts.',
    ],
  },
  {
    title: 'Production',
    items: [
      'We produce high-quality reels made to grab attention, keep people watching, and turn viewers into customers.',
      'Your only work is to record the Content.',
      'We edit the Content professionally which speaks your brand.',
    ],
  },
  {
    title: 'Uploading & Optimize',
    items: [
      'We upload the content on the social media platform.',
      'Weekly reports show what’s working, what people ignore, and how we make your content better. We focus more on the strategies that drive strong engagement.',
    ],
  },
];

const StarRating = ({ rating = 4.5, className = '' }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="inline-flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < fullStars) {
            return (
              <span key={i} className="text-lg leading-none text-yellow-400">
                ★
              </span>
            );
          }
          if (i === fullStars && hasHalf) {
            return (
              <span key={i} className="relative inline-block text-lg leading-none">
                <span className="text-yellow-400/25">★</span>
                <span className="absolute left-0 top-0 w-[50%] overflow-hidden text-yellow-400">★</span>
              </span>
            );
          }
          return (
            <span key={i} className="text-lg leading-none text-yellow-400/25">
              ★
            </span>
          );
        })}
      </span>
      <span className="font-bold text-white font-['Space_Grotesk']">{rating}/5</span>
    </div>
  );
};

const CtaButton = ({ children, className = '' }) => (
  <button
    type="button"
    className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] px-12 py-4 text-base md:text-lg font-bold font-['Outfit'] text-white transition-all duration-500 hover:bg-right hover:scale-105 shadow-[0_0_40px_rgba(0,150,255,0.35)] hover:shadow-[0_0_60px_rgba(0,150,255,0.55)] bg-[length:200%_100%] ${className}`}
  >
    {children}
  </button>
);

const App = () => {
  const screenshotImages = [
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.52.jpeg',
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.51.jpeg',
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.51%20(3).jpeg',
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.51%20(2).jpeg',
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.51%20(1).jpeg',
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.50.jpeg',
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.50%20(2).jpeg',
    '/WhatsApp%20Image%202026-05-17%20at%2017.34.50%20(1).jpeg',
  ];

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      try {
        const gsap = (await import('gsap')).default;
        if (!mounted || !gsap) return;
        const cards = document.querySelectorAll('.how-step');
        gsap.fromTo(cards, { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.65, ease: 'power3.out' });
        const numbers = document.querySelectorAll('.how-number');
        gsap.fromTo(numbers, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, duration: 0.55, ease: 'back.out(1.4)' });
      } catch {
        const cards = document.querySelectorAll('.how-step');
        cards.forEach((c, i) => setTimeout(() => c.classList.add('fade-up'), i * 100));
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="bg-[#010101] text-white min-h-screen overflow-x-hidden font-sans selection:bg-[#0096ff]/30 relative pb-24">
      <header className="pt-6 pb-4 flex items-center justify-between px-6 md:px-16 lg:px-28 z-50 border-b border-white/5 bg-[#010101]/80 backdrop-blur-md sticky top-0">
        <div className="text-2xl md:text-3xl font-righteous tracking-wider text-white drop-shadow-[0_0_8px_rgba(41,116,210,0.8)]">
          SCALE WITH HUZAIF
        </div>
        <CtaButton className="hidden md:inline-flex !px-8 !py-3 !text-sm">Book Your Spot</CtaButton>
      </header>

      <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 px-6 text-center max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/60 via-[#010101]/80 to-[#010101]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[40rem] rounded-full bg-[#0072e1]/30 blur-[150px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tight leading-snug drop-shadow-2xl mb-4">
            Scale your Social Media Brand and make your
            <br className="hidden md:block" />
            <span className="text-cyan-300 font-righteous tracking-wide">Organic Acquisition Stress‑Free.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 font-outfit">
            Use the same growth systems successful creators use to grow their brand and earn more without chasing{' '}
            <strong>viral hacks</strong>.
          </p>

          <CtaButton className="mt-10 !px-14 !py-5 !text-xl">Scale Your Page Now</CtaButton>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 bg-black/40 backdrop-blur-md border border-white/10 w-fit mx-auto px-8 py-4 rounded-full shadow-2xl shadow-[#0072e1]/20">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden shadow-md">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-base font-medium tracking-wider font-grotesk text-gray-300">
              <span className="font-bold text-white text-lg">150+</span> Business Owners
            </div>
            <StarRating rating={4.5} />
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mx-auto max-w-3xl bg-black/80 border border-white/10 rounded-2xl p-6">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden" style={{ paddingTop: '56.25%' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-black/60 flex items-center justify-center text-white text-lg font-outfit">
                  Video placeholder — add your VSL here later
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-righteous text-2xl md:text-3xl tracking-wide text-white electric-glow-text">
                Making online growth better and easier
              </p>
            </div>
            <div className="text-center mt-6">
              <CtaButton>Book a Strategy Call</CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#04060a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-black font-outfit mb-12 tracking-tight">
            How it works
          </h2>

          <div className="flex flex-col gap-5">
            {HOW_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="how-step group flex gap-5 p-6 md:p-7 rounded-2xl border border-white/10 bg-black/40 text-left transition-all duration-300 cursor-default hover:border-[#0096ff] hover:bg-[#0096ff]/5 hover:shadow-[0_0_24px_rgba(0,150,255,0.15)] focus-within:border-[#0096ff]"
              >
                <div
                  className="how-number flex shrink-0 items-center justify-center h-12 w-12 rounded-full bg-[#0096ff] text-white font-bold text-lg shadow-[0_0_16px_rgba(0,150,255,0.4)] group-hover:bg-[#2974d2] group-hover:scale-105 transition-all duration-300"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg md:text-xl text-white font-grotesk group-hover:text-[#0096ff] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1.5 font-outfit text-sm md:text-base leading-relaxed">
                    {step.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-grotesk text-white tracking-wide">
              You film. We take care of everything else.
            </h3>
            <CtaButton>Book a Strategy Call</CtaButton>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 text-center bg-black/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[100vw] bg-[#0072e1]/10 blur-[200px] -z-10 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-black/50 backdrop-blur-2xl border border-[#0096ff]/20 rounded-[2rem] p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] shadow-[#0072e1]/10">
            <p className="font-grotesk bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-sm font-bold tracking-widest text-transparent md:text-lg mb-6">
              THE ULTIMATE INSTAGRAM AGENCY
            </p>
            <h2 className="text-4xl md:text-6xl font-outfit font-black tracking-tighter mb-8 drop-shadow-xl">
              We make you digitally <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-transparent font-righteous tracking-wide">
                OMNIPRESENT.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
              {[
                { icon: 'military_tech', title: 'Aggressive Strategy', desc: "Growing an Instagram page isn't about luck—it's about deploying calculated, high-impact strategies that force the algorithm to favor your content." },
                { icon: 'bolt', title: 'Algorithm Manipulation', desc: 'We engineer our reels and posts with psychological hooks and retention mechanics that artificially boost watch time and engagement.' },
                { icon: 'group_add', title: 'Community Building', desc: "We don't just grow empty follower counts; we build an engaged community that trusts your authority and eagerly buys your offers." },
              ].map((card) => (
                <div key={card.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-[#0096ff] mb-4">{card.icon}</span>
                  <h3 className="text-xl font-bold font-grotesk mb-2">{card.title}</h3>
                  <p className="text-gray-400 font-outfit">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 overflow-hidden border-t border-b border-white/10 bg-[#050a14]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30rem] w-[60rem] bg-[#0072e1]/20 blur-[150px] -z-10 pointer-events-none" />
        <div className="text-center px-6 mb-16 max-w-4xl mx-auto">
          <p className="font-grotesk bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-base font-bold tracking-widest text-transparent md:text-xl mb-4">
            UNDENIABLE PROOF
          </p>
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wider drop-shadow-lg mb-6">
            CLIENT <span className="text-[#0096ff]">RESULTS</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {screenshotImages.map((src, idx) => (
              <div
                key={idx}
                className="aspect-[9/16] rounded-xl md:rounded-[2rem] overflow-hidden border-[4px] border-white/10 bg-black shadow-2xl hover:border-[#0096ff]/50 hover:-translate-y-2 transition-all duration-300 relative group"
              >
                <img
                  src={src}
                  alt={`Client Result Screenshot ${idx + 1}`}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop';
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <CtaButton className="!px-8 !py-3 !text-base">View All Client Results</CtaButton>
          </div>

          <div className="mt-10 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-outfit font-medium leading-relaxed text-gray-200">
              Don&apos;t just take our word for it. Here is the raw data from the mobile devices of the clients we&apos;ve scaled. Look at the analytics, look at the growth, and imagine this happening to your page.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-grotesk bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-sm font-bold tracking-widest text-transparent md:text-lg mb-6">
              HOW WE DO IT
            </p>
            <h2 className="text-4xl md:text-6xl font-outfit font-black tracking-tighter drop-shadow-md mb-6">
              We handle <br />
              <span className="bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-transparent font-righteous tracking-wide">
                EVERYTHING.
              </span>
            </h2>
            <p className="text-lg font-outfit text-gray-400 leading-relaxed mb-8">
              We take the heavy lifting completely off your plate. You focus on your business; we focus on making you viral.
            </p>
            <button
              type="button"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#0072e1]/20 border border-[#0096ff]/50 px-8 py-3 text-base font-bold font-outfit text-white transition-all hover:bg-[#0072e1]/40 hover:border-[#0096ff]"
            >
              Discover Our Process
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { icon: 'rocket_launch', title: 'Page Handling', desc: 'Full-service management. We post, engage, and utilize aggressive strategies.' },
              { icon: 'movie_edit', title: 'Viral Reels', desc: 'We script, edit, and produce high-retention cinematic content.' },
              { icon: 'psychology', title: 'Psychological Hooks', desc: 'Using human psychology and retention science that force people to watch.' },
              { icon: 'query_stats', title: 'Data Optimization', desc: 'Weekly analytics breakdowns. We double down on what works and scale.' },
            ].map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 p-6 md:p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg hover:border-[#0096ff]/50 transition-all duration-300"
              >
                <div className="h-14 w-14 shrink-0 rounded-xl bg-gradient-to-br from-[#2974d2] to-[#0072e1] border border-white/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl text-white">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-grotesk">{service.title}</h3>
                  <p className="text-gray-400 text-sm font-outfit leading-relaxed mt-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#010101] to-black border-y border-white/5">
        <div className="text-center px-6 mb-12">
          <p className="font-grotesk bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-sm font-bold tracking-widest text-transparent md:text-lg mb-4 uppercase">
            Defying Limits
          </p>
          <h2 className="text-4xl md:text-6xl font-outfit font-black tracking-tight drop-shadow-lg">
            People Who Chose to{' '}
            <span className="bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-transparent font-righteous tracking-wide">
              Dominate.
            </span>
          </h2>
        </div>

        <div className="relative flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee-left gap-6 hover:[animation-play-state:paused]">
            {[
              { name: '@FitnessEmpire', text: 'They took my dead Instagram page from 2k to 50k followers in 3 months. The ROI is absolutely insane.' },
              { name: '@CryptoDaily', text: 'Hands down the best digital marketing agency. Their reels editing is cinematic and holds attention forever.' },
              { name: '@RealEstatePro', text: 'I struggled to get engagement. Now my DMs are flooded with leads every single day. Pure magic.' },
              { name: '@AestheticsBrand', text: 'We handed them the keys to our Instagram, and revenue doubled in weeks. Zero guesswork.' },
            ]
              .concat([
                { name: '@FitnessEmpire', text: 'They took my dead Instagram page from 2k to 50k followers in 3 months. The ROI is absolutely insane.' },
                { name: '@CryptoDaily', text: 'Hands down the best digital marketing agency. Their reels editing is cinematic and holds attention forever.' },
                { name: '@RealEstatePro', text: 'I struggled to get engagement. Now my DMs are flooded with leads every single day. Pure magic.' },
                { name: '@AestheticsBrand', text: 'We handed them the keys to our Instagram, and revenue doubled in weeks. Zero guesswork.' },
              ])
              .map((t, i) => (
                <div key={`${t.name}-${i}`} className="w-80 p-8 rounded-[2rem] bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl hover:border-[#0096ff]/30 transition-colors shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-[#0072e1] flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-sm">verified</span>
                    </div>
                    <div className="text-base font-bold font-grotesk text-white">{t.name}</div>
                  </div>
                  <p className="text-gray-300 text-sm font-outfit leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-14 text-center px-6">
          <p className="font-righteous text-2xl md:text-4xl tracking-wide text-white max-w-3xl mx-auto electric-glow-text">
            Making online growth better and easier
          </p>
        </div>
      </section>

      <section className="relative py-24 md:py-40 text-center px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[50rem] bg-[#0072e1]/20 blur-[200px] -z-10 pointer-events-none" />
        <div className="mx-auto max-w-4xl p-12 md:p-24 rounded-[3rem] bg-black/50 backdrop-blur-2xl border border-[#0096ff]/30 shadow-[0_0_80px_rgba(0,114,225,0.2)] relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-righteous tracking-wide mb-8 drop-shadow-md relative z-10 leading-tight">
            Ready to take over
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#2974d2] via-[#0096ff] to-[#0072e1] bg-clip-text text-transparent">
              INSTAGRAM?
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg md:text-xl font-outfit text-gray-300 mb-10 relative z-10 leading-relaxed">
            Stop letting your competitors steal your audience. We are the digital marketing agency that will make you viral, authoritative, and highly profitable.
          </p>
          <CtaButton className="relative z-10 !px-14 !py-5 !text-xl">Book Your Spot</CtaButton>
        </div>
      </section>

      <footer className="py-12 text-center px-6 border-t border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="text-3xl font-righteous tracking-widest text-white drop-shadow-[0_0_8px_rgba(0,150,255,0.5)]">
            SCALE WITH HUZAIF
          </div>
          <p className="text-gray-400 text-sm font-outfit">
            The premier Digital Marketing Agency for Instagram scaling and handling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-outfit">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#0096ff] hover:text-cyan-300 transition-colors">
              Instagram — @scalewithhuzaif
            </a>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href={`mailto:${EMAIL}`} className="text-[#0096ff] hover:text-cyan-300 transition-colors">
              {EMAIL}
            </a>
          </div>
          <p className="text-gray-600 text-xs font-outfit">© Copyright 2026 · All rights reserved</p>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#0096ff]/30 bg-[#010101]/95 backdrop-blur-md px-4 py-3">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-outfit">
          <div className="font-righteous text-sm md:text-base tracking-wide text-white hidden sm:block">
            SCALE WITH HUZAIF
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#0096ff] hover:text-white transition-colors">
              @scalewithhuzaif
            </a>
            <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-[#0096ff] transition-colors">
              {EMAIL}
            </a>
          </div>
          <CtaButton className="!px-5 !py-2 !text-xs sm:!text-sm shrink-0">Book Your Spot</CtaButton>
        </div>
      </div>
    </div>
  );
};

export default App;
