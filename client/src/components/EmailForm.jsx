import React from 'react';
import { User, Briefcase, Box, Target } from 'lucide-react';

const EmailForm = ({ data, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <User className="w-3 h-3" /> Recipient Name
                </label>
                <input
                    type="text"
                    name="recipient"
                    value={data.recipient}
                    onChange={handleChange}
                    placeholder="e.g. Elon Musk"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-3 px-4 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-neutral-700"
                />
            </div>

            <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> Company
                </label>
                <input
                    type="text"
                    name="company"
                    value={data.company}
                    onChange={handleChange}
                    placeholder="e.g. Twitter / X"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-3 px-4 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-neutral-700"
                />
            </div>

            <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Box className="w-3 h-3" /> What are you offering?
                </label>
                <input
                    type="text"
                    name="product"
                    value={data.product}
                    onChange={handleChange}
                    placeholder="e.g. AI-powered toaster"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-3 px-4 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-neutral-700"
                />
            </div>

            <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                    <Target className="w-3 h-3" /> Goal
                </label>
                <input
                    type="text"
                    name="goal"
                    value={data.goal}
                    onChange={handleChange}
                    placeholder="e.g. Get a demo call"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-3 px-4 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-neutral-700"
                />
            </div>
        </div>
    );
};

export default EmailForm;
