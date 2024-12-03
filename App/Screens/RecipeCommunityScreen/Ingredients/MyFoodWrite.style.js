import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontFamily: "Inter-bold",
    color: "#2E2F33",
  },
  emptySpace: {
    width: 30,
  },
  authorSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: "#FFFFFF",
  },
  authorImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
  },
  authorTextContainer: {
    flexDirection: "column",
  },
  authorName: {
    marginBottom: 3,
    fontSize: 18,
    fontFamily: "Inter-bold",
    color: "#2D754E",
    letterSpacing: 0.32,
  },
  authorDescription: {
    fontSize: 16,
    fontFamily: "Inter-bold",
    color: "#2E2F33",
    letterSpacing: 0.1,
  },
  foodImage: {
    marginTop:25,
    marginBottom:20,
    width: 350,
    height: 250,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center", // 화면 기준 정중앙으로 배치
  },
  inputSection: {
    paddingHorizontal: 20,
    marginVertical:1,
  },
  labelText: {
    fontSize: 16,
    fontFamily: "Inter-bold",
    color: "#2E2F33",
    marginHorizontal: 3,
  },
  labelText2: {
    fontSize: 16,
    fontFamily: "Inter-bold",
    color: "#2E2F33",
    marginBottom: 10,
    marginHorizontal: 3,
  },
  inputBox: {
    height: 40,
    backgroundColor: "#F2F3F6",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  textArea: {
    height: 70,
    backgroundColor: "#F2F3F6",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    textAlignVertical: "top",
    marginBottom: 35,
  },
  buttonContainer: {
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
  },
  submitButton: {
    alignSelf: "center", // 화면 기준 정중앙으로 배치
    height: 40,
    width: 307,
    backgroundColor: "#2D754E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  // 카테고리 섹션
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 1,
    marginBottom:15,
  },
  categoryIcon: {
    marginLeft: 1,
  },
  selectedCategoriesContainer: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    maxHeight: 30,
  },
  selectedItemTouchable: {
    marginRight: 8,
  },
  selectedItem: {
    fontSize: 13,
    fontFamily: "Inter-bold",
    color: "#2D754E",
    backgroundColor: "#F5F5F5",
    padding: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  expirationDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  dateInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateInput: {
    width: 60,
    height: 40,
    marginHorizontal: 5,
    backgroundColor: "#F2F3F6",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
