import {Card, CardBody} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import {motion} from "framer-motion";

interface Screenshot
{
    title: string;
    description: string;
    placeholder: string;
}

export default function ScreenshotsSection()
{
    const screenshots: Screenshot[] = [
        {
            title: "Server Dashboard",
            description: "Overview of all your Minecraft servers with real-time status and performance metrics",
            placeholder: "dashboard-screenshot"
        },
        {
            title: "Console Interface",
            description: "Live server console with command execution and log viewing capabilities",
            placeholder: "console-screenshot"
        },
        {
            title: "File Manager",
            description: "Intuitive file management system for server configurations and world files",
            placeholder: "files-screenshot"
        },
        {
            title: "ModLoader Management",
            description: "Easy installation and management of Forge, Fabric, NeoForge, and Quilt",
            placeholder: "modloader-screenshot"
        }
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, ease: [0.4, 0.0, 0.2, 1] as any}
        }
    };

    return (
        <section className="py-16 px-8 bg-content1/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={{
                        hidden: {opacity: 0, y: 20},
                        visible: {opacity: 1, y: 0, transition: {duration: 0.6}}
                    }}
                    className="text-center mb-12"
                >
                    <h2 className="font-minecraft-header text-4xl text-primary mb-4">See It In Action</h2>
                    <p className="font-minecraft-body text-lg text-foreground/80 max-w-2xl mx-auto">
                        Experience the power and simplicity of modern Minecraft server management
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {screenshots.map((screenshot, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card radius="none" className="font-minecraft-body overflow-hidden">
                                <CardBody className="p-0">
                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-dashed border-primary/30">
                                        <div className="text-center">
                                            <Icon icon="pixelarticons:image" width={48} className="text-primary/60 mx-auto mb-2"/>
                                            <p className="text-primary/60 font-minecraft-body text-sm">
                                                {screenshot.placeholder}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-minecraft-header text-lg text-primary mb-2 font-light">{screenshot.title}</h3>
                                        <p className="text-foreground/80 text-sm">{screenshot.description}</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
