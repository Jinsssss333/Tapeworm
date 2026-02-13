import React, { useState } from 'react';
import { Copy, Check, RotateCcw } from 'lucide-react';

const EmailDisplay = ({ email, onRegenerate }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = `Subject: ${email.subject}\n\n${email.body}`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="transform rotate-1 animate-in slide-in-from-bottom-8 duration-500">
            <div className="bg-white border-4 border-black shadow-brutal-lg">
                {/* Window Handle */}
                <div className="bg-neon-purple border-b-4 border-black p-3 flex items-center justify-between">
                    <h3 className="font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span className="bg-white text-black px-1 text-sm border-2 border-black">TXT</span>
                        generated_rizz.txt
                    </h3>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-4 bg-white border-2 border-black hover:bg-gray-200 cursor-pointer"></div>
                        <div className="w-4 h-4 bg-white border-2 border-black hover:bg-gray-200 cursor-pointer"></div>
                    </div>
                </div>

                <div className="p-6 md:p-8 space-y-6 relative">

                    <div className="bg-brutal-white border-2 border-black p-4 relative">
                        <span className="absolute -top-3 left-4 bg-black text-white px-2 text-xs font-bold uppercase">Subject</span>
                        <span className="font-display text-xl md:text-2xl text-black leading-tight block mt-2">
                            {email.subject}
                        </span>
                    </div>

                    <div className="font-sans text-lg whitespace-pre-wrap leading-relaxed border-l-4 border-neon-pink pl-4">
                        {email.body}
                    </div>

                </div>

                <div className="border-t-4 border-black p-4 bg-gray-50 flex gap-4 flex-col md:flex-row">
                    <button
                        onClick={handleCopy}
                        className={`
              flex-1 border-4 border-black font-black py-3 px-6 text-lg transition-all flex items-center justify-center gap-3 shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1
              ${copied ? 'bg-green-400' : 'bg-neon-cyan'}
            `}
                    >
                        {copied ? (
                            <>
                                <Check className="w-6 h-6" /> COPIED!
                            </>
                        ) : (
                            <>
                                <Copy className="w-6 h-6" /> COPY THIS
                            </>
                        )}
                    </button>

                    <button
                        onClick={onRegenerate}
                        className="px-6 py-3 bg-white border-4 border-black font-bold hover:bg-gray-100 shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all"
                        title="Regenerate"
                    >
                        <RotateCcw className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailDisplay;
