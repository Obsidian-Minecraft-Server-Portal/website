import {useEffect, useRef} from "react";
import {Button, Card, CardBody, CardHeader, Chip, Divider, Link} from "@heroui/react";
import {Icon} from "@iconify-icon/react";
import {AnimatePresence, motion, useAnimation, useInView, Variants} from "framer-motion";

export default function Home()
{
    const features = [
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

    const downloadOptions = [
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

    const screenshots = [
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

    // Individual animation hooks for each section
    const screenshotsHeaderRef = useRef(null);
    const screenshotsHeaderInView = useInView(screenshotsHeaderRef, {once: true, amount: 0.3});
    const screenshotsHeaderControls = useAnimation();

    const screenshotsGridRef = useRef(null);
    const screenshotsGridInView = useInView(screenshotsGridRef, {once: true, amount: 0.2});
    const screenshotsGridControls = useAnimation();

    const featuresHeaderRef = useRef(null);
    const featuresHeaderInView = useInView(featuresHeaderRef, {once: true, amount: 0.3});
    const featuresHeaderControls = useAnimation();

    const featuresGridRef = useRef(null);
    const featuresGridInView = useInView(featuresGridRef, {once: true, amount: 0.1});
    const featuresGridControls = useAnimation();

    const downloadHeaderRef = useRef(null);
    const downloadHeaderInView = useInView(downloadHeaderRef, {once: true, amount: 0.3});
    const downloadHeaderControls = useAnimation();

    const downloadGridRef = useRef(null);
    const downloadGridInView = useInView(downloadGridRef, {once: true, amount: 0.2});
    const downloadGridControls = useAnimation();

    const downloadFooterRef = useRef(null);
    const downloadFooterInView = useInView(downloadFooterRef, {once: true, amount: 0.3});
    const downloadFooterControls = useAnimation();

    const ctaRef = useRef(null);
    const ctaInView = useInView(ctaRef, {once: true, amount: 0.3});
    const ctaControls = useAnimation();

    // Animation effects
    useEffect(() =>
    {
        if (screenshotsHeaderInView) screenshotsHeaderControls.start("visible").then();
    }, [screenshotsHeaderInView, screenshotsHeaderControls]);

    useEffect(() =>
    {
        if (screenshotsGridInView) screenshotsGridControls.start("visible").then();
    }, [screenshotsGridInView, screenshotsGridControls]);

    useEffect(() =>
    {
        if (featuresHeaderInView) featuresHeaderControls.start("visible").then();
    }, [featuresHeaderInView, featuresHeaderControls]);

    useEffect(() =>
    {
        if (featuresGridInView) featuresGridControls.start("visible").then();
    }, [featuresGridInView, featuresGridControls]);

    useEffect(() =>
    {
        if (downloadHeaderInView) downloadHeaderControls.start("visible").then();
    }, [downloadHeaderInView, downloadHeaderControls]);

    useEffect(() =>
    {
        if (downloadGridInView) downloadGridControls.start("visible").then();
    }, [downloadGridInView, downloadGridControls]);

    useEffect(() =>
    {
        if (downloadFooterInView) downloadFooterControls.start("visible").then();
    }, [downloadFooterInView, downloadFooterControls]);

    useEffect(() =>
    {
        if (ctaInView) ctaControls.start("visible").then();
    }, [ctaInView, ctaControls]);

    const fadeUpVariants: Variants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.6, ease: [0.4, 0.0, 0.2, 1]}
        }
    };

    const staggerContainer: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const staggerItem: Variants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.5, ease: [0.4, 0.0, 0.2, 1]}
        }
    };

    return (
        <AnimatePresence>
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <motion.section
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 px-8"
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
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
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="font-minecraft-header text-5xl md:text-7xl text-primary mb-6 leading-tight"
                        >
                            Obsidian Server Panel
                        </motion.h1>

                        <motion.p
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.4}}
                            className="font-minecraft-body text-xl md:text-2xl text-foreground/80 mb-8 max-w-4xl mx-auto"
                        >
                            A modern web-based management panel for Minecraft servers with modloader support,
                            featuring a responsive React frontend and a powerful Rust backend.
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.5}}
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
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.6}}
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

                {/* Screenshots Section */}
                <section className="py-16 px-8 bg-content1/30">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            ref={screenshotsHeaderRef}
                            initial="hidden"
                            animate={screenshotsHeaderControls}
                            variants={fadeUpVariants}
                            className="text-center mb-12"
                        >
                            <h2 className="font-minecraft-header text-4xl text-primary mb-4">See It In Action</h2>
                            <p className="font-minecraft-body text-lg text-foreground/80 max-w-2xl mx-auto">
                                Experience the power and simplicity of modern Minecraft server management
                            </p>
                        </motion.div>

                        <motion.div
                            ref={screenshotsGridRef}
                            initial="hidden"
                            animate={screenshotsGridControls}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {screenshots.map((screenshot, index) => (
                                <motion.div key={index} variants={staggerItem}>
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

                {/* Features Section */}
                <section id="features" className="py-16 px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            ref={featuresHeaderRef}
                            initial="hidden"
                            animate={featuresHeaderControls}
                            variants={fadeUpVariants}
                            className="text-center mb-12"
                        >
                            <h2 className="font-minecraft-header text-4xl text-primary mb-4">Powerful Features</h2>
                            <p className="font-minecraft-body text-lg text-foreground/80 max-w-2xl mx-auto">
                                Everything you need to manage your Minecraft servers efficiently and effectively
                            </p>
                        </motion.div>

                        <motion.div
                            ref={featuresGridRef}
                            initial="hidden"
                            animate={featuresGridControls}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {features.map((feature, index) => (
                                <motion.div key={index} variants={staggerItem}>
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

                {/* Download Section */}
                <section id="download" className="py-16 px-8 bg-content1/30">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            ref={downloadHeaderRef}
                            initial="hidden"
                            animate={downloadHeaderControls}
                            variants={fadeUpVariants}
                            className="text-center mb-12"
                        >
                            <h2 className="font-minecraft-header text-4xl text-primary mb-4">Download & Install</h2>
                            <p className="font-minecraft-body text-lg text-foreground/80 max-w-2xl mx-auto">
                                Get started with Obsidian Server Panel on your preferred platform
                            </p>
                        </motion.div>

                        <motion.div
                            ref={downloadGridRef}
                            initial="hidden"
                            animate={downloadGridControls}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {downloadOptions.map((option, index) => (
                                <motion.div key={index} variants={staggerItem}>
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
                            ref={downloadFooterRef}
                            initial="hidden"
                            animate={downloadFooterControls}
                            variants={fadeUpVariants}
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

                {/* Footer CTA */}
                <section className="py-16 px-8 bg-gradient-to-r from-primary/10 to-primary/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            ref={ctaRef}
                            initial="hidden"
                            animate={ctaControls}
                            variants={fadeUpVariants}
                        >
                            <h2 className="font-minecraft-header text-3xl text-primary mb-4">Ready to Get Started?</h2>
                            <p className="font-minecraft-body text-lg text-foreground/80 mb-8">
                                Join the community of server administrators already using Obsidian Server Panel
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    color="primary"
                                    radius="none"
                                    className="font-minecraft-body px-8"
                                    startContent={<Icon icon="pixelarticons:download" width={20}/>}
                                    onPress={() => document.getElementById("download")?.scrollIntoView({behavior: "smooth"})}
                                >
                                    Download Now
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    radius="none"
                                    className="font-minecraft-body px-8"
                                    startContent={<Icon icon="pixelarticons:message" width={20}/>}
                                    onPress={() => window.open("https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/discussions", "_blank")}
                                >
                                    Join Community
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </AnimatePresence>
    );
}