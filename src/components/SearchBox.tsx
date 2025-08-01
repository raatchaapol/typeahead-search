/**
 * Simple Search Example with Chakra UI v3 & TanStack Query
 */

import { useState, useEffect } from "react";
import {
    Box,
    Input,
    Stack,
    HStack,
    Text,
    Spinner,
    Alert,
    SimpleGrid,
    Card,
    Heading,
    Badge,
    Tabs,
} from "@chakra-ui/react";
import { useDrinkSearch, useMealSearch, useCombinedSearch } from "../libs/apis";

// Simple value debounce hook
function useDebounceValue(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export function SearchBox() {
    const [drinkQuery, setDrinkQuery] = useState("");
    const [mealQuery, setMealQuery] = useState("");
    const [combinedQuery, setCombinedQuery] = useState("");

    // Debounce queries to avoid too many requests
    const debouncedDrinkQuery = useDebounceValue(drinkQuery, 300);
    const debouncedMealQuery = useDebounceValue(mealQuery, 300);
    const debouncedCombinedQuery = useDebounceValue(combinedQuery, 300);

    // TanStack Query hooks
    const drinkSearch = useDrinkSearch(
        debouncedDrinkQuery,
        debouncedDrinkQuery.length >= 2
    );
    const mealSearch = useMealSearch(
        debouncedMealQuery,
        debouncedMealQuery.length >= 2
    );
    const combinedSearch = useCombinedSearch(
        debouncedCombinedQuery,
        debouncedCombinedQuery.length >= 2
    );

    return (
        <Box p={6} maxW="6xl" mx="auto" width="full">
            <Heading mb={6}>Food & Drink Search</Heading>

            <Tabs.Root defaultValue="combined">
                <Tabs.List>
                    <Tabs.Trigger value="combined">🔍 All Search</Tabs.Trigger>
                    <Tabs.Trigger value="drinks">🍹 Drinks</Tabs.Trigger>
                    <Tabs.Trigger value="meals">🍽️ Meals</Tabs.Trigger>
                </Tabs.List>

                {/* Combined Search Tab */}
                <Tabs.Content value="combined">
                    <Stack gap={4}>
                        <Input
                            placeholder="Search everything (drinks & meals)..."
                            value={combinedQuery}
                            onChange={(e) => setCombinedQuery(e.target.value)}
                            size="lg"
                        />

                        {combinedSearch.isLoading && (
                            <HStack justify="center">
                                <Spinner />
                                <Text>Searching drinks and meals...</Text>
                            </HStack>
                        )}

                        {combinedSearch.error && (
                            <Alert.Root status="error">
                                <Alert.Description>
                                    {combinedSearch.error.message}
                                </Alert.Description>
                            </Alert.Root>
                        )}

                        {combinedSearch.data &&
                            combinedSearch.data.totalCount > 0 && (
                                <>
                                    <Text fontSize="sm" color="gray.600">
                                        Found {combinedSearch.data.totalCount}{" "}
                                        results (
                                        {combinedSearch.data.drinks.length}{" "}
                                        drinks,{" "}
                                        {combinedSearch.data.meals.length}{" "}
                                        meals) in{" "}
                                        {combinedSearch.data.executionTime}ms
                                    </Text>

                                    {/* Drinks Section */}
                                    {combinedSearch.data.drinks.length > 0 && (
                                        <>
                                            <Heading size="lg" mt={4}>
                                                🍹 Drinks (
                                                {
                                                    combinedSearch.data.drinks
                                                        .length
                                                }
                                                )
                                            </Heading>
                                            <SimpleGrid
                                                columns={{
                                                    base: 1,
                                                    md: 2,
                                                    lg: 3,
                                                }}
                                                gap={4}
                                            >
                                                {combinedSearch.data.drinks.map(
                                                    (drink) => (
                                                        <Card.Root
                                                            key={`drink-${drink.id}`}
                                                        >
                                                            <Card.Body>
                                                                <Stack
                                                                    alignItems="flex-start"
                                                                    gap={2}
                                                                >
                                                                    <Heading size="md">
                                                                        {
                                                                            drink.name
                                                                        }
                                                                    </Heading>
                                                                    <Text
                                                                        fontSize="sm"
                                                                        color="gray.600"
                                                                    >
                                                                        {
                                                                            drink.description
                                                                        }
                                                                    </Text>
                                                                    <HStack
                                                                        gap={2}
                                                                    >
                                                                        <Badge colorScheme="blue">
                                                                            {
                                                                                drink.category
                                                                            }
                                                                        </Badge>
                                                                        <Badge colorScheme="green">
                                                                            {
                                                                                drink.type
                                                                            }
                                                                        </Badge>
                                                                        <Badge colorScheme="orange">
                                                                            {
                                                                                drink.difficulty
                                                                            }
                                                                        </Badge>
                                                                    </HStack>
                                                                    <HStack
                                                                        gap={4}
                                                                        fontSize="sm"
                                                                    >
                                                                        <Text>
                                                                            ⏱️{" "}
                                                                            {
                                                                                drink.preparationTime
                                                                            }
                                                                            min
                                                                        </Text>
                                                                        <Text>
                                                                            🔥{" "}
                                                                            {
                                                                                drink.calories
                                                                            }
                                                                            cal
                                                                        </Text>
                                                                    </HStack>
                                                                </Stack>
                                                            </Card.Body>
                                                        </Card.Root>
                                                    )
                                                )}
                                            </SimpleGrid>
                                        </>
                                    )}

                                    {/* Meals Section */}
                                    {combinedSearch.data.meals.length > 0 && (
                                        <>
                                            <Heading size="lg" mt={6}>
                                                🍽️ Meals (
                                                {
                                                    combinedSearch.data.meals
                                                        .length
                                                }
                                                )
                                            </Heading>
                                            <SimpleGrid
                                                columns={{
                                                    base: 1,
                                                    md: 2,
                                                    lg: 3,
                                                }}
                                                gap={4}
                                            >
                                                {combinedSearch.data.meals.map(
                                                    (meal) => (
                                                        <Card.Root
                                                            key={`meal-${meal.id}`}
                                                        >
                                                            <Card.Body>
                                                                <Stack
                                                                    alignItems="flex-start"
                                                                    gap={2}
                                                                >
                                                                    <Heading size="md">
                                                                        {
                                                                            meal.name
                                                                        }
                                                                    </Heading>
                                                                    <Text
                                                                        fontSize="sm"
                                                                        color="gray.600"
                                                                    >
                                                                        {
                                                                            meal.description
                                                                        }
                                                                    </Text>
                                                                    <HStack
                                                                        gap={2}
                                                                    >
                                                                        <Badge colorScheme="purple">
                                                                            {
                                                                                meal.cuisine
                                                                            }
                                                                        </Badge>
                                                                        <Badge colorScheme="teal">
                                                                            {
                                                                                meal.category
                                                                            }
                                                                        </Badge>
                                                                        <Badge colorScheme="orange">
                                                                            {
                                                                                meal.difficulty
                                                                            }
                                                                        </Badge>
                                                                    </HStack>
                                                                    <HStack
                                                                        gap={4}
                                                                        fontSize="sm"
                                                                    >
                                                                        <Text>
                                                                            ⏱️{" "}
                                                                            {
                                                                                meal.cookingTime
                                                                            }
                                                                            min
                                                                        </Text>
                                                                        <Text>
                                                                            🔥{" "}
                                                                            {
                                                                                meal.calories
                                                                            }
                                                                            cal
                                                                        </Text>
                                                                    </HStack>
                                                                </Stack>
                                                            </Card.Body>
                                                        </Card.Root>
                                                    )
                                                )}
                                            </SimpleGrid>
                                        </>
                                    )}
                                </>
                            )}

                        {combinedSearch.data &&
                            combinedSearch.data.totalCount === 0 &&
                            !combinedSearch.isLoading && (
                                <Text
                                    textAlign="center"
                                    color="gray.500"
                                    py={8}
                                >
                                    {combinedSearch.data.query === "" &&
                                    combinedSearch.data.query.length < 2
                                        ? "Search for a food or drink"
                                        : `No results found for "${combinedSearch.data.query}"`}
                                </Text>
                            )}
                    </Stack>
                </Tabs.Content>

                {/* Drinks Tab */}
                <Tabs.Content value="drinks">
                    <Stack gap={4}>
                        <Input
                            placeholder="Search drinks (e.g., whiskey, cocktail)..."
                            value={drinkQuery}
                            onChange={(e) => setDrinkQuery(e.target.value)}
                            size="lg"
                        />

                        {drinkSearch.isLoading && (
                            <HStack justify="center">
                                <Spinner />
                                <Text>Searching drinks...</Text>
                            </HStack>
                        )}

                        {drinkSearch.error && (
                            <Alert.Root status="error">
                                <Alert.Description>
                                    {drinkSearch.error.message}
                                </Alert.Description>
                            </Alert.Root>
                        )}

                        {drinkSearch.data && (
                            <>
                                <Text fontSize="sm" color="gray.600">
                                    Found {drinkSearch.data.count} drinks in{" "}
                                    {drinkSearch.data.executionTime}ms
                                </Text>

                                <SimpleGrid
                                    columns={{ base: 1, md: 2, lg: 3 }}
                                    gap={4}
                                >
                                    {drinkSearch.data.data.map((drink) => (
                                        <Card.Root key={drink.id}>
                                            <Card.Body>
                                                <Stack
                                                    alignItems="flex-start"
                                                    gap={2}
                                                >
                                                    <Heading size="md">
                                                        {drink.name}
                                                    </Heading>
                                                    <Text
                                                        fontSize="sm"
                                                        color="gray.600"
                                                    >
                                                        {drink.description}
                                                    </Text>
                                                    <HStack gap={2}>
                                                        <Badge colorScheme="blue">
                                                            {drink.category}
                                                        </Badge>
                                                        <Badge colorScheme="green">
                                                            {drink.type}
                                                        </Badge>
                                                        <Badge colorScheme="orange">
                                                            {drink.difficulty}
                                                        </Badge>
                                                    </HStack>
                                                    <HStack
                                                        gap={4}
                                                        fontSize="sm"
                                                    >
                                                        <Text>
                                                            ⏱️{" "}
                                                            {
                                                                drink.preparationTime
                                                            }
                                                            min
                                                        </Text>
                                                        <Text>
                                                            🔥 {drink.calories}
                                                            cal
                                                        </Text>
                                                    </HStack>
                                                </Stack>
                                            </Card.Body>
                                        </Card.Root>
                                    ))}
                                </SimpleGrid>
                            </>
                        )}
                    </Stack>
                </Tabs.Content>

                {/* Meals Tab */}
                <Tabs.Content value="meals">
                    <Stack gap={4} align="stretch">
                        <Input
                            placeholder="Search meals (e.g., pasta, pizza, chinese)..."
                            value={mealQuery}
                            onChange={(e) => setMealQuery(e.target.value)}
                            size="lg"
                        />

                        {mealSearch.isLoading && (
                            <HStack justify="center">
                                <Spinner />
                                <Text>Searching meals...</Text>
                            </HStack>
                        )}

                        {mealSearch.error && (
                            <Alert.Root status="error">
                                <Alert.Description>
                                    {mealSearch.error.message}
                                </Alert.Description>
                            </Alert.Root>
                        )}

                        {mealSearch.data && (
                            <>
                                <Text fontSize="sm" color="gray.600">
                                    Found {mealSearch.data.count} meals in{" "}
                                    {mealSearch.data.executionTime}ms
                                </Text>

                                <SimpleGrid
                                    columns={{ base: 1, md: 2, lg: 3 }}
                                    gap={4}
                                >
                                    {mealSearch.data.data.map((meal) => (
                                        <Card.Root key={meal.id}>
                                            <Card.Body>
                                                <Stack
                                                    alignItems="flex-start"
                                                    gap={2}
                                                >
                                                    <Heading size="md">
                                                        {meal.name}
                                                    </Heading>
                                                    <Text
                                                        fontSize="sm"
                                                        color="gray.600"
                                                    >
                                                        {meal.description}
                                                    </Text>
                                                    <HStack gap={2}>
                                                        <Badge colorScheme="purple">
                                                            {meal.cuisine}
                                                        </Badge>
                                                        <Badge colorScheme="teal">
                                                            {meal.category}
                                                        </Badge>
                                                        <Badge colorScheme="orange">
                                                            {meal.difficulty}
                                                        </Badge>
                                                    </HStack>
                                                    <HStack
                                                        gap={4}
                                                        fontSize="sm"
                                                    >
                                                        <Text>
                                                            ⏱️{" "}
                                                            {meal.cookingTime}
                                                            min
                                                        </Text>
                                                        <Text>
                                                            🔥 {meal.calories}
                                                            cal
                                                        </Text>
                                                    </HStack>
                                                </Stack>
                                            </Card.Body>
                                        </Card.Root>
                                    ))}
                                </SimpleGrid>
                            </>
                        )}
                    </Stack>
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    );
}
