import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
    themeColor: "#C9A84C",
};

export const metadata: Metadata = {
    title: "Pai do Ano — O Manual que Seu Pai Nunca Te Deu",
    description: "Um app para pais de verdade. Assessment, 1000+ dicas, IA conselheira e o conteúdo que ninguém te conta. Por Danilo Pinheiro.",
    manifest: "/manifest.json",
    openGraph: {
        title: "Pai do Ano",
        description: "De homem para homem. Sobre paternidade real.",
        url: "https://paidoano.vercel.app",
        siteName: "Pai do Ano",
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Pai do Ano",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon-192.png" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <body suppressHydrationWarning style={{ background: "#0A0A0A" }}>
                {children}
            </body>
        </html>
    );
}
