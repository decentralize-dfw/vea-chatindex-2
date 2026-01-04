import React, { useState } from 'react';
import ChatWidget from './components/ChatWidget';
import { MENU_BG_IMAGE } from './constants';

type PageName = 'HOME' | 'EDITORIAL' | 'DEMO' | 'MEET';

interface PageState {
  name: PageName;
  url: string;
}

const App: React.FC = () => {
  const [page, setPage] = useState<PageState>({ name: 'HOME', url: 'https://virtuallyeverafter.work/home' });
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigate = (name: PageName, url: string) => {
    setPage({ name, url });
    setIsNavOpen(false);
  };

  return (
    <main className="w-full h-full relative font-telegrama uppercase">
      {/* NAVIGATION OVERLAY */}
      <div className="fixed top-[15px] left-[15px] w-[110px] z-[10000] flex flex-col select-none">
        <a href="#" className="w-full mb-2 block">
          <img 
            src="https://raw.githubusercontent.com/decentralize-dfw/vea-files/main/veacrop.png" 
            className="w-full h-auto block" 
            alt="VEA"
          />
        </a>
        
        <div 
          className={`
            w-full border border-black bg-white relative rounded-lg cursor-pointer transition-all duration-200
            ${isNavOpen 
              ? 'rounded-b-none bg-[length:110px_auto] bg-top-center text-white border-b-0' 
              : ''}
          `}
          style={isNavOpen ? { backgroundImage: MENU_BG_IMAGE, textShadow: '1px 1px 2px #000' } : {}}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className="px-2 font-bold text-[9px] flex justify-between items-center h-[28px]">
            {page.name} <span>{isNavOpen ? '▲' : '▼'}</span>
          </div>
          
          {isNavOpen && (
            <ul className="list-none m-0 p-0 border border-black border-t-0 bg-white w-[calc(100%+2px)] absolute -left-[1px] top-[27px] rounded-b-lg shadow-xl z-[10001]">
              {[
                { name: 'HOME', url: 'https://virtuallyeverafter.work/home' },
                { name: 'EDITORIAL', url: 'https://virtuallyeverafter.work/capsule' },
                { name: 'DEMO', url: 'https://virtuallyeverafter.work/demo' },
                { name: 'MEET', url: 'https://virtuallyeverafter.work/book' }
              ].map((item) => (
                <li 
                  key={item.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(item.name as PageName, item.url);
                  }}
                  className="p-2.5 font-bold text-[9px] text-black border-b border-black/5 bg-white transition-colors hover:bg-black hover:text-white last:border-b-0 last:rounded-b-lg"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ENGINE VIEWPORT (IFRAME) */}
      <div className="fixed inset-0 w-full h-full bg-white z-0">
        <iframe 
          src={page.url} 
          className="w-full h-full border-none"
          title="VEA ENGINE VIEWPORT"
        />
      </div>

      {/* FOOTER */}
      <footer className="fixed bottom-0 left-0 w-full h-[35px] bg-white/30 backdrop-blur-md flex items-center justify-center text-[10px] z-[9000] border-t border-black/5">
        <a href="mailto:deniz@virtuallyeverafter.xyz" className="no-underline text-inherit font-bold mx-2.5">
          deniz@virtuallyeverafter.xyz
        </a>
        <span className="hidden sm:inline mx-2 opacity-30">| LÜKSEMBURG |</span>
        <a 
          href="https://virtuallyeverafter.work/legal" 
          target="_blank" 
          rel="noreferrer"
          className="no-underline text-inherit font-bold mx-2.5"
        >
          YASAL UYARI
        </a>
      </footer>

      {/* LEGAL WATERMARK */}
      <div className="fixed bottom-2.5 right-5 z-[9001] text-[9px] opacity-60 hidden sm:block pointer-events-none">
        © 2025 VIRTUALLY EVER AFTER
      </div>

      <ChatWidget />
    </main>
  );
};

export default App;