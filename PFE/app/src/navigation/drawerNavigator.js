import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ClientTab } from './clientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/style';
import { Business } from '../screen/drawer/business';
import { Driver } from '../screen/drawer/driver';
import { Payment } from '../screen/drawer/payment';
import { DrawerContent } from '../screen/drawer/drawerContent';


const Drawer = createDrawerNavigator()


export function DrawerNavigator() {

    return(
        <Drawer.Navigator
        drawerContent={ props => <DrawerContent {...props} />}
        screenOptions={{
            tabBarActiveTintColor:colors.buttons,
            headerShown: false,
            
            }}
        >
            <Drawer.Screen 
                name = "Client"
                component={ClientTab}

                options={ {
                    title:'client',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type='material'
                            name="home"
                            color={focussed ? '#7cc' : colors.grey3}
                            size={size}
                        />
                    )
                
                }
            }
            />

<Drawer.Screen 
                name = "Business"
                component={Business}

                options={ {
                    title:'Business Console',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type='material'
                            name="business"
                            color={focussed ? '#7cc' : colors.grey3}
                            size={size}
                        />
                    )
                
                }
            }
            />


<Drawer.Screen 
                name = "Driver"
                component={Driver}

                options={ {
                    title:'Driver console',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type='material'
                            name="home"
                            color={focussed ? '#7cc' : colors.grey3}
                            size={size}
                        />
                    )
                
                }
            }
            />



<Drawer.Screen 
                name = "Payment"
                component={Payment}

                options={ {
                    title:'Payment',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type='material'
                            name="payment"
                            color={focussed ? '#7cc' : colors.grey3}
                            size={size}
                        />
                    )
                
                }
            }
            />


<Drawer.Screen 
                name = "Promotions"
                component={ClientTab}

                options={ {
                    title:'Promotions',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type='material-community'
                            name="tag-heart"
                            color={focussed ? '#7cc' : colors.grey3}
                            size={size}
                        />
                    )
                
                }
            }
            />


<Drawer.Screen 
                name = "Settings"
                component={ClientTab}

                options={ {
                    title:'Settings',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type='material'
                            name="settings"
                            color={focussed ? '#7cc' : colors.grey3}
                            size={size}
                        />
                    )
                
                }
            }
            />

            
        </Drawer.Navigator>
    )
    
}