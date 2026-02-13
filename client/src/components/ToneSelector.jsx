import React from 'react';
import { Zap, Smile, Flame } from 'lucide-react';

const ToneSelector = ({ selected, onSelect }) => {
    const tones = [
        {
            id: 'mild',
            label: 'Mild Gen Z',
            description: 'Casual but safe for work-ish.',
            icon: Smile,
            color: 'text-green-400',
        },
        {
            id: 'full',
            label: 'Full Gen Z',
            description: 'Slang, memes, no cap.',
            icon: Zap,
            color: 'text-yellow-400',
        },
        {
            id: 'unhinged',
            label: 'Unhinged',
            description: 'Chaotic neutral. High risk.',
            icon: Flame,
            color: 'text-red-500',
        },
    ];

    return (
        <div className="space-y-3 mt-6">
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2">
                Pick your Vibe
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {tones.map((tone) => {
                    const Icon = tone.icon;
                    const isSelected = selected === tone.id;
                    return (
                        <button
                            key={tone.id}
                            onClick={() => onSelect(tone.id)}
                            className={`
                relative p-4 rounded-xl border text-left transition-all duration-200
                ${isSelected
                                    ? 'bg-neutral-800 border-indigo-500 ring-1 ring-indigo-500'
                                    : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'}
              `}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <Icon className={`w-4 h-4 ${tone.color}`} />
                                <span className={`font-medium ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                                    {tone.label}
                                </span>
                            </div>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                {tone.description}
                            </p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ToneSelector;
