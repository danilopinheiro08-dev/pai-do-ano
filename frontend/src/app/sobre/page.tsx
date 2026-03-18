"use client";

import Link from "next/link";

const G = {
    page: { background: "#0A0A0A", minHeight: "100vh", color: "#F5F0E8", fontFamily: "'Inter', sans-serif" } as React.CSSProperties,
    nav: { background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "1rem 2rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky" as const, top: 0, zIndex: 10, backdropFilter: "blur(20px)" } as React.CSSProperties,
    logo: { fontFamily: "'Playfair Display', Georgia, serif", color: "#C9A84C", fontSize: "1.25rem", fontWeight: 900, textDecoration: "none" } as React.CSSProperties,
    main: { maxWidth: "56rem", margin: "0 auto", padding: "4rem 2rem" } as React.CSSProperties,
    eyebrow: { color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase" as const, display: "block", marginBottom: "0.75rem" } as React.CSSProperties,
    card: { background: "#141414", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1.25rem", padding: "2rem" } as React.CSSProperties,
    btnGold: { background: "linear-gradient(135deg, #E8C96B 0%, #C9A84C 60%, #A87B20 100%)", color: "#0A0A0A", fontWeight: 900, padding: "1rem 2.5rem", borderRadius: "0.75rem", border: "none", cursor: "pointer", fontSize: "1rem", textDecoration: "none", display: "inline-block" } as React.CSSProperties,
    divider: { border: "none", borderTop: "1px solid rgba(201,168,76,0.08)", margin: "4rem 0" } as React.CSSProperties,
};

const QUOTES = [
    "Meu filho nasceu. E não respirou. Foram trinta dias na UTI neonatal. Onde minutos pareciam horas e as noites eram eternas.",
    "Ali, no meio do colapso, nasceu a minha filosofia: a geometria da paciência. Porque a vida me mostrou que nem todo caos é destruição. Às vezes, o caos é só uma nova forma de nascimento.",
    "Filho nenhum precisa de um pai perfeito. Precisa de um pai que não desiste, mesmo tremendo por dentro.",
    "Coragem não é ausência de medo. É uma decisão tomada mesmo com o medo sentado no banco do lado."
];

export default function SobrePage() {
    return (
        <div style={G.page}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet" />
            <nav style={G.nav}>
                <Link href="/" style={G.logo}>← Pai do Ano</Link>
                <span style={{ color: "#4A4540", fontSize: "0.9rem" }}>/ Sobre o Autor</span>
            </nav>

            <main style={G.main}>
                {/* Author header */}
                <div style={{ marginBottom: "4rem" }}>
                    <span style={G.eyebrow}>O Autor</span>
                    <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900, color: "#F5F0E8", lineHeight: 0.9, marginBottom: "1.5rem" }}>
                        Danilo<br />
                        <span style={{ background: "linear-gradient(135deg, #E8C96B, #C9A84C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Pinheiro.</span>
                    </h1>
                    <p style={{ color: "#7A7060", fontSize: "1.1rem", fontWeight: 600 }}>
                        Pai. Escritor. Engenheiro de DevOps. Essas três coisas, nessa ordem.
                    </p>
                </div>

                {/* Stats + Story grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "1.5rem", marginBottom: "3rem" }}>
                    {/* Stats */}
                    <div style={{ ...G.card }}>
                        <span style={G.eyebrow}>Em números</span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                            {[
                                { n: "1", label: "Livro publicado" },
                                { n: "30", label: "Dias na UTI neonatal com o filho" },
                                { n: "∞", label: "Amor pelo filho, sem condição" },
                            ].map((s, i) => (
                                <div key={i} style={{ borderBottom: i < 2 ? "1px solid rgba(201,168,76,0.08)" : "none", paddingBottom: i < 2 ? "1.25rem" : 0 }}>
                                    <div style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#C9A84C", fontSize: "2rem", fontWeight: 900 }}>{s.n}</div>
                                    <div style={{ color: "#6A6055", fontSize: "0.8rem", fontWeight: 700 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Story */}
                    <div style={G.card}>
                        <span style={G.eyebrow}>Sua história</span>
                        <p style={{ color: "#9A9080", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            Danilo sabe o que é ter um filho que nasce prematuro, ficar 30 dias na UTI neonatal, e descobrir um diagnóstico de autismo.
                        </p>
                        <p style={{ color: "#9A9080", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                            Ele também sabe o que é mudar de carreira para sustentar melhor a família, estudar de madrugada com o filho dormindo, e reconstruir a autoestima de dentro pra fora.
                        </p>
                        <p style={{ color: "#F5F0E8", fontWeight: 700, lineHeight: 1.7 }}>
                            Esse app não é teoria. É conversa de alguém que passou pelo fogo e saiu de lá — não mais frio, mas mais aço.
                        </p>
                    </div>
                </div>

                <hr style={G.divider} />

                {/* Book section */}
                <div style={{ marginBottom: "3rem" }}>
                    <span style={G.eyebrow}>O Livro</span>
                    <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "2.5rem", fontWeight: 900, color: "#F5F0E8", marginBottom: "1rem" }}>
                        A Geometria da Paciência
                    </h2>
                    <p style={{ color: "#7A7060", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "36rem", marginBottom: "2.5rem" }}>
                        Um livro sobre coragem, presença e transformação. Sobre o que acontece quando a vida te força a crescer mais rápido do que você planejou.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                        {QUOTES.map((q, i) => (
                            <blockquote key={i} style={{
                                borderLeft: "3px solid #C9A84C",
                                paddingLeft: "1.25rem",
                                paddingTop: "0.5rem",
                                paddingBottom: "0.5rem",
                                background: "#0F0F0F",
                                borderRadius: "0 0.75rem 0.75rem 0",
                                margin: 0
                            }}>
                                <p style={{ color: "#C0B890", fontStyle: "italic", lineHeight: 1.8, fontFamily: "Playfair Display, Georgia, serif", fontSize: "1rem" }}>"{q}"</p>
                            </blockquote>
                        ))}
                    </div>

                    {/* Download CTA */}
                    <div style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.04))", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1.25rem", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
                        <div>
                            <span style={G.eyebrow}>Disponível agora</span>
                            <div style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#F5F0E8", fontSize: "1.5rem", fontWeight: 900 }}>A Geometria da Paciência</div>
                            <div style={{ color: "#6A6055", fontSize: "0.85rem", marginTop: "0.25rem" }}>por Danilo Pinheiro</div>
                        </div>
                        <a href="/A_Geometria_da_Paciencia.docx" download style={{ ...G.btnGold, whiteSpace: "nowrap" }}>
                            📥 Baixar o Livro
                        </a>
                    </div>
                </div>

                <hr style={G.divider} />

                {/* Mission */}
                <div style={{ textAlign: "center", background: "#0F0F0F", border: "1px solid rgba(201,168,76,0.08)", borderRadius: "1.5rem", padding: "3rem 2rem" }}>
                    <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#F5F0E8", fontSize: "1.75rem", fontWeight: 900, marginBottom: "1rem" }}>A missão é simples.</h3>
                    <p style={{ color: "#7A7060", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "34rem", margin: "0 auto 2rem" }}>
                        Queremos um mundo com pais presentes. E além disso — <strong style={{ color: "#F5F0E8" }}>pais melhores</strong>. Esse app é nossa contribuição pra isso.
                    </p>
                    <Link href="/assessment" style={{ ...G.btnGold, padding: "1rem 3rem", fontSize: "1.05rem" }}>
                        Começa sua jornada →
                    </Link>
                </div>
            </main>
        </div>
    );
}
