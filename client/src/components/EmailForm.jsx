import React from 'react';
import { User, Briefcase, Box, Target } from 'lucide-react';

const EmailForm = ({ data, onChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                    <label className="block font-black text-lg uppercase mb-2 flex items-center gap-2">
                        <User className="w-5 h-5" /> Who's it for?
                    </label>
                    <input
                        type="text"
                        name="recipient"
                        value={data.recipient}
                        onChange={handleChange}
                        placeholder="Elon Musk"
                        className="w-full bg-brutal-white border-4 border-black p-4 font-bold text-lg focus:outline-none focus:bg-neon-cyan focus:shadow-brutal transition-all placeholder:text-gray-500"
                    />
                </div>

                <div className="relative group">
                    <label className="block font-black text-lg uppercase mb-2 flex items-center gap-2">
                        <Briefcase className="w-5 h-5" /> At which corp?
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={data.company}
                        onChange={handleChange}
                        placeholder="Twitter / X"
                        className="w-full bg-brutal-white border-4 border-black p-4 font-bold text-lg focus:outline-none focus:bg-neon-pink focus:shadow-brutal transition-all placeholder:text-gray-500"
                    />
                </div>
            </div>

            <div className="relative group">
                <label className="block font-black text-lg uppercase mb-2 flex items-center gap-2">
                    <Box className="w-5 h-5" /> What u selling?
                </label>
                <input
                    type="text"
                    name="product"
                    value={data.product}
                    onChange={handleChange}
                    placeholder="Quantum-powered toaster"
                    className="w-full bg-brutal-white border-4 border-black p-4 font-bold text-lg focus:outline-none focus:bg-neon-lime focus:shadow-brutal transition-all placeholder:text-gray-500"
                />
            </div>

            <div className="relative group">
                <label className="block font-black text-lg uppercase mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5" /> The endgame?
                </label>
                <input
                    type="text"
                    name="goal"
                    value={data.goal}
                    onChange={handleChange}
                    placeholder="Get a demo call (or just a reply)"
                    className="w-full bg-brutal-white border-4 border-black p-4 font-bold text-lg focus:outline-none focus:bg-neon-purple focus:text-white focus:shadow-brutal transition-all placeholder:text-gray-500"
                />
            </div>
        </div>
    );
};

export default EmailForm;
