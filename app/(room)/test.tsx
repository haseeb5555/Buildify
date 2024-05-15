/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fG4sYKcbjQo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
   
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Chat Rooms</h1>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline">
                    <FilterIcon className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={8}>
                  <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    In Progress{"\n                                "}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    Completed{"\n                                "}
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    <Checkbox />
                    Archived{"\n                                "}
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline">
                <PlusIcon className="h-4 w-4 mr-2" />
                New Room
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Alpha</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Residential construction, 25% complete</p>
                </div>
                <Button>
                  <ContactIcon className="h-4 w-4 mr-2" />
                  Join Chat
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Beta</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Commercial renovation, 75% complete</p>
                </div>
                <Button>
                  <ContactIcon className="h-4 w-4 mr-2" />
                  Join Chat
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Gamma</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Infrastructure upgrade, 90% complete</p>
                </div>
                <Button>
                  <ContactIcon className="h-4 w-4 mr-2" />
                  Join Chat
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Delta</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Residential construction, 50% complete</p>
                </div>
                <Button>
                  <ContactIcon className="h-4 w-4 mr-2" />
                  Join Chat
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Epsilon</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Commercial renovation, 30% complete</p>
                </div>
                <Button>
                  <ContactIcon className="h-4 w-4 mr-2" />
                  Join Chat
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Project Zeta</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Infrastructure upgrade, 100% complete</p>
                </div>
                <Button>
                  <ContactIcon className="h-4 w-4 mr-2" />
                  Join Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
  )
}

