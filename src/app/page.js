import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Task } from "@/components/Task";
import { TaskInput } from "@/components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput />

        <Task title="Read a book" />

        <Task title="Take a shower" />

        <Task title="Sleep" />
      </div>
      <Footer year="2023" fullName="Korarit panopasri" studentId="650610744" />
    </div>
  );
}
