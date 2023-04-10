import "./App.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Merchant } from "./merchant";
import { Login } from "./login";
import { Register } from "./register";
import { Totalui } from "./cardui/total";
const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Totalui />
    </ApolloProvider>
  );
}

export default App;
