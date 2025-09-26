import {Button, Card, CardBody, CardHeader, Divider, Link} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import {motion} from "framer-motion";

interface DownloadOption
{
    platform: string;
    icon: string;
    description: string;
    downloadUrl: string;
    command: string;
}

export default function DownloadSection()
{
    const downloadOptions: DownloadOption[] = [
        {
            platform: "Windows",
            icon: "pixelarticons:windows",
            description: "Easy installer for Windows 10/11",
            downloadUrl: "https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/releases/latest/download/obsidian-server-panel-windows.exe",
            command: "Download and run the installer"
        },
        {
            platform: "macOS",
            icon: "pixelarticons:apple",
            description: "Universal binary for Intel and Apple Silicon",
            downloadUrl: "https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/releases/latest/download/obsidian-server-panel-macos.dmg",
            command: "Download and install from DMG"
        },
        {
            platform: "Linux",
            icon: "pixelarticons:linux",
            description: "Automated installation script",
            downloadUrl: "#",
            command: "curl -sSL https://raw.githubusercontent.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/main/install-obsidian.sh | sudo bash"
        }
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <section id="download" className="py-16 px-8 bg-content1/30">
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
                    <h2 className="font-minecraft-header text-4xl text-primary mb-4">Download & Install</h2>
                    <p className="font-minecraft-body text-lg text-foreground/80 max-w-2xl mx-auto">
                        Get started with Obsidian Server Panel on your preferred platform
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.1}}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {downloadOptions.map((option, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card radius="none" className="font-minecraft-body h-full">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/20 rounded-none flex items-center justify-center">
                                            <Icon icon={option.icon} width={24} className="text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="font-minecraft-header text-xl text-primary">
                                                {option.platform}
                                            </h3>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-2">
                                    <p className="text-foreground/80 mb-4">{option.description}</p>

                                    {option.platform === "Linux" ? (
                                        <div className="space-y-4">
                                            <div className="bg-content2 p-3 rounded-none">
                                                <code className="text-sm font-mono text-primary break-all">
                                                    {option.command}
                                                </code>
                                            </div>
                                            <Button
                                                color="primary"
                                                radius="none"
                                                className="w-full font-minecraft-body"
                                                onPress={() => navigator.clipboard.writeText(option.command)}
                                                startContent={<Icon icon="pixelarticons:copy" width={16}/>}
                                            >
                                                Copy Command
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button
                                            color="primary"
                                            radius="none"
                                            className="w-full font-minecraft-body"
                                            onPress={() => window.open(option.downloadUrl, "_blank")}
                                            startContent={<Icon icon="pixelarticons:download" width={16}/>}
                                        >
                                            Download for {option.platform}
                                        </Button>
                                    )}
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.2}}
                    variants={{
                        hidden: {opacity: 0, y: 20},
                        visible: {opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.3}}
                    }}
                    className="mt-12 text-center"
                >
                    <Divider className="mb-6"/>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-foreground/60">
                        <div className="flex items-center gap-2">
                            <Icon icon="pixelarticons:shield" width={16} className="text-success"/>
                            <span className="font-minecraft-body">GPL-3.0 License</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="pixelarticons:github" width={16}/>
                            <Link
                                href="https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/releases"
                                className="font-minecraft-body hover:text-primary"
                                isExternal
                            >
                                View All Releases
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="pixelarticons:book" width={16}/>
                            <Link
                                href="https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel#installation"
                                className="font-minecraft-body hover:text-primary"
                                isExternal
                            >
                                Installation Guide
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
