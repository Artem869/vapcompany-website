import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://vapcompany.kz/services/web',
    },
};

export default function WebServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
