import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://vapcompany.kz/education',
    },
};

export default function EducationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
