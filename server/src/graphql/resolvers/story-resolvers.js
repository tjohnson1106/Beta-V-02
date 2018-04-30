import Story from "../../models/Story";

export default {
  getStorys: () => Story.find({})
};
