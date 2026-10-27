export interface KbScreenshot {
  src: string;
  alt: string;
  caption: string;
  badge?: string;
}

export interface KbUiElement {
  name: string;
  location?: string;
  description: string;
}

export interface KbWorkflowStep {
  title: string;
  detail: string;
  tip?: string;
}

export interface KbWorkflow {
  id: string;
  title: string;
  roleBadge?: string;
  summary?: string;
  steps: KbWorkflowStep[];
  screenshot?: KbScreenshot;
}

export interface KbStatusBadge {
  label: string;
  color: string;
  bg?: string;
  meaning: string;
}

export interface KbTip {
  type: "info" | "warning" | "pro";
  title: string;
  text: string;
}

export interface KbFaq {
  q: string;
  a: string;
}

export interface KbArticle {
  slug: string;
  categoryId: string;
  title: string;
  subtitle: string;
  readingTime: string;
  roles: string[];
  accessSummary: string;
  menuPath: string;
  routePath?: string;
  heroScreenshot?: KbScreenshot;
  gallery?: KbScreenshot[];
  overview: string[];
  uiElements: KbUiElement[];
  workflows: KbWorkflow[];
  statuses?: KbStatusBadge[];
  tips?: KbTip[];
  faqs: KbFaq[];
}

export interface KbCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface KbRoleDefinition {
  role: string;
  code: string;
  color: string;
  summary: string;
  permissions: string[];
}

export interface KbShortcut {
  keys: string[];
  label: string;
  context?: string;
}

export interface ProductKnowledgeBase {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  productPagePath: string;
  lastUpdated: string;
  theme: {
    main: string;
    dark: string;
    accent: string;
    lightBg: string;
    heroGradient: string;
    ringRgba: string;
  };
  roles: KbRoleDefinition[];
  shortcuts?: KbShortcut[];
  categories: KbCategory[];
  articles: KbArticle[];
}
