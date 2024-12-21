"use client";

import { Button } from "@nextui-org/react";
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa6";

export default function Socials() {
    return (
        <div className="mx-auto rounded-2xl p-5 flex justify-center gap-2">
            <Button
                isIconOnly
                href="https://github.com/virtual-designer"
                target="_blank"
                color="primary"
                variant="flat"
            >
                <FaGithub />
            </Button>

            <Button
                isIconOnly
                href="https://discord.com/users/774553653394538506"
                target="_blank"
                color="primary"
                variant="flat"
            >
                <FaDiscord />
            </Button>

            <Button
                isIconOnly
                href="mailto:rakinar2@onesoftnet.eu.org"
                color="primary"
                variant="flat"
            >
                <FaEnvelope />
            </Button>
        </div>
    );
}
