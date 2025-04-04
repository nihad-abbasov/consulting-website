import { useTheme } from 'next-themes';
// import Image from 'next/image';

export function Logo() {
    const { theme } = useTheme();

    return (
        <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            ConsultPro
        </span>
        // <Image src="/logo.png" alt="ConsultPro Logo" width={0} height={0} sizes="100vw" className="w-full h-auto" />
    );
}
