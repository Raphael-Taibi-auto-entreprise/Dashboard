"use client";

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                className='w-full rounded  hover:bg-accent focus:ring-2 focus:ring-accent focus:ring-offset-2'
                onClick={() => { }}
            >

                <FcGoogle className='h-5 w-5' />
            </Button>
            <Button
                size="lg"
                className='w-full rounded  hover:bg-accent focus:ring-2 focus:ring-accent focus:ring-offset-2'
                onClick={() => { }}
            >
                <FaGithub className='h-5 w-5' />
            </Button>
        </div>
    );
}
