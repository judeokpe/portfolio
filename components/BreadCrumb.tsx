'use client';
import React from 'react';

interface ButtonProps {
    text: string;
    href: string;
}

interface BreadcrumbProps {
    title: string;
    description: string;
    button1?: ButtonProps;
    button2?: ButtonProps;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, description, button1, button2 }) => {
    return (
        <div className="text-center py-10 text-white">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mt-2 text-lg">{description}</p>
            <div className="mt-4 space-x-4">
                {button1 && (
                    <a href={button1.href} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        {button1.text}
                    </a>
                )}
                {button2 && (
                    <a href={button2.href} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                        {button2.text}
                    </a>
                )}
            </div>
        </div>
    );
};

export default Breadcrumb;
