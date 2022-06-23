import { View, Text } from "react-native";
import { useEffect } from "react/cjs/react.production.min";
export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text>Countries:{countries.length}</Text>
    </View>
  );
}
