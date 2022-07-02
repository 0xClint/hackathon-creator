export const statusSorter = (data, id) => {
  const now = new Date();
  const updatedList = data.filter((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    //   console.log(data, id);

    switch (id) {
      case "Active": {
        return startDate < now && endDate > now;
      }
      case "Upcoming": {
        return startDate > now && endDate > now;
      }
      case "Past": {
        return startDate < now && endDate < now;
      }

      default:
        return item.name != 1;
    }
  });
  return updatedList;
};

export const levelSorter = (data, id) => {
  const updatedList = data.filter((item) => {
    switch (id) {
      case "Easy": {
        return item.level == "easy";
      }
      case "Medium": {
        return item.level == "medium";
      }
      case "Hard": {
        return item.level == "hard";
      }

      default:
        return item.name != 1;
    }
  });

  return updatedList;
};
