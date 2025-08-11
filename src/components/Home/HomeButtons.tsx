"use client";
import { Button } from "@nextui-org/react";

export default function HomeButtons() {
    return (
        <Button onClick={() => location.replace("/about")} size="lg" color="primary" variant="flat">
            More about me
        </Button>
    );
}
