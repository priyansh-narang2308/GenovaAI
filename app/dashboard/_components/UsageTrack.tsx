"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UsageTrack = () => {
    const { user } = useUser();
    const router = useRouter();
    const [totalUsage, setTotalUsage] = useState(0);
    const [remainingCredits, setRemainingCredits] = useState(0);
    const creditLimit = 100000; 

    useEffect(() => {
        const fetchData = async () => {
            if (!user?.primaryEmailAddress?.emailAddress) return;

            const result = await db
                .select()
                .from(AIOutput)
                .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

            let totalWords = result.reduce((acc, item) => acc + (item.wordCount || 0), 0);
            setTotalUsage(totalWords);
            setRemainingCredits(creditLimit - totalWords);
        };
 

        fetchData();
    }, [user]);

    const progress = Math.min((totalUsage / creditLimit) * 100, 100);

    return (
        <div className="m-5 flex justify-center">
            <div className="bg-gradient-to-br from-[#1e1e2e] to-[#3b3b5c] p-6 text-white rounded-2xl shadow-lg w-80 relative overflow-hidden">
                <h2 className="text-xl font-bold text-center mb-4 tracking-wide">Credits Usage</h2>

                <div className="w-full bg-[#29294b] h-4 rounded-full mt-3 relative overflow-hidden">
                    <div
                        className="h-4 rounded-full bg-gradient-to-r from-[#82aaff] to-[#b4befe] transition-all duration-500 ease-in-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="text-sm text-gray-300 text-center mt-3 font-medium">
                    {totalUsage.toLocaleString()} / {creditLimit.toLocaleString()} credits used
                </p>

                {remainingCredits <= 0 ? (
                    <Button
                        variant="outline"
                        className="w-full my-5 text-white bg-red-600 cursor-pointer hover:bg-red-700 transition-all duration-300 rounded-lg py-3 text-base font-semibold"
                        onClick={() => router.push("/dashboard/billing")}
                    >
                        Upgrade Plan
                    </Button>
                ) : (
                    <p className="text-center text-sm text-green-400 mt-3">Credits Available: {remainingCredits}</p>
                )}

                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#8b5cf6] opacity-20 blur-3xl"></div>
                <div className="absolute bottom-0 left-10 w-20 h-20 bg-[#b4befe] opacity-20 blur-2xl"></div>
            </div>
        </div>
    );
};

export default UsageTrack;
