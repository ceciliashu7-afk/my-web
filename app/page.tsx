'use client';

import { ArrowDownRight, ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  ['01', 'Home 首页', '#home'], ['02', 'About 关于', '#about'], ['03', 'Projects 项目', '#projects'],
  ['04', 'Thinking 思考', '#thinking'], ['05', 'Writing 文章', '#writing'], ['06', 'Connect 联系', '#connect'],
] as const;

const projects = [
  { number:'01', name:'AI百选', type:'AI MODEL INDEX', copy:'一份持续更新的AI产品地图，帮助产品经理快速认识工具版图，完成产品与模型选型。', href:'/demos/ai-baixuan.html', preview:'/demos/ai-baixuan.html', image:null, action:'进入AI百选', tone:'cyan' },
  { number:'02', name:'成单笔记', type:'SALES REVIEW COPILOT', copy:'把客户跟进、成交复盘和下一步行动装进一套移动端工作流，让销售经验真正沉淀。', href:'/demos/deal-notes.html', preview:'/demos/deal-notes.html', image:null, action:'体验产品原型', tone:'green' },
  { number:'03', name:'wencopy', type:'MULTI-CHANNEL COPY', copy:'输入一次产品描述，生成适配小红书、抖音和朋友圈的三组差异化文案。', href:'https://copygen-chi.vercel.app/', preview:null, image:'/projects/wencopy-poster.png', action:'打开在线体验', tone:'blue' },
  { number:'04', name:'AirDoodle 指尖画梦', type:'GESTURE INTERACTION', copy:'把手举到镜头前，让空气成为画布。用视觉识别完成绘画、擦除和颜色选择。', href:'https://airdoodle-delta.vercel.app/', preview:null, image:'/projects/airdoodle-poster.png', action:'开始指尖画梦', tone:'violet' },
] as const;

function GridField({ quiet=false }:{quiet?:boolean}) {
  const vertical=['12.6%','37.5%','61.9%','86.2%']; const horizontal=['32.7%','71.4%'];
  return <div className={`grid-field ${quiet?'is-quiet':''}`} aria-hidden="true">
    {vertical.map((left,i)=><span key={left} className="grid-line-v" style={{left,animationDelay:`${600+i*100}ms`}} />)}
    {horizontal.map((top,i)=><span key={top} className="grid-line-h" style={{top,animationDelay:`${800+i*150}ms`}} />)}
    {horizontal.flatMap((top,hi)=>vertical.map((left,vi)=><span key={`${top}-${left}`} className="grid-plus" style={{top,left,animationDelay:`${1000+(hi*4+vi)*80}ms`}} />))}
  </div>;
}

function SectionTitle({index,kicker,title,copy}:{index:string;kicker:string;title:string;copy:string}){
  return <header className="section-heading reveal">
    <div><span>{index}.</span><p>{kicker}</p></div><h2>{title}</h2><p>{copy}</p>
  </header>;
}

function ProjectCard({project}:{project:typeof projects[number]}){
  return <article className={`project-card reveal tone-${project.tone}`}>
    <div className="project-meta"><span>{project.number}</span><div><p>{project.type}</p><h3>{project.name}</h3></div></div>
    <p className="project-copy">{project.copy}</p>
    <a className="project-visual" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.action}：${project.name}`}>
      {project.image ? <img src={project.image} alt={`${project.name} 项目海报`} /> : <iframe src={project.preview!} title={`${project.name}界面预览`} loading="lazy" tabIndex={-1} aria-hidden="true" />}
      <span className="project-screen"/><span className="project-open">{project.action}<ArrowUpRight/></span>
    </a>
  </article>
}

export default function Home(){
  const [menuOpen,setMenuOpen]=useState(false);
  useEffect(()=>{
    const reveals=[...document.querySelectorAll('.reveal')];
    const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible')}),{threshold:.12});
    reveals.forEach(el=>revealObserver.observe(el));
    const sections=[...document.querySelectorAll('section[id]')];
    const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-35% 0px -55% 0px'});
    sections.forEach(el=>navObserver.observe(el));
    return()=>{revealObserver.disconnect();navObserver.disconnect()};
  },[]);

  return <main className="site-shell">
    <nav className="top-nav" aria-label="主要导航">
      <a href="#home" className="wordmark"><b>Cecilia Shu</b><span>个人网站</span></a>
      <div className="desktop-nav">{navItems.map(([n,label,href],i)=><a key={label} href={href} style={{animationDelay:`${350+i*100}ms`}}><span>{n}.</span>{label}</a>)}</div>
      <button className="menu-trigger" onClick={()=>setMenuOpen(true)} aria-label="打开菜单"><Menu/></button>
    </nav>

    <div className={`mobile-menu ${menuOpen?'is-open':''}`} aria-hidden={!menuOpen}>
      <button onClick={()=>setMenuOpen(false)} aria-label="关闭菜单"><X/></button>
      <div>{navItems.map(([n,label,href])=><a key={label} href={href} onClick={()=>setMenuOpen(false)}><span>{n}.</span>{label}</a>)}</div>
      <p>[ AVAILABLE FOR AI PRODUCT OPPORTUNITIES ]</p>
    </div>

    <section id="home" className="hero-section">
      <video className="hero-video" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4" autoPlay muted loop playsInline />
      <GridField/>
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-title"><p>[ CECILIA SHU · AI PRODUCT MANAGER ]</p><h1>CECILIA SHU&apos;S<br/>PERSONAL WEBSITE</h1></div>
      <div className="hero-bottom">
        <a className="primary-cta" href="#projects"><span>✦</span> Projects 查看项目</a>
        <div className="hero-note"><strong>TURNING AI OPPORTUNITIES INTO EXPERIENCES</strong><div><h2>把AI机会做成可体验产品</h2><p>从产品拆解、模型选型到原型验证，让AI想法真正跑起来。</p><a href="#about">About me 关于我 →</a></div></div>
      </div>
    </section>

    <section id="about" className="content-section about-section">
      <GridField quiet/>
      <div className="content-wrap">
        <SectionTitle index="02" kicker="ABOUT / EXPERIENCE" title="把模型能力，变成真实业务中的产品能力" copy="四年AI产品实践，持续处理同一个问题：怎样让新能力进入用户流程，并产生可以验证的结果。"/>
        <div className="about-layout">
          <figure className="portrait-frame reveal"><img src="/media/cecilia-portrait.png" alt="Cecilia Shu 个人肖像"/><figcaption>[ CECILIA_SHU / AI PRODUCT MANAGER ]</figcaption></figure>
          <div className="experience-list">
            <article className="experience reveal"><div className="experience-top"><span>01</span><h3>伴鱼少儿英语 · AI产品经理</h3><time>2024.09 — 2026.07</time></div><p>负责AI原生交互与智能运营产品建设，围绕AI体验不稳定、复杂业务依赖人工、执行标准难统一等核心问题，推动RAG、实时语音、多模态分析与Agent能力产品化，将底层模型能力转化为可控、可评估的产品工作流。主导面向用户的AI交互产品及面向企业的智能质检产品，从产品定义、技术方案、效果评估到数据迭代建立完整闭环，推动AI能力在真实业务场景中规模化落地。</p></article>
            <article className="experience reveal"><div className="experience-top"><span>02</span><h3>中泰智本网络科技 · AI产品经理</h3><time>2022.10 — 2024.08</time></div><p>负责AI内容生产与数据智能产品建设，围绕内容生产效率、个性化服务和跨场景数据割裂等问题，主导大模型生成、RAG知识检索、知识图谱约束和智能推荐能力的产品化应用。通过用户研究、Prompt策略、质量控制体系和数据反馈闭环，将碎片化业务需求抽象为可复用的产品能力，推动AI从单点功能升级为能够持续产生业务价值的平台型解决方案。</p></article>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="content-section projects-section">
      <div className="content-wrap"><SectionTitle index="03" kicker="PROJECTS / AI NATIVE" title="可以亲手体验的AI产品探索" copy="这些项目覆盖模型选型、业务工作流、内容生成和视觉交互。每一个判断，都以可运行的产品形态接受检验。"/>
        <div className="projects-grid">{projects.map(project=><ProjectCard key={project.name} project={project}/>)}</div>
      </div>
    </section>

    <section id="thinking" className="content-section thinking-section">
      <GridField quiet/><div className="content-wrap"><SectionTitle index="04" kicker="THINKING / PRODUCT TEARDOWN" title="把感性的产品魅力，拆成可验证的设计条件" copy="LOVOT产品拆解，从情绪表达、陪伴机制、关系建立与商业模式四个角度，分析AI陪伴产品如何形成长期价值。"/>
        <article className="thinking-feature reveal">
          <a className="deck-cover" href="/thinking/lovot-product-teardown.pptx" download><img src="/thinking/lovot-cover.png" alt="LOVOT产品拆解封面"/><span>22 SLIDES <Download/></span></a>
          <div className="thinking-copy"><p className="eyebrow">[ FEATURED RESEARCH ]</p><h3>当AI不再有用</h3><p>从LOVOT看陪伴类产品的设计逻辑：一款主动放弃功能价值的产品，如何通过反应性、生命感和被需要感建立关系。</p>
            <ol><li><span>01</span>能力克制也是产品能力</li><li><span>02</span>把感性目标工程化</li><li><span>03</span>重新定义参照系，重新定义价格</li><li><span>04</span>责任感产生的留存强于满足感</li></ol>
            <a className="text-link" href="/thinking/lovot-product-teardown.pptx" download>DOWNLOAD FULL DECK <ArrowDownRight/></a>
          </div>
        </article>
      </div>
    </section>

    <section id="writing" className="content-section writing-section"><div className="content-wrap">
      <SectionTitle index="05" kicker="WRITING / 哈密瓜的随想录" title="持续写下AI产品的判断依据" copy="文章链接补充之前，先保留清晰的内容坐标。每篇文章都会回答一个具体问题，而不是复述行业新闻。"/>
      <div className="writing-index reveal"><article><span>01</span><p>AI TREND</p><h3>趋势观察</h3><small>判断新能力会改变什么，以及不会改变什么</small></article><article><span>02</span><p>PRODUCT ANALYSIS</p><h3>产品拆解</h3><small>从用户行为和产品机制中寻找可复用的方法</small></article><article><span>03</span><p>BUILD NOTES</p><h3>实践复盘</h3><small>记录一个想法如何被做成、测试并继续迭代</small></article></div>
      <p className="writing-status reveal">[ ARTICLES WILL BE CONNECTED TO WECHAT IN THE NEXT ITERATION ]</p>
    </div></section>

    <section id="connect" className="connect-section"><GridField quiet/><div className="connect-inner reveal">
      <p>[ OPEN TO CONVERSATIONS ]</p><h2>LET&apos;S TURN AI IDEAS<br/>INTO REAL PRODUCTS.</h2><div className="connect-bottom"><p>如果你正在寻找AI产品经理，或者希望一起验证一个AI产品机会，欢迎通过公众号找到我。</p><div className="connect-card"><span>WECHAT OFFICIAL ACCOUNT</span><strong>哈密瓜的随想录</strong><small>工作邮箱与微信将在下一版补充</small></div></div>
    </div><footer><span>CECILIA // SHU</span><span>AI PRODUCT MANAGER · 2026</span><a href="#home">BACK TO TOP ↑</a></footer></section>
  </main>
}
