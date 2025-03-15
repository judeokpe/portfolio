"use client"
import Link from "next/link";
import { Button } from "./ui/button";

export const Breadcrumb = ({ title, description, imgUrl, link1, link2, linkurl1, linkurl2 }: { title: string; description?: string; imgUrl?: string; link1?: string; link2?: string; linkurl1?: string; linkurl2?: string }) => {
    return (
        <div
            className="relative w-full h-[400px] pt-[150px] bg-cover bg-center flex flex-col justify-center items-center text-white dark:text-yellow-200 text-center px-4"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="bg-gray-900/60 text-center flex flex-col justify-center items-center p-6 rounded-lg">
                <h1 className="text-4xl font-bold">{title}</h1>
                {description && <p className="mt-2 text-lg max-w-2xl">{description}</p>}
                <div className="mt-4 flex gap-4">
                    {linkurl1 && (
                        <Link href={linkurl1} passHref>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                {link1}
                            </Button>
                        </Link>
                    )}
                    {linkurl2 && (
                        <Link href={linkurl2} passHref>
                            <Button variant='secondary' className="bg-gray-600 text-white hover:bg-gray-700">
                                {link2}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
