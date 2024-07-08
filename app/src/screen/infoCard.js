import React,{useState,useContext,useEffect,Component} from "react";
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View,Alert } from "react-native";
import { colors } from "../global/style";
import { Icon } from "react-native-elements";
import { menuDetailedData, optionDelivery, restaurantData } from "../global/data";
import { SignInContext } from '../context/authContext';


export  class InfoCard extends Component {
  

    constructor(props){
        super(props);
        this.state ={
            indexCheck:"0",
            card:this.props.route.params ? this.props.route.params.card:this.props.order,
            price:0
      }
      if (this.state.card) {
        this.state.card.forEach(item=>{
            this.state.price=this.state.price+item.totalPrice
        })
      }else{
        this.state.card=[]
      }
       

        
      
    }

     deleteCard(id) {
        this.state.price=this.state.price-this.state.card[id].totalPrice*this.state.card[id].quantity
        this.state.card.splice(id, 1)
        
        this.setState({card: this.state.card,price:this.state.price})
    }
    

    render(){
        //console.log(this.props.route.params.card)
        //const card=this.props.route.params.card
      

        const indexCheck = this.state.indexCheck;
        const setindexCheck = (params) => this.setState({indexCheck: params});
  
    //console.log(card[0].preference[0][0].checked,"testtt")
    

   function getMenuChecked(){

            card.forEach(c => {
                c.preference.map(item=>{
                    const check = item.filter(items => items.checked?items:null)
                    console.log(check,"checl")
                })
                
            });
    }

 
    
    return(
        
        <View style={{flex:1}}>

       
        <TouchableOpacity
            onPress={()=>{
                getMenuChecked()
            }}
            
        >
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Info Cards</Text>
        </View>
        </TouchableOpacity>
                <View style={styles.clock}>
                    <Icon 
                        type = "material-community"
                        name = 'clock-time-four'
                        color = {colors.grey1}
                        size={26}
                        style={{paddingVertical:5,paddingHorizontal:5}}
                    />
                    <Text style={styles.textTime}> 15-25 min estimated time delivery</Text>

                </View>
                <View style={styles.option}>
                    <Text style={{fontSize:18}}>Delivery option</Text>
                </View>
                <View>
                    <FlatList
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    data={optionDelivery}
                    keyExtractor={(item)=>item.id.toString()}
                    extraData={indexCheck}
                    renderItem={({item, index})=>(
                        <Pressable 
                        onPress={()=>{
                           setindexCheck(item.id)
                        }}>
                           <View style = {{...styles.optionButton,flexDirection:'row',backgroundColor:indexCheck === item.id  ? colors.buttons : colors.grey5}}>
                              <Icon 
                              name={item.type}
                              type="material-community"
                              style={{paddingHorizontal:5}}
                              />
                              <Text style = {indexCheck === item.id ? {...styles.smallCardTextS}: {...styles.smallCardText}}>{item.name}</Text>
                               
                               
                           </View>
                        </Pressable>
               )}
                    
                    />
                    <View style={styles.viewOrder}>
                        <Text style={styles.order}>Your order</Text>
                    </View>
                    <View>
                    {this.state.card ? this.state.card.map((item, index)=><View key ={item.id} >
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>{restaurantData[item.restaurantID].restaurantName}</Text>
                        </View>
                          
                        <View style={styles.ordView}>
                           <View >
                              <Text style={styles.meal}>{item.meal}</Text>
                             
                              </View>
                              <View style={styles.total}>
                              <Text >€ {this.state.price.toFixed(2)==0 ?item.totalPrice.toFixed(2):this.state.price.toFixed(2)}</Text>
                              </View>
                              <TouchableOpacity
                              onPress={()=>{
                                this.deleteCard(index)
                              }}
                              >
                              <View  style={styles.trash} >
                              
                              <Icon 
                              name="trash-can"
                              type="material-community"
                             
                              />
                              
                              </View>
                              </TouchableOpacity>
                           
                              <View style={{paddingVertical:20}}>
                              {item.preference.map(items=><View key ={items.id}>
                          
                             <Text style ={styles.preference}>- {menuDetailedData[item.id].preferenceTitle[item.preference.indexOf(items)]}</Text>
                             {
                                items.map(i=><View>
                                    {i.checked ? <Text style ={styles.preferenceN}>  * {  i.name}</Text> : <View/>}
                                    
                                </View>
                                    
                                    )
                             }
                             
                            
                             </View>
                              )
                              }
                              
                              </View>
                              <View style={styles.qtyText}>
                                <Text>QTY</Text>
                              </View>
                              <TouchableOpacity
                              onPress={()=>{
                                if (item.quantity>1) {
                                   
                                    
                                    item.quantity=item.quantity-1
                                    this.state.price= item.totalPrice *item.quantity 
                                    this.setState({card: this.state.card,price:this.state.price})
                                  

                                }
                               
                              }}
                              >
                              <View style={styles.remove}>
                                <Icon
                                name ="remove"
                                type = "material"
                                size={20}
                                />
                              </View>
                              </TouchableOpacity>
                              
                              </View>
                              <View style={styles.qty}>
                                <Text>{item.quantity}</Text>
                              </View>
                              <TouchableOpacity
                              onPress={()=>{
                                    
                                    item.quantity=item.quantity+1
                                    this.state.price= item.totalPrice *item.quantity
                                    this.setState({card: this.state.card,price:this.state.price})
                                
                                
                              }}
                              >

                              
                                        <View style={styles.add}>
                                            <Icon
                                            name ="add"
                                            type = "material"
                                            size={20}
                                            />
                                        

                                    </View>
                           </TouchableOpacity>
                         
                          </View>
                           ) :<View style={{flex:1}}>Empty</View>
                           }
                   

                    </View>
                </View>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("Home")
                }}
                >

                <View style={{...styles.addButton,backgroundColor:colors.grey4}}>
                            <Icon
                                name ="add-circle"
                                type = "material"
                                size={20}
                                />
                    <Text>Add items</Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress={()=>{
                    Alert.alert(
                        "Saved",
                        "order saved"
                    )
                   this.props.navigation.navigate("Checkout",{card:this.state.card})
                }}
                style={{...styles.checkView,flex:1}}
                >
                <View style={{flexDirection:'row'}}>
                <Text style={styles.checkTextV}></Text>
                    <Text style={styles.checkText}>CHECKOUT</Text>
                    <Text style={styles.texttotal2}> € {this.state.price.toFixed(2)}</Text>
                </View>
                </TouchableOpacity>
                
                
        </View>
    )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerText:{
        color:colors.grey2,
        fontSize:22,
        fontWeight:"bold",
        paddingLeft:10,
        
    },
    headerView:{
        backgroundColor:colors.grey5,
        paddingVertical:3,
        alignItems:'center',
        justifyContent:'center'
    },
    ordView:{
        backgroundColor:colors.grey5,
        paddingVertical:3,
        
        
    },
    option:{
        paddingVertical:3,
        alignItems:'center',
        justifyContent:'center'
    },
    clock:{
        flexDirection:'row', 
        alignItems:'center', 
        marginLeft:20, 
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20,
        paddingVertical:5
},
textTime:{
    fontSize:16,
    fontWeight:'bold',
    paddingTop:5,
    color:colors.grey3,
},
meal:{
    fontSize:20,
    fontWeight:'bold',
    paddingTop:5,
    color:colors.grey3,
    paddingHorizontal:10,
},
optionButton:{
    paddingHorizontal:25,
    borderRadius:15,
    paddingVertical:5
},
preference:{
    paddingHorizontal:5,
    borderRadius:15,
    paddingVertical:5
},
preferenceN:{
    paddingHorizontal:10,
    borderRadius:15,
    paddingVertical:5
},
smallCardText:{
    fontWeight:"bold",
    color: colors.cardBackground
},
smallCardTextS:{
    fontWeight:"bold",
    color: colors.grey2
},
order:{
    fontWeight:"bold",
    fontSize:20
},
viewOrder:{
    paddingVertical:10
},
orderFlat:{
    paddingVertical:50,
    borderRadius:15,
    paddingVertical:5
},

trash:{
    position:'absolute',
    top:0,
    right:10,
    backgroundColor:'rgba(52,52,52,0.3)',
    padding:2,
    alignItems:"center",
    justifyContent:"center",
    borderBottomLeftRadius:12,
    borderTopRightRadius:5
},
total:{
    position:'absolute',
    top:0,
    right:50,
    padding:2,
    alignItems:"center",
    justifyContent:"center",
},
total2:{
    position:'absolute',
    bottom:0,
    right:50,
    alignItems:"center",
    justifyContent:"center",
    paddingTop:50,
},
texttotal2:{
    fontWeight:'bold',
    
},
qtyText:{
    position:'absolute',
    bottom:0,
    right:80,
    padding:2,
    alignItems:"center",
    justifyContent:"center",
},
add:{
    position:'absolute',
    bottom:0,
    right:5,
    padding:2,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    backgroundColor:colors.lightgreen,
},
remove:{
    position:'absolute',
    bottom:0,
    right:45,
    padding:2,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    backgroundColor:colors.lightgreen,
    
},
checkText:{
    paddingHorizontal:75
    
},
checkTextV:{
    paddingHorizontal:20
    
},
checkView:{
    position:'absolute',
    bottom:0,
    width:"100%",
    height:"5%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.lightgreen,
    flexDirection:'row'
    
},
qty:{
    position:'absolute',
    bottom:0,
    right:30,
    padding:2,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    
},
addButton:{
    paddingHorizontal:10,
    borderRadius:15,
    paddingVertical:5,
    top:12,
    width:"30%",
    bottom:80,
    flexDirection:'row'
},

})