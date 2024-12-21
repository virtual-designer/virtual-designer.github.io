import HomeButtons from "@/components/Home/HomeButtons";
import Socials from "@/components/Home/Socials";
import profile from "@/images/profile.png";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:px-[10%] lg:py-10 m-10 rounded-2xl bg-gradient-to-r to-blue-600/20 from-cyan-200/10">
                <div className="py-5 lg:py-10 xl:py-20 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">
                            Hello, I&rsquo;m{" "}
                            <span className="text-blue-600">Ar Rakin</span>.
                        </h1>
                        <p className="text-lg lg:text-xl mt-3">
                            I&rsquo;m a full-stack web developer, chess
                            enthusiast and a student.
                        </p>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-200 mt-2">
                            What&rsquo;s up? What made you land here?
                        </p>
                    </div>
                    <div>
                        <HomeButtons />
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Image
                        src={profile}
                        alt="Ar Rakin"
                        className="rounded-full shadow-blue-600/50 shadow-2xl"
                    />
                </div>
            </div>

            <Socials />
        </div>
    );
}
