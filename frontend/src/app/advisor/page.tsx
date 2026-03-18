"use client";

import Link from "next/link";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8003";

const G = {
    page: { background: "#0A0A0A", minHeight: "100vh", color: "#F5F0E8", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
    nav: { background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "1rem 2rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky" as const, top: 0, zIndex: 10, backdropFilter: "blur(20px)" } as React.CSSProperties,
    logo: { fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontSize: "1.25rem", fontWeight: 900, textDecoration: "none" } as React.CSSProperties,
    main: { maxWidth: "48rem", margin: "0 auto", padding: "4rem 2rem" } as React.CSSProperties,
    eyebrow: { color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase" as const, display: "block", marginBottom: "0.75rem" } as React.CSSProperties,
    h1: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 900, color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1rem" } as React.CSSProperties,
    btnGold: { background: "linear-gradient(135deg, #E8C96B 0%, #C9A84C 60%, #A87B20 100%)", color: "#0A0A0A", fontWeight: 900, padding: "1rem 2rem", borderRadius: "0.75rem", border: "none", cursor: "pointer", fontSize: "1rem", width: "100%", display: "block", textAlign: "center" as const, textDecoration: "none" } as React.CSSProperties,
};

const CONTEXTS = [
    { value: "geral", label: "👨 Pai geral" },
    { value: "atipico", label: "⭐ Pai de filho atípico" },
    { value: "futuro_pai", label: "🌱 Futuro pai" },
    { value: "separado", label: "🔄 Criação compartilhada" },
];

const EXAMPLES = [
    "Meu filho de 8 anos não me obedece e fica na tela o dia todo. O que fazer?",
    "Minha esposa está grávida e distante emocionalmente. Como agir?",
    "Meu filho foi diagnosticado com autismo. Não sei por onde começar.",
    "Trabalho demais e quando chego em casa estou sem energia pra estar presente.",
    "Meu filho adolescente não fala mais comigo. O que devo fazer?",
];

export default function AdvisorPage() {
    const [situation, setSituation] = useState("");
    const [advice, setAdvice] = useState("");
    const [loading, setLoading] = useState(false);
    const [fatherType, setFatherType] = useState("geral");

    const handleSubmit = async () => {
        if (!situation.trim()) return;
        setLoading(true);
        setAdvice("");
        try {
            const res = await fetch(`${API_URL}/advisor`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ situation, father_type: fatherType })
            });
            const data = await res.json();
            setAdvice(data.advice);
        } catch {
            setAdvice("Não consegui conectar ao servidor. Certifique-se de que o backend está rodando na porta 8003.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={G.page}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
            <nav style={G.nav}>
                <Link href="/" style={G.logo}>← Pai do Ano</Link>
                <span style={{ color: "#4A4540", fontSize: "0.9rem" }}>/ Conselheiro IA</span>
            </nav>

            <main style={G.main}>
                <span style={G.eyebrow}>Conselheiro IA</span>
                <h1 style={G.h1}>
                    Descreve a situação.<br />
                    <span style={{ color: "#C9A84C" }}>Eu te digo como agir.</span>
                </h1>
                <p style={{ color: "#7A7060", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "3rem" }}>
                    Sem julgamento. Sem papo de livro. Uma resposta direta, de homem para homem, sobre como um pai deve agir.
                </p>

                {/* Context */}
                <div style={{ marginBottom: "2rem" }}>
                    <p style={{ ...G.eyebrow, marginBottom: "0.75rem" }}>Seu contexto</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}>
                        {CONTEXTS.map(c => (
                            <button key={c.value} onClick={() => setFatherType(c.value)} style={{
                                padding: "0.875rem 1rem",
                                borderRadius: "0.75rem",
                                border: `2px solid ${fatherType === c.value ? "#C9A84C" : "rgba(201,168,76,0.1)"}`,
                                background: fatherType === c.value ? "rgba(201,168,76,0.12)" : "#141414",
                                color: fatherType === c.value ? "#F5F0E8" : "#7A7060",
                                fontWeight: 700,
                                cursor: "pointer",
                                fontSize: "0.9rem",
                                textAlign: "left" as const,
                                transition: "all 0.15s"
                            }}>{c.label}</button>
                        ))}
                    </div>
                </div>

                {/* Textarea */}
                <div style={{ marginBottom: "1rem" }}>
                    <textarea
                        value={situation}
                        onChange={e => setSituation(e.target.value)}
                        placeholder="Descreve o que está acontecendo. Pode ser honesto — aqui ninguém te julga..."
                        rows={6}
                        style={{
                            width: "100%", padding: "1.25rem", borderRadius: "0.875rem", resize: "none",
                            background: "#141414", border: "2px solid rgba(201,168,76,0.15)",
                            color: "#F5F0E8", fontSize: "1rem", lineHeight: 1.7, fontFamily: "Inter, sans-serif",
                            outline: "none", boxSizing: "border-box" as const,
                        }}
                        onFocus={e => e.target.style.borderColor = "#C9A84C"}
                        onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.15)"}
                    />
                </div>
                <button onClick={handleSubmit} disabled={loading || !situation.trim()} style={{ ...G.btnGold, opacity: loading || !situation.trim() ? 0.35 : 1, marginBottom: "3rem" }}>
                    {loading ? "O conselheiro está pensando..." : "Pedir Conselho →"}
                </button>

                {/* Examples */}
                {!advice && (
                    <div>
                        <p style={{ color: "#4A4540", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Ou escolha um exemplo:</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {EXAMPLES.map((ex, i) => (
                                <button key={i} onClick={() => setSituation(ex)} style={{
                                    width: "100%", textAlign: "left" as const, padding: "1rem 1.25rem", borderRadius: "0.75rem",
                                    background: "#111", border: "1px solid rgba(201,168,76,0.08)",
                                    color: "#6A6055", fontSize: "0.875rem", cursor: "pointer", fontFamily: "Inter, sans-serif",
                                }}>
                                    "{ex}"
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Advice */}
                {advice && (
                    <div style={{ background: "#111", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1.25rem", padding: "2rem", marginTop: "1rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.5rem" }}>
                            <div style={{ width: "44px", height: "44px", background: "linear-gradient(135deg,#E8C96B,#C9A84C)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>🤝</div>
                            <div>
                                <p style={{ color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Conselho Paterno</p>
                                <p style={{ color: "#4A4540", fontSize: "0.75rem" }}>Baseado em A Geometria da Paciência · Danilo Pinheiro</p>
                            </div>
                        </div>
                        <div style={{ color: "#D0C8B0", lineHeight: 1.85, fontSize: "1rem", whiteSpace: "pre-wrap", fontWeight: 500 }}>{advice}</div>
                        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" }}>
                            <button onClick={() => { setAdvice(""); setSituation(""); }} style={{ background: "none", border: "none", color: "#5A5550", cursor: "pointer", fontSize: "0.875rem", fontWeight: 600 }}>
                                Nova situação
                            </button>
                            <Link href="/tips" style={{ color: "#C9A84C", fontSize: "0.875rem", fontWeight: 700, textDecoration: "none" }}>Ver mais dicas →</Link>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
