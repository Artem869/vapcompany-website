import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://vapcompany.kz/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
