export const filterData = [{name:"Fast food",image: require('../../assets/b.jpeg'), id:"0"},
                    {name:"Burgers",image:require("../../assets/n.jpg"),id:"1"},
                    {name:"Salads",image:require("../../assets/b.jpeg"),id:"2"},
                    {name:"Hotdog",image:require("../../assets/c.jpg"),id:"3"},
                    {name:"Chinese",image:require("../../assets/c.jpg"),id:"4"},
                    {name:"Mexican",image:require("../../assets/b.jpeg"),id:"5"},
                    {name:"Sea food",image:require("../../assets/n.jpg"),id:"6"},
                ];




export const categoryData = [{name:"Fast food",image:'https://thumbs.dreamstime.com/b/bombay-potato-curry-indian-food-29146242.jpg' , id:"0"},
{name:"Burgers",image:require("../../assets/b.jpeg"),id:"1"},
{name:"Salads",image:require("../../assets/c.jpg"),id:"2"},
{name:"Hotdog",image:require("../../assets/b.jpeg"),id:"3"},
{name:"Chinese",image:require("../../assets/n.jpg"),id:"4"},
{name:"Mexican",image:require("../../assets/b.jpeg"),id:"5"},  
{name:"Sea food",image:require("../../assets/b.jpeg"),id:"6"},
{name:"Chinese Food",image:require("../../assets/n.jpg"),id:"7"},
{name:"Mexican pie",image:require("../../assets/b.jpeg"),id:"8"},  
{name:"Ocean dish",image:require("../../assets/c.jpg"),id:"9"},
];





 export const restaurantData = [
                  {restaurantName:"Mc Donalds", farAway:"21.2",
                  businessAddress:"22 Bessie street, Cape Town",image:require("../../assets/b.jpeg"),
                  averageReview:4.9,numberOfReview:272,coordinates : {lat: 43.3149, lng: -0.3657} ,discount:10,deliveryTime:15,
                  collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                  {name:"Big Mac", price:50.80,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},{name:"Chicken Burger",
                   price:70,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                    ],
                  id:0},
                  
                  {restaurantName:"KFC", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
                  image:require("../../assets/n.jpg"),
                  averageReview:4.3, numberOfReview:306, coordinates : {lat: 43.315284, lng: -0.346831},
                  discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                  {name:"Big Mac", price:50.80,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                  {name:"Chicken Burger", price:70,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                      ],
                  id:1},
                  
                  {restaurantName:"Burger king", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
                  image:require("../../assets/c.jpg"),
                   coordinates :{ lat: 43.3333, lng: -0.3645}, averageReview: 4.9,numberOfReview: 1272,
                    discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                   productData:[{name:"Hand cut chips", price:29.30,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                    {name:"Big Mac", price:50.80,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},{name:"Chicken Burger",
                     price:70,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                      ],
                   id:2},
                  
                  {restaurantName:"Domino's Pizza", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
                  images:'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg',
                  averageReview:4.3, numberOfReview:700, coordinates: {lat: 43.3025, lng: -0.3682},
                  discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
                  productData:[{name:"Hand cut chips", price:29.30,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                    {name:"Big Mac", price:50.80,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},{name:"Chicken Burger",
                     price:70,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"},
                      ],
                  id:3},
                  ]
    


              export const productData = [{name:"Hand cut chips", price:29.30,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
              details:"Two 100% fresh beef burger patties that are hot,deliciously",id:0},
                {name:"Big Mac", price:50.80,image:require("../../assets/c.jpg"),
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:1},
                {name:"Chicken Burger", price:70,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",details:"",id:2},
                
                {name:"Hand cut chips", price:29.30,image:require("../../assets/b.jpeg"),
                details:"Two 100% fresh beef burger patties that are hot,deliciously",id:3},
                {name:"Big Mac", price:70.20,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
                details:"McFeast features two 100% fresh beef burger patties that are hot",id:4},
                {name:"Chicken Burger", price:70,image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",details:"",id:5},
              
                  ];   
                  
                  
          export const menuData = [
    
            {title:"BEEF",special:false,key:0, },
            {title:"CHICKEN", special:false,key:1},
            {title:"VEGGIE BURGER",special:false ,key:2},
            {title:"FRIES& CORN",special:false ,key:3},
            {title:"SALADS",special:false,key:4},
            {title:"HAPPY MEALS",special:false,key:5},
            {title:"SAHRE BOX",special:false,key:6},
            {title:"MILKSHAKES",special:false,key:7},
            {title:"COLD DRINKS",special:false,key:8},
            {title:"DESSERTS",special:false,key:9},
            {title:"HOT DRINKS",special:false,key:10},
          
            ] ;
          
          export const specialData =[
            {title:"LIMITED OFFER",key:0},
            {title:"GO CHILLI",key:1},
            {title:"GO CHEESE",key:2},
            {title:"MCCHICKEN DELUXE PROMO",key:3},
          ];    
          
          export const menu = [
            { key: 1, title: 'BEEF' },
            { key: 2, title: 'CHICKEN' },
            { key: 3, title: 'VEGGIE BURGER' },
            { key: 4, title: 'SHARE BOX' },
            { key: 5, title: 'Happy Meals' },
            { key: 6, title: 'Fries' },
            { key: 7, title: 'Sides' },
            { key: 8, title: 'Milkshakes' },
          ] 


          export const menuDetailedData =[
            { 
              meal:"Big Mac",
              price:70.20,
              image:require("../../assets/b.jpeg"),
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                              [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                              ],
        
                              [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                              {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                              ],
        
                              [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                ],
                                  
                              [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                              ],
        
                              [
                              {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                              ],
                              ],
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],              
              id:0,
              restaurantID:0
            },
          
           
            { 
              
              meal:"Hand cut chips", 
              price:29.30,
              image:require("../../assets/c.jpg"),
              details:"Two 100% fresh beef burger patties that are hot,deliciously",
              
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
        
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],     
              id:5,
              restaurantID:1
            },
        
          
            {
              meal:"Chicken Burger",
              price:45.70,
              image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
              details:"",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
        
                minimum_quatity:[2,1,1,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false],   
              id:2,
              restaurantID:2
            },
          
            {
              meal:"Big Mac",
              price:50.80,
              image:require("../../assets/c.jpg"),
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
              
                minimum_quatity:[2,1,1,null,null],
                counter:[0,0,0,0,0],
                required: [true,true,true,false,false],    
              id:3,
              restaurantID:3
            },
          
            
            { 
              
              meal:"Hand cut chips", 
              price:29.30,
              image:require("../../assets/n.jpg"),
              details:"Two 100% fresh beef burger patties that are hot,deliciously",
              
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              
              preferenceData: [
        
                [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
                ],
        
                [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
                ],
        
                [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
                  ],
                    
                [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
                ],
        
                [
                {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
                {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
                {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
                ],
                ],
        
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],     
              id:4,
              restaurantID:0
            },
        
            { 
              meal:"Big Mac",
              price:70.20,
              image:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
              details:"McFeast features two 100% fresh beef burger patties that are hot",
              preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
              preferenceData: [
        
                              [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                              ],
        
                              [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                              {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                              ],
        
                              [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                                ],
                                  
                              [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                              ],
        
                              [
                              {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                              {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                              {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                              ],
                              ],
              minimum_quatity:[2,1,1,null,null],
              counter:[0,0,0,0,0],
              required: [true,true,true,false,false],              
              id:5,
              restaurantID:2
            },
          
          ];

          export const optionDelivery=[
            {
              name:"leave At Door",
              id:7,
              type:"door-open"
            },
            {
              name:"meet At Door",
              id:9,
              type:"account"
            },
            {
              name:"On Place",
              id:8
            }
    ]
           