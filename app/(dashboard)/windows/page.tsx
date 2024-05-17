import WindowCard from "@/components/WindowCard";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/room", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);

  return (
    <div className="flex flex-wrap gap-4">
      {data?.map((item: any) => (
        <div className="flex justify-start items-start gap-2 flex-wrap max-sm:flex-col">
          <WindowCard
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            budget={item.budget}
            TotalAmount={item.TotalAmount}
            milestones={item.milestones}
          />
        </div>
      ))}
    </div>
    // <div className="flex min-h-screen flex-col">

    //     <main className="flex-1 p-6">
    //       <div className="mb-6 flex items-center justify-between">
    //         <h1 className="text-2xl font-bold">Chat Rooms</h1>
    //         <div className="flex items-center gap-4">
    //           <DropdownMenu>
    //             <DropdownMenuTrigger asChild>
    //               <Button size="sm" variant="outline">
    //                 <FilterIcon className="h-4 w-4 mr-2" />
    //                 Filter
    //               </Button>
    //             </DropdownMenuTrigger>
    //             <DropdownMenuContent align="end" sideOffset={8}>
    //               <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
    //               <DropdownMenuSeparator />
    //               <DropdownMenuCheckboxItem>

    //                 In Progress{"\n                                "}
    //               </DropdownMenuCheckboxItem>
    //               <DropdownMenuCheckboxItem>

    //                 Completed{"\n                                "}
    //               </DropdownMenuCheckboxItem>
    //               <DropdownMenuCheckboxItem>

    //                 Archived{"\n                                "}
    //               </DropdownMenuCheckboxItem>
    //             </DropdownMenuContent>
    //           </DropdownMenu>
    //           <Button size="sm" variant="outline">
    //             <PlusIcon className="h-4 w-4 mr-2" />
    //             New Room
    //           </Button>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //         <Card>
    //           <CardContent className="space-y-4">
    //             <div>
    //               <h3 className="text-lg font-semibold">Project Alpha</h3>
    //               <p className="text-sm text-gray-500 dark:text-gray-400">Residential construction, 25% complete</p>
    //             </div>
    //             <Button>
    //               <ContactIcon className="h-4 w-4 mr-2" />
    //               Join Chat
    //             </Button>
    //           </CardContent>
    //         </Card>
    //         <Card>
    //           <CardContent className="space-y-4">
    //             <div>
    //               <h3 className="text-lg font-semibold">Project Beta</h3>
    //               <p className="text-sm text-gray-500 dark:text-gray-400">Commercial renovation, 75% complete</p>
    //             </div>
    //             <Button>
    //               <ContactIcon className="h-4 w-4 mr-2" />
    //               Join Chat
    //             </Button>
    //           </CardContent>
    //         </Card>
    //         <Card>
    //           <CardContent className="space-y-4">
    //             <div>
    //               <h3 className="text-lg font-semibold">Project Gamma</h3>
    //               <p className="text-sm text-gray-500 dark:text-gray-400">Infrastructure upgrade, 90% complete</p>
    //             </div>
    //             <Button>
    //               <ContactIcon className="h-4 w-4 mr-2" />
    //               Join Chat
    //             </Button>
    //           </CardContent>
    //         </Card>
    //         <Card>
    //           <CardContent className="space-y-4">
    //             <div>
    //               <h3 className="text-lg font-semibold">Project Delta</h3>
    //               <p className="text-sm text-gray-500 dark:text-gray-400">Residential construction, 50% complete</p>
    //             </div>
    //             <Button>
    //               <ContactIcon className="h-4 w-4 mr-2" />
    //               Join Chat
    //             </Button>
    //           </CardContent>
    //         </Card>
    //         <Card>
    //           <CardContent className="space-y-4">
    //             <div>
    //               <h3 className="text-lg font-semibold">Project Epsilon</h3>
    //               <p className="text-sm text-gray-500 dark:text-gray-400">Commercial renovation, 30% complete</p>
    //             </div>
    //             <Button>
    //               <ContactIcon className="h-4 w-4 mr-2" />
    //               Join Chat
    //             </Button>
    //           </CardContent>
    //         </Card>
    //         <Card>
    //           <CardContent className="space-y-4">
    //             <div>
    //               <h3 className="text-lg font-semibold">Project Zeta</h3>
    //               <p className="text-sm text-gray-500 dark:text-gray-400">Infrastructure upgrade, 100% complete</p>
    //             </div>
    //             <Button>
    //               <ContactIcon className="h-4 w-4 mr-2" />
    //               Join Chat
    //             </Button>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </main>
    //   </div>
  );
};

export default page;

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
