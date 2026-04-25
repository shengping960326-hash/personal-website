import { motion } from 'motion/react';
import { useEffect } from 'react';
import { 
  Mail, Calendar, Anchor, Ship, User, Briefcase, 
  ChevronRight, BookOpen, GraduationCap, Award, 
  Monitor, CheckCircle2 
} from 'lucide-react';

const portfolioData = {
  name: "張勝評 Andrew",
  shortTitle: "立志成為優秀的航海人員",
  degree: "高科大航海科 ． 五年級學生",
  email: "shengping960326@gmail.com",
  birthdate: "2003-03-26",
  bio: [
    "我是張勝評，來自高科大航海科五年級的學生。從小因家人工作影響，對船隻與大海有濃厚的興趣，因此選擇就讀航海科，並希望能在未來成為一名優秀的航海人員。",
    "在學期間，我曾擔任班代及系學會活動組的職位。在系學會內與學長姐們合作籌辦迎新活動，培養了活動企劃與執行能力。此外，我也培養了良好的抗壓性與團隊合作精神，這幫助我在面對充滿挑戰的航海工作時，能冷靜應對並與同事順利合作。",
    "除了課業，我也將所學的知識應用在實務中。曾經在餐飲業打工與擔任7-11店員，雖然不是本科專業，但也學習到了顧客經營與商品管理，並在過程中訓練了自己的耐心與服務熱忱。",
    "未來，我希望考取各項航海證照，不斷提升自己的專業能力，為成為優秀的航海人員做準備。我期許自己能在工作中不斷學習成長，並以熱忱與專業為航海產業貢獻一份心力。"
  ],
  experience: [
    {
      period: "2023-09 - 現在",
      company: "7-11 便利商店",
      role: "門市服務人員",
      details: [
        "主要工作內容包括收銀結帳、協助顧客服務與商品管理。",
        "平時負責操作收銀機、代收繳費、儲值與兌換等服務，並協助顧客查詢商品或解決問題。",
        "負責補貨上架、整理排面、檢查商品效期，確保賣場整潔與商品充足。"
      ]
    },
    {
      period: "2022-03 - 2023-07",
      company: "餐飲業",
      role: "內場人員",
      details: [
        "負責備料、食材處理與餐點製作作業。",
        "清洗餐具與維持工作環境整潔。",
        "控管出餐速度、盤點備料庫存作業，確保維持備餐區的整潔與作業順暢。"
      ]
    }
  ],
  projects: [
    {
      title: "高雄出發：花東四人行「極簡預算版」",
      description: "旅遊企劃與預算管理專案",
      image: "https://images.unsplash.com/photo-1596422846543-7dc3da733023?auto=format&fit=crop&q=80&w=1200",
      days: [
        {
          day: "Day 1：台東市區 (耍廢開端)",
          detail: "中午抵達台東，下午前往鐵花村音樂聚落感受藝文氣息，晚上逛台東觀光夜市品嚐在地美食。"
        },
        {
          day: "Day 2：山線池上 (拍照打卡)",
          detail: "上午前往伯朗大道騎單車享受田園風光，中午享用道地池上飯包，下午前往大坡池散步賞景。"
        },
        {
          day: "Day 3：海線花蓮 (看海放空)",
          detail: "沿著台11線海岸公路北上，沿途停靠石梯坪，下午抵達七星潭聽海浪聲，晚間於東大門夜市用餐。"
        },
        {
          day: "Day 4：慢慢賦歸 (深度收心)",
          detail: "上午於花蓮市區採買名產伴手禮，中午過後搭乘火車或開車踏上歸途，帶著滿滿回憶返回高雄。"
        }
      ]
    }
  ],
  education: {
    period: "2020-07 - 2025-06",
    school: "國立高雄科技大學",
    department: "航海科",
    status: "預計畢業"
  },
  skills: {
    languages: [
      { name: "英文", level: "TOEIC 570" },
      { name: "台語", level: "聽得懂阿公阿嬤在講什麼" }
    ],
    professional: ["顧客關係管理", "顧客體驗優化", "網路經營維護", "活動企劃執行", "團隊合作"],
    computer: ["Word", "Excel", "Outlook", "PowerPoint"],
    certifications: ["基礎搜救證照", "滅火訓練", "救生艇筏", "基本安全訓練"]
  }
};

const SectionHeader = ({ icon: Icon, title, id }: { icon: any, title: string, id: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex items-center gap-3 mb-12 relative"
    id={id}
  >
    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm border border-blue-200/50">
      <Icon className="w-5 h-5" />
    </div>
    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{title}</h2>
  </motion.div>
);

const TimelineItem = ({ period, title, subtitle, details }: { 
  period: string; title: string; subtitle: string; details: string[] 
}) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="relative pl-8 pb-12 last:pb-0 border-l-2 border-blue-200"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-50 shadow-sm" />
    <span className="text-sm font-bold text-blue-600 tracking-wider mb-2 block uppercase">{period}</span>
    <h3 className="text-xl font-bold text-slate-800 leading-tight mb-1">{title}</h3>
    <h4 className="text-md font-medium text-slate-500 mb-4">{subtitle}</h4>
    <ul className="space-y-3">
      {details.map((d, i) => (
        <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed font-medium">
          <ChevronRight className="w-4 h-4 flex-shrink-0 text-blue-400 mt-0.5" />
          <span>{d}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillBento = ({ icon: Icon, title, items }: { icon: any, title: string, items: any[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-6 md:p-8 bg-white border border-slate-200/60 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
  >
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2.5">
      {items.map((item, i) => (
        <div key={i} className="px-4 py-2 bg-slate-50/80 border border-slate-100 rounded-xl text-sm font-medium text-slate-700 shadow-sm hover:bg-white transition-colors">
          {typeof item === 'string' ? item : (
            <span>
              <span className="font-bold text-slate-800">{item.name}</span>
              <span className="text-blue-600/50 mx-2">|</span> 
              <span className="text-slate-500">{item.level}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl text-slate-800 tracking-tight flex items-center gap-2 group">
             <div className="p-1.5 bg-blue-600 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
                <Anchor className="w-5 h-5" />
             </div>
             <span>Andrew</span>
          </a>
          <div className="hidden md:flex gap-8">
            {['關於我', '打工作品', '學歷與技能'].map((item, i) => (
              <a 
                key={i}
                href={`#section-${i}`} 
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              
              <div className="flex-1 space-y-8 order-2 md:order-1 text-center md:text-left">
                <motion.div 
                  initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm shadow-sm"
                >
                  <Ship className="w-4 h-4 fill-blue-600/20" />
                  <span>{portfolioData.shortTitle}</span>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.1}} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter">
                    {portfolioData.name.split(' ')[0]}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      {portfolioData.name.split(' ')[1]}
                    </span>
                  </motion.h1>
                  <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.2}} className="text-xl md:text-2xl text-slate-500 font-medium tracking-tight">
                    {portfolioData.degree}
                  </motion.p>
                </div>
                
                <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all font-bold shadow-lg shadow-slate-900/20 active:scale-95">
                    <Mail className="w-5 h-5" />
                    聯繫信箱
                  </a>
                  <div className="flex items-center gap-2.5 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold shadow-sm">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    {portfolioData.birthdate}
                  </div>
                </motion.div>
              </div>
              
              <div className="w-64 h-64 md:w-96 md:h-96 relative order-1 md:order-2 flex-shrink-0 mx-auto md:mx-0">
                <motion.div 
                  initial={{opacity:0, scale:0.8, rotate: -5}} animate={{opacity:1, scale:1, rotate: 0}} transition={{delay: 0.2, type: 'spring', bounce: 0.4}}
                  className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-100 rounded-[3rem] transform rotate-3" 
                />
                <motion.div 
                  initial={{opacity:0, scale:0.9, rotate: 5}} animate={{opacity:1, scale:1, rotate: 0}} transition={{delay: 0.3, type: 'spring', bounce: 0.4}}
                  className="absolute inset-0 bg-white rounded-[3rem] transform -rotate-3 border border-slate-100 shadow-xl overflow-hidden" 
                >
                  <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800" alt="Profile" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader icon={User} title="關於我" id="section-0" />
            <motion.div 
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-200/60 relative overflow-hidden group"
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10 group-hover:bg-blue-100/50 transition-colors duration-700" />
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                {portfolioData.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Projects Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader icon={Briefcase} title="經歷與作品" id="section-1" />
            
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Working Experience */}
              <div className="lg:col-span-5">
                <div className="pt-2 md:pl-4">
                  {portfolioData.experience.map((exp, i) => (
                    <TimelineItem key={i} period={exp.period} title={exp.company} subtitle={exp.role} details={exp.details} />
                  ))}
                </div>
              </div>

              {/* Featured Project */}
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-white border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-64 relative overflow-hidden group">
                    <img src={portfolioData.projects[0].image} alt="Project featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent flex flex-col justify-end p-8">
                       <p className="text-blue-300 font-bold text-sm tracking-widest uppercase mb-2">大學專題報告</p>
                       <h3 className="text-white text-2xl font-extrabold">{portfolioData.projects[0].title}</h3>
                       <p className="text-slate-300 font-medium mt-1">{portfolioData.projects[0].description}</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6 bg-slate-50">
                    {portfolioData.projects[0].days.map((day, i) => (
                      <div key={i} className="flex gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-blue-600 font-extrabold shadow-sm">
                          D{i+1}
                        </div>
                        <div className="pt-0.5">
                          <h4 className="font-bold text-slate-800 text-lg">{day.day}</h4>
                          <p className="text-slate-500 mt-2 text-sm leading-relaxed font-medium">{day.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Education & Skills Section */}
        <section className="py-20 px-6 mb-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeader icon={Award} title="學歷與專長" id="section-2" />
            
            {/* Education Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 p-1 md:p-1.5 rounded-[2.5rem] mb-12 shadow-xl shadow-blue-900/10"
            >
              <div className="bg-white px-8 py-8 md:py-10 rounded-[2.25rem] flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex flex-shrink-0 items-center justify-center">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-xs tracking-wider uppercase mb-3">
                    {portfolioData.education.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">{portfolioData.education.school}</h3>
                  <div className="text-slate-500 text-lg font-medium">{portfolioData.education.department} <span className="mx-2 text-slate-300">•</span> <span className="text-blue-600">{portfolioData.education.status}</span></div>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <SkillBento icon={BookOpen} title="語言能力" items={portfolioData.skills.languages} />
              <SkillBento icon={Briefcase} title="專業技能" items={portfolioData.skills.professional} />
              <SkillBento icon={Monitor} title="電腦技能" items={portfolioData.skills.computer} />
              <SkillBento icon={CheckCircle2} title="專業證照" items={portfolioData.skills.certifications} />
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6 text-center text-slate-400 relative z-10 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 bg-slate-800/50 px-6 py-3 rounded-2xl">
            <Anchor className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold tracking-tight text-slate-200">Andrew Zhang</span>
          </div>
          <p className="mb-8 font-medium text-slate-500">{portfolioData.email}</p>
          <p className="text-sm">© {new Date().getFullYear()} 張勝評 Andrew. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
