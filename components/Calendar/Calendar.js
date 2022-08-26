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
    console.log("Open calendar");
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
        <View>
          <Text style={styles.textCalendar}>
            {getFormatedWeekName(selectedDate)}
          </Text>
          <Text style={styles.textCalendar}>
            {getFormatedDate(selectedDate)}
          </Text>
        </View>
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
    borderRadius: 24,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  calendarContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  calendarButton: {
    marginRight: 12,
  },
  textCalendar: {
    color: GlobalStyles.colors.white,
    fontSize: 18,
  },
});
