export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-white/5 bg-[#0a0e17]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Events Platform. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a>
                </div>
            </div>
        </footer>
    );
}