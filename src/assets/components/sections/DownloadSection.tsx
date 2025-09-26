import {Button, Card, CardBody, CardFooter, CardHeader, Code, Divider, Link} from "@heroui/react";
import {Icon} from "@iconify-icon/react";

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
            icon: "mage:microsoft-windows",
            description: "Easy installer for Windows 10/11",
            downloadUrl: "https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/releases/latest/download/obsidian-server-panel-windows.exe",
            command: "Download and run the installer"
        },
        {
            platform: "Mac-OS",
            icon: "ic:sharp-apple",
            description: "Universal binary for Intel and Apple Silicon",
            downloadUrl: "https://github.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/releases/latest/download/obsidian-server-panel-macos.dmg",
            command: "Download and install from DMG"
        },
        {
            platform: "Linux",
            icon: "fluent-mdl2:linux-logo-32",
            description: "Automated installation script",
            downloadUrl: "#",
            command: "curl -sSL https://raw.githubusercontent.com/Obsidian-Minecraft-Server-Portal/obsidian-server-panel/main/install-obsidian.sh | sudo bash"
        }
    ];

    return (
        <section id="download" className="py-16 px-8 bg-content1/30">
            <div className="max-w-6xl mx-auto">
                {/* Header (removed motion div) */}
                <div className="text-center mb-12">
                    <h2 className="font-minecraft-header text-4xl text-primary mb-4">Download & Install</h2>
                    <p className="font-minecraft-body text-lg text-foreground/80 max-w-2xl mx-auto">
                        Get started with Obsidian Server Panel on your preferred platform
                    </p>
                </div>

                {/* Cards grid (removed stagger animation) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {downloadOptions.map((option, index) => (
                        <div key={index}>
                            <Card radius="none" className="font-minecraft-body h-[200px]">
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
                                </CardBody>
                                <CardFooter>
                                    {option.platform === "Linux" ? (
                                        <div className="flex flex-row items-center gap-1 w-full">
                                            <Code
                                                className="w-[100%] overflow-x-scroll cursor-pointer"
                                                color={"primary"}
                                                radius={"none"}
                                                onClick={() => navigator.clipboard.writeText(option.command)}
                                                size={"md"}
                                            >
                                                {option.command}
                                            </Code>
                                            <Button
                                                radius="none"
                                                onPress={() => navigator.clipboard.writeText(option.command)}
                                                isIconOnly
                                                size={"sm"}
                                            >
                                                <Icon icon="pixelarticons:copy" width={16}/>
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
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Footer meta (removed motion) */}
                <div className="mt-12 text-center">
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
                </div>
            </div>
        </section>
    );
}
