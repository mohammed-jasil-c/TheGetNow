import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = 'C:\\Users\\Mohammed Jasil c\\.gemini\\antigravity\\brain\\f818fe19-fc7e-4fe0-88e4-7caf3270666f\\.system_generated\\steps\\152\\output.txt';

const outputDir = path.join(__dirname, '../src/components/stitch');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function cleanJSX(html) {
    // Extract main
    let mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (!mainMatch) return null;
    
    let inner = mainMatch[1];

    // Remove comments
    inner = inner.replace(/<!--[\s\S]*?-->/g, '');

    // Rename attributes
    inner = inner.replace(/\bclass=/g, 'className=');
    inner = inner.replace(/\bfor=/g, 'htmlFor=');
    
    // Strip styles
    inner = inner.replace(/\bstyle="[^"]*"/g, '');

    // Fix void tags
    inner = inner.replace(/<(img|input|br|hr)([^>]*?)(\/?)>/gi, (match, tag, attr, selfClosed) => {
        if (selfClosed) return match;
        return `<${tag}${attr} />`;
    });
    
    return `<main className="relative pt-24 min-h-screen bg-surface">\n${inner}\n</main>`;
}

async function run() {
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(rawData);
    
    const screensMap = [];

    for (const screen of data.screens) {
        if (!screen.htmlCode || !screen.htmlCode.downloadUrl) continue;
        
        console.log(`Processing: ${screen.title}...`);
        try {
            const res = await fetch(screen.htmlCode.downloadUrl);
            const html = await res.text();
            
            const jsxCode = cleanJSX(html);
            if (!jsxCode) continue;

            let compName = screen.title
                .replace(/[^a-zA-Z0-9 ]/g, '')
                .split(' ')
                .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
                .join('');
            
            if (!compName.match(/^[A-Z]/)) compName = 'Stitch' + compName;
            compName = compName + 'Template';

            const componentStr = `
'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ${compName}() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;
        
        const sections = gsap.utils.toArray('section', containerRef.current);
        sections.forEach((sec: any) => {
            gsap.fromTo(sec, 
                { opacity: 0, y: 40 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1.2, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 80%",
                    }
                }
            );
        });

        const images = gsap.utils.toArray('img', containerRef.current);
        images.forEach((img: any) => {
            gsap.to(img, {
                y: "-=15",
                duration: 2 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full">
            ${jsxCode}
        </div>
    );
}
`;

            const fileName = `${compName}.tsx`;
            fs.writeFileSync(path.join(outputDir, fileName), componentStr.trim() + '\n');
            console.log(`Saved ${fileName}`);
            
            const slug = screen.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            screensMap.push({ slug, componentName: compName, fileName });
            
        } catch (e) {
            console.error(`Failed to process ${screen.title}:`, e);
        }
    }

    const mapStr = `
// Automatically generated map of all Stitch screens
${screensMap.map(s => `import ${s.componentName} from './${s.componentName}';`).join('\n')}

export const stitchPagesMap: Record<string, React.FC> = {
${screensMap.map(s => `  '${s.slug}': ${s.componentName},`).join('\n')}
};

export const stitchSlugs = [
${screensMap.map(s => `  '${s.slug}'`).join(',\n')}
];
`;
    fs.writeFileSync(path.join(outputDir, 'index.ts'), mapStr.trim() + '\n');
    console.log('Complete! Index saved.');
}

run();
