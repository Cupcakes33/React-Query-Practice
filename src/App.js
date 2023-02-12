import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Counter from "./components/Counter";
import View from "./components/View";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Counter />
      <View />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
