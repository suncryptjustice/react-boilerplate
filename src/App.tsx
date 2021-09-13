import React from "react"
import Box from "./components/Styled/Box"
import Text from "./components/Styled/Text"
import { useActions } from "./hooks/useActions"
import { useTypedSelector } from "./hooks/useTypedSelector"
import { Customer } from "./models/Customer"

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
        <div>
            <h1>React Boilerplate</h1>
            <Box>
                <Text mb={2}>Age Filter</Text>
                <Box display={"flex"}>
                    <Text>{ageRange().min}</Text>
                    <input
                        onInput={rangeInputHanler}
                        type="range"
                        max={ageRange().max}
                        min={ageRange().min}
                    />
                    <Text>{ageRange().max}</Text>
                </Box>
            </Box>
            <Box
                m={[1, 2, 4]}
                display="flex"
                flexDirection={["column", "row"]}
                flex={1}
                flexWrap="wrap"
                justifyContent="space-around"
                alignItems="center"
            >
                {customers
                    .filter((customer) => customer.age <= ageFilter)
                    .map((customer) => {
                        return (
                            <Box
                                m={2}
                                width={"100%"}
                                display="flex"
                                flex={1}
                                flexDirection="column"
                                justifyContent="space-around"
                                alignItems="flex-start"
                                key={customer.email}
                            >
                                <Box>
                                    <Box
                                        style={{
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            height: "100px",
                                            width: "100px",
                                        }}
                                    >
                                        <img
                                            height={100}
                                            width={100}
                                            style={{
                                                objectFit: "cover",
                                                overflow: "hidden",
                                            }}
                                            src={customer.profilePhoto}
                                            alt={customer.first_name}
                                        />
                                    </Box>
                                    <Text
                                        p={1}
                                    >{`${customer.first_name} ${customer.second_name}`}</Text>
                                </Box>
                                <Box>
                                    <Text maxWidth={[160, 200]} p={1}>
                                        {customer.email}
                                    </Text>
                                </Box>
                            </Box>
                        )
                    })}
            </Box>
            <Box>
                <Text>{}</Text>
            </Box>
        </div>
    )
}
export default App
