# Cecilia Shu — AI Product Manager

Cecilia Shu 的个人网站，用于集中展示 AI 产品经历、可体验的项目原型、产品拆解与长期写作。

网站以“把 AI 机会做成可体验产品”为核心表达，采用深色编辑式视觉语言，通过网格、冷蓝色高光、背景影像与轻量动效呈现 AI 产品经理的工作方法和个人判断。

## 在线访问

- Vercel：[my-web-three-ruddy.vercel.app](https://my-web-three-ruddy.vercel.app/)
- ChatGPT Sites：[cecilia-shu-ai-product.ceciliashu7.chatgpt.site](https://cecilia-shu-ai-product.ceciliashu7.chatgpt.site/)

## 页面内容

- **Home 首页**：个人定位、核心主张与项目入口
- **About 关于**：四年 AI 产品经历与业务实践
- **Projects 项目**：AI 百选、成单笔记、wencopy、AirDoodle 指尖画梦
- **Thinking 思考**：LOVOT 陪伴类产品拆解及完整 PDF
- **Writing 文章**：企业 AI、产品交互、AI 产品入口与模型观察
- **Connect 联系**：公众号与工作邮箱

## 技术栈

- React 19
- TypeScript
- Vinext（基于 Vite 的 Next.js API 实现）
- Vite 8
- Tailwind CSS 4 + 自定义 CSS
- Lucide React 图标
- Nitro（Vercel 构建适配）
- OpenAI Sites / Cloudflare Workers（Sites 部署）

## 体验与设计

- 单页锚点导航，桌面端和移动端分别适配
- 响应式项目卡片与移动端横向浏览
- 首屏背景视频、网格和环境光效果
- 鼠标微动、滚动出现和卡片悬停反馈
- 支持 `prefers-reduced-motion`，减少动效模式下自动弱化动画
- 统一的页面留白、正文宽度和卡片内部间距

## 本地运行

需要 Node.js 22.13 或更高版本，并使用 pnpm 安装依赖。

```bash
pnpm install
pnpm dev
```

启动后访问：

```text
http://localhost:3000/
```

## 构建

### OpenAI Sites / Cloudflare

```bash
pnpm build
```

### Vercel

仓库已包含 `vercel.json` 和 Nitro 适配。Vercel 连接本仓库后，会在 `main` 分支更新时自动构建和发布。

## 项目结构

```text
app/
├── globals.css       # 全站视觉、布局、响应式与动效
├── layout.tsx        # 页面元信息、字体与根布局
└── page.tsx          # 首页内容、项目数据与交互

public/
├── demos/            # AI 百选与成单笔记的可体验原型
├── media/            # 个人肖像
├── projects/         # 项目海报
└── thinking/         # LOVOT 拆解海报、PDF 与 PPTX

vite.config.ts        # Sites 与 Vercel 的条件化构建配置
vercel.json           # Vercel 部署设置
```

## 更新内容

- 项目与文章信息集中维护在 `app/page.tsx` 顶部的 `projects` 和 `articles` 数组中。
- 页面文案和经历内容位于 `app/page.tsx`。
- 颜色、字号、留白、卡片和响应式样式位于 `app/globals.css`。
- 图片、PDF、PPTX 与独立产品原型位于 `public/` 对应目录。

## 部署流程

1. 在本地完成修改并确认页面正常。
2. 将更新推送到 GitHub 的 `main` 分支。
3. Vercel 自动构建并更新线上版本。
4. 如需更新 ChatGPT Sites，则单独保存并发布新的 Sites 版本。

## 联系方式

- 公众号：哈密瓜的随想录
- 邮箱：[Ceciliashu7@outlook.com](mailto:Ceciliashu7@outlook.com)

