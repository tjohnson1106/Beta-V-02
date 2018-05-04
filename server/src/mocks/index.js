import faker from "faker";

import Story from "../models/Story";
import User from "../models/User";

const STORYS_TOTAL = 10;

export default async () => {
  try {
    await Story.remove();
    await User.remove();

    await Array.from({
      length: STORYS_TOTAL
    }).forEach(async () => {
      await Story.create({ text: faker.lorem.paragraphs(1) });
    });
  } catch (error) {
    throw error;
  }
};
