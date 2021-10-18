import "./styles.css";
import { UserDetailsView } from "./components/UserDetailsView";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserDetailsView />
      </div>
    </Provider>
  );
}
