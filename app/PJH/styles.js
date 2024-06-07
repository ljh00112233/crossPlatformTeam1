import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  question: {
    // backgroundColor: "green",
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  textTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  content: {
    flex: 8,
    width: "100%",
    marginBottom: 50,
  },

  // Quiz 컴포넌트 스타일
  quiz: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
  },
  answer: {
    marginBottom: 10,
  },
  quizSort: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  quizContent: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center", //동전 좌우정렬
  },
  quizCoin: {
    marginBottom: 10,
    backgroundColor: "red",
    justifyContent: "center", // 동전 상하 중앙 정렬
    alignItems: "center", // 동전 좌우 중앙 정렬
  },
  quizSum: {
    width: "100%",
    alignItems: "center",
  },
  coin_10: {
    width: 60,
    height: 60,
  },
  coin_50: {
    width: 70,
    height: 70,
  },
  coin_100: {
    width: 80,
    height: 80,
  },
  textAnswer: {
    color: "#000",
    fontSize: 18,
    width: "100%",
  },
  textSum: {
    color: "#000",
    fontSize: 18,
  },
  colorRed: {
    color: "#FF0000",
    fontSize: 20,
  },
  colorGreen: {
    color: "#0000FF",
    fontSize: 20,
  },
  scrollViewContent: {
    marginBottom: 130,
    width: "100%",
  },
});

export default styles;
