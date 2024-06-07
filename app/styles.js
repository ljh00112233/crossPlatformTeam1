import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // App 컴포넌트 스타일
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%", // 전체 폭을 설정
  },
  question: {
    // backgroundColor: "green",
    justifyContent: "center",
    padding: 20,
    width: "100%", // 전체 폭을 설정
  },
  textTitle: {
    color: "#000", // 텍스트 색상 설정
    fontSize: 20, // 텍스트 크기 설정
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  content: {
    flex: 8,
    width: "100%", // 전체 폭을 설정
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
    width: 60, // 너비 설정
    height: 60, // 높이 설정
  },
  coin_50: {
    width: 70, // 너비 설정
    height: 70, // 높이 설정
  },
  coin_100: {
    width: 80, // 너비 설정
    height: 80, // 높이 설정
  },
  textAnswer: {
    color: "#000", // 텍스트 색상 설정
    fontSize: 18, // 텍스트 크기 설정
    width: "100%",
  },
  textSum: {
    color: "#000", // 텍스트 색상 설정
    fontSize: 18, // 텍스트 크기 설정
  },
  colorRed: {
    color: "#FF0000", // 텍스트 색상 설정
    fontSize: 20,
  },
  colorGreen: {
    color: "#0000FF", // 텍스트 색상 설정
    fontSize: 20,
  },
  scrollViewContent: {
    marginBottom: 130,
    width: "100%",
  },
});

export default styles;
