import React from 'react';
import { notFound } from 'next/navigation';
import { stitchPagesMap, stitchSlugs } from '@/components/stitch';

interface PageProps {
    params: Promise<{ slug: string }>
}

// Generate all static routes for blazing fast performance
export async function generateStaticParams() {
    return stitchSlugs.map((slug) => ({
        slug,
    }));
}

export default async function StitchScreenPage({ params }: PageProps) {
    const resolvedParams = await params;
    const Component = stitchPagesMap[resolvedParams.slug];

    if (!Component) {
        return notFound();
    }

    return (
        <div className="bg-surface text-on-surface w-full">
            {/* The Extracted Interactive Scene */}
            <Component />
        </div>
    );
}
