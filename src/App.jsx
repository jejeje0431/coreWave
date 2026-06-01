import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Store,
  Bot,
  LineChart,
  PackageCheck,
  Users,
  ShieldCheck,
  ChevronDown,
  Wrench,
  Code2,
  Headphones,
  Send,
  ClipboardCheck,
  ExternalLink,
} from "lucide-react";

const CONSULT_FORM_URL = "https://forms.gle/6sZyzus1cnP5Qo7A9";

const curriculum = [
  {
    week: "1강",
    title: "AI 쇼핑몰 기획과 수익 구조 설계",
    desc: "판매 아이템 선정, 고객 페르소나, 가격 정책, 경쟁몰 분석까지 쇼핑몰의 기본 전략을 잡습니다.",
  },
  {
    week: "2강",
    title: "AI로 상품 소싱·상세페이지 만들기",
    desc: "상품명, 상세페이지 카피, 썸네일 콘셉트, FAQ까지 AI를 활용해 빠르게 제작합니다.",
  },
  {
    week: "3강",
    title: "쇼핑몰 구축 실습",
    desc: "스마트스토어, 카페24, 아임웹 등 주요 플랫폼 기준으로 판매 가능한 페이지를 구성합니다.",
  },
  {
    week: "4강",
    title: "광고·콘텐츠 자동화",
    desc: "AI로 인스타그램, 블로그, 광고 문구, 이벤트 페이지를 만들고 운영 루틴을 설계합니다.",
  },
  {
    week: "5강",
    title: "고객 응대와 운영 자동화",
    desc: "CS 답변 템플릿, 리뷰 관리, 재구매 메시지, 주문 관리 체크리스트를 구축합니다.",
  },
  {
    week: "6강",
    title: "성과 분석과 개선",
    desc: "방문자, 전환율, 객단가, 재구매율을 보고 어떤 페이지와 상품을 개선할지 판단합니다.",
  },
];

const benefits = [
  "AI를 활용해 쇼핑몰 기획 시간을 줄입니다.",
  "상품 상세페이지와 마케팅 콘텐츠를 직접 만듭니다.",
  "플랫폼 선택부터 판매 페이지 오픈까지 실습합니다.",
  "초보자도 따라 할 수 있는 체크리스트를 제공합니다.",
];

const processSteps = [
  {
    step: "01",
    title: "상품 기획",
    desc: "판매 아이템, 고객 타깃, 가격대, 경쟁몰 분석 기준을 정리합니다.",
  },
  {
    step: "02",
    title: "상세페이지 제작",
    desc: "상품명, 핵심 문구, 상세페이지 구조, 구매 설득 포인트를 만듭니다.",
  },
  {
    step: "03",
    title: "쇼핑몰 구축",
    desc: "플랫폼을 선택하고 메인 페이지, 상품 페이지, 주문 흐름을 구성합니다.",
  },
  {
    step: "04",
    title: "콘텐츠 마케팅",
    desc: "광고 문구, SNS 콘텐츠, 이벤트 페이지를 AI로 빠르게 제작합니다.",
  },
  {
    step: "05",
    title: "운영 개선",
    desc: "CS, 리뷰, 전환율, 재구매 흐름을 점검하고 개선합니다.",
  },
];

const buildServices = [
  {
    icon: Code2,
    title: "쇼핑몰 신규 개발",
    desc: "브랜드 콘셉트, 상품 구조, 결제 흐름, 관리자 운영까지 고려해 판매 가능한 쇼핑몰을 구축합니다.",
  },
  {
    icon: Wrench,
    title: "기능 개선·유지보수",
    desc: "상품 등록, 페이지 수정, 이벤트 배너, 오류 수정, 기능 고도화 등 운영 중 필요한 개선을 지원합니다.",
  },
  {
    icon: Headphones,
    title: "운영 컨설팅",
    desc: "혼자서 막히는 기획, 상세페이지, 전환율 개선, 고객 응대 자동화까지 실무 관점으로 상담합니다.",
  },
];

const faqs = [
  {
    q: "쇼핑몰을 처음 해봐도 수강할 수 있나요?",
    a: "네. 상품 선정, 상세페이지, 플랫폼 세팅, 홍보 콘텐츠까지 처음부터 순서대로 다룹니다.",
  },
  {
    q: "코딩을 알아야 하나요?",
    a: "아니요. 코딩 없이 사용할 수 있는 쇼핑몰 플랫폼과 AI 도구 중심으로 실습합니다.",
  },
  {
    q: "강의 결과물은 무엇인가요?",
    a: "수강 후에는 판매 가능한 쇼핑몰 기본 페이지, 상품 상세페이지, 마케팅 콘텐츠 세트를 갖추는 것을 목표로 합니다.",
  },
  {
    q: "직접 만들기 어려우면 제작을 맡길 수 있나요?",
    a: "네. 코어웨이브에서 쇼핑몰 개발, 기능 개선, 유지보수, 운영 컨설팅까지 별도 상담을 통해 지원합니다. 상담 신청은 홈페이지의 구글 폼을 통해 접수할 수 있습니다.",
  },
  {
    q: "상담 신청은 어디서 하나요?",
    a: "홈페이지의 상담 신청 버튼을 누르면 구글 폼이 새 창으로 열립니다. 폼에 필요한 내용을 작성해주시면 확인 후 상담을 진행합니다.",
  },
  {
    q: "어떤 AI 도구를 사용하나요?",
    a: "ChatGPT, 이미지 생성 도구, 상세페이지 제작 보조 도구, 광고 카피 생성 프롬프트 등을 상황에 맞게 활용합니다.",
  },
];

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openConsultForm() {
  window.open(CONSULT_FORM_URL, "_blank", "noopener,noreferrer");
}

function Button({ children, onClick, variant = "dark", className = "" }) {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
}

function Badge({ children, dark = false }) {
  return <span className={`badge ${dark ? "badge-dark" : ""}`}>{children}</span>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function FAQItem({ item, open, onClick }) {
  return (
    <div className="faq-item">
      <button type="button" className="faq-button" onClick={onClick}>
        <span>{item.q}</span>
        <ChevronDown className={`faq-icon ${open ? "faq-icon-open" : ""}`} size={20} />
      </button>
      {open ? <p className="faq-answer">{item.a}</p> : null}
    </div>
  );
}

export default function AIShoppingMallCourseHomepage() {
  const [openFaq, setOpenFaq] = useState(0);

  const stats = useMemo(
    () => [
      { label: "실습 중심 커리큘럼", value: "6단계" },
      { label: "제공 템플릿", value: "20+" },
      { label: "제작·유지보수 상담", value: "가능" },
    ],
    []
  );

  return (
    <main className="site">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #f8fafc; color: #020617; }
        button, input, select, textarea { font: inherit; }
        button { cursor: pointer; border: 0; background: none; }
        a { color: inherit; text-decoration: none; }
        .site { min-height: 100vh; background: #f8fafc; }
        .container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
        .header { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,.92); backdrop-filter: blur(12px); border-bottom: 1px solid #e2e8f0; }
        .header-inner { height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .logo { font-size: 22px; font-weight: 900; color: #020617; }
        .nav { display: flex; align-items: center; gap: 24px; color: #475569; font-size: 15px; font-weight: 700; }
        .nav button { color: #475569; }
        .nav button:hover { color: #020617; }
        .btn { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 999px; padding: 0 22px; font-weight: 800; transition: transform .15s ease, background .15s ease, border-color .15s ease; }
        .btn:hover { transform: translateY(-1px); }
        .btn-dark { background: #020617; color: #fff; }
        .btn-dark:hover { background: #1e293b; }
        .btn-light { background: #fff; color: #020617; }
        .btn-light:hover { background: #f1f5f9; }
        .btn-outline-light { color: #fff; border: 1px solid rgba(255,255,255,.28); background: rgba(255,255,255,.06); }
        .btn-outline-light:hover { background: rgba(255,255,255,.12); }
        .hero { position: relative; overflow: hidden; background: radial-gradient(circle at 50% 0%, rgba(255,255,255,.13), transparent 30%), linear-gradient(135deg, #020617, #111827 50%, #1e293b); color: white; padding: 88px 0 80px; }
        .hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 56px; align-items: center; }
        .hero h1 { margin: 24px 0 0; font-size: clamp(40px, 5vw, 68px); line-height: 1.08; letter-spacing: -0.04em; }
        .hero p { margin: 24px 0 0; max-width: 680px; color: #cbd5e1; font-size: 18px; line-height: 1.8; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
        .hero-points { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 28px; color: #cbd5e1; font-size: 14px; }
        .point { display: inline-flex; align-items: center; gap: 6px; }
        .badge { display: inline-flex; align-items: center; gap: 8px; width: fit-content; border: 1px solid #dbe2ea; background: #fff; color: #334155; border-radius: 999px; padding: 9px 16px; font-size: 14px; font-weight: 800; box-shadow: 0 6px 18px rgba(15,23,42,.06); }
        .badge-dark { color: #f8fafc; background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.18); box-shadow: none; }
        .card { background: #fff; border-radius: 28px; box-shadow: 0 12px 36px rgba(15,23,42,.08); }
        .hero-card { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.16); padding: 28px; color: #020617; }
        .board { background: #fff; border-radius: 24px; padding: 28px; box-shadow: 0 22px 60px rgba(0,0,0,.25); }
        .board-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .eyebrow { margin: 0; color: #64748b; font-size: 14px; font-weight: 800; }
        .board-title { margin: 4px 0 0; color: #020617; font-size: 28px; font-weight: 900; }
        .icon-box { width: 48px; height: 48px; display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: #f1f5f9; color: #020617; flex: 0 0 auto; }
        .board-list { display: grid; gap: 12px; margin-top: 26px; }
        .board-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px; background: #f8fafc; border-radius: 16px; font-weight: 800; }
        .status { padding: 6px 12px; border-radius: 999px; background: #fff; color: #64748b; font-size: 13px; white-space: nowrap; }
        .board-note { margin-top: 22px; background: #020617; color: #fff; border-radius: 18px; padding: 20px; }
        .board-note p { margin: 0; color: #cbd5e1; font-size: 14px; }
        .board-note strong { display: block; margin-top: 8px; font-size: 20px; line-height: 1.35; }
        .stats { padding: 36px 0 18px; }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .stat-card { padding: 28px; text-align: center; }
        .stat-value { font-size: 34px; font-weight: 950; }
        .stat-label { margin-top: 8px; color: #64748b; font-size: 14px; }
        .section { padding: 80px 0; }
        .section-white { background: #fff; }
        .section-dark { background: #020617; color: #fff; }
        .section-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 44px; align-items: start; margin-top: 28px; }
        .section-title { margin: 24px 0 0; font-size: clamp(32px, 4vw, 48px); line-height: 1.18; letter-spacing: -0.035em; }
        .section-desc { margin: 20px 0 0; color: #64748b; line-height: 1.85; font-size: 17px; }
        .section-dark .section-desc { color: #cbd5e1; }
        .target-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .target-card, .service-card, .curriculum-card { padding: 26px; }
        .target-card h3, .service-card h3 { margin: 18px 0 8px; font-size: 20px; }
        .target-card p, .service-card p, .curriculum-card p { margin: 0; color: #64748b; line-height: 1.7; }
        .service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .soft-card { background: #f8fafc; }
        .benefit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
        .benefits { display: grid; gap: 12px; margin-top: 28px; }
        .benefit-row { display: flex; align-items: flex-start; gap: 12px; padding: 18px; background: #fff; border-radius: 18px; box-shadow: 0 10px 26px rgba(15,23,42,.06); color: #334155; }
        .process-card { background: #fff !important; color: #020617 !important; padding: 32px; border: 1px solid #e2e8f0; box-shadow: 0 18px 48px rgba(15,23,42,.08); }
        .process-head { display: flex; align-items: center; gap: 14px; }
        .process-head h3 { margin: 4px 0 0; font-size: 26px; color: #020617 !important; }
        .process-card > p { color: #475569 !important; line-height: 1.8; margin: 20px 0 0; font-weight: 600; }
        .process-list { display: grid; gap: 14px; margin-top: 28px; }
        .process-item { display: grid; grid-template-columns: 56px 1fr; gap: 16px; padding: 18px; border-radius: 18px; background: #f8fafc !important; border: 1px solid #e2e8f0 !important; }
        .process-num { width: 48px; height: 48px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: #020617 !important; color: #fff !important; font-weight: 950; }
        .process-item h4 { margin: 0; font-size: 19px; color: #020617 !important; font-weight: 950; }
        .process-item p { margin: 6px 0 0; color: #475569 !important; line-height: 1.65; font-size: 15px; font-weight: 600; }
        .section-head { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 28px; }
        .time-note { display: inline-flex; align-items: center; gap: 8px; color: #64748b; font-weight: 700; }
        .curriculum-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .curriculum-card { background: #f8fafc; transition: transform .16s ease, box-shadow .16s ease; }
        .curriculum-card:hover { transform: translateY(-4px); box-shadow: 0 18px 44px rgba(15,23,42,.12); }
        .week { color: #64748b; font-weight: 900; font-size: 14px; }
        .curriculum-card h3 { margin: 12px 0 12px; font-size: 21px; line-height: 1.35; }
        .price-card { color: #020617; padding: 32px; }
        .price-label { color: #64748b; font-size: 14px; font-weight: 900; margin: 0; }
        .price { display: flex; align-items: end; gap: 10px; margin-top: 8px; }
        .price strong { font-size: 42px; line-height: 1; }
        .price del { color: #94a3b8; padding-bottom: 4px; }
        .check-list { display: grid; gap: 12px; margin: 26px 0 0; color: #334155; font-size: 14px; }
        .contact-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 40px; align-items: start; }
        .contact-info { padding: 28px; margin-top: 28px; }
        .info-head { display: flex; align-items: center; gap: 14px; }
        .info-list { display: grid; gap: 12px; margin-top: 24px; color: #475569; }
        .form-card { padding: 32px; }
        .form-card h3 { margin: 20px 0 0; font-size: 28px; letter-spacing: -0.02em; }
        .form-card p { color: #64748b; line-height: 1.8; }
        .form-points { display: grid; gap: 12px; margin-top: 22px; padding: 22px; background: #f8fafc; border-radius: 18px; color: #334155; }
        .full-btn { width: 100%; margin-top: 28px; }
        .small-note { margin: 14px 0 0; text-align: center; color: #64748b; font-size: 13px; }
        .faq-wrap { max-width: 820px; margin: 0 auto; }
        .center { text-align: center; }
        .faq-list { display: grid; gap: 14px; margin-top: 30px; }
        .faq-item { padding: 20px; border-radius: 18px; background: #fff; border: 1px solid #e2e8f0; box-shadow: 0 10px 26px rgba(15,23,42,.05); }
        .faq-button { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; color: #020617; font-weight: 900; text-align: left; }
        .faq-icon { color: #64748b; transition: transform .16s ease; }
        .faq-icon-open { transform: rotate(180deg); }
        .faq-answer { margin: 16px 0 0; color: #64748b; line-height: 1.75; }
        .footer { border-top: 1px solid #e2e8f0; background: #fff; padding: 34px 0; }
        .footer-inner { display: flex; justify-content: space-between; gap: 20px; color: #64748b; font-size: 14px; }
        .footer strong { color: #020617; }
        .inline-check { display: inline-flex; align-items: flex-start; gap: 8px; }
        @media (max-width: 900px) {
          .nav { display: none; }
          .hero-grid, .section-grid, .benefit-grid, .contact-grid { grid-template-columns: 1fr; }
          .service-grid, .curriculum-grid, .stats-grid { grid-template-columns: 1fr; }
          .target-grid { grid-template-columns: 1fr; }
          .section-head { align-items: start; flex-direction: column; }
        }
        @media (max-width: 560px) {
          .container { width: min(100% - 28px, 1120px); }
          .header-inner { height: 64px; }
          .hero { padding: 64px 0; }
          .section { padding: 60px 0; }
          .hero-actions { flex-direction: column; }
          .btn { width: 100%; }
          .board-row { align-items: flex-start; flex-direction: column; }
          .process-item { grid-template-columns: 1fr; }
          .footer-inner { flex-direction: column; }
        }

        /* Mobile responsive hardening */
        html, body, #root { width: 100%; overflow-x: hidden; }
        .container, .card, .board, .process-card, .price-card, .form-card { min-width: 0; }
        .section-title, .hero h1, .board-title, .process-head h3, .form-card h3 { word-break: keep-all; overflow-wrap: break-word; }
        .hero-grid > *, .section-grid > *, .benefit-grid > *, .contact-grid > * { min-width: 0; }

        @media (max-width: 768px) {
          .container { width: calc(100% - 32px); }
          .header-inner { height: 64px; gap: 12px; }
          .logo { font-size: 20px; white-space: nowrap; }
          .header .btn { width: auto; min-width: 96px; min-height: 38px; padding: 0 14px; font-size: 14px; white-space: nowrap; }
          .hero { padding: 56px 0 64px; }
          .hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .hero h1 { font-size: clamp(36px, 10vw, 48px); line-height: 1.15; letter-spacing: -0.045em; }
          .hero p { font-size: 16px; line-height: 1.75; }
          .hero-actions { width: 100%; }
          .hero-actions .btn { width: 100%; }
          .hero-points { flex-direction: column; gap: 10px; }
          .hero-card { padding: 16px; border-radius: 24px; }
          .board { padding: 20px; border-radius: 20px; }
          .board-head { align-items: flex-start; }
          .board-title { font-size: 24px; }
          .board-row { padding: 14px; }
          .status { font-size: 12px; }
          .stats { padding: 28px 0 8px; }
          .stats-grid, .target-grid, .service-grid, .curriculum-grid { grid-template-columns: 1fr; }
          .section { padding: 56px 0; }
          .section-grid, .benefit-grid, .contact-grid { grid-template-columns: 1fr; gap: 28px; }
          .section-title { font-size: clamp(30px, 8vw, 38px); line-height: 1.2; }
          .section-desc { font-size: 16px; line-height: 1.75; }
          .target-card, .service-card, .curriculum-card, .contact-info, .form-card, .price-card, .process-card { padding: 22px; border-radius: 22px; }
          .service-grid { gap: 14px; }
          .benefit-row { padding: 16px; }
          .process-head { align-items: flex-start; }
          .process-head h3 { font-size: 22px; line-height: 1.3; }
          .process-item { grid-template-columns: 44px 1fr; gap: 12px; padding: 15px; }
          .process-num { width: 40px; height: 40px; font-size: 13px; }
          .price strong { font-size: clamp(30px, 8vw, 38px); line-height: 1.15; }
          .price { align-items: flex-start; flex-direction: column; }
          .check-list { font-size: 15px; }
          .section-head { align-items: flex-start; flex-direction: column; }
          .footer-inner { flex-direction: column; }
        }

        @media (max-width: 420px) {
          .container { width: calc(100% - 24px); }
          .header-inner { height: 60px; }
          .logo { font-size: 18px; }
          .header .btn { min-width: 88px; min-height: 36px; padding: 0 12px; font-size: 13px; }
          .badge { padding: 8px 12px; font-size: 13px; }
          .hero { padding: 44px 0 52px; }
          .hero h1 { font-size: 34px; }
          .hero p { font-size: 15px; }
          .board, .target-card, .service-card, .curriculum-card, .contact-info, .form-card, .price-card, .process-card { padding: 18px; }
          .board-row { flex-direction: column; align-items: flex-start; }
          .section-title { font-size: 28px; }
          .process-item { grid-template-columns: 1fr; }
          .process-num { margin-bottom: 2px; }
          .form-points { padding: 16px; }
          .full-btn { width: 100%; }
        }
      `}</style>

      <header className="header">
        <div className="container header-inner">
          <button className="logo" onClick={() => scrollToSection("hero")} type="button">코어웨이브</button>
          <nav className="nav">
            <button onClick={() => scrollToSection("course")} type="button">강의 소개</button>
            <button onClick={() => scrollToSection("build-service")} type="button">제작·유지보수</button>
            <button onClick={() => scrollToSection("curriculum")} type="button">커리큘럼</button>
            <button onClick={() => scrollToSection("contact")} type="button">문의하기</button>
          </nav>
          <Button onClick={openConsultForm}>상담 신청</Button>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container hero-grid">
          <div>
            <Badge dark><Sparkles size={16} /> 코어웨이브가 알려주는 AI 쇼핑몰 구축 실전 강의</Badge>
            <h1>AI 쇼핑몰 만들기,<br />혼자서도 시작하고 필요하면 맡길 수 있습니다.</h1>
            <p>상품 선정부터 상세페이지 제작, 쇼핑몰 구축, 콘텐츠 마케팅, 고객 응대 자동화까지. 직접 배우고 싶은 분에게는 강의를, 혼자 만들기 어려운 분에게는 쇼핑몰 개발과 유지보수 상담을 제공합니다.</p>
            <div className="hero-actions">
              <Button variant="light" onClick={openConsultForm}>상담 신청하기 <ArrowRight size={18} /></Button>
              <Button variant="outline-light" onClick={() => scrollToSection("curriculum")}>커리큘럼 보기</Button>
            </div>
            <div className="hero-points">
              <span className="point"><CheckCircle2 size={17} /> 코딩 지식 불필요</span>
              <span className="point"><CheckCircle2 size={17} /> 실습 템플릿 제공</span>
              <span className="point"><CheckCircle2 size={17} /> 제작·유지보수 상담 가능</span>
            </div>
          </div>

          <Card className="hero-card">
            <div className="board">
              <div className="board-head">
                <div>
                  <p className="eyebrow">CoreWave Commerce Board</p>
                  <h2 className="board-title">내 쇼핑몰 제작 보드</h2>
                </div>
                <div className="icon-box"><Store size={28} /></div>
              </div>
              <div className="board-list">
                {[
                  ["상품 상세페이지", "완성"],
                  ["AI 광고 문구", "생성 중"],
                  ["개발·유지보수 상담", "폼 접수 가능"],
                ].map(([name, status]) => (
                  <div className="board-row" key={name}>
                    <span>{name}</span>
                    <span className="status">{status}</span>
                  </div>
                ))}
              </div>
              <div className="board-note">
                <p>코어웨이브 지원 방식</p>
                <strong>강의로 배우고, 필요하면 개발까지 맡기기</strong>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {stats.map((stat) => (
            <Card className="stat-card" key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      <section id="course" className="section">
        <div className="container">
          <Badge>이 강의가 필요한 분</Badge>
          <div className="section-grid">
            <div>
              <h2 className="section-title">쇼핑몰을 시작하고 싶지만 무엇부터 해야 할지 막막한 분께 적합합니다.</h2>
              <p className="section-desc">단순히 AI 도구 사용법만 배우는 강의가 아닙니다. 실제 쇼핑몰을 만들 때 필요한 기획, 상품 페이지, 운영, 마케팅 흐름을 하나의 실행 프로세스로 정리합니다.</p>
            </div>
            <div className="target-grid">
              {[
                { icon: Store, title: "예비 창업자", desc: "온라인 판매를 처음 시작하려는 분" },
                { icon: Bot, title: "AI 입문자", desc: "AI를 실무에 바로 쓰고 싶은 분" },
                { icon: PackageCheck, title: "초보 셀러", desc: "상품 페이지와 홍보가 어려운 분" },
                { icon: Users, title: "1인 사업자", desc: "기획·제작·운영 시간을 줄이고 싶은 분" },
              ].map((item) => (
                <Card className="target-card" key={item.title}>
                  <div className="icon-box"><item.icon size={25} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="build-service" className="section section-white">
        <div className="container">
          <div className="section-grid">
            <div>
              <Badge>쇼핑몰 제작·유지보수</Badge>
              <h2 className="section-title">혼자 만들기 어려운 분들을 위해 코어웨이브가 직접 개발합니다.</h2>
              <p className="section-desc">강의를 보고 직접 구축할 수도 있고, 시간이 부족하거나 기술 구현이 어려운 경우에는 구글 폼으로 쇼핑몰 제작과 운영 개선 상담을 신청할 수 있습니다.</p>
              <div style={{ marginTop: 30 }}>
                <Button onClick={openConsultForm}>제작 상담 신청하기 <ArrowRight size={18} /></Button>
              </div>
            </div>
            <div className="service-grid">
              {buildServices.map((service) => (
                <Card className="service-card soft-card" key={service.title}>
                  <div className="icon-box"><service.icon size={25} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container benefit-grid">
          <div>
            <Badge>수강 후 얻게 되는 것</Badge>
            <h2 className="section-title">아이디어가 아니라, 판매 가능한 쇼핑몰 결과물을 만듭니다.</h2>
            <p className="section-desc">강의는 이론 설명보다 실습 비중을 높였습니다. 각 단계에서 바로 사용할 수 있는 프롬프트, 체크리스트, 페이지 구성안을 제공합니다.</p>
            <div className="benefits">
              {benefits.map((item) => (
                <div className="benefit-row" key={item}>
                  <CheckCircle2 size={21} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="process-card" style={{ background: "#ffffff", color: "#020617", borderRadius: 28, padding: 32, border: "1px solid #e2e8f0", boxShadow: "0 18px 48px rgba(15,23,42,.08)" }}>
            <div className="process-head">
              <div className="icon-box"><LineChart size={25} /></div>
              <div>
                <p className="eyebrow" style={{ color: "#64748b" }}>CoreWave Process</p>
                <h3 style={{ color: "#020617", margin: "4px 0 0", fontSize: 26 }}>쇼핑몰 운영 시스템 구축 흐름</h3>
              </div>
            </div>
            <p style={{ color: "#475569", lineHeight: 1.8, marginTop: 20, fontWeight: 600 }}>
              AI를 단순한 도구로만 배우지 않고, 상품 기획부터 운영 개선까지 반복해서 실행할 수 있는 쇼핑몰 운영 체계를 만듭니다.
            </p>
            <div className="process-list">
              {processSteps.map((item) => (
                <div className="process-item" key={item.step} style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <div className="process-num" style={{ background: "#020617", color: "#ffffff" }}>{item.step}</div>
                  <div>
                    <h4 style={{ color: "#020617", fontWeight: 950 }}>{item.title}</h4>
                    <p style={{ color: "#475569", fontWeight: 600 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="section section-white">
        <div className="container">
          <div className="section-head">
            <div>
              <Badge>커리큘럼</Badge>
              <h2 className="section-title">6단계로 완성하는 AI 쇼핑몰 실습</h2>
            </div>
            <div className="time-note"><Clock size={19} /> 온라인 강의 + 실습 자료 제공</div>
          </div>
          <div className="curriculum-grid">
            {curriculum.map((item) => (
              <Card className="curriculum-card" key={item.week}>
                <div className="week">{item.week}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container section-grid">
          <div>
            <Badge>수강 신청</Badge>
            <h2 className="section-title">AI를 활용해 첫 쇼핑몰을 빠르게 오픈해보세요.</h2>
            <p className="section-desc">지금 신청하면 강의 자료, AI 프롬프트 모음, 상세페이지 구성 템플릿, 운영 체크리스트를 함께 제공합니다. 직접 구축이 부담된다면 구글 폼을 통해 제작·유지보수 상담을 신청할 수 있습니다.</p>
          </div>
          <Card className="price-card">
            <p className="price-label">런칭 특가</p>
            <div className="price">
              <strong>₩199,000</strong>
              <del>₩350,000</del>
            </div>
            <div className="check-list">
              <span className="inline-check"><ShieldCheck size={18} /> 대면 소그룹 강의 가능</span>
              <span className="inline-check"><ShieldCheck size={18} /> 실습 템플릿 제공</span>
              <span className="inline-check"><ShieldCheck size={18} /> 제작·유지보수 상담 가능</span>
            </div>
            <Button className="full-btn" onClick={openConsultForm}>지금 상담 신청하기 <ArrowRight size={18} /></Button>
            <p className="small-note">상담 신청은 구글 폼으로 접수되며, 확인 후 순차적으로 연락드립니다.</p>
          </Card>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-grid">
          <div>
            <Badge>문의하기</Badge>
            <h2 className="section-title">강의 수강, 쇼핑몰 제작, 유지보수 상담을 신청하세요.</h2>
            <p className="section-desc">상담 신청은 구글 폼으로 접수합니다. 필요한 내용을 남겨주시면 코어웨이브가 확인 후 순차적으로 연락드립니다.</p>
            <Card className="contact-info">
              <div className="info-head">
                <div className="icon-box"><ClipboardCheck size={25} /></div>
                <div>
                  <p className="eyebrow">상담 신청 방식</p>
                  <h3 style={{ margin: "4px 0 0" }}>구글 폼 작성 후 접수</h3>
                </div>
              </div>
              <div className="info-list">
                <span className="inline-check"><ClipboardCheck size={17} /> 강의 수강 문의</span>
                <span className="inline-check"><ClipboardCheck size={17} /> 쇼핑몰 신규 제작 문의</span>
                <span className="inline-check"><ClipboardCheck size={17} /> 기능 개선·유지보수 문의</span>
              </div>
            </Card>
          </div>
          <Card className="form-card">
            <Badge><ExternalLink size={16} /> Google Form</Badge>
            <h3>상담 신청서를 작성해주세요.</h3>
            <p>구글 폼에 이름, 연락처, 문의 유형, 현재 상황을 남겨주시면 확인 후 상담을 진행합니다. 강의 수강 문의와 쇼핑몰 제작·유지보수 상담 모두 같은 폼에서 접수할 수 있습니다.</p>
            <div className="form-points">
              <span className="inline-check"><CheckCircle2 size={18} /> 별도 메일 앱 없이 바로 신청할 수 있습니다.</span>
              <span className="inline-check"><CheckCircle2 size={18} /> 상담 내용은 구글 폼으로 안전하게 접수됩니다.</span>
              <span className="inline-check"><CheckCircle2 size={18} /> 접수 후 확인 순서대로 연락드립니다.</span>
            </div>
            <a className="btn btn-dark full-btn" href={CONSULT_FORM_URL} target="_blank" rel="noreferrer">
              구글 폼으로 상담 신청하기 <Send size={18} />
            </a>
            <p className="small-note">버튼을 누르면 새 창에서 상담 신청 구글 폼이 열립니다.</p>
          </Card>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container faq-wrap">
          <div className="center">
            <Badge>FAQ</Badge>
            <h2 className="section-title">자주 묻는 질문</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, idx) => (
              <FAQItem key={item.q} item={item} open={openFaq === idx} onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <strong>코어웨이브</strong>
          <span>© 2026 CoreWave. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
