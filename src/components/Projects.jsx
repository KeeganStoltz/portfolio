import { motion } from "framer-motion";

const Projects = () => {
    return (
        <main className="relative min-h-screen overflow-hidden">

            {/* Fade-In Projects */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="relative z-10 mt-24 px-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {/*  Project 1 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold text-white">Portfolio Website</h3>
                    <p className="text-gray-300 mt-2">
                        A sleek personal website built with React, Tailwind, and Spline.
                    </p>
                </div>

                {/*  Project 2 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold text-white">Dynamic Portal</h3>
                    <p className="text-gray-300 mt-2">
                        A dynamic portal that is API driven and config driven. This portal was used for multiple clients with different requirements. The config is an API call made to change the layout and contents of the portal without making any code changes.
                    </p>
                </div>

                {/*  Project 3 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold text-white">Chatbot Development</h3>
                    <p className="text-gray-300 mt-2">
                        Full stack development of chatbots that are on multiple channels like Whatsapp, Teams etc. Developed using JavaScript for client side and TypeScript for server side. Used botpress as the main framework for development.
                    </p>
                </div>

                {/*  Project 4 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold text-white">API Development</h3>
                    <p className="text-gray-300 mt-2">
                        Created API's that interact with specific databases that are tenant based and return data in a structured format. Used these API's for both internal and external clients.
                    </p>
                </div>

                {/*  Project 5 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold text-white">Whatsapp Chatbot Automated Tester</h3>
                    <p className="text-gray-300 mt-2">
                        Full stack development of an automated tester for whatsapp chatbots. Used to test the chatbot flows and ensure that the chatbot is working as expected. Created a frontend and backend for ease of use and industry standard testing features.
                    </p>
                </div>

                {/*  Project 6 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition">
                    <h3 className="text-xl font-semibold text-white">Stack Optimisation</h3>
                    <p className="text-gray-300 mt-2">
                        Optimised existing stacks for multiple clients to improve performance and reduce costs. Analysed existing codebases and infrastructure to identify bottlenecks and implemented solutions to improve efficiency.
                    </p>
                </div>
            </motion.section>
        </main>
    );
};

export default Projects;
