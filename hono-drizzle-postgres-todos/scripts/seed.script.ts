import * as schema from "../src/db/schema";
import { reset, seed } from "drizzle-seed";
import { db, pool } from "../src/db/db";

export const seedDb = async () => {
  await reset(db, schema);

  await seed(db, schema).refine((funcs) => ({
    usersTable: {
      columns: { age: funcs.int({ minValue: 0, maxValue: 120 }) },
      count: 10,
      with: {
        todosTable: 10,
      },
    },
    todosTable: {
      columns: {
        title: funcs.valuesFromArray({
          values: [
            "Buy groceries",
            "Clean the house",
            "Go for a walk",
            "Read a book",
            "Write a blog post",
            "Go for a run",
            "Go to the gym",
          ],
        }),
        description: funcs.valuesFromArray({
          values: [
            "Buy groceries for the week",
            "Very clean",
            "remember to stretch",
            "focus on reading books",
            "write at least 500 words",
            "around the house",
            "1 hours at least",
          ],
        }),
      },
    },
  }));
};

seedDb()
  .then(() => {
    console.log("Database seeded");
    return pool.end();
  })
  .catch((error) => {
    console.error(error);
    return pool.end();
  });
