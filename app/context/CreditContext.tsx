"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

type CreditContextType = {
  totalUsage: number;
  remainingCredits: number;
  refetchCredits: () => void;
};

const CreditContext = createContext<CreditContextType>({
  totalUsage: 0,
  remainingCredits: 100000,
  refetchCredits: () => {},
});

export const CreditProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState(0);
  const creditLimit = 100000;

  const fetchCredits = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    const result = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));

    const total = result.reduce((acc, item) => acc + (item.wordCount || 0), 0);
    setTotalUsage(total);
  };

  useEffect(() => {
    fetchCredits();
  }, [user]);

  return (
    <CreditContext.Provider
      value={{
        totalUsage,
        remainingCredits: Math.max(creditLimit - totalUsage, 0),
        refetchCredits: fetchCredits,
      }}
    >
      {children}
    </CreditContext.Provider>
  );
};

export const useCredits = () => useContext(CreditContext);
