"use client";

import { useState } from "react";
import Link from "next/link";

const G = {
    page: { background: "#0A0A0A", minHeight: "100vh", color: "#F5F0E8", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
    nav: { background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "1rem 2rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky" as const, top: 0, zIndex: 10, backdropFilter: "blur(20px)" } as React.CSSProperties,
    logo: { fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontSize: "1.25rem", fontWeight: 900, textDecoration: "none" } as React.CSSProperties,
    breadcrumb: { color: "#4A4540", fontSize: "0.9rem" } as React.CSSProperties,
    main: { maxWidth: "44rem", margin: "0 auto", padding: "4rem 2rem" } as React.CSSProperties,
    eyebrow: { color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase" as const, marginBottom: "1rem", display: "block" } as React.CSSProperties,
    h1: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 3.5rem)", fontWeight: 900, color: "#F5F0E8", lineHeight: 1.05, marginBottom: "3rem" } as React.CSSProperties,
    gold: { background: "linear-gradient(135deg, #E8C96B, #C9A84C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } as React.CSSProperties,
    btnGold: { background: "linear-gradient(135deg, #E8C96B 0%, #C9A84C 60%, #A87B20 100%)", color: "#0A0A0A", fontWeight: 900, padding: "1rem 2rem", borderRadius: "0.75rem", border: "none", cursor: "pointer", fontSize: "1rem", width: "100%", display: "block", textAlign: "center" as const } as React.CSSProperties,
    btnOutline: { border: "2px solid rgba(201,168,76,0.4)", color: "#C9A84C", background: "transparent", fontWeight: 700, padding: "0.75rem 2rem", borderRadius: "0.75rem", cursor: "pointer", fontSize: "0.9rem", width: "100%", display: "block", textAlign: "center" as const } as React.CSSProperties,
};

const QUESTIONS = [
    {
        id: "q1",
        question: "Qual das opções melhor te descreve agora?",
        options: [
            { value: "ativo", label: "✋ Já sou pai e quero ser melhor" },
            { value: "futuro", label: "🌱 Ainda não sou pai, mas vou ser" },
            { value: "gestacao", label: "💛 Minha parceira está grávida agora" },
        ]
    },
    {
        id: "q2",
        question: "Quando se trata de presença, você reconhece que...",
        options: [
            { value: "presente", label: "🟢 Estou presente, mas quero ir mais fundo" },
            { value: "ausente", label: "🔴 Honestamente, fui mais ausente do que deveria" },
            { value: "distante", label: "🟡 Trabalho muito e o equilíbrio tá difícil" },
        ]
    },
    {
        id: "q3",
        question: "Tem algo especial na sua situação de pai?",
        options: [
            { value: "normal", label: "👤 Situação padrão" },
            { value: "atipico", label: "⭐ Meu filho tem TEA, TDAH ou outra condição" },
            { value: "separado", label: "🔄 Criação compartilhada / separado da mãe" },
        ]
    },
    {
        id: "q4",
        question: "Qual é a sua maior dificuldade como pai?",
        options: [
            { value: "comunicacao", label: "💬 Não sei como conversar com meu filho" },
            { value: "emocional", label: "🔥 Controle emocional — me irrito fácil" },
            { value: "tempo", label: "⏰ Falta de tempo de qualidade" },
        ]
    },
    {
        id: "q5",
        question: "Como você se sente em relação ao seu próprio pai?",
        options: [
            { value: "bom", label: "🏆 Foi um bom exemplo — quero continuar" },
            { value: "ausente_pai", label: "💔 Foi ausente — quero quebrar o ciclo" },
            { value: "misto", label: "🔄 Aprendi das duas formas — o que fazer e não fazer" },
        ]
    },
];

const PROFILES: Record<string, { titulo: string; descricao: string; foco: string[]; proximo: string; icon: string; cor: string }> = {
    base: {
        titulo: "O Pai que Aparece",
        descricao: "Você está aqui questionando. Isso já te coloca à frente. Seu próximo nível é transformar presença em conexão real — ir além do 'tô aqui' para o 'te vejo de verdade'.",
        foco: ["Qualidade do tempo sobre quantidade", "Comunicação emocional profunda", "Ser o modelo que ele vai copiar"],
        proximo: "/tips",
        icon: "🏆",
        cor: "#C9A84C"
    },
    futuro: {
        titulo: "O Pai que Está Chegando",
        descricao: "A melhor hora de se preparar foi ontem. A segunda melhor é agora. Antes do nascimento você constrói a fundação que vai definir os primeiros anos.",
        foco: ["Relação sólida com a parceira", "Preparação emocional real", "Resolver pendências antes do D-Day"],
        proximo: "/gestacao",
        icon: "🌱",
        cor: "#27AE60"
    },
    gestacao: {
        titulo: "O Parceiro da Gestação",
        descricao: "Você está se preparando enquanto ainda dá tempo. Quem acompanha a gestação de verdade chega no dia do parto com outra energia. Com outro tipo de presença.",
        foco: ["Acompanhamento ativo nas consultas", "Suporte emocional consistente", "Preparação prática do lar"],
        proximo: "/gestacao",
        icon: "💛",
        cor: "#F39C12"
    },
    atipico: {
        titulo: "O Pai de Um Filho Diferente",
        descricao: "Você foi convocado para uma missão que a maioria dos homens nunca vai conhecer. Seu filho não é problema pra resolver — é um ser humano com outra linguagem. Sua função é aprender essa língua.",
        foco: ["Aceitação radical sem luto", "Construção de rede de suporte", "Parceria redobrada com a mãe", "Autocuidado sem culpa"],
        proximo: "/atipicos",
        icon: "⭐",
        cor: "#9B59B6"
    },
    ausente: {
        titulo: "O Pai que Está Voltando",
        descricao: "Reconhecer que ficou ausente é o passo mais difícil — e o mais raro. Muitos pais nunca chegam aqui. A reconexão não é rápida, mas é possível. E você acabou de dar o primeiro passo.",
        foco: ["Reconexão gradual e honesta", "Conversas corajosas e abertas", "Consistência acima de tudo"],
        proximo: "/tips",
        icon: "🔄",
        cor: "#E74C3C"
    }
};

function getProfile(answers: Record<string, string>) {
    if (answers.q3 === "atipico") return "atipico";
    if (answers.q1 === "gestacao") return "gestacao";
    if (answers.q1 === "futuro") return "futuro";
    if (answers.q2 === "ausente") return "ausente";
    return "base";
}

export default function AssessmentPage() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [result, setResult] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);

    const q = QUESTIONS[step];
    const progress = (step / QUESTIONS.length) * 100;

    const handleNext = () => {
        if (!selected) return;
        const newAnswers = { ...answers, [q.id]: selected };
        setAnswers(newAnswers);
        setSelected(null);
        if (step < QUESTIONS.length - 1) setStep(s => s + 1);
        else setResult(getProfile(newAnswers));
    };

    const profile = result ? PROFILES[result] : null;

    return (
        <div style={G.page}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />

            <nav style={G.nav}>
                <Link href="/" style={G.logo}>← Pai do Ano</Link>
                <span style={G.breadcrumb}>/ Assessment</span>
                {!result && <span style={{ marginLeft: "auto", color: "#6A6560", fontSize: "0.85rem", fontWeight: 700 }}>{step + 1}/{QUESTIONS.length}</span>}
            </nav>

            <main style={{ ...G.main, display: "flex", alignItems: !result ? "flex-start" : "flex-start", minHeight: "calc(100vh - 72px)" }}>
                {!result ? (
                    <div style={{ width: "100%", paddingTop: "2rem" }}>
                        {/* Progress bar */}
                        <div style={{ background: "#1C1C1C", borderRadius: "999px", height: "3px", marginBottom: "3rem", overflow: "hidden" }}>
                            <div style={{ background: "linear-gradient(90deg, #E8C96B, #C9A84C)", width: `${progress}%`, height: "100%", borderRadius: "999px", transition: "width 0.4s ease" }} />
                        </div>

                        <span style={G.eyebrow}>Pergunta {step + 1} de {QUESTIONS.length}</span>
                        <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 900, color: "#F5F0E8", lineHeight: 1.2, marginBottom: "2.5rem" }}>
                            {q.question}
                        </h2>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                            {q.options.map(opt => (
                                <button
                                    key={opt.value}
                                    onClick={() => setSelected(opt.value)}
                                    style={{
                                        width: "100%",
                                        textAlign: "left",
                                        padding: "1.25rem 1.5rem",
                                        borderRadius: "0.875rem",
                                        border: `2px solid ${selected === opt.value ? "#C9A84C" : "rgba(201,168,76,0.1)"}`,
                                        background: selected === opt.value ? "rgba(201,168,76,0.12)" : "#141414",
                                        color: selected === opt.value ? "#F5F0E8" : "#8A8075",
                                        fontSize: "1rem",
                                        fontWeight: selected === opt.value ? 700 : 600,
                                        cursor: "pointer",
                                        transition: "all 0.15s",
                                    }}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>

                        <button onClick={handleNext} disabled={!selected} style={{ ...G.btnGold, opacity: selected ? 1 : 0.35, cursor: selected ? "pointer" : "not-allowed" }}>
                            {step === QUESTIONS.length - 1 ? "Ver meu Perfil de Pai" : "Próxima Pergunta →"}
                        </button>
                    </div>
                ) : profile ? (
                    <div style={{ width: "100%", paddingTop: "2rem" }}>
                        {/* Result */}
                        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                            <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>{profile.icon}</div>
                            <span style={G.eyebrow}>Seu Perfil de Pai</span>
                            <h2 style={{ ...G.h1, fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "0" }}>{profile.titulo}</h2>
                        </div>

                        <div style={{ background: "#141414", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem" }}>
                            <p style={{ color: "#B0A080", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "1.75rem" }}>{profile.descricao}</p>

                            <div>
                                <p style={{ ...G.eyebrow, marginBottom: "0.75rem" }}>Seus focos agora:</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                    {profile.foco.map((f, i) => (
                                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                            <span style={{ color: "#C9A84C", fontWeight: 900, flexShrink: 0, marginTop: "2px" }}>✦</span>
                                            <span style={{ color: "#F5F0E8", fontWeight: 600, lineHeight: 1.5 }}>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <Link href={profile.proximo} style={{ ...G.btnGold, textDecoration: "none", padding: "1rem 2rem" }}>
                                Ver dicas para o meu perfil →
                            </Link>
                            <Link href="/advisor" style={{ ...G.btnOutline, textDecoration: "none", padding: "0.875rem 2rem" }}>
                                Descrever uma situação pro Conselheiro IA
                            </Link>
                            <button onClick={() => { setResult(null); setStep(0); setAnswers({}); }} style={{ background: "none", border: "none", color: "#5A5550", fontSize: "0.85rem", cursor: "pointer", fontWeight: 600, marginTop: "0.25rem" }}>
                                Refazer o assessment
                            </button>
                        </div>
                    </div>
                ) : null}
            </main>
        </div>
    );
}
