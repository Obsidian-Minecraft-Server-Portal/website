import {Button} from "@heroui/react";
import {Icon} from "@iconify-icon/react";

export default function CTASection()
{
    return (
        <section className="py-16 px-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="max-w-4xl mx-auto text-center">
                <div>
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
                </div>
            </div>
        </section>
    );
}
