import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://vapcompany.kz/portfolio/web',
    },
};

export default function PortfolioWebLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
