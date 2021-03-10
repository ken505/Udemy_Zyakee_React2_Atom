import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SerchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "Ken",
  image: "https://source.unsplash.com/3uWMsK7EN08",
  email: "3456@abc.com",
  phone: "345-6789-1234",
  company: {
    name: "DEF"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>Search</PrimaryButton>
      <SecondaryButton>Send</SecondaryButton>
      <br />
      <SerchInput />
      <UserCard user={user} />
    </div>
  );
}
