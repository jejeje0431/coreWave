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
  Mail,
  Send,
  ClipboardCheck,
} from "lucide-react";

const CONTACT_EMAIL = "jejeje0431@gmail.com";

function Button({ children, onClick, variant = "primary", className = "", type = "button" }) {
  const base = "inline-flex items-center justify-center rounded-full font-semibold transition active:scale-[0.99]";
  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    light: "bg-white text-slate-950 hover:bg-slate-100",
    outlineLight: "border border-white/30 bg-white/5 text-white hover:bg-white/10",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl bg-white shadow-sm ${className}`}>{children}</div>;
}

function SectionBadge({ children }) {
  return <div className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">{children}</div>;
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

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
    a: "네. 코어웨이브에서 쇼핑몰 개발, 기능 개선, 유지보수, 운영 컨설팅까지 별도 상담을 통해 지원합니다.",
  },
  {
    q: "어떤 AI 도구를 사용하나요?",
    a: "ChatGPT, 이미지 생성 도구, 상세페이지 제작 보조 도구, 광고 카피 생성 프롬프트 등을 상황에 맞게 활용합니다.",
  },
];

function FAQItem({ item, open, onClick }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <button className="flex w-full items-center justify-between gap-4 text-left" onClick={onClick} type="button">
        <span className="font-semibold text-slate-900">{item.q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <p className="mt-4 leading-7 text-slate-600">{item.a}</p> : null}
    </div>
  );
}

export default function AIShoppingMallCourseHomepage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "쇼핑몰 제작 상담",
    message: "",
  });

  const stats = useMemo(
    () => [
      { label: "실습 중심 커리큘럼", value: "6단계" },
      { label: "제공 템플릿", value: "20+" },
      { label: "제작·유지보수 상담", value: "가능" },
    ],
    []
  );

  const mailtoHref = useMemo(() => {
    const subject = `[코어웨이브 상담 신청] ${contactForm.service || "문의"}`;
    const lineBreak = String.fromCharCode(10);
    const bodyLines = [
      "코어웨이브 상담 신청입니다.",
      "",
      `이름: ${contactForm.name}`,
      `연락처: ${contactForm.phone}`,
      `이메일: ${contactForm.email}`,
      `문의 유형: ${contactForm.service}`,
      "",
      "문의 내용:",
      contactForm.message,
    ];
    const body = bodyLines.join(lineBreak);

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [contactForm]);

  const handleContactChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-50 border-b bg-white/90 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <button className="text-left text-xl font-black tracking-tight text-slate-950" onClick={() => scrollToSection("hero")} type="button">
            코어웨이브
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <button onClick={() => scrollToSection("course")} type="button">강의 소개</button>
            <button onClick={() => scrollToSection("build-service")} type="button">제작·유지보수</button>
            <button onClick={() => scrollToSection("curriculum")} type="button">커리큘럼</button>
            <button onClick={() => scrollToSection("contact")} type="button">문의하기</button>
          </nav>
          <Button className="h-10 px-5" onClick={() => scrollToSection("contact")}>상담 신청</Button>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-20 text-white">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              코어웨이브가 알려주는 AI 쇼핑몰 구축 실전 강의
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              AI 쇼핑몰 만들기, <br />혼자서도 시작하고 필요하면 맡길 수 있습니다.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              상품 선정부터 상세페이지 제작, 쇼핑몰 구축, 콘텐츠 마케팅, 고객 응대 자동화까지. 직접 배우고 싶은 분에게는 강의를, 혼자 만들기 어려운 분에게는 쇼핑몰 개발과 유지보수 상담을 제공합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="light" className="h-12 px-7 text-base" onClick={() => scrollToSection("contact")}>
                상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outlineLight" className="h-12 px-7 text-base" onClick={() => scrollToSection("curriculum")}>
                커리큘럼 보기
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />코딩 지식 불필요</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />실습 템플릿 제공</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />제작·유지보수 상담 가능</span>
            </div>
          </div>

          <Card className="border border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur">
            <div className="p-6 md:p-8">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">CoreWave Commerce Board</p>
                    <h2 className="mt-1 text-2xl font-bold">내 쇼핑몰 제작 보드</h2>
                  </div>
                  <Store className="h-10 w-10 rounded-2xl bg-slate-100 p-2 text-slate-900" />
                </div>
                <div className="mt-6 grid gap-3">
                  {[
                    ["상품 상세페이지", "완성"],
                    ["AI 광고 문구", "생성 중"],
                    ["개발·유지보수 상담", "신청 가능"],
                  ].map(([name, status]) => (
                    <div key={name} className="flex items-center justify-between rounded-2xl bg-slate-100 p-4">
                      <span className="font-medium">{name}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-600">{status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                  <p className="text-sm text-slate-300">코어웨이브 지원 방식</p>
                  <p className="mt-2 text-xl font-bold">강의로 배우고, 필요하면 개발까지 맡기기</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-slate-950">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="course" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionBadge>이 강의가 필요한 분</SectionBadge>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">쇼핑몰을 시작하고 싶지만 무엇부터 해야 할지 막막한 분께 적합합니다.</h2>
              <p className="mt-5 leading-8 text-slate-600">
                단순히 AI 도구 사용법만 배우는 강의가 아닙니다. 실제 쇼핑몰을 만들 때 필요한 기획, 상품 페이지, 운영, 마케팅 흐름을 하나의 실행 프로세스로 정리합니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Store, title: "예비 창업자", desc: "온라인 판매를 처음 시작하려는 분" },
                { icon: Bot, title: "AI 입문자", desc: "AI를 실무에 바로 쓰고 싶은 분" },
                { icon: PackageCheck, title: "초보 셀러", desc: "상품 페이지와 홍보가 어려운 분" },
                { icon: Users, title: "1인 사업자", desc: "기획·제작·운영 시간을 줄이고 싶은 분" },
              ].map((item) => (
                <Card key={item.title}>
                  <div className="p-6">
                    <item.icon className="h-10 w-10 rounded-2xl bg-slate-100 p-2 text-slate-900" />
                    <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="build-service" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionBadge>쇼핑몰 제작·유지보수</SectionBadge>
              <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">혼자 만들기 어려운 분들을 위해 코어웨이브가 직접 개발합니다.</h2>
              <p className="mt-5 leading-8 text-slate-600">
                강의를 보고 직접 구축할 수도 있고, 시간이 부족하거나 기술 구현이 어려운 경우에는 코어웨이브에 쇼핑몰 제작과 운영 개선을 상담할 수 있습니다.
              </p>
              <Button className="mt-8 h-12 px-7 text-base" onClick={() => scrollToSection("contact")}>
                제작 상담 문의하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {buildServices.map((service) => (
                <Card key={service.title} className="bg-slate-50">
                  <div className="p-6">
                    <service.icon className="h-11 w-11 rounded-2xl bg-white p-3 text-slate-950 shadow-sm" />
                    <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionBadge>수강 후 얻게 되는 것</SectionBadge>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">아이디어가 아니라, 판매 가능한 쇼핑몰 결과물을 만듭니다.</h2>
              <p className="mt-5 leading-8 text-slate-600">
                강의는 이론 설명보다 실습 비중을 높였습니다. 각 단계에서 바로 사용할 수 있는 프롬프트, 체크리스트, 페이지 구성안을 제공합니다.
              </p>
              <div className="mt-8 grid gap-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-slate-950 text-white shadow-xl">
              <div className="p-8">
                <LineChart className="h-12 w-12 rounded-2xl bg-white/10 p-3" />
                <h3 className="mt-6 text-2xl font-bold">강의 핵심 목표</h3>
                <p className="mt-4 leading-8 text-slate-300">
                  AI를 “도구”로만 배우는 것이 아니라, 쇼핑몰 사업의 반복 업무를 줄이고 더 빠르게 테스트할 수 있는 운영 시스템을 만드는 것입니다.
                </p>
                <div className="mt-8 grid gap-4">
                  {["상품 기획", "상세페이지 제작", "콘텐츠 마케팅", "CS 자동화", "성과 개선"].map((step, idx) => (
                    <div key={step} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">{idx + 1}</span>
                      <span className="font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="curriculum" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionBadge>커리큘럼</SectionBadge>
              <h2 className="mt-6 text-3xl font-bold md:text-4xl">6단계로 완성하는 AI 쇼핑몰 실습</h2>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="h-5 w-5" />
              온라인 강의 + 실습 자료 제공
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {curriculum.map((item) => (
              <Card key={item.week} className="bg-slate-50 transition hover:-translate-y-1 hover:shadow-md">
                <div className="p-6">
                  <div className="text-sm font-bold text-slate-500">{item.week}</div>
                  <h3 className="mt-3 text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <SectionBadge>수강 신청</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-5xl">AI를 활용해 첫 쇼핑몰을 빠르게 오픈해보세요.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              지금 신청하면 강의 자료, AI 프롬프트 모음, 상세페이지 구성 템플릿, 운영 체크리스트를 함께 제공합니다. 직접 구축이 부담된다면 제작·유지보수 상담으로 연결할 수 있습니다.
            </p>
          </div>
          <Card className="text-slate-950 shadow-2xl">
            <div className="p-8">
              <p className="text-sm font-semibold text-slate-500">런칭 특가</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-bold">₩199,000</span>
                <span className="pb-1 text-slate-500 line-through">₩350,000</span>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-slate-700">
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" />평생 시청 가능</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" />실습 템플릿 제공</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" />제작·유지보수 상담 가능</span>
              </div>
              <Button className="mt-8 h-12 w-full text-base" onClick={() => scrollToSection("contact")}>
                지금 상담 신청하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-4 text-center text-xs text-slate-500">정원 마감 시 사전 공지 없이 신청이 종료될 수 있습니다.</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="contact" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionBadge>문의하기</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">강의 수강, 쇼핑몰 제작, 유지보수 상담을 신청하세요.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              문의 내용을 작성한 뒤 상담 신청 버튼을 누르면 입력한 내용이 메일로 작성됩니다. 코어웨이브가 확인 후 상담을 진행합니다.
            </p>
            <Card className="mt-8">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-10 w-10 rounded-2xl bg-slate-100 p-2 text-slate-950" />
                  <div>
                    <p className="text-sm text-slate-500">상담 접수 메일</p>
                    <p className="font-bold text-slate-950">{CONTACT_EMAIL}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-slate-600">
                  <span className="flex items-start gap-2"><ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0" />강의 수강 문의</span>
                  <span className="flex items-start gap-2"><ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0" />쇼핑몰 신규 제작 문의</span>
                  <span className="flex items-start gap-2"><ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0" />기능 개선·유지보수 문의</span>
                </div>
              </div>
            </Card>
          </div>

          <Card className="shadow-xl">
            <div className="p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  이름
                  <input
                    className="h-12 rounded-2xl border bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white"
                    placeholder="성함을 입력해주세요"
                    value={contactForm.name}
                    onChange={(e) => handleContactChange("name", e.target.value)}
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  연락처
                  <input
                    className="h-12 rounded-2xl border bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white"
                    placeholder="010-0000-0000"
                    value={contactForm.phone}
                    onChange={(e) => handleContactChange("phone", e.target.value)}
                  />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
                이메일
                <input
                  className="h-12 rounded-2xl border bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white"
                  placeholder="답변 받을 이메일을 입력해주세요"
                  value={contactForm.email}
                  onChange={(e) => handleContactChange("email", e.target.value)}
                />
              </label>
              <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
                문의 유형
                <select
                  className="h-12 rounded-2xl border bg-slate-50 px-4 outline-none transition focus:border-slate-900 focus:bg-white"
                  value={contactForm.service}
                  onChange={(e) => handleContactChange("service", e.target.value)}
                >
                  <option>쇼핑몰 제작 상담</option>
                  <option>유지보수 상담</option>
                  <option>강의 수강 문의</option>
                  <option>기능 개선 문의</option>
                  <option>기타 문의</option>
                </select>
              </label>
              <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
                문의 내용
                <textarea
                  className="min-h-36 rounded-2xl border bg-slate-50 px-4 py-3 outline-none transition focus:border-slate-900 focus:bg-white"
                  placeholder="현재 상황, 필요한 기능, 원하는 오픈 일정 등을 적어주세요."
                  value={contactForm.message}
                  onChange={(e) => handleContactChange("message", e.target.value)}
                />
              </label>
              <a href={mailtoHref} className="mt-6 block">
                <div className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-base font-semibold text-white transition hover:bg-slate-800">
                  문의 메일 보내기 <Send className="ml-2 h-4 w-4" />
                </div>
              </a>
              <p className="mt-4 text-center text-xs leading-6 text-slate-500">
                현재 버튼은 메일 앱을 열어 상담 내용을 발송하는 방식입니다. 실제 서버 접수형 폼으로 전환하려면 별도 연동이 필요합니다.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">자주 묻는 질문</h2>
          </div>
          <div className="mt-8 grid gap-4">
            {faqs.map((item, idx) => (
              <FAQItem key={item.q} item={item} open={openFaq === idx} onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t bg-white px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p className="font-semibold text-slate-900">코어웨이브</p>
          <p>© 2026 CoreWave. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
