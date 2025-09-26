import {Button, Chip} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import {motion} from "framer-motion";

export default function HeroSection()
{

    return (
        <motion.section
            initial={{opacity: 1, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true, amount: 0.3}} // only animate once, trigger when 30% visible
            className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 px-8"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.2}}
                    viewport={{once: true, amount: 0.3}}
                >
                    <Chip
                        color="primary"
                        variant="flat"
                        className="font-minecraft-body mb-6"
                        startContent={<Icon icon="pixelarticons:star" width={16}/>}
                    >
                        Modern Minecraft Server Management
                    </Chip>
                </motion.div>

                <motion.h1
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.3}}
                    viewport={{once: true, amount: 0.3}}
                    className="font-minecraft-header text-5xl md:text-7xl text-primary mb-6 leading-tight"
                >
                    Obsidian Server Panel
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.4}}
                    viewport={{once: true, amount: 0.3}}
                    className="font-minecraft-body text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto"
                >
                    A modern web-based management panel for Minecraft servers with modloader support,
                    featuring a responsive React frontend and a powerful Rust backend.
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.5}}
                    viewport={{once: true, amount: 0.3}}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        color="primary"
                        radius="none"
                        className="font-minecraft-body px-8 py-6 text-lg"
                        startContent={<Icon icon="pixelarticons:download" width={20}/>}
                        onPress={() => document.getElementById("download")?.scrollIntoView({behavior: "smooth"})}
                    >
                        Download Now
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        radius="none"
                        className="font-minecraft-body px-8 py-6 text-lg"
                        startContent={<Icon icon="pixelarticons:github" width={20}/>}
                        onPress={() => window.open("https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel", "_blank")}
                    >
                        View on GitHub
                    </Button>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: 0.6}}
                    viewport={{once: true, amount: 0.3}}
                    className="flex justify-center items-center gap-6 mt-8 text-sm text-foreground/60"
                >
                    <div className="flex items-center gap-2">
                        <Icon icon="pixelarticons:check" width={16} className="text-success"/>
                        <span className="font-minecraft-body">Cross-Platform</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon icon="pixelarticons:check" width={16} className="text-success"/>
                        <span className="font-minecraft-body">Open Source</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon icon="pixelarticons:check" width={16} className="text-success"/>
                        <span className="font-minecraft-body">Docker Ready</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
