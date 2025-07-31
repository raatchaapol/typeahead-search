import { setGlobalOptions } from "firebase-functions";

setGlobalOptions({ maxInstances: 10 });

export * from "./libs/mealSearch";
export * from "./libs/drinkSearch";
