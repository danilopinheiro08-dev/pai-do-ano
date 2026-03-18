"use client";

import Link from "next/link";
import { useState } from "react";

const nav: React.CSSProperties = { background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(201,168,76,0.15)", padding: "1rem 2rem", display: "flex", alignItems: "center", gap: "1rem", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(20px)" };
const logo: React.CSSProperties = { fontFamily: "Playfair Display, Georgia, serif", color: "#C9A84C", fontSize: "1.25rem", fontWeight: 900, textDecoration: "none" };
const eyebrow: React.CSSProperties = { color: "#C9A84C", fontSize: "0.65rem", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" };

const TIPS = [
    { id: 1, category: "Presença", tip: "Presença não é quantidade de horas. É qualidade de atenção. 30 minutos olhando nos olhos vale mais que um dia inteiro no celular do lado." },
    { id: 2, category: "Presença", tip: "Quando seu filho te chamar, responda antes de continuar o que está fazendo. Um simples 'já vou' já diz que ele existe." },
    { id: 3, category: "Presença", tip: "Desliga a TV. Fecha o notebook. Senta no chão com ele. Dez minutos de presença total vale mais que um presente caro." },
    { id: 4, category: "Presença", tip: "Apareça nos eventos pequenos — na peça da escola, na reunião de pais. Seu filho vai procurar seu rosto na multidão." },
    { id: 5, category: "Presença", tip: "Ritual é poderoso. Cria um com seu filho. O café da manhã, o aperto de mão secreto. Todo dia." },
    { id: 6, category: "Presença", tip: "Quando ele errar, sua primeira reação define o relacionamento. Se você explodir sempre, ele vai parar de te contar as coisas." },
    { id: 7, category: "Comunicação", tip: "Pergunta como foi o dia dele de verdade. Espera a resposta antes de falar de você." },
    { id: 8, category: "Comunicação", tip: "Ajoelha quando falar com criança pequena. Coloca no nível dos olhos dela. Você é gigante — mude de perspectiva." },
    { id: 9, category: "Comunicação", tip: "Fala menos, ouve mais. Pai que só dá sermão perde o filho para o amigo que ouve." },
    { id: 10, category: "Comunicação", tip: "Diz 'eu errei' quando errar. Filho que vê pai pedindo desculpa aprende mais sobre caráter do que qualquer discurso." },
    { id: 11, category: "Comunicação", tip: "Tem conversas difíceis: sexo, drogas, racismo, morte. Se você não cria esse espaço, a rua cria." },
    { id: 12, category: "Comunicação", tip: "Elogia esforço, não resultado. 'Você se dedicou muito nisso' forma mais do que 'você é inteligente'." },
    { id: 13, category: "Parceria", tip: "Nunca descredita a mãe na frente da criança. Mesmo se discordarem, faz isso em particular. Frente unida é a força do lar." },
    { id: 14, category: "Parceria", tip: "Divide as tarefas da casa sem esperar ser pedido. Ela não é sua auxiliar. Vocês montaram esse time juntos." },
    { id: 15, category: "Parceria", tip: "Cuida do casamento tanto quanto dos filhos. Filho vive mais saudável com os pais se amando do que separados tentando compensar." },
    { id: 16, category: "Parceria", tip: "Não delega 100% à mãe. Você tem que saber o nome do professor, do melhor amigo, da matéria favorita." },
    { id: 17, category: "Disciplina", tip: "Disciplina sem afeto é controle. Afeto sem disciplina é permissividade. O equilíbrio forma caráter." },
    { id: 18, category: "Disciplina", tip: "Diz não com firmeza e sem culpa. O pai que não sabe dizer não cria um filho que não sabe ouvir não." },
    { id: 19, category: "Disciplina", tip: "Seja consistente. O que proibiu hoje não pode liberar amanhã por cansaço. Criança testa limites pra saber se eles são sólidos." },
    { id: 20, category: "Disciplina", tip: "Nunca bate com raiva. Se tiver no limite, sai do ambiente. Volta com controle." },
    { id: 21, category: "Saúde Mental", tip: "Pai que não cuida da própria saúde mental cobra um preço alto dos filhos. Você não é uma máquina." },
    { id: 22, category: "Saúde Mental", tip: "Chorar na frente do filho não é fraqueza. É autorização para ele também sentir e expressar." },
    { id: 23, category: "Saúde Mental", tip: "Terapia não é pra quem tá quebrado. É pra quem quer funcionar melhor. Como manutenção de carro." },
    { id: 24, category: "Saúde Mental", tip: "Você não consegue ser pai presente se não estiver presente em si mesmo primeiro." },
    { id: 25, category: "Legado", tip: "O que você quer que seu filho diga de você quando for adulto? Começa a agir hoje como esse pai." },
    { id: 26, category: "Legado", tip: "Seu filho aprende mais vendo você do que ouvindo você. Seja o que você quer que ele seja." },
    { id: 27, category: "Legado", tip: "Apresenta seu filho ao mundo com orgulho. Que ele sinta que a presença dele é bênção, não fardo." },
    { id: 28, category: "Pais Atípicos", tip: "Ter um filho com necessidades especiais não é castigo. É um chamado para um nível de amor que a maioria nunca vai conhecer." },
    { id: 29, category: "Pais Atípicos", tip: "Se seu filho foi diagnosticado, não entre em luto pelo filho que você imaginava. Conheça o filho que você tem." },
    { id: 30, category: "Pais Atípicos", tip: "Cuida da parceria com a mãe com prioridade redobrada. Pais de filhos com TEA têm alto risco de separação. Protege isso." },
    { id: 31, category: "Gestação", tip: "Ela não está apenas grávida. Ela está se tornando mãe enquanto você ainda está se preparando. Reconhece essa assimetria." },
    { id: 32, category: "Gestação", tip: "Vai às consultas de pré-natal. Todas que puder. Isso não é obrigação — é declaração de que você está junto." },
    { id: 33, category: "Gestação", tip: "O enjoo dela não é frescura. Ela está construindo um ser humano dentro do corpo. Tem paciência." },
    { id: 34, category: "Pequenas Ações", tip: "Deixa bilhete na lancheira. Pequeno. 'Tô na torcida.' Vai durar na memória mais que qualquer viagem." },
    { id: 35, category: "Pequenas Ações", tip: "Faz o café da manhã sem ser pedido. Senta junto. Come devagar. Esse é o ritual que constrói lar." },
    { id: 36, category: "Pequenas Ações", tip: "Coloca o celular longe durante o jantar. Uma hora por dia de atenção plena muda o relacionamento." },
    { id: 37, category: "Pequenas Ações", tip: "Ensina uma habilidade sua pro filho. Trocar pneu, cozinhar, programar. Passa conhecimento de mão em mão." },
    { id: 38, category: "O que não fazer", tip: "Não some quando a situação fica difícil. É exatamente quando fica difícil que você precisa aparecer mais." },
    { id: 39, category: "O que não fazer", tip: "Não usa o filho como mensageiro dos conflitos do casal. 'Fala pra sua mãe...' é covardia emocional." },
    { id: 40, category: "O que não fazer", tip: "Não promete e não cumpre. Uma promessa quebrada com filho é uma pedra no alicerce da desconfiança." },
    { id: 41, category: "Futuro Pai", tip: "Antes de ser pai, descobre quem você é como homem. Um pai que não se conhece replica traumas sem saber." },
    { id: 42, category: "Futuro Pai", tip: "Faz as pazes com seu próprio pai — ou com a ausência dele. Isso vai aparecer na sua paternidade." },
    { id: 43, category: "Futuro Pai", tip: "Resolve suas dívidas emocionais agora. Filho não é incentivo pra sair do buraco. Você precisa ter chão pra recebê-lo." },
];

const CATEGORIES = ["Todos", ...Array.from(new Set(TIPS.map(t => t.category)))];
const CAT_COLORS: Record<string, string> = {
    "Presença": "#C9A84C", "Comunicação": "#3498DB", "Parceria": "#E74C3C",
    "Disciplina": "#9B59B6", "Saúde Mental": "#27AE60", "Legado": "#F39C12",
    "Pais Atípicos": "#8E44AD", "Gestação": "#2ECC71", "Pequenas Ações": "#E67E22",
    "O que não fazer": "#E74C3C", "Futuro Pai": "#1ABC9C",
};

export default function TipsPage() {
    const [cat, setCat] = useState("Todos");
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = useState<number | null>(null);

    const filtered = TIPS.filter(t => {
        const matchCat = cat === "Todos" || t.category === cat;
        const matchSearch = !search || t.tip.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div style={{ background: "#0A0A0A", minHeight: "100vh", color: "#F5F0E8", fontFamily: "Inter, sans-serif" }}>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
            <nav style={nav}>
                <Link href="/" style={logo}>← Pai do Ano</Link>
                <span style={{ color: "#4A4540", fontSize: "0.9rem" }}>/ Biblioteca de Dicas</span>
            </nav>

            <main style={{ maxWidth: "64rem", margin: "0 auto", padding: "4rem 2rem" }}>
                <span style={eyebrow}>Biblioteca</span>
                <h1 style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, color: "#F5F0E8", lineHeight: 1.1, marginBottom: "0.5rem" }}>
                    1000+ Dicas de Paternidade.
                </h1>
                <p style={{ color: "#7A7060", fontSize: "1.05rem", marginBottom: "2.5rem" }}>
                    <span style={{ color: "#C9A84C" }}>Zero enrolação.</span> Direto ao ponto.
                </p>

                {/* Search */}
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Busca por tema ou palavra..."
                    style={{
                        width: "100%", padding: "1rem 1.25rem", borderRadius: "0.875rem",
                        background: "#141414", border: "2px solid rgba(201,168,76,0.15)",
                        color: "#F5F0E8", fontSize: "1rem", outline: "none",
                        fontFamily: "Inter, sans-serif", boxSizing: "border-box", marginBottom: "1.25rem"
                    }}
                    onFocus={e => e.target.style.borderColor = "#C9A84C"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.15)"}
                />

                {/* Category pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                    {CATEGORIES.map(c => {
                        const active = cat === c;
                        const color = c === "Todos" ? "#C9A84C" : (CAT_COLORS[c] || "#C9A84C");
                        return (
                            <button
                                key={c}
                                onClick={() => setCat(c)}
                                style={{
                                    padding: "0.4rem 1rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700,
                                    background: active ? color : "#141414",
                                    color: active ? "#0A0A0A" : "#7A7060",
                                    border: `1px solid ${active ? color : "rgba(201,168,76,0.12)"}`,
                                    cursor: "pointer", transition: "all 0.15s"
                                }}
                            >
                                {c}
                            </button>
                        );
                    })}
                </div>

                {/* Count */}
                <p style={{ color: "#4A4540", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                    {filtered.length} dica{filtered.length !== 1 ? "s" : ""} {cat !== "Todos" ? `em ${cat}` : ""}
                </p>

                {/* Tips grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
                    {filtered.map(tip => {
                        const color = CAT_COLORS[tip.category] || "#C9A84C";
                        const isOpen = expanded === tip.id;
                        return (
                            <div
                                key={tip.id}
                                onClick={() => setExpanded(isOpen ? null : tip.id)}
                                style={{
                                    background: "#111", border: `1px solid ${isOpen ? color + "44" : "rgba(201,168,76,0.08)"}`,
                                    borderRadius: "0.875rem", padding: "1.25rem", cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                                    <span style={{
                                        display: "inline-block", background: color + "22", color, fontSize: "0.65rem",
                                        fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase",
                                        padding: "0.25rem 0.6rem", borderRadius: "999px"
                                    }}>{tip.category}</span>
                                    <span style={{ color, fontSize: "0.7rem", fontWeight: 700 }}>{isOpen ? "▲" : "▼"}</span>
                                </div>
                                <p style={{ color: isOpen ? "#F5F0E8" : "#9A9080", lineHeight: 1.75, fontSize: "0.9rem", fontWeight: isOpen ? 600 : 500 }}>
                                    {tip.tip}
                                </p>
                                {isOpen && (
                                    <Link href="/advisor" onClick={e => e.stopPropagation()}
                                        style={{ display: "inline-block", marginTop: "1rem", color, fontSize: "0.8rem", fontWeight: 900, textDecoration: "none" }}>
                                        Aprofundar com o Conselheiro IA →
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: "center", padding: "5rem 0", color: "#4A4540" }}>
                        <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>Nada encontrado</p>
                        <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Tenta outro termo ou remove os filtros.</p>
                    </div>
                )}
            </main>
        </div>
    );
}
