import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      _id: 123983,
      name: "Crash on Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V2.0",
      priority: 1,
      assigned: "Paulo Nobrega",
      creator: "Paulo Nobrega",
      time: "10:00",
    })
  );

  data.push(
    new bugModel({
      _id: 123,
      name: "Won't Load",
      details: "home page won't load",
      steps: "Open application homepage wont load",
      version: "V2.0",
      priority: 3,
      assigned: "Paulo Nobrega",
      creator: "Paulo Nobrega",
      time: "12:01",
    })
  );

  data.push(
    new bugModel({
      _id: 124,
      name: "Error #123",
      details: "Shows error #123",
      steps: "Open application and show error #123",
      version: "V2.0",
      priority: 2,
      assigned: "Paulo Nobrega",
      creator: "Paulo Nobrega",
      time: "15:00",
    })
  );

  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
