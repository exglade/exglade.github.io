export type LocaleCode = "en" | "ja" | "zh";

export type LocaleLink = {
  code: LocaleCode;
  label: string;
  href: string;
  lang: string;
};

export type Skill = {
  label: string;
  href?: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type Experience = {
  company: string;
  title: string;
  years: string;
  description: string;
  impact: string[];
};

export type HomeContent = {
  locale: LocaleCode;
  lang: string;
  path: string;
  title: string;
  description: string;
  nav: {
    portfolio: string;
    blog: string;
  };
  intro: {
    eyebrow: string[];
    headline: string;
    aboutLabel: string;
    paragraphs: string[];
  };
  contact: {
    heading: string;
    prompt: string;
    socialLinksLabel: string;
  };
  sections: {
    experience: string;
    skills: string;
  };
  experiences: Experience[];
  skillGroups: SkillGroup[];
};

export const localeLinks: LocaleLink[] = [
  { code: "en", label: "EN", href: "/", lang: "en" },
  { code: "ja", label: "日本語", href: "/ja/", lang: "ja" },
  { code: "zh", label: "中文", href: "/zh/", lang: "zh-CN" },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Engineering",
    skills: [
      { label: "TypeScript", href: "https://www.typescriptlang.org/" },
      { label: "Node.js", href: "https://nodejs.org/" },
      { label: "React", href: "https://react.dev/" },
      { label: "C#/.NET", href: "https://dotnet.microsoft.com/" },
      { label: "Python", href: "https://www.python.org/" },
      { label: "PostgreSQL", href: "https://www.postgresql.org/" },
      { label: "SQL Server", href: "https://www.microsoft.com/sql-server" },
      { label: "MongoDB", href: "https://www.mongodb.com/" },
    ],
  },
  {
    title: "Platform & Infrastructure",
    skills: [
      { label: "Azure", href: "https://azure.microsoft.com/" },
      { label: "GCP", href: "https://cloud.google.com/" },
      { label: "Terraform", href: "https://developer.hashicorp.com/terraform" },
      { label: "Kubernetes", href: "https://kubernetes.io/" },
      { label: "Docker", href: "https://www.docker.com/" },
      { label: "CI/CD" },
      { label: "Grafana", href: "https://grafana.com/" },
      { label: "Prometheus", href: "https://prometheus.io/" },
      { label: "NGINX", href: "https://nginx.org/" },
      { label: "Cloudflare", href: "https://www.cloudflare.com/" },
    ],
  },
  {
    title: "Product & Engineering Leadership",
    skills: [
      { label: "Technical Strategy" },
      { label: "Product Shaping" },
      { label: "System Ownership" },
      { label: "Team Scaling" },
      { label: "Execution" },
    ],
  },
];

const localizedSkillGroupTitles: Record<LocaleCode, string[]> = {
  en: ["Engineering", "Platform & Infrastructure", "Product & Engineering Leadership"],
  ja: [
    "エンジニアリング",
    "プラットフォームとインフラ",
    "プロダクトとエンジニアリングリーダーシップ",
  ],
  zh: ["工程能力", "平台与基础设施", "产品与工程领导力"],
};

const getSkillGroups = (locale: LocaleCode) =>
  skillGroups.map((group, index) => ({
    ...group,
    title: localizedSkillGroupTitles[locale][index] ?? group.title,
  }));

export const homeContentByLocale: Record<LocaleCode, HomeContent> = {
  en: {
    locale: "en",
    lang: "en",
    path: "/",
    title: "Kai Sheng",
    description:
      "Building systems that scale. Teams that last. I like to take a pragmatic and holistic approach, building products that solve meaningful problems, and systems and teams that remain practical, maintainable, and able to evolve.",
    nav: {
      portfolio: "Portfolio",
      blog: "Blog",
    },
    intro: {
      eyebrow: ["KAI SHENG", "凯升", "Kai", "カイ", "카이"],
      headline: "Building systems that scale. Teams that last.",
      aboutLabel: "About",
      paragraphs: [
        "Former Director of Engineering with 10+ years of experience, and over 20 years of coding.",
        "My work often sits in the phase where things start to scale, where the focus shifts from building features to shaping systems, ownership, and long-term direction.",
        "Speed without structure does not endure. So, I like to take a pragmatic and holistic approach, building products that solve meaningful problems, and systems and teams that remain practical, maintainable, and able to evolve.",
        "Outside of work, I spend time on calisthenics, rock climbing, and travelling. It helps me reset and keep a broader perspective.",
      ],
    },
    contact: {
      heading: "Contact",
      prompt: "Open to meaningful conversations — Let's connect.",
      socialLinksLabel: "Social links and location",
    },
    sections: {
      experience: "Experience",
      skills: "Skills",
    },
    experiences: [
      {
        company: "HealthMetrics",
        title: "Director of Engineering",
        years: "2019 - 2025",
        description:
          "HealthMetrics is a digital healthcare TPA platform that helps corporates and insurers manage employee healthcare benefits, claims, and provider networks with real-time data and automation.",
        impact: [
          "Led engineering across product and platform, working closely with product leadership on roadmap and solution design.",
          "Built and evolved the HealthMetrics system end-to-end, including platform infrastructure, developer tooling, and engineering workflows.",
          "Scaled engineering to 20+ engineers, establishing clearer ownership, team structure, and delivery processes.",
          "Drove continuous improvements across the system over time, resulting in 3× performance gains, ~54% cost reduction, and sustained 99.97% uptime.",
          "Led engineering scope for ISO 27001, with zero non-conformities.",
        ],
      },
      {
        company: "InfinitiLab",
        title: "Software Engineer → Lead Engineer",
        years: "2015 - 2019",
        description:
          "InfinitiLab was a customised software solutions company delivering bespoke systems for clients across various industries.",
        impact: [
          "Delivered fullstack systems across multiple client projects, working end-to-end from development to deployment.",
          "Worked directly with clients to translate business requirements into practical software solutions.",
          "Progressed into early leadership responsibilities, supporting team direction and delivery.",
        ],
      },
    ],
    skillGroups: getSkillGroups("en"),
  },
  ja: {
    locale: "ja",
    lang: "ja",
    path: "/ja/",
    title: "Kai Sheng | 日本語",
    description:
      "スケールするシステムと、長く機能するチームをつくる。実用性、保守性、進化し続ける設計を大切にするエンジニアリングリーダーです。",
    nav: {
      portfolio: "ポートフォリオ",
      blog: "ブログ",
    },
    intro: {
      eyebrow: ["KAI SHENG", "凯升", "Kai", "カイ", "카이"],
      headline: "スケールするシステムを。長く機能するチームを。",
      aboutLabel: "プロフィール",
      paragraphs: [
        "元 Director of Engineering。10年以上の実務経験と、20年以上のコーディング経験があります。",
        "私の仕事は、プロダクトが伸び始める段階にあることが多いです。機能を作るだけでなく、システム、オーナーシップ、長期的な方向性を整える段階です。",
        "構造のないスピードは長続きしません。だから私は、意味のある課題を解くプロダクトと、実用的で保守しやすく、変化に耐えられるシステムとチームを、現実的かつ全体的に設計することを大切にしています。",
        "仕事以外では、カリステニクス、ロッククライミング、旅行に時間を使っています。視野を広げ、リセットするための大切な時間です。",
      ],
    },
    contact: {
      heading: "連絡先",
      prompt: "意味のある対話を歓迎しています。気軽にご連絡ください。",
      socialLinksLabel: "ソーシャルリンク",
    },
    sections: {
      experience: "経験",
      skills: "スキル",
    },
    experiences: [
      {
        company: "HealthMetrics",
        title: "Director of Engineering",
        years: "2019 - 2025",
        description:
          "HealthMetricsは、企業や保険会社が従業員の医療福利厚生、請求、医療機関ネットワークをリアルタイムデータと自動化で管理するためのデジタルヘルスケアTPAプラットフォームです。",
        impact: [
          "プロダクトとプラットフォーム全体のエンジニアリングをリードし、プロダクトリーダーとロードマップやソリューション設計を密に進めました。",
          "プラットフォーム基盤、開発者向けツール、エンジニアリングワークフローを含め、HealthMetricsのシステムをエンドツーエンドで構築し進化させました。",
          "エンジニアリング組織を20名以上に拡大し、オーナーシップ、チーム構造、デリバリープロセスを明確にしました。",
          "継続的な改善を推進し、パフォーマンス3倍、コスト約54%削減、99.97%の継続的なアップタイムに貢献しました。",
          "ISO 27001に関わるエンジニアリング領域をリードし、指摘事項ゼロで対応しました。",
        ],
      },
      {
        company: "InfinitiLab",
        title: "Software Engineer → Lead Engineer",
        years: "2015 - 2019",
        description:
          "InfinitiLabは、さまざまな業界のクライアントに向けて、要件に合わせたソフトウェアシステムを提供する受託開発会社でした。",
        impact: [
          "複数のクライアントプロジェクトで、開発からデプロイまでエンドツーエンドにフルスタックシステムを提供しました。",
          "クライアントと直接協働し、ビジネス要件を実用的なソフトウェアソリューションへ落とし込みました。",
          "初期のリーダーシップ責任を担い、チームの方向性とデリバリーを支援しました。",
        ],
      },
    ],
    skillGroups: getSkillGroups("ja"),
  },
  zh: {
    locale: "zh",
    lang: "zh-CN",
    path: "/zh/",
    title: "Kai Sheng | 中文",
    description:
      "构建能扩展的系统，以及能长期运转的团队。我重视务实、全局的工程方法，打造真正解决问题、可维护并能持续演进的产品和系统。",
    nav: {
      portfolio: "作品集",
      blog: "博客",
    },
    intro: {
      eyebrow: ["KAI SHENG", "凯升", "Kai", "カイ", "카이"],
      headline: "构建能扩展的系统。打造能长期运转的团队。",
      aboutLabel: "关于",
      paragraphs: [
        "前 Director of Engineering，拥有 10 年以上实战经验，以及 20 年以上编程经验。",
        "我的工作常常发生在产品和组织开始规模化的阶段。那时重点会从单纯交付功能，转向塑造系统、明确归属，并建立长期方向。",
        "没有结构的速度很难持续。所以我偏向务实、全局的做法：打造能解决真实问题的产品，也打造实用、可维护、能够持续演进的系统和团队。",
        "工作之外，我会把时间花在徒手训练、攀岩和旅行上。这些事情帮助我重整状态，也保持更开阔的视角。",
      ],
    },
    contact: {
      heading: "联系",
      prompt: "欢迎有意义的交流。我们保持联系。",
      socialLinksLabel: "社交链接",
    },
    sections: {
      experience: "经历",
      skills: "技能",
    },
    experiences: [
      {
        company: "HealthMetrics",
        title: "Director of Engineering",
        years: "2019 - 2025",
        description:
          "HealthMetrics 是一个数字医疗 TPA 平台，帮助企业和保险机构通过实时数据与自动化，管理员工医疗福利、理赔和医疗服务网络。",
        impact: [
          "领导产品与平台方向的工程工作，并与产品负责人紧密合作，推进路线图和解决方案设计。",
          "端到端构建并演进 HealthMetrics 系统，包括平台基础设施、开发者工具和工程流程。",
          "将工程团队扩展到 20 多名工程师，并建立更清晰的归属、团队结构和交付流程。",
          "长期推动系统持续改进，带来 3 倍性能提升、约 54% 成本降低，并维持 99.97% 的持续可用性。",
          "负责 ISO 27001 相关的工程范围，并以零不符合项完成审核。",
        ],
      },
      {
        company: "InfinitiLab",
        title: "Software Engineer → Lead Engineer",
        years: "2015 - 2019",
        description:
          "InfinitiLab 是一家定制软件解决方案公司，为不同行业的客户交付按需设计的业务系统。",
        impact: [
          "在多个客户项目中交付全栈系统，覆盖从开发到部署的完整过程。",
          "直接与客户合作，将业务需求转化为实际可落地的软件解决方案。",
          "逐步承担早期领导职责，支持团队方向和项目交付。",
        ],
      },
    ],
    skillGroups: getSkillGroups("zh"),
  },
};
