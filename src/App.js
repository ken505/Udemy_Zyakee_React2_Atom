import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SerchInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Search</PrimaryButton>
      <SecondaryButton>Send</SecondaryButton>
      <br />
      <SerchInput />
    </div>
  );
}
