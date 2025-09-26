import {Card, CardBody} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import {motion} from "framer-motion";

interface Feature
{
    icon: string;
    title: string;
    description: string;
}

export default function FeaturesSection()
{
    const features: Feature[] = [
        {
            icon: "pixelarticons:server",
            title: "Minecraft Server Management",
            description: "Control your Minecraft servers directly from the web interface with full start, stop, and restart capabilities."
        },
        {
            icon: "pixelarticons:animation",
            title: "ModLoader Support",
            description: "Fetch and display available Forge, Fabric, NeoForge, and Quilt versions for easy installation."
        },
        {
            icon: "pixelarticons:download",
            title: "Easy Installation",
            description: "One-click installation of Minecraft server versions and mod loaders with automated setup."
        },
        {
            icon: "pixelarticons:console",
            title: "Real-time Console",
            description: "View live server logs and console output directly in the web interface with syntax highlighting."
        },
        {
            icon: "pixelarticons:folder",
            title: "File Management",
            description: "Upload, download, and manage server files through an intuitive web-based file explorer."
        },
        {
            icon: "pixelarticons:users",
            title: "User Management",
            description: "Create and manage user accounts with different permission levels and role-based access."
        },
        {
            icon: "pixelarticons:multiple",
            title: "Multi-Server Support",
            description: "Manage multiple Minecraft servers from a single panel with easy switching between instances."
        },
        {
            icon: "pixelarticons:docker",
            title: "Docker Support",
            description: "Deploy and manage servers using Docker containers with built-in orchestration."
        },
        {
            icon: "pixelarticons:backup",
            title: "Backup & Restore",
            description: "Create automated backups of your server data and restore from previous snapshots."
        },
        {
            icon: "pixelarticons:schedule",
            title: "Scheduled Tasks",
            description: "Automate server tasks with a built-in scheduler for maintenance and operations."
        },
        {
            icon: "pixelarticons:notification",
            title: "Notifications",
            description: "Get notified of server events and status changes via email, Discord, or webhooks."
        },
        {
            icon: "pixelarticons:api",
            title: "API Access",
            description: "Integrate with other tools and services using a comprehensive RESTful API."
        }
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5, ease: [0.4, 0.0, 0.2, 1] as any}
        }
    };

    return (
        <section id="features" className="py-16 px-8">
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
                    <h2 className="font-minecraft-header text-4xl text-primary mb-4">Powerful Features</h2>
                    <p className="font-minecraft-body text-lg text-foreground/80 max-w-2xl mx-auto">
                        Everything you need to manage your Minecraft servers efficiently and effectively
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card
                                radius="none"
                                className="font-minecraft-body h-full hover:bg-gray-600/20 transition-all duration-200 cursor-pointer"
                                isPressable
                            >
                                <CardBody className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/20 rounded-none flex items-center justify-center">
                                                <Icon icon={feature.icon} width={24} className="text-primary"/>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-minecraft-header text-lg text-primary mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-foreground/80 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
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
