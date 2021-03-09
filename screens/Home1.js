import { Col, Item } from "native-base";
import React, { useRef } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Animated
} from 'react-native';
import { Rect } from "react-native-svg";
import { VictoryPie } from 'victory-native';

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const Home = () => {

    // dummy data


    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "ได้รับคืน",
            icon: icons.Get_back,
            color: COLORS.orange,
            expenses: [
                {
                    id: 1,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 100.00,
                    status: pendingStatus
                },
              
                {
                    id: 2,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 10.00,
                    status: confirmStatus
                },
                {
                    id: 3,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 5.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "รายได้ธุรกิจ",
            icon: icons.Business_income,
            color: COLORS.green1,
            expenses: [
                {
                    id: 4,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 5,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        
        {
            id: 3,
            name: "รายได้",
            icon: icons.income,
            color: COLORS.pink,
            expenses: [
                {
                    id: 6,
                    title: "เอาไว้ใส่รายละเอียด",
                    description: "",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 7,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 30.00,
                    status: confirmStatus,
                },
               
               
            ],
        },
        {
            id: 4,
            name: "ได้ฟรี",
            icon: icons.free,
            color: COLORS.purple,
            expenses: [
                {
                    id: 8,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "เอาไว้ใส่รายละเอียด",
                    description: "",
                    total: 5.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 5,
            name: "ถอนเงิน",
            icon: icons.Withdraw_money,
            color: COLORS.red1,
            expenses: [
                {
                    id: 10,
                    title: "เอาไว้ใส่รายละเอียด",
                    description:"",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 11,
                    title: "เอาไว้ใส่รายละเอียด",
                    description: "",
                    total: 10.00,
                    status: confirmStatus,
                },
            ],
        },
        
        
        
        {
            id: 6,
            name: "อื่นๆ",
            icon: icons.Other,
            color: COLORS.blue,
            expenses: [
                {
                    id: 12,
                    title: "อื่นๆ",
                    description: "",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 13,
                    title: "อื่นๆ",
                    description: "",
                    total: 20.00,
                    status: confirmStatus,
                },
            ],
        },
    ]
    const categoryListHeightAnimatedtionValue = useRef(new Animated.Value(115)).current;
    const [categories, setCategories] = React.useState(categoriesData)

    const [viewMode, setViewMode] = React.useState("chart");
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const [showMoreToggle, setShowMoreToggle] = React.useState(false);




    function renderCategoryHeaderSection() {
        return (
            <View style={{
                flexDirection: "row", padding:10,
                justifyContent: 'space-between', alignItems: 'center'
            }}>
                <View >
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>หน้าหมวดหมู่รายรับ</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{categoriesData.length} หมวดหมู่</Text>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 50,
                            backgroundColor: viewMode == "chart" ? COLORS.secondary :
                                null,

                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("chart")}
                    >

                        <Image
                            source={icons.chart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray

                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: 'center',
                            height: 50,
                            width: 50,
                            backgroundColor: viewMode == "list" ? COLORS.secondary :
                                null,
                            borderRadius: 25
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray

                            }}

                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    ///////////////////////////////////หน้าหมวดหมู่/////////////////////////////////////////////
    function renderCategoryList() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{
                    flex: 1, flexDirection: 'row', margin: 5,
                    paddingVertical: SIZES.radius,
                    borderRadius: 5,
                    backgroundColor: COLORS.white,
                    ...styles.shadow,
                }}
                    onPress={() => setSelectedCategory(item)}
                >
                    <Image
                        source={item.icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: item.color,
                            marginLeft: 10

                        }}
                    />
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListHeightAnimatedtionValue }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                    />
                </Animated.View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginVertical: SIZES.base,
                        justifyContent: 'center',


                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListHeightAnimatedtionValue, {
                                toValue: 115,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListHeightAnimatedtionValue, {
                                toValue: 172.5,
                                useNativeDriver: false
                            }).start()

                        }
                        setShowMoreToggle(!showMoreToggle)

                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image
                        source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        style={{
                            marginLeft: 5,
                            width: 15,
                            height: 15,
                            alignSelf: 'center'
                        }}
                    />

                </TouchableOpacity>
            </View>
        )
    }
    function renderIncomingExpensesTitle() {
        return (

            <View style={{
                padding: SIZES.padding,
                backgroundColor: COLORS.lightGray2
            }}>
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>รายละเอียด</Text>
                
            </View>

        )
    }
    ///////////////////////////////หน้าแสดงหมวดหมู่//////////////////////////////////////////////////////
    function renderIncomingExpenses() {
        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        const renderItem = ({ item, index }) => (
            <View
                style={{
                    width: 300,
                    marginRight: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginVertical: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white,
                    ...styles.shadow
                }}
            >
                <View style={{ flexDirection: 'row', padding: SIZES.padding, alignItems: "center" }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.lightGray,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.base
                    }}
                    >
                        <Image
                            source={selectedCategory.icon}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: selectedCategory.color
                            }}
                        />
                    </View>
                    <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>{selectedCategory.name}</Text>
                </View>
                <View style={{ paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body3, flexWrap: "wrap", color: COLORS.darkgray }}>{item.description}</Text>

                    
                    <View style={{ flexDirection: "row" }}>
                        
                        <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}></Text>
                    </View>
                </View>
                <View style={{
                    height: 50,
                    alignItems: "center",
                    justifyContent: 'center',
                    borderBottomStartRadius: SIZES.radius,
                    borderBottomEndRadius: SIZES.radius,
                    backgroundColor: selectedCategory.color
                }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3 }}></Text>
                </View>
            </View>
        )

        return (
            <View>
                {renderIncomingExpensesTitle()}
                {
                    incomingExpenses.length > 0 &&
                    <FlatList
                        data={incomingExpenses}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                }
                {
                    incomingExpenses.length == 0 &&
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No REcord</Text>
                    </View>
                }
            </View>
        )
    }
    //////////////////////////////////คำสั่งในการแสดงกราฟ////////////////////////////////////////////////
    function processCategoryDataToDisplay() {
        let chartData = categories.map((item) => {
            let confirmExpenses = item.expenses.filter(a => a.status == "C")
            var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)
            return {
                name: item.name,
                y: total,
                expensesCount: confirmExpenses.length,
                color: item.color,
                id: item.id
            }
        })
        let filterChartData = chartData.filter(a => a.y > 0)

        let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        let finalChartData = filterChartData.map((item) => {
            let percentage = (item.y / totalExpense * 100).toFixed(0)
            return {
                label: `${percentage}%`,
                y: Number(item.y),
                expensesCount: item.expensesCount,
                color: item.color,
                name: item.name,
                id: item.id,

            }

        })
        return finalChartData;

    }
    function setSelectedCategoryByName(name){
        
        let category=categories.filter(a=>a.name==name)
        setSelectedCategory(category[0])
    }
    /////////////////////////หน้าแสดงกราฟ/////////////////////////////////////////////
    function renderChart() {
        let chartData = processCategoryDataToDisplay()
        let colorScales = chartData.map((item) => item.color)
        let totalExpenseCount = chartData.reduce((a,b)=>a+(b.expensesCount || 0),0)

        return (
            <View style={{alignItems:"center",justifyContent:"center"}}>
                <VictoryPie
                    data={chartData}
                   
                    label={(datum) => `${datum.y}`}
                    radius={({ datum }) => (selectedCategory && selectedCategory.name == datum.name) ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10}
                    innerRadius={70}
                    labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius )/ 2.5}
                    style={{
                        labels: {fill: COLORS.white, ...FONTS.body3},
                        parent: {
                            ...styles.shadow
                        }
                    }}
                    width={SIZES.width * 0.8}
                    height={SIZES.width * 0.8}
                    colorScale={colorScales}
                    events={[{
                        target:"data",
                        eventHandlers:{
                            onPress: () => {
                                return [{
                                    target: "labels",
                                    mutation: (props) => {
                                        let categoryName = chartData[props.index].name
                                        setSelectCategoryByName(categoryName)
                                    }
                                }]
                            }
                        }
                    }]}
                />
                <View style={{position:'absolute',top:'45%',left:"43%"}}>
                <Text style={{textAlign:'center',...FONTS.h3}}>รายรับ</Text>
            </View>
            </View>
            
        )
    }
    function renderExpenseSummary(){
        let data =processCategoryDataToDisplay()
        const renderItem=({item})=>{
            return(
                <TouchableOpacity
                style={{
                    flexDirection:"row",
                    height:40,
                    paddingHorizontal:SIZES.radius,
                    borderRadius:10,
                    backgroundColor: (selectedCategory && selectedCategory.name ==item.name) ? item.color: COLORS.white    
                            }} 
                            onPress={()=>{
                                let categoryName= item.name
                                setSelectedCategoryByName(categoryName)
                            }}
                >
                    {/* Name/Category */}
                    <View style={{flex:1,
                    flexDirection:'row',
                    alignItems:'center'
                    }}>
                        <View
                        style={{width:20,
                            height:20,
                            backgroundColor:(selectedCategory && selectedCategory.name ==item.name) ? COLORS.white : item.color,
                            borderRadius:5
                        }}
                        ></View>
                        <Text style={{marginLeft:SIZES.base,
                        color:(selectedCategory && selectedCategory.name ==item.name) ? COLORS.white: COLORS.primary,
                        ...FONTS.h3
                        }}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={{color:(selectedCategory && selectedCategory.name ==item.name) ? COLORS.white:COLORS.primary,
                            ...FONTS.h3
                            }}> {item.label}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <View>
                <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item=>`${item.id}`}


                />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
            



            {renderCategoryHeaderSection()}
            <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingExpenses()}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View>
                        {renderChart()}
                        {renderExpenseSummary()}
                    </View>
                }

            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    shadow: 
        {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default Home;