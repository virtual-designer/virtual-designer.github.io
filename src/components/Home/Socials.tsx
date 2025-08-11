"use client";

import { Button } from "@nextui-org/react";
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa6";

export default function Socials() {
    return (
        <div className="mx-auto rounded-2xl p-5 flex justify-center gap-2">
            <Button
                isIconOnly
                onClick={() => location.replace("https://github.com/virtual-designer")}
                color="primary"
                variant="flat"
            >
                <FaGithub />
            </Button>

            <Button
                isIconOnly
                onClick={() => location.replace("https://discord.com/users/774553653394538506")}
                color="primary"
                variant="flat"
            >
                <FaDiscord />
            </Button>

            <Button
                isIconOnly
                onClick={() => location.replace("mailto:rakinar2@onesoftnet.eu.org")}
                color="primary"
                variant="flat"
            >
                <FaEnvelope />
            </Button>
        </div>
    );
}
