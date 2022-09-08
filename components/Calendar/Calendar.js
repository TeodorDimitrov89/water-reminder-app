import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { GlobalStyles } from "../../constants/styles";
import { getFormatedDate, getFormatedWeekName } from "../../utils/Date";
import Button from "../Buttons/Button";

const defaultDate = new Date();

const Calendar = () => {
  const [isCalendarVisible, setCalendarVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const showCalendarHandler = () => {
    setCalendarVisibility(true);
  };

  const hideCalendarHandler = () => {
    setCalendarVisibility(false);
  };

  const confirmHandler = (date) => {
    hideCalendarHandler();
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarButton}>
          <Button
            icon="caret-down"
            color={GlobalStyles.colors.white}
            size={22}
            onPress={showCalendarHandler}
          />
        </View>
        <Text style={styles.textCalendar}>
          {getFormatedWeekName(selectedDate)}
        </Text>
        <Text style={styles.textCalendar}>{getFormatedDate(selectedDate)}</Text>
      </View>
      <DateTimePickerModal
        isVisible={isCalendarVisible}
        mode="date"
        onConfirm={confirmHandler}
        onCancel={hideCalendarHandler}
        date={selectedDate}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.primary400,
    flex: 2,
    marginTop: 30,
  },
  calendarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  calendarButton: {
    marginRight: 12,
  },
  textCalendar: {
    color: GlobalStyles.colors.white,
    fontSize: 18,
    marginHorizontal: 5,
  },
});
