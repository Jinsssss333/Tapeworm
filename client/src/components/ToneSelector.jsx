import React from 'react';
import { Zap, Smile, Flame } from 'lucide-react';

const ToneSelector = ({ selected, onSelect }) => {
    const tones = [
        {
            id: 'mild',
            label: 'Mild',
            description: 'Professional-ish',
            icon: Smile,
            bgColor: 'bg-neon-cyan',
        },
        {
            id: 'full',
            label: 'Full Send',
            description: 'No cap, fr fr',
            icon: Zap,
            bgColor: 'bg-neon-pink',
        },
        {
            id: 'unhinged',
            label: 'Unhinged',
            description: 'Chaos mode activated',
            icon: Flame,
            bgColor: 'bg-neon-lime',
        },
    ];

    return (
        <div className="space-y-4">
            <label className="block font-black text-lg uppercase mb-2 transform -rotate-1 bg-black text-white inline-block px-2">
                Pick your Vibe Check
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tones.map((tone) => {
                    const Icon = tone.icon;
                    const isSelected = selected === tone.id;
                    return (
                        <button
                            key={tone.id}
                            onClick={() => onSelect(tone.id)}
                            className={`
                relative p-4 border-4 border-black transition-all duration-200 text-left group
                ${isSelected
                                    ? `${tone.bgColor} shadow-brutal translate-x-[-4px] translate-y-[-4px]`
                                    : 'bg-white hover:bg-gray-50 hover:shadow-brutal-sm'}
              `}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className={`w-6 h-6 border-2 border-black rounded-full p-0.5 ${isSelected ? 'bg-white' : 'bg-transparent'}`} />
                                <span className="font-black text-xl uppercase">
                                    {tone.label}
                                </span>
                            </div>
                            <p className="text-sm font-bold opacity-80 border-t-2 border-black pt-2 border-dashed">
                                {tone.description}
                            </p>

                            {isSelected && (
                                <div className="absolute -top-3 -right-3 bg-black text-white text-xs font-bold px-2 py-1 transform rotate-12">
                                    SELECTED
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ToneSelector;
