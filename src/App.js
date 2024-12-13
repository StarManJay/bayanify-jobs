import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import JobBoard from "./components/JobBoard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <JobBoard />
    </QueryClientProvider>
  );
}

export default App;
