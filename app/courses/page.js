import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">Courses Page</h2>

      <div className="flex items-center justify-center gap-5"> 
        <Link href="/courses/cohort1">Cohort-1</Link>
        <Link href="/courses/cohort2">Cohort-2</Link>
        <Link href="/courses/cohort3">Cohort-3</Link>
      </div>
    </div>
  );
};

export default page;
