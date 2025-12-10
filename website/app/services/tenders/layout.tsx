import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://vapcompany.kz/services/tenders',
    },
};

export default function TendersServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
