import { setGlobalOptions } from "firebase-functions";

setGlobalOptions({ maxInstances: 10 });

export * from "./endpoints/mealSearch";
export * from "./endpoints/drinkSearch";
