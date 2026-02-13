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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-neutral-950 border-b border-neutral-800 p-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="text-xs font-mono text-neutral-500">
                        composed_email.txt
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <div>
                        <span className="text-neutral-500 text-sm font-mono mr-2">Subject:</span>
                        <span className="text-neutral-200 font-medium">{email.subject}</span>
                    </div>
                    <div className="h-px bg-neutral-800 w-full"></div>
                    <div className="text-neutral-300 whitespace-pre-wrap leading-relaxed font-sans">
                        {email.body}
                    </div>
                </div>

                <div className="bg-neutral-950 border-t border-neutral-800 p-4 flex gap-3">
                    <button
                        onClick={handleCopy}
                        className="flex-1 bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4" /> Copied!
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4" /> Copy to Clipboard
                            </>
                        )}
                    </button>

                    <button
                        onClick={onRegenerate}
                        className="px-4 py-2 bg-neutral-800 text-neutral-400 hover:text-white rounded-lg transition-colors border border-black hover:border-neutral-700 hover:bg-neutral-700"
                        title="Regenerate"
                    >
                        <RotateCcw className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailDisplay;
