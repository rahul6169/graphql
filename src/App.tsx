import "./App.css";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Merchant } from "./merchant";
import { Login } from "./login";
import { Register } from "./register";
import List from "./list";
import CardUi from "./card";
const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <CardUi />
    </ApolloProvider>
  );
}

export default App;
