import NavBar from "./components/Navigations/Topnav";
import Sidenavbar from "./components/Navigations/Sidenavbar";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidenavbar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <NavBar />
        <main className="flex-1 p-6 bg-background overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Welcome to Task Manager</h1>
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-muted-foreground">
              Your dashboard content will appear here. Start by creating a new task or project.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
