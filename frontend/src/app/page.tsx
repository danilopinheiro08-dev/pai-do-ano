"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8003";


const S = {
    page: { background: "#0A0A0A", color: "#F5F0E8", minHeight: "100vh", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
    nav: { background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "fixed" as const, top: 0, left: 0, right: 0, zIndex: 50, padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(20px)" } as React.CSSProperties,
    logo: { fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontSize: "1.5rem", fontWeight: 900, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" } as React.CSSProperties,
    betaBadge: { background: "linear-gradient(135deg, #E8C96B, #C9A84C)", color: "#0A0A0A", fontSize: "0.55rem", padding: "0.25rem 0.5rem", borderRadius: "0.25rem", fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase" as const } as React.CSSProperties,
    navLinks: { display: "flex", alignItems: "center", gap: "2rem" } as React.CSSProperties,
    navLink: { color: "#8A8075", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" } as React.CSSProperties,
    btnGold: { background: "linear-gradient(135deg, #E8C96B 0%, #C9A84C 60%, #A87B20 100%)", color: "#0A0A0A", fontWeight: 900, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none", display: "inline-block", fontSize: "0.9rem", cursor: "pointer", border: "none" } as React.CSSProperties,
    btnOutline: { border: "2px solid rgba(201,168,76,0.5)", color: "#C9A84C", fontWeight: 900, padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none", display: "inline-block", fontSize: "0.9rem" } as React.CSSProperties,
    hero: { minHeight: "100vh", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", textAlign: "center" as const, padding: "8rem 2rem 4rem", position: "relative" as const } as React.CSSProperties,
    overlay: { position: "absolute" as const, inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.97) 70%)", zIndex: 1 } as React.CSSProperties,
    heroContent: { position: "relative" as const, zIndex: 2, maxWidth: "56rem" } as React.CSSProperties,
    pill: { display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "999px", padding: "0.35rem 1rem", marginBottom: "2rem" } as React.CSSProperties,
    pillDot: { width: "8px", height: "8px", borderRadius: "50%", background: "#C9A84C" } as React.CSSProperties,
    pillText: { color: "#C9A84C", fontSize: "0.7rem", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" as const } as React.CSSProperties,
    h1: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(3rem, 10vw, 7rem)", fontWeight: 900, lineHeight: 0.9, marginBottom: "1.5rem" } as React.CSSProperties,
    gold: { background: "linear-gradient(135deg, #E8C96B, #C9A84C, #8B6914)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties,
    subtitle: { color: "#9A9080", fontSize: "1.25rem", maxWidth: "40rem", margin: "0 auto 2.5rem", lineHeight: 1.8, fontWeight: 500 } as React.CSSProperties,
    ctaRow: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" as const } as React.CSSProperties,
    statsBar: { background: "#0F0F0F", borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)", padding: "3rem 2rem" } as React.CSSProperties,
    statsGrid: { maxWidth: "62rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", textAlign: "center" as const } as React.CSSProperties,
    statNum: { fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.25rem" } as React.CSSProperties,
    statLabel: { color: "#6A6560", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em" } as React.CSSProperties,
    section: { maxWidth: "72rem", margin: "0 auto", padding: "5rem 2rem" } as React.CSSProperties,
    sectionTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#F5F0E8", marginBottom: "0.75rem" } as React.CSSProperties,
    sectionSub: { color: "#7A7060", fontSize: "1.1rem", fontWeight: 500, marginBottom: "3rem" } as React.CSSProperties,
    cardsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" } as React.CSSProperties,
    card: { background: "#141414", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "1.25rem", padding: "2rem", textDecoration: "none", display: "block", transition: "all 0.25s" } as React.CSSProperties,
    cardTag: { display: "inline-block", background: "linear-gradient(135deg, #E8C96B, #C9A84C)", color: "#0A0A0A", fontSize: "0.6rem", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase" as const, padding: "0.25rem 0.6rem", borderRadius: "999px", marginBottom: "1rem" } as React.CSSProperties,
    cardIcon: { fontSize: "2.5rem", marginBottom: "1rem", display: "block" } as React.CSSProperties,
    cardTitle: { color: "#F5F0E8", fontSize: "1.2rem", fontWeight: 900, marginBottom: "0.75rem" } as React.CSSProperties,
    cardDesc: { color: "#7A7060", lineHeight: 1.75, fontSize: "0.9rem", marginBottom: "1.25rem" } as React.CSSProperties,
    cardCta: { color: "#C9A84C", fontWeight: 900, fontSize: "0.85rem" } as React.CSSProperties,
    manifesto: { background: "#0F0F0F", borderTop: "1px solid rgba(201,168,76,0.08)", padding: "5rem 2rem", textAlign: "center" as const } as React.CSSProperties,
    manifestoQuote: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, color: "#F5F0E8", maxWidth: "40rem", margin: "0 auto 1.5rem", lineHeight: 1.4 } as React.CSSProperties,
    manifestoSub: { color: "#7A7060", fontSize: "1rem", maxWidth: "32rem", margin: "0 auto 2.5rem" } as React.CSSProperties,
    footer: { background: "#070707", borderTop: "1px solid rgba(201,168,76,0.08)", padding: "2.5rem 2rem" } as React.CSSProperties,
    footerInner: { maxWidth: "72rem", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1.5rem" } as React.CSSProperties,
};

function DailyTipPopup() {
    const [show, setShow] = useState(false);
    const [tip, setTip] = useState("");

    useEffect(() => {
        const today = new Date().toDateString();
        if (localStorage.getItem("paidoano_tip") === today) return;
        const timer = setTimeout(async () => {
            try {
                const r = await fetch(`${API_URL}/daily-tip`);
                const d = await r.json();
                setTip(d.tip);
            } catch {
                setTip("Sua presença hoje vale mais do que qualquer presente. Apareça.");
            }
            setShow(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const dismiss = () => { setShow(false); localStorage.setItem("paidoano_tip", new Date().toDateString()); };

    if (!show) return null;

    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: "0 1rem 1rem" }}>
            <div style={{ width: "100%", maxWidth: "480px", background: "#141414", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "1.25rem", padding: "1.75rem", boxShadow: "0 0 60px rgba(201,168,76,0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #E8C96B, #C9A84C)", borderRadius: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A0A0A", fontWeight: 900, fontSize: "1rem" }}>✦</div>
                    <div>
                        <p style={{ color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase" }}>Dica do Dia</p>
                        <p style={{ color: "#5A5550", fontSize: "0.7rem" }}>{new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}</p>
                    </div>
                </div>
                <blockquote style={{ borderLeft: "3px solid #C9A84C", paddingLeft: "1rem", color: "#F5F0E8", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.7, marginBottom: "1.5rem", fontFamily: "Playfair Display, Georgia, serif" }}>
                    "{tip}"
                </blockquote>
                <button onClick={dismiss} style={{ ...S.btnGold, width: "100%", textAlign: "center", padding: "0.875rem" }}>
                    Entendido. Vou aplicar hoje.
                </button>
            </div>
        </div>
    );
}

const NAV = [
    { href: "/assessment", label: "Descobre seu Perfil" },
    { href: "/tips", label: "1000+ Dicas" },
    { href: "/advisor", label: "Conselheiro IA" },
    { href: "/atipicos", label: "Pais Atípicos" },
    { href: "/sobre", label: "Sobre" },
];

const CARDS = [
    { title: "Descobre seu Perfil", desc: "Um assessment direto que te diz que tipo de pai você é e o que focar agora.", icon: "🎯", href: "/assessment", tag: "COMEÇA AQUI" },
    { title: "1000+ Dicas", desc: "Presença, comunicação, disciplina, gestação, filho atípico — separadas por área.", icon: "📌", href: "/tips" },
    { title: "Conselheiro IA", desc: "Descreve uma situação específica. Recebe um conselho direto, de pai para pai.", icon: "🤝", href: "/advisor" },
    { title: "Pais Atípicos", desc: "Uma seção inteira para pais de filhos com TEA, TDAH e outras condições.", icon: "⭐", href: "/atipicos" },
    { title: "Gestação & Chegada", desc: "Tudo que você precisa saber pra chegar no parto pronto e presente.", icon: "🌱", href: "/gestacao" },
    { title: "Sobre o Autor", desc: "Danilo Pinheiro. Pai de filho com autismo. Escreveu A Geometria da Paciência.", icon: "📖", href: "/sobre" },
];

export default function Home() {
    const [menu, setMenu] = useState(false);

    return (
        <div style={S.page}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet" />

            <DailyTipPopup />

            {/* NAV */}
            <nav style={S.nav}>
                <Link href="/" style={S.logo}>
                    Pai do Ano
                    <span style={S.betaBadge}>Beta</span>
                </Link>
                <div style={{ ...S.navLinks, display: "none" }} className="md:flex">
                    {NAV.map(l => <Link key={l.href} href={l.href} style={S.navLink}>{l.label}</Link>)}
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <Link href="/assessment" style={{ ...S.btnGold, padding: "0.6rem 1.25rem", fontSize: "0.8rem" }}>Começa Aqui →</Link>
                    <button onClick={() => setMenu(!menu)} style={{ background: "none", border: "none", color: "#C9A84C", fontSize: "1.5rem", cursor: "pointer" }}>☰</button>
                </div>
            </nav>

            {menu && (
                <div style={{ position: "fixed", inset: 0, zIndex: 49, background: "rgba(0,0,0,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
                    <button onClick={() => setMenu(false)} style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", color: "#C9A84C", fontSize: "2rem", cursor: "pointer" }}>×</button>
                    {NAV.map(l => (
                        <Link key={l.href} href={l.href} onClick={() => setMenu(false)} style={{ color: "#F5F0E8", fontSize: "1.75rem", fontWeight: 900, textDecoration: "none", fontFamily: "Playfair Display, Georgia, serif" }}>
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}

            {/* HERO */}
            <section style={S.hero}>
                <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                    <Image src="/hero.png" alt="Pai do Ano" fill style={{ objectFit: "cover", opacity: 0.18 }} priority />
                    <div style={S.overlay} />
                </div>

                <div style={S.heroContent}>
                    <div style={S.pill}>
                        <span style={{ ...S.pillDot, animation: "pulse 2s infinite" }} />
                        <span style={S.pillText}>Para pais de verdade</span>
                    </div>

                    <h1 style={S.h1}>
                        <span style={{ display: "block", color: "#F5F0E8" }}>O MANUAL QUE</span>
                        <span style={{ display: "block", ...S.gold }}>SEU PAI</span>
                        <span style={{ display: "block", color: "#F5F0E8" }}>NUNCA TE DEU.</span>
                    </h1>

                    <p style={S.subtitle}>
                        Não é sobre ser perfeito. É sobre ser <strong style={{ color: "#F5F0E8" }}>presente</strong>. De homem para homem, sem enrolação, sem agenda.
                    </p>

                    <div style={S.ctaRow}>
                        <Link href="/assessment" style={{ ...S.btnGold, padding: "1rem 2.5rem", fontSize: "1rem", borderRadius: "0.75rem" }}>
                            Descobre Que Pai Você É →
                        </Link>
                        <Link href="/advisor" style={{ ...S.btnOutline, padding: "1rem 2.5rem", fontSize: "1rem", borderRadius: "0.75rem" }}>
                            Falar com o Conselheiro
                        </Link>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <div style={S.statsBar}>
                <div style={S.statsGrid}>
                    {[
                        { n: "1000+", l: "Dicas de paternidade" },
                        { n: "5", l: "Perfis de pai" },
                        { n: "7", l: "Áreas da vida" },
                        { n: "∞", l: "Pais que merecem ser melhores" },
                    ].map((s, i) => (
                        <div key={i}>
                            <div style={S.statNum}>{s.n}</div>
                            <div style={S.statLabel}>{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CARDS */}
            <section style={S.section}>
                <div style={{ marginBottom: "3rem" }}>
                    <h2 style={S.sectionTitle}>Tudo que você precisa.</h2>
                    <p style={S.sectionSub}>Sem papo de livro de autoajuda. Só o que funciona.</p>
                </div>
                <div style={S.cardsGrid}>
                    {CARDS.map((c, i) => (
                        <Link key={i} href={c.href} style={S.card}>
                            {c.tag && <span style={S.cardTag}>{c.tag}</span>}
                            <span style={S.cardIcon}>{c.icon}</span>
                            <div style={S.cardTitle}>{c.title}</div>
                            <div style={S.cardDesc}>{c.desc}</div>
                            <div style={S.cardCta}>Acessar →</div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* MANIFESTO */}
            <div style={S.manifesto}>
                <blockquote style={S.manifestoQuote}>
                    "Filho nenhum precisa de um pai perfeito.<br />
                    <span style={{ color: "#C9A84C" }}>Precisa de um pai que não some."</span>
                </blockquote>
                <p style={S.manifestoSub}>
                    Esse app não tem login. Não te rastreia. Não te vende nada. Existe pra te forçar a olhar pra dentro e sair melhor.
                </p>
                <Link href="/assessment" style={{ ...S.btnGold, padding: "1rem 3rem", fontSize: "1.05rem", borderRadius: "0.75rem" }}>
                    Começa Agora. É Grátis.
                </Link>
            </div>

            {/* FOOTER */}
            <footer style={S.footer}>
                <div style={S.footerInner}>
                    <div>
                        <div style={{ ...S.logo, fontSize: "1.2rem" }}>Pai do Ano</div>
                        <p style={{ color: "#4A4540", fontSize: "0.8rem", marginTop: "0.25rem" }}>Por Danilo Pinheiro · A Geometria da Paciência</p>
                    </div>
                    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                        {NAV.map(l => <Link key={l.href} href={l.href} style={{ ...S.navLink, fontSize: "0.8rem" }}>{l.label}</Link>)}
                    </div>
                </div>
            </footer>
        </div>
    );
}
