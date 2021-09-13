import React from "react"
import { useActions } from "./hooks/useActions"
import { useTypedSelector } from "./hooks/useTypedSelector"
import { Customer } from "./models/Customer"
import { Box, Flex, Text, Image } from "rebass"

const App: React.FC = () => {
    const { setCustomers, setAgeFilter } = useActions()
    const { customers, ageFilter } = useTypedSelector(
        (state) => state.customers
    )
    const dummyData: Customer[] = [
        {
            first_name: "Tom",
            second_name: "Redl",
            profilePhoto:
                "https://static.wikia.nocookie.net/harrypotter/images/a/aa/Voldemort_Headshot_DHP1.png",
            age: 71,
            email: "thenamethatcantbesaid@voldemort.com",
        },
        {
            first_name: "Harry",
            second_name: "Potter",
            profilePhoto:
                "https://static.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg",
            age: 17,
            email: "harry@potter.com",
        },
        {
            first_name: "Sirius",
            second_name: "Black",
            profilePhoto:
                "https://static.wikia.nocookie.net/harrypotter/images/b/bc/OOTP_promo_front_closeup_Sirius_Black.jpg",
            age: 36,
            email: "sirius@black.com",
        },
        {
            first_name: "Mrs.",
            second_name: "Norris",
            profilePhoto:
                "https://static.wikia.nocookie.net/harrypotter/images/f/f7/Mrs_Norris_PS.png",
            age: 14,
            email: "alllovescats@filch.com",
        },
        {
            first_name: "Luna",
            second_name: "Lovegood",
            profilePhoto:
                "https://static.wikia.nocookie.net/harrypotter/images/e/ed/Luna_Lovegood.jpg",
            age: 16,
            email: "luna@Lovegood.com",
        },
        {
            first_name: "Barty",
            second_name: "Crouch Junior",
            profilePhoto:
                "https://static.wikia.nocookie.net/harrypotter/images/f/f4/Barty_Crouch_Junior.jpg",
            age: 36,
            email: "doctor@who.com",
        },
    ]

    const ageRange = React.useCallback((): { max: number; min: number } => {
        return {
            max: Math.max.apply(
                null,
                customers.map((e) => e.age)
            ),
            min: Math.min.apply(
                null,
                customers.map((e) => e.age)
            ),
        }
    }, [customers])

    const rangeInputHanler = React.useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setAgeFilter(parseInt(e.currentTarget.value))
        },
        [setAgeFilter]
    )

    React.useEffect(() => {
        setCustomers(dummyData)
    }, [])

    return (
        <Box>
            <Flex
                sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text m={[2, 2, 4]} as={"h1"}>
                    React Redux Boilerplate
                </Text>
                <Flex
                    m={[1, 1, 2]}
                    sx={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text mb={2}>Age Filter</Text>
                    <Text
                        mb={1}
                    >{`Display characters bellow: ${ageFilter} years`}</Text>
                    <Box display={"flex"}>
                        <input
                            onInput={rangeInputHanler}
                            type="range"
                            value={ageFilter}
                            max={99}
                            min={1}
                        />
                    </Box>
                </Flex>
            </Flex>
            <Flex
                sx={{
                    display: "flex",
                    flex: 1,
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "flex-start",
                }}
                m={[1, 2, 4]}
                flexDirection={["column", "row"]}
            >
                {customers
                    .filter((customer) => customer.age < ageFilter)
                    .map((customer) => {
                        return (
                            <Box
                                m={[1, 1, 2]}
                                p={[1, 1, 2]}
                                width={[1, 1 / 2.15, 1 / 3.5, 1 / 4.5]}
                                bg={"white"}
                                key={customer.email}
                                sx={{
                                    borderRadius: 12,
                                    boxShadow:
                                        "rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px",
                                    transition: "box-shadow 0.2s ease-out",
                                    ":hover": {
                                        boxShadow:
                                            "rgb(50 50 93 / 34%) 0px 6px 12px -2px, rgb(0 0 0 / 39%) 0px 6px 10px -3px",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            height: "100px",
                                            width: "100px",
                                        }}
                                    >
                                        <Image
                                            sx={{
                                                objectFit: "cover",
                                                overflow: "hidden",
                                                height: 100,
                                                width: 100,
                                            }}
                                            src={customer.profilePhoto}
                                            alt={customer.first_name}
                                        />
                                    </Box>
                                    <Box m={[1, 1, 2]} p={[1, 1, 2]}>
                                        <Text
                                            p={1}
                                            sx={{ cursor: "default" }}
                                        >{`${customer.first_name} ${customer.second_name}`}</Text>
                                        <Text
                                            sx={{
                                                cursor: "default",
                                                boxSizing: "border-box",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                            maxWidth={[160, 200]}
                                            p={1}
                                        >
                                            {customer.email}
                                        </Text>
                                        <Text
                                            sx={{
                                                cursor: "default",
                                                boxSizing: "border-box",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                            maxWidth={[160, 200]}
                                            p={1}
                                        >
                                            {`${customer.age} y.o.`}
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })}
            </Flex>
        </Box>
    )
}
export default App
