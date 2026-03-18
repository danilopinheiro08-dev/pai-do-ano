"use client";

import Link from "next/link";

const nav: React.CSSProperties = { background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "1rem 2rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(20px)" };
const logo: React.CSSProperties = { fontFamily: "Playfair Display, Georgia, serif", color: "#C9A84C", fontSize: "1.25rem", fontWeight: 900, textDecoration: "none" };
const main: React.CSSProperties = { maxWidth: "52rem", margin: "0 auto", padding: "4rem 2rem" };
const eyebrow: React.CSSProperties = { color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" };
const btnGold: React.CSSProperties = { background: "linear-gradient(135deg, #E8C96B 0%, #C9A84C 60%, #A87B20 100%)", color: "#0A0A0A", fontWeight: 900, padding: "1rem 2.5rem", borderRadius: "0.75rem", border: "none", cursor: "pointer", fontSize: "1rem", textDecoration: "none", display: "inline-block" };

const PHASES = [
    {
        phase: "1ª Fase",
        label: "1º Trimestre · Semanas 1–12",
        tips: [
            "O enjoo é real e ela não tem controle sobre isso. Não minimiza. Pergunta o que ela precisa.",
            "Vai à primeira ecografia. Se tiver data, você cancela o que tiver. Isso não é negociável.",
            "Conta a novidade junto — quando ela quiser. Não à sua família antes da dela.",
            "Aprende sobre o desenvolvimento semanal. Quando você sabe o que está acontecendo, consegue ser mais presente de forma certa.",
            "Cuida da alimentação da casa. Ela vai comer o que você colocar à disposição.",
        ]
    },
    {
        phase: "2ª Fase",
        label: "2º Trimestre · Semanas 13–27",
        tips: [
            "É o período mais estável. Aproveitam juntos. Saída, passeio, cinema — ela consegue com mais conforto.",
            "A barriga começa a aparecer. Faz disso um ritual — toca com ternura, conversa com o bebê.",
            "Organiza o quarto do bebê juntos. Não delega pra ela. Esse ritual é dos dois.",
            "Aprende sobre o que vem pela frente: parto, amamentação, primeiros dias. Não chega desinformado.",
            "Ela pode ter inseguranças sobre o corpo. Não é hora de falar sobre isso levemente. Escuta e afirma.",
        ]
    },
    {
        phase: "3ª Fase",
        label: "3º Trimestre · Semanas 28–40",
        tips: [
            "O cansaço dela é físico e profundo. Assume mais tarefas em casa sem ela precisar pedir.",
            "Aprende o plano de parto dela. Sabe o que ela quer. Na hora H, você é o guardião das vontades dela.",
            "Tem a mala pronta um mês antes. Ela inclusa — você cuida dos detalhes.",
            "Pratica as respirações com ela se for parto natural. Mostra que você está junto no treinamento.",
            "Tem um plano para quando começar o trabalho de parto: quem liga, quem leva, onde estão os documentos.",
        ]
    },
    {
        phase: "Pós-Parto",
        label: "Primeiros 90 dias",
        tips: [
            "O pós-parto dela pode ser muito difícil. Depressão pós-parto é real e séria. Fica de olho.",
            "Você troca fralda. Você levanta de madrugada. Sem escala, sem contar ponto. É parceria.",
            "Cuida de você também — você não serve cansado, com raiva, ou ressentido.",
            "Não recebe visita sem consentimento dela. Socialize quando ela estiver pronta.",
            "Amamentação é dela, mas o suporte é seu. Se ela precisar parar, apoia sem julgamento.",
        ]
    },
];

const PHASE_COLORS = ["#C9A84C", "#27AE60", "#9B59B6", "#E74C3C"];

export default function GestacaoPage() {
    return (
        <div style={{ background: "#0A0A0A", minHeight: "100vh", color: "#F5F0E8", fontFamily: "Inter, sans-serif" }}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
            <nav style={nav}>
                <Link href="/" style={logo}>← Pai do Ano</Link>
                <span style={{ color: "#4A4540", fontSize: "0.9rem" }}>/ Gestação & Chegada</span>
            </nav>

            <main style={main}>
                {/* Header */}
                <div style={{ marginBottom: "4rem" }}>
                    <span style={eyebrow}>Para quem está esperando</span>
                    <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "1.5rem" }}>
                        <span style={{ color: "#F5F0E8" }}>Ser pai começa</span><br />
                        <span style={{ color: "#C9A84C" }}>muito antes do parto.</span>
                    </h1>
                    <p style={{ color: "#7A7060", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "38rem" }}>
                        Quem acompanha a gestação de verdade chega no dia do parto com outra energia. Com outro tipo de presença. Com um filho que já sente quem é o pai.
                    </p>
                </div>

                {/* Phases */}
                <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                    {PHASES.map((p, i) => (
                        <div key={i}>
                            {/* Phase header */}
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                                <div style={{
                                    width: "56px", height: "56px",
                                    background: `linear-gradient(135deg, ${PHASE_COLORS[i]}33, ${PHASE_COLORS[i]}11)`,
                                    border: `2px solid ${PHASE_COLORS[i]}44`,
                                    borderRadius: "1rem",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontFamily: "Playfair Display, Georgia, serif",
                                    fontWeight: 900, fontSize: "1rem", color: PHASE_COLORS[i],
                                    flexShrink: 0, textAlign: "center", lineHeight: 1.1,
                                    padding: "0.25rem"
                                }}>
                                    {i + 1}
                                </div>
                                <div>
                                    <h2 style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#F5F0E8", fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.15rem" }}>{p.phase}</h2>
                                    <p style={{ color: PHASE_COLORS[i], fontSize: "0.75rem", fontWeight: 700 }}>{p.label}</p>
                                </div>
                            </div>
                            {/* Tips */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "4.5rem" }}>
                                {p.tips.map((tip, j) => (
                                    <div key={j} style={{ background: "#111", border: `1px solid ${PHASE_COLORS[i]}18`, borderRadius: "0.75rem", padding: "1rem 1.25rem", display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                                        <span style={{ color: PHASE_COLORS[i], fontWeight: 900, flexShrink: 0, marginTop: "1px" }}>✦</span>
                                        <p style={{ color: "#9A9080", lineHeight: 1.75, fontSize: "0.95rem" }}>{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ marginTop: "4rem", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1.5rem", padding: "3rem 2rem", textAlign: "center" }}>
                    <h3 style={{ fontFamily: "Playfair Display, Georgia, serif", color: "#F5F0E8", fontSize: "1.75rem", fontWeight: 900, marginBottom: "1rem" }}>
                        Tem uma dúvida específica?
                    </h3>
                    <p style={{ color: "#7A7060", marginBottom: "2rem" }}>Descreve a situação pro nosso Conselheiro IA e recebe uma resposta direta.</p>
                    <Link href="/advisor" style={btnGold}>
                        Perguntar pro Conselheiro IA →
                    </Link>
                </div>
            </main>
        </div>
    );
}
