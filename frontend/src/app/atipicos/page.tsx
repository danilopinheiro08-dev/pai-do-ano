"use client";

import Link from "next/link";

const nav: React.CSSProperties = { background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "1rem 2rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(20px)" };
const logo: React.CSSProperties = { fontFamily: "Playfair Display, Georgia, serif", color: "#C9A84C", fontSize: "1.25rem", fontWeight: 900, textDecoration: "none" };
const crumb: React.CSSProperties = { color: "#4A4540", fontSize: "0.9rem" };
const main: React.CSSProperties = { maxWidth: "56rem", margin: "0 auto", padding: "4rem 2rem" };
const eyebrow: React.CSSProperties = { color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" };
const btnGold: React.CSSProperties = { background: "linear-gradient(135deg, #E8C96B 0%, #C9A84C 60%, #A87B20 100%)", color: "#0A0A0A", fontWeight: 900, padding: "1rem 2.5rem", borderRadius: "0.75rem", border: "none", cursor: "pointer", fontSize: "1rem", textDecoration: "none", display: "inline-block" };

const SECTIONS = [
    {
        icon: "🧠",
        title: "TEA — Transtorno do Espectro Autista",
        items: [
            "Seu filho não está com defeito. Ele processa o mundo de forma diferente. Mais intensa. Mais literal. Mais honesta.",
            "O diagnóstico não é o fim. É o início de um mapa. E todo mapa precisa de alguém disposto a aprender a navegar.",
            "A rotina é o abraço invisível que ele não consegue pedir. Cria uma. Mantém. Isso é amor em estrutura.",
            "Quando ele tiver uma crise sensorial, não tenta resolver com palavras. Menos estímulo. Mais presença. Menos fala. Mais chão.",
            "Seu filho vai ter conquistas que outros não vão entender. Celebra com a mesma energia de gol no último minuto.",
        ]
    },
    {
        icon: "⚡",
        title: "TDAH — A Energia que Pede Direção",
        items: [
            "Criança com TDAH não é teimosia disfarçada. É um motor poderoso sem câmbio. Sua função é ajudar a calibrar.",
            "Põe menos ordens e mais engajamento. 'Você me ajuda com isso?' entra diferente de 'Para de uma vez'.",
            "Vídeo game não é o problema — é o espelho do que ele precisa: feedback rápido, missão clara, progresso visível.",
            "Exercício físico não é punição. É remédio. Meia hora de corrida ou esporte regula o sistema nervoso dele.",
            "O professor reclama? Ouve, investiga, mas não condena seu filho por laudo. Defende ele quando precisar defender.",
        ]
    },
    {
        icon: "🦋",
        title: "Síndrome de Down e Outras Condições",
        items: [
            "Inclusão começa em casa. Se você trata seu filho como capaz, o mundo vai aprender com você.",
            "Não compara com filho de outra pessoa. O progresso é dele. Na velocidade dele. Com a beleza que só ele tem.",
            "Conhece a comunidade de pais. O que você aprende em uma noite de conversa com outro pai vale mais que meses.",
            "Cuida do casal. Pares com filhos de alta necessidade têm altas taxas de ruptura. Investe nessa parceria.",
        ]
    },
    {
        icon: "💪",
        title: "Para o Pai Atípico: O que Ninguém Te Fala",
        items: [
            "Você vai ter dúvida se está fazendo certo. Todo pai tem. A diferença é que você está fazendo certo ao questionar.",
            "Precisar de ajuda não é fraqueza. É engenharia. Você não constrói uma casa sozinho.",
            "A exaustão que você sente é real. O autocuidado não é luxo aqui — é estrutura de sobrevivência afetiva.",
            "Você foi escolhido pra isso. Não por acidente. Por capacidade que você ainda está descobrindo ter.",
        ]
    },
];

export default function AtipicosPage() {
    return (
        <div style={{ background: "#0A0A0A", minHeight: "100vh", color: "#F5F0E8", fontFamily: "Inter, sans-serif" }}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet" />
            <nav style={nav}>
                <Link href="/" style={logo}>← Pai do Ano</Link>
                <span style={crumb}>/ Pais Atípicos</span>
            </nav>

            <main style={main}>
                {/* Header */}
                <div style={{ marginBottom: "3.5rem" }}>
                    <span style={eyebrow}>Seção Especial</span>
                    <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 900, color: "#F5F0E8", lineHeight: 1.05, marginBottom: "1.5rem" }}>
                        Pais Atípicos.<br />
                        <span style={{ color: "#C9A84C" }}>Filhos Extraordinários.</span>
                    </h1>
                    <p style={{ color: "#7A7060", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "42rem", marginBottom: "2rem" }}>
                        Você não está sozinho. E a missão que recebeu não é punição — é a convocação para um tipo de amor que poucos homens vão conhecer.
                    </p>
                    {/* Author quote */}
                    <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1rem", padding: "1.75rem" }}>
                        <p style={{ color: "#F5F0E8", fontStyle: "italic", lineHeight: 1.8, fontFamily: "Playfair Display, Georgia, serif", fontSize: "1.05rem", marginBottom: "0.75rem" }}>
                            "Quando recebi o diagnóstico do meu filho, não chorei. Eu mergulhei. Estudamos. Buscamos tudo que ele precisava. E descobrimos algo mágico: que a diferença não é erro. É outro idioma."
                        </p>
                        <p style={{ color: "#C9A84C", fontSize: "0.8rem", fontWeight: 900 }}>— Danilo Pinheiro, A Geometria da Paciência</p>
                    </div>
                </div>

                {/* Sections */}
                <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                    {SECTIONS.map((s, i) => (
                        <div key={i}>
                            {/* Section header */}
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                                <div style={{ width: "52px", height: "52px", background: "#141414", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                                    {s.icon}
                                </div>
                                <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#F5F0E8", fontSize: "1.5rem", fontWeight: 900 }}>{s.title}</h2>
                            </div>
                            {/* Tips */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", paddingLeft: "4rem" }}>
                                {s.items.map((item, j) => (
                                    <div key={j} style={{ background: "#111", border: "1px solid rgba(201,168,76,0.08)", borderRadius: "0.75rem", padding: "1.125rem 1.25rem", display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                                        <span style={{ color: "#C9A84C", fontWeight: 900, flexShrink: 0, marginTop: "2px" }}>✦</span>
                                        <p style={{ color: "#9A9080", lineHeight: 1.75, fontSize: "0.95rem" }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: "4rem", background: "linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.03))", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1.5rem", padding: "3rem 2rem", textAlign: "center" }}>
                    <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#F5F0E8", fontSize: "1.75rem", fontWeight: 900, marginBottom: "1rem" }}>
                        Quer falar sobre uma situação específica?
                    </h3>
                    <p style={{ color: "#7A7060", lineHeight: 1.7, maxWidth: "32rem", margin: "0 auto 2rem" }}>
                        O conselheiro IA entende contexto de pais atípicos. Descreve o que está acontecendo e recebe orientação direta.
                    </p>
                    <Link href="/advisor" style={btnGold}>
                        Falar com o Conselheiro IA →
                    </Link>
                </div>
            </main>
        </div>
    );
}
