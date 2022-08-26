import { ScrollView } from "react-native";
import Calendar from "../../components/Calendar/Calendar";
import ManageDrinks from "../../components/ManageDrinks/ManageDrinks";

const Home = () => {
  return (
    <>
      <ScrollView>
        <Calendar />
        <ManageDrinks />
      </ScrollView>
    </>
  );
};

export default Home;
