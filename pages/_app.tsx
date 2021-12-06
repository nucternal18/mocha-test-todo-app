import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { TodoProvider } from "../context/todoContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}

export default MyApp;
